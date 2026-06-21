import Link from "next/link"
import { ArrowRight, Globe, MapPin } from "lucide-react"
import { ROUTES } from "@/lib/seo"

const services = [
  {
    icon: Globe,
    title: "Weboldal készítés",
    description:
      "Professzionális, céges weboldal készítés vállalkozásoknak. Modern design, gyors betöltés, mobilbarát felület — csak akkor fizet, ha elégedett.",
    href: ROUTES.weboldal,
    cta: "Weboldal készítés részletei",
    primary: true,
  },
  {
    icon: MapPin,
    title: "Google Térkép optimalizálás",
    description:
      "Google Cégprofil és Local SEO Magyarországon. Top 5 helyezés a Google Térképen 90 napon belül — garantált eredményekkel.",
    href: ROUTES.googleTerkep,
    cta: "Google Térkép optimalizálás",
    primary: false,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-6" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2
            id="services-heading"
            className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance"
          >
            Marketing szolgáltatások vállalkozásoknak
          </h2>
          <p className="mt-4 text-muted-foreground">
            Weboldal készítés és helyi láthatóság — egy helyen, magyar piacra szabva.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className={`group rounded-2xl border p-8 transition-all hover:shadow-lg ${
                service.primary
                  ? "border-accent/40 bg-accent/5 hover:border-accent/60"
                  : "border-border bg-card hover:border-accent/30"
              }`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-2xl text-foreground">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                {service.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
