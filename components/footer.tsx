import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight font-serif">
                TTamas
              </span>
              <span className="text-xl font-light opacity-70">Marketing</span>
            </Link>
            <p className="mt-2 text-sm opacity-60">
              info@ttamasmarketing.com
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm opacity-70 transition-opacity hover:opacity-100"
            >
              Google Terkep
            </Link>
            <Link
              href="/weboldal"
              className="text-sm opacity-70 transition-opacity hover:opacity-100"
            >
              Weboldal Keszites
            </Link>
            <a
              href="https://x.com/TTokoli63778"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 transition-opacity hover:opacity-100"
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
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-xs opacity-50">
          {'© 2026 TTamas Marketing. Minden jog fenntartva.'}
        </div>
      </div>
    </footer>
  )
}
