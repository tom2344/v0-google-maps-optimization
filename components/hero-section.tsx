import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,oklch(0.55_0.19_145_/_0.06),transparent_70%)]" />

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Garantált eredmény
          </span>
        </div>

        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Top 5 helyezés a Google térképen{" "}
          <span className="text-accent">90 napon belül</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          A keresések 75%-a a Google Térkép első 5 találatára érkezik. Ha Ön nincs ott, gyakorlatilag láthatatlan.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#urlap"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Kezdjünk bele
          </a>
          <a
            href="#hogyan"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            Hogyan működik?
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  )
}
