import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Send directly to your inbox — no webhook middleman needed
const RECIPIENT = "tamas@ttamasmarketing.com"

// Use onboarding@resend.dev if you haven't verified your own domain yet on Resend.
// Once ttamasmarketing.com is verified, switch to: "Tamas Marketing <noreply@ttamasmarketing.com>"
const SENDER = "Tamas Marketing <onboarding@resend.dev>"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, company, city, phone, email, service, business, type } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: "Név és email megadása kötelező." },
        { status: 400 }
      )
    }

    const isWeboldal = type === "weboldal"
    const subject = isWeboldal
      ? `Új weboldal ajánlatkérés - ${company || name}`
      : `Új Google Térkép elemzés kérés - ${company || name}`

    const timestamp = new Date().toLocaleString("hu-HU", {
      timeZone: "Europe/Budapest",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #22c55e; padding-bottom: 12px;">
          ${isWeboldal ? "Weboldal készítés ajánlatkérés" : "Google Térkép optimalizálás – ingyenes elemzés kérés"}
        </h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555; width: 140px;">Név:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${name}</td></tr>
          ${company ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Cég:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${company}</td></tr>` : ""}
          ${business ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Tevékenység:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${business}</td></tr>` : ""}
          ${city ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Város:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${city}</td></tr>` : ""}
          <tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Telefon:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${phone || "Nem adta meg"}</td></tr>
          <tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Email:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          ${service ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Szolgáltatás:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${service}</td></tr>` : ""}
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">Beküldve: ${timestamp}</p>
      </div>
    `

    const textBody = [
      `${isWeboldal ? "Weboldal ajánlatkérés" : "Google Térkép elemzés kérés"}`,
      ``,
      `Név: ${name}`,
      company ? `Cég: ${company}` : null,
      business ? `Tevékenység: ${business}` : null,
      city ? `Város: ${city}` : null,
      `Telefon: ${phone || "Nem adta meg"}`,
      `Email: ${email}`,
      service ? `Szolgáltatás: ${service}` : null,
      ``,
      `Beküldve: ${timestamp}`,
    ]
      .filter(Boolean)
      .join("\n")

    console.log("[v0] Sending email to:", RECIPIENT, "from:", SENDER, "subject:", subject)

    const { data, error } = await resend.emails.send({
      from: SENDER,
      to: [RECIPIENT],
      replyTo: email,
      subject,
      html: htmlBody,
      text: textBody,
    })

    if (error) {
      console.error("[v0] Resend error:", JSON.stringify(error))
      return NextResponse.json(
        { error: "Hiba történt az email küldése során." },
        { status: 500 }
      )
    }

    console.log("[v0] Email sent successfully, id:", data?.id)
    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("[v0] API error:", err)
    return NextResponse.json(
      { error: "Hiba történt a beküldés során." },
      { status: 500 }
    )
  }
}
