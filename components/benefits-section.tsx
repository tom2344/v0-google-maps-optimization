import { Eye, Banknote, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Láthatóság",
    description:
      "Az ügyfelek 75%-a az első 5 találat közül választ szolgáltatót. Ha nincs köztük, nem Önt fogják hívni.",
  },
  {
    icon: Banknote,
    title: "Ingyenes forgalom",
    description:
      "Nincs kattintásonkénti fizetés. Nincs hatalmas hirdetési büdzsé, mint Google vagy Meta Ads esetén.",
  },
  {
    icon: TrendingUp,
    title: "Hosszú távú stratégia",
    description:
      "Ha bekerül az első 5-be, jellemzően évekig ott marad. Extra havi hirdetési költségek nélkül.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-card py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            Megéri ez egyáltalán?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
