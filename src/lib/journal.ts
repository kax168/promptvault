import journalData from "@/data/journal.json";

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  type: string;
  image: string | null;
  author: string;
}

const POSTS_PER_PAGE = 6;

// Replace these functions with CMS API calls when ready
// e.g., Contentful: await client.getEntries({ content_type: 'journal' })

export function getAllPosts(): JournalPost[] {
  return journalData.posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): JournalPost | undefined {
  return journalData.posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return journalData.posts.map((p) => p.slug);
}

export function getPaginatedPosts(page: number) {
  const all = getAllPosts();
  const start = (page - 1) * POSTS_PER_PAGE;
  return {
    posts: all.slice(start, start + POSTS_PER_PAGE),
    totalPages: Math.ceil(all.length / POSTS_PER_PAGE),
    currentPage: page,
  };
}
