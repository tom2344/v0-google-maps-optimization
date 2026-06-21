import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { ROUTES } from "@/lib/seo"

export function HomeHeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,oklch(0.55_0.19_145_/_0.06),transparent_70%)]" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Magyarországi vállalkozásoknak
          </span>
        </p>

        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Professzionális weboldal készítés{" "}
          <span className="text-accent">cégeknek</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Ha Önre keresnek, de nincs igényes céges weboldala, a versenytársát hívják fel.
          Modern, gyors weboldalakat készítünk, amelyek bizalmat építenek és több megkeresést hoznak.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`${ROUTES.weboldal}#weboldal-urlap`}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Ingyenes ajánlatot kérek
          </Link>
          <Link
            href={ROUTES.weboldal}
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            Weboldal készítés részletei
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce" aria-hidden="true">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  )
}
