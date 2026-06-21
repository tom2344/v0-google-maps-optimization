export const SITE_NAME = "Tamas Marketing"
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tamasmarketing.com"
export const SITE_EMAIL = "info@tamasmarketing.com"
export const SITE_LOCALE = "hu_HU"

export const DEFAULT_OG_IMAGE = `${SITE_URL}/icon.svg`

export const ROUTES = {
  home: "/",
  weboldal: "/weboldal-keszites",
  googleTerkep: "/google-terkep-optimalizalas",
} as const

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    logo: DEFAULT_OG_IMAGE,
    sameAs: ["https://x.com/TTokoli63778"],
    areaServed: {
      "@type": "Country",
      name: "Hungary",
    },
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
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
    knowsAbout: [
      "Weboldal készítés",
      "Céges weboldal készítés",
      "Google Térkép optimalizálás",
      "Google Cégprofil optimalizálás",
      "Local SEO",
      "Marketing szolgáltatások",
    ],
  }
}

export function weboldalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professzionális weboldal készítés",
    serviceType: "Weboldal készítés",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
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
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Térkép optimalizálás",
    serviceType: "Google Cégprofil optimalizálás",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
    },
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
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "hu",
  }
}
