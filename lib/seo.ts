import type { Metadata } from "next"

export const SITE_NAME = "Tamas Marketing"
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tamasmarketing.com"
export const SITE_EMAIL = "info@tamasmarketing.com"
export const SITE_LOCALE = "hu_HU"
export const SITE_LANGUAGE = "hu"

export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`
export const GOOGLE_TERKEP_OG_IMAGE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tD9FKxs3qTT8vPn2yHqlGSO4unxP1D.png"

export const ROUTES = {
  home: "/",
  weboldal: "/weboldal-keszites",
  googleTerkep: "/google-terkep-optimalizalas",
} as const

export const PAGE_META = {
  home: {
    title: `${SITE_NAME} | Weboldal készítés és marketing Magyarországon`,
    description:
      "Professzionális weboldal készítés és Google Térkép optimalizálás magyar vállalkozásoknak. Több megkeresés, jobb online láthatóság — ingyenes ajánlat.",
  },
  weboldal: {
    title: "Weboldal készítés – Professzionális céges weboldal | Tamas Marketing",
    description:
      "Céges weboldal készítés vállalkozásoknak Magyarországon. Modern, gyors, SEO-barát weboldal — csak akkor fizet, ha elégedett. Kérjen ingyenes ajánlatot!",
  },
  googleTerkep: {
    title: "Google Térkép optimalizálás Magyarországon | Tamas Marketing",
    description:
      "Google Térkép és Google Cégprofil optimalizálás magyar cégeknek. Local SEO stratégia — Top 5 helyezés 90 napon belül. Ingyenes elemzés.",
  },
} as const

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`
}

export type PageMetaInput = {
  title: string
  description: string
  path: string
  ogImage?: { url: string; alt: string; width?: number; height?: number }
  noIndex?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  const image = ogImage ?? {
    url: DEFAULT_OG_IMAGE,
    alt: `${SITE_NAME} – weboldal készítés Magyarországon`,
    width: 1200,
    height: 630,
  }

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  }
}

export function jsonLdGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    logo: `${SITE_URL}/icon.svg`,
    sameAs: ["https://x.com/TTokoli63778"],
  }
}

export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: SITE_LANGUAGE,
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
}

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    image: DEFAULT_OG_IMAGE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "HU",
      addressLocality: "Magyarország",
    },
    areaServed: {
      "@type": "Country",
      name: "Hungary",
    },
    availableLanguage: ["Hungarian"],
    knowsAbout: [
      "Weboldal készítés",
      "Céges weboldal készítés",
      "Google Térkép optimalizálás",
      "Google Cégprofil optimalizálás",
      "Local SEO",
      "Marketing szolgáltatások",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing szolgáltatások Magyarországon",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@id": `${SITE_URL}${ROUTES.weboldal}#service` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${SITE_URL}${ROUTES.googleTerkep}#service` },
        },
      ],
    },
  }
}

export function weboldalServiceSchema() {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${ROUTES.weboldal}#service`,
    name: "Professzionális weboldal készítés",
    serviceType: "Weboldal készítés",
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: {
      "@type": "Country",
      name: "Hungary",
    },
    description:
      "Céges weboldal készítés vállalkozásoknak: modern, gyors, mobilbarát weboldalak, amelyek több megkeresést és bizalmat hoznak.",
    url: absoluteUrl(ROUTES.weboldal),
  }
}

export function googleTerkepServiceSchema() {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${ROUTES.googleTerkep}#service`,
    name: "Google Térkép optimalizálás",
    serviceType: "Google Cégprofil optimalizálás",
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: {
      "@type": "Country",
      name: "Hungary",
    },
    description:
      "Google Térkép és Google Cégprofil optimalizálás Magyarországon. Local SEO stratégia a Top 5 helyezésért 90 napon belül.",
    url: absoluteUrl(ROUTES.googleTerkep),
  }
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: SITE_LANGUAGE,
    about: { "@id": `${SITE_URL}/#localbusiness` },
  }
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function globalSchemaGraph() {
  return jsonLdGraph(
    organizationSchema(),
    webSiteSchema(),
    localBusinessSchema()
  )
}

export function weboldalPageSchema() {
  const { title, description } = PAGE_META.weboldal
  return jsonLdGraph(
    webPageSchema({ name: title, description, path: ROUTES.weboldal }),
    weboldalServiceSchema(),
    breadcrumbSchema([
      { name: "Főoldal", path: ROUTES.home },
      { name: "Weboldal készítés", path: ROUTES.weboldal },
    ])
  )
}

export function googleTerkepPageSchema() {
  const { title, description } = PAGE_META.googleTerkep
  return jsonLdGraph(
    webPageSchema({ name: title, description, path: ROUTES.googleTerkep }),
    googleTerkepServiceSchema(),
    breadcrumbSchema([
      { name: "Főoldal", path: ROUTES.home },
      { name: "Google Térkép optimalizálás", path: ROUTES.googleTerkep },
    ])
  )
}

export function homePageSchema() {
  const { title, description } = PAGE_META.home
  return jsonLdGraph(
    webPageSchema({ name: title, description, path: ROUTES.home }),
    weboldalServiceSchema(),
    breadcrumbSchema([{ name: "Főoldal", path: ROUTES.home }])
  )
}
