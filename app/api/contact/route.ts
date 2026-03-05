import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = "tamas@ttamasmarketing.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, company, city, phone, email, service, business, type } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Név és email megadása kötelező." },
        { status: 400 }
      )
    }

    // Build the email subject and body based on form type
    const isWeboldal = type === "weboldal"
    const subject = isWeboldal
      ? `Új weboldal ajánlatkérés: ${company || name}`
      : `Új Google Térkép elemzés kérés: ${company || name}`

    const htmlBody = `
      <h2>${isWeboldal ? "Weboldal készítés ajánlatkérés" : "Google Térkép optimalizálás – ingyenes elemzés kérés"}</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Név:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
        ${company ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Cég:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td></tr>` : ""}
        ${business ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Tevékenység:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${business}</td></tr>` : ""}
        ${city ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Város:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${city}</td></tr>` : ""}
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Telefon:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || "Nem adta meg"}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
        ${service ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Szolgáltatás:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${service}</td></tr>` : ""}
      </table>
    `

    const { error } = await resend.emails.send({
      from: "Tamas Marketing <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html: htmlBody,
    })

    if (error) {
      console.error("Resend hiba:", error)
      return NextResponse.json(
        { error: "Hiba történt az email küldése során." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("API hiba:", err)
    return NextResponse.json(
      { error: "Hiba történt a beküldés során." },
      { status: 500 }
    )
  }
}
