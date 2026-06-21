"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ROUTES } from "@/lib/seo"

const navLinks = [
  { href: ROUTES.weboldal, label: "Weboldal készítés", primary: true },
  { href: ROUTES.googleTerkep, label: "Google Térkép optimalizálás", primary: false },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Fő navigáció"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground font-serif">
            Tamas
          </span>
          <span className="text-xl font-light text-muted-foreground">Marketing</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === link.href
                  ? "font-semibold text-foreground"
                  : link.primary
                    ? "font-semibold text-muted-foreground"
                    : "font-medium text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`${ROUTES.weboldal}#weboldal-urlap`}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Ajánlatot kérek
          </Link>
          <a
            href="https://x.com/TTokoli63778"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="X profil"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  pathname === link.href
                    ? "font-semibold text-foreground"
                    : link.primary
                      ? "font-semibold text-muted-foreground"
                      : "font-medium text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`${ROUTES.weboldal}#weboldal-urlap`}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-accent"
            >
              Ajánlatot kérek
            </Link>
            <a
              href="https://x.com/TTokoli63778"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground"
            >
              X Profil
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
