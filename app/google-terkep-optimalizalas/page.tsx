import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import {
  createPageMetadata,
  GOOGLE_TERKEP_OG_IMAGE,
  googleTerkepPageSchema,
  PAGE_META,
  ROUTES,
} from "@/lib/seo"

export const metadata = createPageMetadata({
  title: PAGE_META.googleTerkep.title,
  description: PAGE_META.googleTerkep.description,
  path: ROUTES.googleTerkep,
  ogImage: {
    url: GOOGLE_TERKEP_OG_IMAGE,
    alt: "Google Térkép optimalizálás eredménye – Top helyezés Magyarországon",
    width: 1200,
    height: 630,
  },
})

export default function GoogleTerkepOptimalizalasPage() {
  return (
    <>
      <JsonLd data={googleTerkepPageSchema()} />
      <main>
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <BeforeAfterSection />
        <HowItWorksSection />
        <PricingSection />
        <section className="border-y border-border bg-muted/30 py-12 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted-foreground">
              Emellett{" "}
              <Link
                href={ROUTES.weboldal}
                className="font-semibold text-accent underline-offset-4 hover:underline"
              >
                professzionális weboldal készítést
              </Link>{" "}
              is vállalunk Magyarországon — a weboldal és a Google Cégprofil együtt hozza a legtöbb megkeresést.
            </p>
          </div>
        </section>
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
