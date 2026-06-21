import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import {
  DEFAULT_OG_IMAGE,
  globalSchemaGraph,
  PAGE_META,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_META.home.title,
    template: `%s`,
  },
  description: PAGE_META.home.description,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "marketing",
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: `${SITE_NAME} – weboldal készítés Magyarországon`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <body
        className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        <JsonLd data={globalSchemaGraph()} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
