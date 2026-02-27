import site from "@/data/site.json";

export default function Footer() {
  const allSocial = site.social as Record<string, string | null>;
  const links = Object.entries(allSocial).filter(
    (entry): entry is [string, string] => entry[1] !== null
  );
  return (
    <footer className="py-12 px-6 border-t border-slate-900">
      <div className="max-w-xl mx-auto text-center">
        {links.length > 0 && (
          <div className="flex justify-center gap-4 mb-4">
            {links.map(([name, url]) => (
              <a
                key={name}
                href={url}
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
        <div className="flex justify-center gap-4 mt-4 mb-2">
          <a href="/about" className="text-xs text-slate-600 hover:text-slate-400">About</a>
          <a href="/blog" className="text-xs text-slate-600 hover:text-slate-400">Blog</a>
          <a href="/prompts" className="text-xs text-slate-600 hover:text-slate-400">Prompts</a>
          <a href="/privacy" className="text-xs text-slate-600 hover:text-slate-400">Privacy</a>
          <a href="/terms" className="text-xs text-slate-600 hover:text-slate-400">Terms</a>
          <a href="/contact" className="text-xs text-slate-600 hover:text-slate-400">Contact</a>
        </div>
        <p className="text-slate-700 text-[10px] mt-2">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
