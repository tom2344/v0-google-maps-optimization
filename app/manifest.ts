import type { MetadataRoute } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Weboldal készítés és Google Térkép optimalizálás magyar vállalkozásoknak.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14532d",
    lang: "hu",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
