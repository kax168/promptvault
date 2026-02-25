import site from "@/data/site.json";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Avatar */}
      <div className="relative w-28 h-28 mb-8 rounded-2xl overflow-hidden border-2 border-amber-500/20 glow-gold">
        <div className="w-full h-full bg-gradient-to-br from-amber-500/20 to-amber-700/20 flex items-center justify-center text-5xl">
          {site.avatar}
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        I&apos;m <span className="text-gradient">{site.name}</span>
      </h1>

      <p className="text-slate-400 max-w-md text-lg mb-2">{site.tagline}</p>
      <p className="text-slate-500 max-w-sm text-sm mb-8">{site.description}</p>

      {/* Goal progress */}
      {site.goal && (
        <div className="w-full max-w-xs mb-8">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>{site.goal.label}</span>
            <span>${site.goal.current} / ${site.goal.target}</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all"
              style={{ width: `${Math.min((site.goal.current / site.goal.target) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <Button size="lg">
          <a href="#products">Get the Prompt Packs →</a>
        </Button>
        <Button variant="outline" size="lg">
          <a href="#library">Browse Free</a>
        </Button>
      </div>
    </section>
  );
}
