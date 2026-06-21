import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JsonLd } from "@/components/json-ld"
import {
  DEFAULT_OG_IMAGE,
  localBusinessSchema,
  organizationSchema,
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
    default: `${SITE_NAME} | Weboldal készítés és marketing`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Professzionális weboldal készítés és Google Térkép optimalizálás magyar vállalkozásoknak. Több megkeresés, jobb online láthatóság.",
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Weboldal készítés és marketing`,
    description:
      "Professzionális weboldal készítés és Google Térkép optimalizálás magyar vállalkozásoknak.",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Weboldal készítés és marketing`,
    description:
      "Professzionális weboldal készítés és Google Térkép optimalizálás magyar vállalkozásoknak.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
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
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
