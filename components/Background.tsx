"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import Logo from "./Logo";

type Props = {
  children: ReactNode;
};

export default function Background({ children }: { children: ReactNode }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/dna-bg.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated DNA Strands */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* Strand Left */}
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 200 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute left-1/4 top-0 h-[140%] w-1"
        >
          <div className="relative h-full w-full">
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 -translate-x-1/2 text-2xl border-gray-600 rounded-2xl bg-gray-600 inline-block shadow-md shadow-blue-600 "
                style={{ top: `${i * 8}%` }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1,
                }}
              >
                🧬
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Strand Right */}
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: -200 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute right-1/4 top-0 h-[140%] w-1"
        >
          <div className="relative h-full w-full">
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute left-1/2 -translate-x-1/2 text-2xl border-gray-600 rounded-2xl bg-gray-600 inline-block shadow-md shadow-red-600"
                style={{ top: `${i * 8}%` }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1,
                }}
              >
                🧬
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Connecting Bars */}
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/4 right-1/4 h-0.5 bg-blue-200/70"
            style={{ top: `${10 + i * 6}%` }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
      <div>
        <Logo />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
