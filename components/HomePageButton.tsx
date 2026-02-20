"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePageButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="group relative rounded-2xl px-8 py-3 text-lg font-semibold text-white
                      bg-white/25sd backdrop-blur-xl
                      shadow-xl overflow-hidden  border-black border-4 shadow-blue-500/70 hover:shadow-blue-800  xl-[5]   md:h-[580px]
         "
    >
      <span
        className="absolute -inset-1 opacity-70  transition
                    bg-blue-600
                            group-hover:opacity-100 group-hover:blur-2xl 
                            "
      />
      <span className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl " />

      <Link href="/" className="relative z-10 font-extrabold">
        ⬅️Home
      </Link>
    </motion.button>
  );
}
