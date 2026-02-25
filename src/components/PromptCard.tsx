"use client";
import { Prompt } from "@/data/types";
import { useState } from "react";

export default function PromptCard({ prompt, locked }: { prompt: Prompt; locked: boolean }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = () => {
    if (locked) return;
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow bg-white">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-lg text-gray-900">{prompt.title}</h3>
        {prompt.isPro && (
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            PRO
          </span>
        )}
      </div>
      <p className="text-gray-500 text-sm mb-3">{prompt.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span className="text-xs bg-brand-50 text-brand-600 px-2 py-0.5 rounded-full">{prompt.model}</span>
        {prompt.tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>

      {/* Prompt preview / full */}
      <div
        className={`relative bg-gray-50 rounded-lg p-3 text-sm text-gray-700 font-mono whitespace-pre-wrap cursor-pointer ${
          !expanded ? "max-h-24 overflow-hidden" : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        {locked ? (
          <div className="flex items-center justify-center h-16 text-gray-400">
            🔒 Upgrade to Pro to unlock this prompt
          </div>
        ) : (
          prompt.prompt
        )}
        {!expanded && !locked && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-50 to-transparent" />
        )}
      </div>

      {/* Copy button */}
      <div className="mt-3 flex justify-end">
        <button
          onClick={handleCopy}
          disabled={locked}
          className={`text-sm px-4 py-1.5 rounded-lg font-medium transition-colors ${
            locked
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : copied
              ? "bg-green-500 text-white"
              : "bg-brand-500 text-white hover:bg-brand-600"
          }`}
        >
          {copied ? "✓ Copied!" : locked ? "🔒 Pro Only" : "📋 Copy Prompt"}
        </button>
      </div>
    </div>
  );
}