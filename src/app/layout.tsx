import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptVault — AI Prompts That Actually Work",
  description: "150+ battle-tested AI prompt templates. Free starter pack. Pro pack for power users. Built by a developer, for developers.",
  keywords: "AI prompts, ChatGPT prompts, Claude prompts, prompt templates, prompt engineering, AI tools",
  openGraph: {
    title: "PromptVault — AI Prompts That Actually Work",
    description: "150+ battle-tested AI prompt templates across 8 categories.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptVault — AI Prompts That Actually Work",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0a0e1a] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
