import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin", "latin-ext"], variable: "--font-dm-serif" });

export const metadata: Metadata = {
  title: 'Tamas Marketing | Google Térkép Optimalizálás',
  description: 'Top 5 helyezés a Google térképen 90 napon belül - Garantálva. Professzionális weboldal készítés vállalkozásoknak.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
