"use client"

import { useState, type FormEvent } from "react"
import { Send, Loader2 } from "lucide-react"

export function WeboldalForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "weboldal" }),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // silently fail
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="weboldal-urlap" className="bg-card py-24 px-6">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Send className="h-7 w-7" />
          </div>
          <h3 className="mt-6 font-serif text-2xl text-foreground">
            Köszönjük!
          </h3>
          <p className="mt-2 text-muted-foreground">
            Hamarosan felvesszük Önnel a kapcsolatot.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="weboldal-urlap" className="bg-card py-24 px-6">
      <div className="mx-auto max-w-xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            Ajánlatot kérek
          </h2>
          <p className="mt-4 text-muted-foreground">
            Töltse ki az alábbi űrlapot, és felvesszük Önnel a kapcsolatot.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="web-name"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Név
              </label>
              <input
                id="web-name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label
                htmlFor="web-company"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Cég neve
              </label>
              <input
                id="web-company"
                name="company"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="web-business"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Mivel foglalkozik?
            </label>
            <input
              id="web-business"
              name="business"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="web-city"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Város
              </label>
              <input
                id="web-city"
                name="city"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <div>
              <label
                htmlFor="web-phone"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Telefonszám
              </label>
              <input
                id="web-phone"
                name="phone"
                type="tel"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="web-email"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Email
            </label>
            <input
              id="web-email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 disabled:opacity-50"
          >
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            Beküldés
          </button>
        </form>
      </div>
    </section>
  )
}
