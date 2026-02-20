"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeButton() {
  return (
    <div className=" flex gap-6 ">
      {/* Glass Primary */}

      <motion.button
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="group relative rounded-2xl px-8 py-3 text-lg font-semibold text-white
                      bg-white/25sd backdrop-blur-xl
                      shadow-md overflow-hidden  border-black border-4  shadow-purple-500/70 hover:shadow-purple-700/90"
      >
        <span
          className="absolute -inset-1 opacity-70 blur-xl transition
                            bg-gradient-to-r from-blue-400 via-cyan-400 to-fuchsia-500
                            group-hover:opacity-100 group-hover:blur-2xl 
                             "
        />
        <span className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl" />

        <Link href="/dna-maker" className="relative z-10 ">
          Start 🧪
        </Link>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="  group relative rounded-2xl px-8 py-3 text-lg font-semibold text-white
                      bg-white/10 backdrop-blur-xl 
                      shadow-md  overflow-hidden  border-black  border-4 shadow-emerald-500 hover:shadow-emerald-700"
      >
        <span
          className="absolute -inset-1 opacity-70 blur-xl transition
                            bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500
                            group-hover:opacity-100 group-hover:blur-2xl "
        />

        <span className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl" />

        <Link href="/bacteria-dna" className="relative z-10">
          Learn More 📗
        </Link>
      </motion.button>
    </div>
  );
}
