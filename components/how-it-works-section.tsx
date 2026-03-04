import { ClipboardList, Rocket, Settings, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Ingyenes elemzés",
    description: "Töltse ki az űrlapot, és elemezzük jelenlegi helyzetét.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Indulás",
    description:
      "Részletes útmutatót küldünk, hogyan adhat biztonságos hozzáférést a profiljához.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Kivitelezés",
    description:
      "Végigmegyünk a teljes optimalizálási folyamaton, hogy megtöltsük a naptárát.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Mi működik?",
    description:
      "Mérjük az adatokat, és arra fókuszálunk, ami valóban ügyfelet hoz.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="hogyan" className="bg-primary py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-primary-foreground md:text-4xl text-balance">
            Hogyan működik?
          </h2>
          <p className="mt-4 text-primary-foreground/60">
            Egyszerűbb, mint gondolná.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8"
            >
              <span className="font-serif text-5xl font-bold text-accent">
                {step.number}
              </span>
              <div className="mt-4 mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
