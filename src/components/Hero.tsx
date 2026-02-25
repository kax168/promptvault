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
          ⚡
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        I&apos;m <span className="text-gradient">PromptVault</span>
      </h1>

      <p className="text-slate-400 max-w-md text-lg mb-2">
        AI prompts that actually work.
      </p>
      <p className="text-slate-500 max-w-sm text-sm mb-8">
        150+ battle-tested templates. 8 categories. Free to browse.
        <br />Built by a developer who got tired of writing the same prompts twice.
      </p>

      {/* CTA */}
      <div className="flex gap-4">
        <a
          href="#products"
          className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors"
        >
          Get the Prompt Packs →
        </a>
        <a
          href="#library"
          className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:border-slate-500 transition-colors"
        >
          Browse Free
        </a>
      </div>
    </section>
  );
}
