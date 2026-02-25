"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  isFree?: boolean;
  link: string;
  featured?: boolean;
  badge?: string;
  features?: string[];
  className?: string;
}

export function ProductCard({
  title,
  description,
  price,
  originalPrice,
  isFree = false,
  link,
  featured = false,
  badge,
  features,
  className,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("relative group", className)}
    >
      {/* Glow effect on hover */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm",
          featured
            ? "bg-gradient-to-r from-amber-500/30 to-orange-500/30"
            : "bg-gradient-to-r from-slate-500/20 to-slate-400/20"
        )}
      />

      {/* Card */}
      <div
        className={cn(
          "relative rounded-2xl p-6 transition-all duration-300",
          // Glassmorphism
          "bg-white/[0.03] backdrop-blur-xl",
          "border border-white/[0.08]",
          "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
          featured && "border-amber-500/20 shadow-[0_8px_32px_rgba(245,158,11,0.1)]"
        )}
      >
        {/* Badge */}
        {(badge || featured) && (
          <div className="absolute -top-3 right-4 px-3 py-0.5 bg-amber-500 text-black text-xs font-bold rounded-full">
            {badge || "BEST VALUE"}
          </div>
        )}

        {/* Price */}
        <div className="mb-4">
          {isFree ? (
            <span className="text-2xl font-bold text-amber-400">FREE</span>
          ) : (
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-amber-400">
                ${(price / 100).toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-sm text-slate-600 line-through">
                  ${(originalPrice / 100).toFixed(2)}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-slate-100 mb-2">{title}</h3>
        <p className="text-sm text-slate-400 mb-4 leading-relaxed">{description}</p>

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="text-xs text-slate-500 space-y-1.5 mb-6">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-amber-500/70">✓</span> {f}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <a href={link} className="block">
          <Button
            variant={featured || !isFree ? "gold" : "outline"}
            className="w-full"
            size="md"
          >
            {isFree ? "Get Free →" : "Buy Now →"}
          </Button>
        </a>
      </div>
    </motion.div>
  );
}
