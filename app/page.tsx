import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HomeHeroSection } from "@/components/home-hero-section"
import { HomeBenefitsSection } from "@/components/home-benefits-section"
import { ServicesSection } from "@/components/services-section"
import { HomeCtaSection } from "@/components/home-cta-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import {
  DEFAULT_OG_IMAGE,
  ROUTES,
  SITE_URL,
  webPageSchema,
} from "@/lib/seo"

const title = "Weboldal készítés vállalkozásoknak – Professzionális céges weboldal"
const description =
  "Professzionális weboldal készítés magyar cégeknek. Modern, gyors, mobilbarát céges weboldal — ingyenes ajánlat, nincs kockázat. Tamas Marketing."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Weboldal készítés – Tamas Marketing" }],
  },
  twitter: {
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: title,
          description,
          path: ROUTES.home,
        })}
      />
      <main>
        <Navbar />
        <HomeHeroSection />
        <HomeBenefitsSection />
        <ServicesSection />
        <HomeCtaSection />
        <Footer />
      </main>
    </>
  )
}
