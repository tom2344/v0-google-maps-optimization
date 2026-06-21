import Link from "next/link"
import { ROUTES } from "@/lib/seo"

export function HomeCtaSection() {
  return (
    <section className="bg-primary py-24 px-6" aria-labelledby="home-cta-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="home-cta-heading"
          className="font-serif text-3xl tracking-tight text-primary-foreground md:text-4xl text-balance"
        >
          Készítsünk weboldalt, amely ügyfeleket hoz
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
          Ingyenes konzultáció és ajánlat — nincs kockázat. Csak akkor fizet, ha elégedett az eredménnyel.
        </p>
        <Link
          href={`${ROUTES.weboldal}#weboldal-urlap`}
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
        >
          Ajánlatot kérek
        </Link>
        <p className="mt-6 text-sm text-primary-foreground/60">
          Helyi láthatóságra is szüksége van?{" "}
          <Link
            href={ROUTES.googleTerkep}
            className="font-semibold text-primary-foreground underline-offset-4 hover:underline"
          >
            Google Térkép optimalizálás
          </Link>
        </p>
      </div>
    </section>
  )
}
