import type { Metadata } from "next"
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
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  googleTerkepServiceSchema,
  ROUTES,
  webPageSchema,
} from "@/lib/seo"

const title = "Google Térkép optimalizálás – Top 5 helyezés 90 napon belül"
const description =
  "Google Térkép és Google Cégprofil optimalizálás Magyarországon. Local SEO stratégia — Top 5 helyezés 90 napon belül, garantálva. Ingyenes elemzés."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl(ROUTES.googleTerkep),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(ROUTES.googleTerkep),
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tD9FKxs3qTT8vPn2yHqlGSO4unxP1D.png",
        alt: "Google Térkép optimalizálás eredménye – Top helyezés",
      },
    ],
  },
  twitter: {
    title,
    description,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tD9FKxs3qTT8vPn2yHqlGSO4unxP1D.png",
    ],
  },
}

export default function GoogleTerkepOptimalizalasPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path: ROUTES.googleTerkep }),
          googleTerkepServiceSchema(),
        ]}
      />
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
                href="/weboldal-keszites"
                className="font-semibold text-accent underline-offset-4 hover:underline"
              >
                professzionális weboldal készítést
              </Link>{" "}
              is vállalunk — a weboldal és a Google Cégprofil együtt hozza a legtöbb megkeresést.
            </p>
          </div>
        </section>
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
