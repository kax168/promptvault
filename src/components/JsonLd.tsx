import site from "@/data/site.json";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://promptvault-eight-ruby.vercel.app";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: BASE_URL,
    description: site.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/#library?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
