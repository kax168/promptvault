"use client";
import { motion } from "framer-motion";
import timeline from "@/data/timeline.json";
import { FadeIn } from "@/components/ui/Motion";

export default function Timeline() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8 text-center">
            The <span className="text-gradient">Journey</span>
          </h2>
        </FadeIn>
        <div className="space-y-0">
          {timeline.events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex gap-4 pb-8 relative"
            >
              {i < timeline.events.length - 1 && (
                <div className="absolute left-[19px] top-8 w-px h-full bg-slate-800" />
              )}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs text-amber-500 font-bold z-10">
                {e.tag.split(" ")[1]}
              </div>
              <div className="pt-1">
                <div className="text-xs text-slate-600 mb-1">{e.date} · {e.tag}</div>
                <div className="text-sm font-semibold text-slate-200 mb-1">{e.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{e.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/journal" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
            View all entries →
          </a>
        </div>
      </div>
    </section>
  );
}
