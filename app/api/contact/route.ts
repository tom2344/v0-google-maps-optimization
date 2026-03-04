import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, company, city, phone, email, service, business, type } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Nev es email megadasa kotelezo." },
        { status: 400 }
      )
    }

    // Build the email subject and body based on form type
    const isWeboldal = type === "weboldal"
    const subject = isWeboldal
      ? `Uj weboldal ajanlatkeres: ${company || name}`
      : `Uj Google Terkep elemzes keres: ${company || name}`

    const emailBody = [
      `Nev: ${name}`,
      company ? `Ceg: ${company}` : null,
      business ? `Tevekenyseg: ${business}` : null,
      city ? `Varos: ${city}` : null,
      `Telefon: ${phone || "N/A"}`,
      `Email: ${email}`,
      service ? `Szolgaltatas: ${service}` : null,
      `Tipus: ${isWeboldal ? "Weboldal keszites" : "Google Terkep optimalizalas"}`,
    ]
      .filter(Boolean)
      .join("\n")

    // Log the submission (in production, you'd send an email)
    console.log("--- UJ URLAP BEKULDES ---")
    console.log(`Targy: ${subject}`)
    console.log(emailBody)
    console.log(`Cel email: tamas@ttamasmarketing.com`)
    console.log("--- VEGE ---")

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Hiba tortent a bekuldes soran." },
      { status: 500 }
    )
  }
}
