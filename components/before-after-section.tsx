"use client"

import { useState } from "react"
import Image from "next/image"

const beforeStats = [
  { label: "Átlagos helyezés", value: "18" },
  { label: "Piaci részesedés", value: "5%" },
  { label: "Havi kattintások", value: "30" },
  { label: "Havi ügyfelek", value: "5-8" },
]

const afterStats = [
  { label: "Átlagos helyezés", value: "2" },
  { label: "Piaci részesedés", value: "60%+" },
  { label: "Havi kattintások", value: "120+" },
  { label: "Havi ügyfelek", value: "15+" },
]

export function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before")

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            Az Ön cége - Példa utca 12, 6720 Szeged
          </h2>
        </div>

        {/* Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-border bg-muted p-1">
            <button
              onClick={() => setActiveTab("before")}
              className={`rounded-full px-8 py-3 text-sm font-semibold transition-all ${
                activeTab === "before"
                  ? "bg-destructive text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Előtte
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`rounded-full px-8 py-3 text-sm font-semibold transition-all ${
                activeTab === "after"
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Utána
            </button>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
            {activeTab === "before" ? (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OKqaW3n1GqRBTY0NUG8eddWRGBBo8G.png"
                alt="Google Térkép helyezések optimalizálás előtt - piros jelölőkkel, többségük 20-as helyezést mutat"
                width={760}
                height={760}
                className="w-full"
              />
            ) : (
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tD9FKxs3qTT8vPn2yHqlGSO4unxP1D.png"
                alt="Google Térkép helyezések optimalizálás után - zöld jelölőkkel, többségük 1-es helyezést mutat"
                width={940}
                height={860}
                className="w-full"
              />
            )}
          </div>

          {/* Stats */}
          <div>
            <div
              className={`mb-8 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${
                activeTab === "before"
                  ? "bg-destructive/10 text-destructive"
                  : "bg-accent/10 text-accent"
              }`}
            >
              {activeTab === "before" ? "Optimalizálás előtt" : "Optimalizálás után"}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {(activeTab === "before" ? beforeStats : afterStats).map(
                (stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p
                      className={`mt-1 font-serif text-3xl font-bold ${
                        activeTab === "before"
                          ? "text-destructive"
                          : "text-accent"
                      }`}
                    >
                      {stat.value}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
