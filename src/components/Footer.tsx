import site from "@/data/site.json";

export default function Footer() {
  const links = Object.entries(site.social).filter(([, v]) => v);
  return (
    <footer className="py-12 px-6 border-t border-slate-900">
      <div className="max-w-xl mx-auto text-center">
        {links.length > 0 && (
          <div className="flex justify-center gap-4 mb-4">
            {links.map(([name, url]) => (
              <a
                key={name}
                href={url as string}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-amber-400 transition-colors capitalize"
              >
                {name}
              </a>
            ))}
          </div>
        )}
        <p className="text-slate-600 text-xs">
          Built with ☕ and AI. Prompts tested across ChatGPT, Claude & Gemini.
        </p>
        <p className="text-slate-700 text-[10px] mt-2">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
