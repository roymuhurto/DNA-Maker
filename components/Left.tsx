"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Title from "./Title";

type Item = {
  id: number;
  left: number;
  delay: number;
};
type Props = {
  pair: string;
  dnaType: string;
  size: number;
  speed: number;
};

export default function Left({ pair, dnaType, size, speed }: Props) {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const count = 5 + speed * 3; // more DNA when faster

    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 90,
      delay: Math.random() * 2,
    }));

    setItems(generated);
  }, [speed]);

  if (!items) return null;

  // ✅ choose image based on pair

  const double =
    pair === "Double"
      ? "/dna.png"
      : pair === "Circular"
        ? "/circular-dna.png"
        : pair === "Single"
          ? "/single-dna.png"
          : pair === "Z"
            ? "/z-dna.png"
            : pair === "A"
              ? "/a-dna.png"
              : pair === "H"
                ? "/h-dna.png"
                : pair === "G"
                  ? "/g-quadruplex-dna.png"
                  : pair === "C"
                    ? "/cruciform-dna.png"
                    : pair === "Super"
                      ? "/supercoiled-dna.png"
                      : "/dna.png";

  return (
    <div
      className="
  relative overflow-hidden
  w-full max-w-xl
  xl:max-w-lg
  h-[420px] md:h-[580px]
  border-4 border-black
  rounded-2xl
  shadow-2xl shadow-black
  bg-neutral-300
"
    >
      {items.map((item) => (
        <motion.img
          key={`${item.id}-${speed}`} // 🔥 force reset when speed changes
          src={double}
          className="absolute opacity-100"
          style={{
            left: `${item.left}%`,
            width: size * 18,
          }}
          initial={{ y: -150 }}
          animate={{ y: speed >= 100 ? "900%" : "900%" }}
          transition={{
            duration: 5 / speed,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
