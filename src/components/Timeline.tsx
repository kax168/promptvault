export default function Timeline() {
  const events = [
    { date: "Feb 25", tag: "Day 1", title: "Launch day", desc: "PromptVault goes live. 159 prompts across 7 categories. Posted to Reddit — r/ChatGPT, r/PromptEngineering, r/SideProject." },
    { date: "Feb 25", tag: "Day 1", title: "First 100 prompts", desc: "Curated and tested 100+ prompt templates across ChatGPT, Claude, and Gemini. Every prompt battle-tested." },
    { date: "Feb 25", tag: "Day 0", title: "The idea", desc: "Tired of writing the same prompts over and over. Started saving the ones that actually worked. Realized this collection was too useful to keep private." },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          The <span className="text-gradient">Journey</span>
        </h2>
        <div className="space-y-0">
          {events.map((e, i) => (
            <div key={i} className="flex gap-4 pb-8 relative">
              {/* Timeline line */}
              {i < events.length - 1 && (
                <div className="absolute left-[19px] top-8 w-px h-full bg-slate-800" />
              )}
              {/* Dot */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs text-amber-500 font-bold z-10">
                {e.tag.split(" ")[1]}
              </div>
              {/* Content */}
              <div className="pt-1">
                <div className="text-xs text-slate-600 mb-1">{e.date} · {e.tag}</div>
                <div className="text-sm font-semibold text-slate-200 mb-1">{e.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
