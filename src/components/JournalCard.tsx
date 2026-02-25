"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { JournalPost } from "@/lib/journal";

const typeColors: Record<string, string> = {
  milestone: "text-amber-400 bg-amber-500/10",
  progress: "text-emerald-400 bg-emerald-500/10",
  origin: "text-blue-400 bg-blue-500/10",
};

export function JournalCard({ post, index = 0 }: { post: JournalPost; index?: number }) {
  return (
    <motion.a
      href={`/journal/${post.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="block group"
    >
      <div className={cn(
        "p-5 rounded-2xl transition-all duration-300",
        "bg-white/[0.03] backdrop-blur-xl",
        "border border-white/[0.08]",
        "hover:border-amber-500/20 hover:shadow-[0_8px_32px_rgba(245,158,11,0.06)]"
      )}>
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className={cn("px-2 py-0.5 text-[10px] font-bold rounded", typeColors[post.type] || typeColors.progress)}>
            {post.type.toUpperCase()}
          </span>
          <span className="text-[11px] text-slate-600">{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-200 mb-2 group-hover:text-amber-400 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{post.excerpt}</p>

        {/* Tags */}
        <div className="flex gap-1.5 mt-3">
          {post.tags.map((t) => (
            <span key={t} className="text-[10px] text-slate-600 bg-slate-800/50 px-1.5 py-0.5 rounded">
              #{t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
