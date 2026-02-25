"use client";
import { motion } from "framer-motion";
import site from "@/data/site.json";
import { Card } from "@/components/ui/Card";
import { FadeInStagger, staggerItem } from "@/components/ui/Motion";

const items = [
  { label: "Prompts", value: String(site.stats.prompts), icon: "📝" },
  { label: "Categories", value: String(site.stats.categories), icon: "📂" },
  { label: "Downloads", value: site.stats.downloads ? String(site.stats.downloads) : "—", icon: "⬇️" },
  { label: "Countries", value: site.stats.countries ? String(site.stats.countries) : "—", icon: "🌍" },
];

export default function Stats() {
  return (
    <section className="py-12 px-6">
      <FadeInStagger className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((s) => (
          <motion.div key={s.label} variants={staggerItem}>
            <Card className="text-center p-4">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </Card>
          </motion.div>
        ))}
      </FadeInStagger>
    </section>
  );
}
