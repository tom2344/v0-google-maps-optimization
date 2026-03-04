import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WeboldalForm } from "@/components/weboldal-form"
import { Globe, Smartphone, Zap, RefreshCw, Shield, HeadphonesIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Weboldal Keszites | TTamas Marketing",
  description:
    "Professzionalis weboldal keszites vallalkozasoknak. Modern, gyors, telefonon is jol mukodik.",
}

const webFeatures = [
  {
    icon: Globe,
    title: "Egyedi megjelenes",
    description: "Letisztult, atlathato weboldal, ami erthetoen bemutatja a vallalkozasat es megkonnyiti a kapcsolatfelvetelt.",
  },
  {
    icon: Smartphone,
    title: "Telefonon es szamitogepen is jol mukodik",
    description: "Reszponziv design, ami minden eszkozrol tokeletesen nez ki.",
  },
  {
    icon: Zap,
    title: "Gyors betoltes",
    description: "Optimalizalt teljesitmeny, hogy latogatoi ne varjanak es ne menjenek el.",
  },
]

const supportFeatures = [
  {
    icon: RefreshCw,
    title: "Frissitesek",
    description: "Rendszeres tartalmi es technikai frissitesek.",
  },
  {
    icon: Shield,
    title: "Biztonsag",
    description: "Biztonsagi mentesek es vedelem.",
  },
  {
    icon: HeadphonesIcon,
    title: "Gyors segitseg",
    description: "Ha gond van, gyorsan megoldjuk.",
  },
]

export default function WeboldalPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,oklch(0.55_0.19_145_/_0.06),transparent_70%)]" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Weboldal keszites
            </span>
          </div>

          <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl text-balance">
            Professzionalis Weboldal Keszites{" "}
            <span className="text-accent">Vallalkozasoknak</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Ha az emberek Onre keresnek, de nem talalnak ignyes weboldalt, nagy esellyel a versenytarsat hivjak fel.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Egy jol felepitett weboldal bizalmat ad es tobb megkereset hoz. Mi ilyen weboldalakat keszitunk. Modern. Gyors. Telefonon is jol mukodik.
          </p>

          <a
            href="#weboldal-urlap"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Ajanlatot kerek
          </a>
        </div>
      </section>

      {/* Web Features */}
      <section className="bg-card py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
              Mit kap tolunk?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Weboldal keszites
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {webFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
              Folyamatos segitseg
            </h2>
            <p className="mt-4 text-muted-foreground">
              A weboldalnak mindig mukodnie kell.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {supportFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No risk */}
      <section className="bg-primary py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl tracking-tight text-primary-foreground md:text-4xl text-balance">
            Nincs kockazat
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
            Csak akkor kell fizetnie, ha elegedett a weboldallal es mindent atadtunk Onnek.
          </p>
          <a
            href="#weboldal-urlap"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
          >
            Ajanlatot kerek
          </a>
        </div>
      </section>

      <WeboldalForm />
      <Footer />
    </main>
  )
}
