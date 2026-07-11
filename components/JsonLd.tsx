import { getJsonLdGraph } from "@/lib/seo";

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getJsonLdGraph()).replace(/</g, "\\u003c"),
      }}
    />
  );
}
