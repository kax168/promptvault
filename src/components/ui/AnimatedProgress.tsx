"use client";
import { motion } from "framer-motion";

export function AnimatedProgress({ value, max }: { value: number; max: number }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
      />
    </div>
  );
}
