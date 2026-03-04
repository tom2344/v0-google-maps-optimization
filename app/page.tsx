import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <PricingSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
