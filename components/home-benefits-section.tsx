import Link from "next/link"
import { Globe, Smartphone, Zap } from "lucide-react"
import { ROUTES } from "@/lib/seo"

const benefits = [
  {
    icon: Globe,
    title: "Professzionális megjelenés",
    description:
      "Egy jól felépített céges weboldal azonnal bizalmat ad. Az ügyfelek komolyabbnak látják a vállalkozását, még mielőtt felvennék Önnel a kapcsolatot.",
  },
  {
    icon: Smartphone,
    title: "Mobilbarát kivitelezés",
    description:
      "A keresések többsége telefonról érkezik. Weboldalaink minden eszközön gyorsan betöltődnek és könnyen használhatók.",
  },
  {
    icon: Zap,
    title: "Több megkeresés, kevesebb elveszett ügyfél",
    description:
      "Ha nincs weboldala vagy elavult, az érdeklődők továbblépnek. Egy jól megtervezett oldal segít, hogy Önt válasszák.",
  },
]

export function HomeBenefitsSection() {
  return (
    <section className="bg-card py-24 px-6" aria-labelledby="home-benefits-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2
            id="home-benefits-heading"
            className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance"
          >
            Miért éri meg a céges weboldal készítés?
          </h2>
          <p className="mt-4 text-muted-foreground">
            A weboldal ma már nem luxus — alapvető üzleti eszköz.{" "}
            <Link
              href={ROUTES.weboldal}
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              Weboldal készítés részletei
            </Link>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <benefit.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
