import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export const dynamic = "force-static";

const contentLastModified = new Date("2026-08-25T00:00:00-03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: business.siteUrl,
      lastModified: contentLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${business.siteUrl}/privacidade`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
