"use client";
import { motion } from "framer-motion";
import site from "@/data/site.json";
import { ProgressBar } from "@/components/ui/ProgressBar";

const dots = [
  { color: "bg-orange-400", x: "18%", delay: 0 },
  { color: "bg-blue-400", x: "34%", delay: 0.3 },
  { color: "bg-yellow-400", x: "50%", delay: 0.6 },
  { color: "bg-purple-400", x: "66%", delay: 0.9 },
  { color: "bg-pink-400", x: "74%", delay: 1.2 },
  { color: "bg-green-400", x: "88%", delay: 0.4 },
];

const finance = (site as any).finance || { earned: 0, seedMoney: 0, spent: 0, cashOnHand: 0 };

const financeStats = [
  { value: `$${finance.earned}`, label: "EARNED" },
  { value: `$${finance.seedMoney}`, label: "SEED MONEY" },
  { value: `$${finance.spent}`, label: "SPENT" },
  { value: `$${finance.cashOnHand}`, label: "CASH ON HAND" },
];

const bottomStats = [
  { value: String(site.stats.downloads), label: "DOWNLOADS" },
  { value: "0", label: "PAID SALES" },
  { value: String(site.stats.countries), label: "COUNTRIES" },
  { value: "1d", label: "SINCE LAUNCH" },
];

export default function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8"
        >
          The <span className="text-gradient">Mac Mini Fund</span>
        </motion.h2>

        {/* Progress bar with bouncing dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-10"
        >
          <ProgressBar
            currentValue={site.goal.current}
            targetValue={site.goal.target}
            color="gold"
            prefix="$"
            height="lg"
            showPercentage={false}
          />
          {/* Floating dots */}
          {dots.map((dot, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0, 6, 0] }}
              transition={{ duration: 2.5, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-[-8px] w-2.5 h-2.5 rounded-full ${dot.color}`}
              style={{ left: dot.x }}
            />
          ))}
          <span className="absolute right-0 -top-7 text-xs text-slate-400">
            ${site.goal.target} ✅
          </span>
        </motion.div>

        {/* Finance row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {financeStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl font-bold text-amber-400">{s.value}</p>
              <p className="text-[10px] text-slate-500 tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="grid grid-cols-4 gap-4">
          {bottomStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl font-bold text-slate-200">{s.value}</p>
              <p className="text-[10px] text-slate-500 tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
