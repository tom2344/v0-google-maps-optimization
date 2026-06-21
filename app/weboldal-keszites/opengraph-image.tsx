import { ImageResponse } from "next/og"
import { SITE_NAME } from "@/lib/seo"

export const alt = "Weboldal készítés – Professzionális céges weboldal Magyarországon"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function WeboldalOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #052e16 0%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#86efac",
            marginBottom: 24,
          }}
        >
          Céges weboldal készítés
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Professzionális weboldal vállalkozásoknak
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            lineHeight: 1.4,
            color: "#cbd5e1",
            maxWidth: 820,
          }}
        >
          Modern, gyors, mobilbarát — csak akkor fizet, ha elégedett
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 28,
            fontWeight: 600,
            color: "#86efac",
          }}
        >
          {SITE_NAME}
        </div>
      </div>
    ),
    { ...size }
  )
}
