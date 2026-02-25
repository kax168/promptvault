export default function Stats() {
  const stats = [
    { label: "Prompts", value: "159", icon: "📝" },
    { label: "Categories", value: "8", icon: "📂" },
    { label: "Downloads", value: "0", icon: "⬇️" },
    { label: "Countries", value: "—", icon: "🌍" },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800"
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-2xl font-bold text-gradient">{s.value}</div>
            <div className="text-xs text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
