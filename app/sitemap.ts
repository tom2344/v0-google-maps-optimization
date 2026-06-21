import type { MetadataRoute } from "next"
import { absoluteUrl, ROUTES, SITE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(ROUTES.weboldal),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl(ROUTES.googleTerkep),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
