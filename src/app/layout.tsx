import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://promptvault-eight-ruby.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "LaerKai — AI Prompts That Actually Work",
    template: "%s | LaerKai",
  },
  description: "150+ battle-tested AI prompt templates for ChatGPT, Claude & Gemini. Free starter pack. Pro pack for power users.",
  keywords: [
    "AI prompts", "ChatGPT prompts", "Claude prompts", "Gemini prompts",
    "prompt templates", "prompt engineering", "AI tools", "prompt library",
  ],
  authors: [{ name: "LaerKai" }],
  creator: "LaerKai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "LaerKai",
    title: "LaerKai — AI Prompts That Actually Work",
    description: "150+ battle-tested AI prompt templates. Free to browse. Pro pack $9.90.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "LaerKai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaerKai — AI Prompts That Actually Work",
    description: "150+ battle-tested AI prompt templates. Free to browse.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0e1a" />
      </head>
      <body className="bg-[#0a0e1a] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
