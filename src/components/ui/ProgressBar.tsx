"use client";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  currentValue: number;
  targetValue: number;
  label?: string;
  color?: "gold" | "green" | "blue" | "purple";
  showPercentage?: boolean;
  showValues?: boolean;
  height?: "sm" | "md" | "lg";
  prefix?: string;
  className?: string;
}

const colorMap = {
  gold: "from-amber-500 to-amber-400",
  green: "from-emerald-500 to-emerald-400",
  blue: "from-blue-500 to-blue-400",
  purple: "from-purple-500 to-purple-400",
};

const glowMap = {
  gold: "shadow-[0_0_12px_rgba(245,158,11,0.4)]",
  green: "shadow-[0_0_12px_rgba(16,185,129,0.4)]",
  blue: "shadow-[0_0_12px_rgba(59,130,246,0.4)]",
  purple: "shadow-[0_0_12px_rgba(168,85,247,0.4)]",
};

const heightMap = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };

export function ProgressBar({
  currentValue,
  targetValue,
  label,
  color = "gold",
  showPercentage = true,
  showValues = true,
  height = "md",
  prefix = "$",
  className,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const pct = Math.min((currentValue / targetValue) * 100, 100);

  // Animated counter
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const [displayPct, setDisplayPct] = useState(0);

  useEffect(() => {
    if (isInView) spring.set(pct);
  }, [isInView, pct, spring]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplayPct(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        {label && <span className="text-xs text-slate-400 font-medium">{label}</span>}
        <div className="flex items-center gap-3 ml-auto">
          {showValues && (
            <span className="text-xs text-slate-500">
              {prefix}{currentValue.toLocaleString()} / {prefix}{targetValue.toLocaleString()}
            </span>
          )}
          {showPercentage && (
            <span className="text-xs font-bold text-gradient tabular-nums">
              {displayPct}%
            </span>
          )}
        </div>
      </div>

      {/* Bar */}
      <div className={cn("bg-slate-800 rounded-full overflow-hidden", heightMap[height])}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full bg-gradient-to-r",
            colorMap[color],
            glowMap[color]
          )}
        />
      </div>
    </div>
  );
}
