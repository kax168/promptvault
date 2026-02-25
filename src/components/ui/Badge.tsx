import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "muted";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-[10px] font-bold rounded",
        {
          "bg-slate-800 text-slate-500": variant === "default",
          "bg-amber-500/20 text-amber-400": variant === "gold",
          "bg-slate-800/50 text-slate-600": variant === "muted",
        },
        className
      )}
      {...props}
    />
  );
}
