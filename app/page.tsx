import { Navbar } from "@/components/navbar"
import { HomeHeroSection } from "@/components/home-hero-section"
import { HomeBenefitsSection } from "@/components/home-benefits-section"
import { ServicesSection } from "@/components/services-section"
import { HomeCtaSection } from "@/components/home-cta-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import {
  createPageMetadata,
  homePageSchema,
  PAGE_META,
  ROUTES,
} from "@/lib/seo"

export const metadata = createPageMetadata({
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
  path: ROUTES.home,
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchema()} />
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
