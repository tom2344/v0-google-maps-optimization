import { Check } from "lucide-react"

const features = [
  "Top 5 cel 90 napon belul",
  "Ha nem erjuk el, tovabb dolgozunk dijmentesen",
  "75%+ keresesi lathatosag",
  "Teljes konkurenciaelemzes",
  "Ketheti frissitesek",
  "Fo kulcsszora rangsorolas",
  "Teljes weboldal optimalizalas",
]

export function PricingSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
          Csomag ajanlat
        </h2>
        <p className="mt-4 text-muted-foreground">
          Nincs szerzodes. Barmikor lemondható.
        </p>

        <div className="mt-12 rounded-3xl border-2 border-accent bg-card p-10 shadow-xl">
          <div className="flex items-baseline justify-center gap-1">
            <span className="font-serif text-5xl font-bold text-foreground md:text-6xl">
              159.000
            </span>
            <span className="text-lg text-muted-foreground">Ft / ho</span>
          </div>

          <div className="mx-auto mt-10 max-w-sm text-left">
            <ul className="flex flex-col gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#urlap"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
          >
            Kezdjunk bele
          </a>
        </div>
      </div>
    </section>
  )
}
