import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/journal";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://fromlaerkai.store";

export default function sitemap(): MetadataRoute.Sitemap {
  const journalSlugs = getAllSlugs();

  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${BASE_URL}/journal`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
  ];

  const journalPages = journalSlugs.map((slug) => ({
    url: `${BASE_URL}/journal/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...journalPages];
}
