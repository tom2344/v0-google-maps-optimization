import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WeboldalForm } from "@/components/weboldal-form"
import { Globe, Smartphone, Zap, RefreshCw, Shield, HeadphonesIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Weboldal Készítés | Tamas Marketing",
  description:
    "Professzionális weboldal készítés vállalkozásoknak. Modern, gyors, telefonon is jól működik.",
}

const webFeatures = [
  {
    icon: Globe,
    title: "Egyedi megjelenés",
    description: "Letisztult, átlátható weboldal, ami érthetően bemutatja a vállalkozását és megkönnyíti a kapcsolatfelvételt.",
  },
  {
    icon: Smartphone,
    title: "Telefonon és számítógépen is jól működik",
    description: "Reszponzív design, ami minden eszközről tökéletesen néz ki.",
  },
  {
    icon: Zap,
    title: "Gyors betöltés",
    description: "Optimalizált teljesítmény, hogy látogatói ne várjanak és ne menjenek el.",
  },
]

const supportFeatures = [
  {
    icon: RefreshCw,
    title: "Frissítések",
    description: "Rendszeres tartalmi és technikai frissítések.",
  },
  {
    icon: Shield,
    title: "Biztonság",
    description: "Biztonsági mentések és védelem.",
  },
  {
    icon: HeadphonesIcon,
    title: "Gyors segítség",
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
              Weboldal készítés
            </span>
          </div>

          <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl text-balance">
            Professzionális Weboldal Készítés{" "}
            <span className="text-accent">Vállalkozásoknak</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Ha az emberek Önre keresnek, de nem találnak igényes weboldalt, nagy eséllyel a versenytársát hívják fel.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Egy jól felépített weboldal bizalmat ad és több megkeresést hoz. Mi ilyen weboldalakat készítünk. Modern. Gyors. Telefonon is jól működik.
          </p>

          <a
            href="#weboldal-urlap"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Ajánlatot kérek
          </a>
        </div>
      </section>

      {/* Web Features */}
      <section className="bg-card py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
              Mit kap tőlünk?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Weboldal készítés
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
              Folyamatos segítség
            </h2>
            <p className="mt-4 text-muted-foreground">
              A weboldalnak mindig működnie kell.
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
            Nincs kockázat
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
            Csak akkor kell fizetnie, ha elégedett a weboldallal és mindent átadtunk Önnek.
          </p>
          <a
            href="#weboldal-urlap"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
          >
            Ajánlatot kérek
          </a>
        </div>
      </section>

      <WeboldalForm />
      <Footer />
    </main>
  )
}
