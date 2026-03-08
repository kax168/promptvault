import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/journal";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fromlaerkai.store";

export default function sitemap(): MetadataRoute.Sitemap {
  const journalSlugs = getAllSlugs();

  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${BASE_URL}/prompts`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE_URL}/journal`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.7 },
  ];

  const journalPages = journalSlugs.map((slug) => ({
    url: `${BASE_URL}/journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const categories = ["writing", "coding", "marketing", "business", "education", "creative", "productivity", "translation"];
  const categoryPages = categories.map((cat) => ({
    url: `${BASE_URL}/prompts/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogSlugs = ["few-shot-prompting-ai-agents-production-2026", "ai-agents-marketing-automation-2026", "context-engineering-vs-prompt-engineering-2026", "ai-writing-assistants-long-form-2026", "chain-of-symbol-prompting-spatial-reasoning", "ai-workflow-automation-content-creators-2026", "chain-of-symbol-prompting-2026", "what-is-prompt-engineering", "chatgpt-vs-claude-vs-gemini", "10-prompts-every-developer-needs", "how-to-write-system-prompts-for-ai-agents", "prompt-chaining-for-ai-agents", "best-ai-prompts-for-small-business", "ai-content-optimization-guide"];
  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...blogPages, ...journalPages];
}
