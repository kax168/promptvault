export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  prompt: string;
  model: string;
  isPro: boolean;
}

export const categories = [
  { id: "writing", name: "✍️ Writing", count: 0 },
  { id: "coding", name: "💻 Coding", count: 0 },
  { id: "marketing", name: "📢 Marketing", count: 0 },
  { id: "business", name: "💼 Business", count: 0 },
  { id: "education", name: "📚 Education", count: 0 },
  { id: "creative", name: "🎨 Creative", count: 0 },
  { id: "productivity", name: "⚡ Productivity", count: 0 },
  { id: "translation", name: "🌍 Translation", count: 0 },
];
