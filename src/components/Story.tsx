export default function Story() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          The <span className="text-gradient">Story</span>
        </h2>
        <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
          <p>
            I spent months writing the same AI prompts over and over. &quot;Summarize this.&quot;
            &quot;Write a blog post about X.&quot; &quot;Debug this code.&quot; Every time, starting from scratch.
            Every time, getting mediocre results.
          </p>
          <p>
            So I started saving the ones that actually worked. The prompts that made
            ChatGPT write like a human. The ones that made Claude think step-by-step.
            The templates that turned vague ideas into structured output.
          </p>
          <p>
            150+ prompts later, I realized this collection was too useful to keep to myself.
            So I built PromptVault — a searchable library of battle-tested AI prompt templates,
            organized by category, with clear placeholders you can customize in seconds.
          </p>
          <p className="text-slate-300 font-medium">
            The Starter Pack is free. The Pro Pack is $9.9 — less than a single ChatGPT Plus month.
            Every prompt has been tested across ChatGPT, Claude, and Gemini.
          </p>
        </div>
      </div>
    </section>
  );
}
