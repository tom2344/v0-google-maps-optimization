import { Eye, Banknote, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Lathatosag",
    description:
      "Az ugyfelek 75%-a az elso 5 talalat kozul valaszt szolgaltatot. Ha nincs koztuk, nem Ont fogjak hivni.",
  },
  {
    icon: Banknote,
    title: "Ingyenes forgalom",
    description:
      "Nincs kattintasonkenti fizetes. Nincs hatalmas hirdetesi budzse, mint Google vagy Meta Ads eseten.",
  },
  {
    icon: TrendingUp,
    title: "Hosszu tavu strategia",
    description:
      "Ha bekerul az elso 5-be, jellemzoen evekig ott marad. Extra havi hirdetesi koltsegek nelkul.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-card py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            Megeri ez egyaltalan?
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
