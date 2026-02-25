"use client";
import { motion } from "framer-motion";
import site from "@/data/site.json";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-28 h-28 mb-8 rounded-2xl overflow-hidden border-2 border-amber-500/20 glow-gold"
      >
        <img src="/logo.png" alt="LaerKai" className="w-full h-full object-cover" />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        I&apos;m <span className="text-gradient">{site.name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-slate-400 max-w-md text-lg mb-2"
      >
        {site.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="text-slate-500 max-w-sm text-sm mb-8"
      >
        {site.description}
      </motion.p>

      {/* Goal progress */}
      {site.goal && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="w-full max-w-xs mb-8"
        >
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>{site.goal.label}</span>
          </div>
          <ProgressBar
            currentValue={site.goal.current}
            targetValue={site.goal.target}
            label={site.goal.label}
            color="gold"
            prefix="$"
            height="md"
          />
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="flex gap-4"
      >
        <a href="#products">
          <Button size="lg">Get the Prompt Packs →</Button>
        </a>
        <a href="#library">
          <Button variant="outline" size="lg">Browse Free</Button>
        </a>
      </motion.div>
    </section>
  );
}
