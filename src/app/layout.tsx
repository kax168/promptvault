import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptVault - AI Prompt Templates for Every Use Case",
  description: "Browse 500+ curated AI prompt templates for writing, coding, marketing, and more. Free and Pro plans available.",
  keywords: "AI prompts, ChatGPT prompts, Claude prompts, prompt templates, prompt engineering",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
