import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WeboldalForm } from "@/components/weboldal-form"
import { JsonLd } from "@/components/json-ld"
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  ROUTES,
  weboldalServiceSchema,
  webPageSchema,
} from "@/lib/seo"
import { Globe, Smartphone, Zap, RefreshCw, Shield, HeadphonesIcon } from "lucide-react"

const title = "Weboldal készítés – Professzionális céges weboldal Magyarországon"
const description =
  "Céges weboldal készítés vállalkozásoknak. Modern, gyors, SEO-barát weboldal — csak akkor fizet, ha elégedett. Kérjen ingyenes ajánlatot!"

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl(ROUTES.weboldal),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(ROUTES.weboldal),
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Weboldal készítés – Tamas Marketing" }],
  },
  twitter: {
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
}

const webFeatures = [
  {
    icon: Globe,
    title: "Egyedi, professzionális megjelenés",
    description:
      "Letisztult céges weboldal, amely érthetően bemutatja szolgáltatásait és megkönnyíti a kapcsolatfelvételt.",
  },
  {
    icon: Smartphone,
    title: "Mobilbarát weboldal készítés",
    description:
      "Reszponzív design minden eszközre — telefonról és számítógépről is tökéletesen működik.",
  },
  {
    icon: Zap,
    title: "Gyors betöltés és SEO alapok",
    description:
      "Optimalizált teljesítmény, hogy látogatói ne menjenek el, és a Google is jobban indexelje az oldalt.",
  },
]

const supportFeatures = [
  {
    icon: RefreshCw,
    title: "Frissítések",
    description: "Rendszeres tartalmi és technikai frissítések a weboldal zavartalan működéséhez.",
  },
  {
    icon: Shield,
    title: "Biztonság",
    description: "Biztonsági mentések és védelem — weboldala mindig elérhető marad.",
  },
  {
    icon: HeadphonesIcon,
    title: "Gyors segítség",
    description: "Ha gond van, gyorsan megoldjuk. Nem hagyjuk egyedül a vállalkozását.",
  },
]

export default function WeboldalKeszitesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: title, description, path: ROUTES.weboldal }),
          weboldalServiceSchema(),
        ]}
      />
      <main>
        <Navbar />

        <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,oklch(0.55_0.19_145_/_0.06),transparent_70%)]" />

          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Céges weboldal készítés
              </span>
            </p>

            <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl text-balance">
              Professzionális weboldal készítés{" "}
              <span className="text-accent">vállalkozásoknak</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Ha az emberek Önre keresnek, de nem találnak igényes weboldalt, nagy eséllyel a versenytársát hívják fel.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Egy jól felépített céges weboldal bizalmat ad és több megkeresést hoz. Modern. Gyors. Telefonon is jól működik.
            </p>

            <a
              href="#weboldal-urlap"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Ingyenes ajánlatot kérek
            </a>
          </div>
        </section>

        <section className="bg-card py-24 px-6" aria-labelledby="web-features-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2
                id="web-features-heading"
                className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance"
              >
                Mit kap a weboldal készítés során?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Minden, amire egy sikeres céges weboldalnak szüksége van.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {webFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6" aria-labelledby="web-support-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2
                id="web-support-heading"
                className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance"
              >
                Folyamatos támogatás a weboldalhoz
              </h2>
              <p className="mt-4 text-muted-foreground">
                A weboldalnak mindig működnie kell — mi gondoskodunk róla.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {supportFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30 py-12 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted-foreground">
              Emellett segítünk a helyi láthatóságban is.{" "}
              <Link
                href="/google-terkep-optimalizalas"
                className="font-semibold text-accent underline-offset-4 hover:underline"
              >
                Google Térkép optimalizálás
              </Link>{" "}
              szolgáltatásunkkal a Google Cégprofilját is a Top 5-be juttathatjuk.
            </p>
          </div>
        </section>

        <section className="bg-primary py-24 px-6" aria-labelledby="web-risk-heading">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="web-risk-heading"
              className="font-serif text-3xl tracking-tight text-primary-foreground md:text-4xl text-balance"
            >
              Nincs kockázat — csak akkor fizet, ha elégedett
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
    </>
  )
}
