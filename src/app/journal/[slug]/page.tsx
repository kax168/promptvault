import { getAllSlugs, getPostBySlug } from "@/lib/journal";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// SSG: pre-generate all journal pages
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — PromptVault Journal`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default function JournalPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen py-20 px-6">
      <article className="max-w-xl mx-auto">
        {/* Back */}
        <a href="/journal" className="text-xs text-slate-600 hover:text-amber-400 transition-colors">
          ← Back to Journal
        </a>

        {/* Header */}
        <div className="mt-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-[10px] font-bold rounded text-amber-400 bg-amber-500/10">
              {post.type.toUpperCase()}
            </span>
            <span className="text-[11px] text-slate-600">{post.date}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">{post.title}</h1>
          <p className="text-sm text-slate-400">{post.excerpt}</p>
        </div>

        {/* Content */}
        <div className="prose-custom">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-sm text-slate-400 leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-8 pt-6 border-t border-slate-800">
          {post.tags.map((t) => (
            <span key={t} className="text-[10px] text-slate-600 bg-slate-800/50 px-2 py-0.5 rounded">
              #{t}
            </span>
          ))}
        </div>
      </article>
    </main>
  );
}
