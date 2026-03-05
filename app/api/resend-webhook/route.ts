import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const FORWARD_TO = "tamas@ttamasmarketing.com"
const VERIFIED_SENDER = "Tamas Marketing <noreply@ttamasmarketing.com>"

function extractField(text: string, field: string): string | null {
  const regex = new RegExp(`${field}:\\s*(.+)`, "i")
  const match = text.match(regex)
  return match ? match[1].trim() : null
}

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    if (payload.type !== "email.received") {
      return NextResponse.json({ message: "Event type ignored" }, { status: 200 })
    }

    const data = payload.data
    if (!data) {
      return NextResponse.json({ error: "No data in payload" }, { status: 400 })
    }

    const senderEmail = data.from || "ismeretlen"
    const subject = data.subject || "Nincs tárgy"
    const textBody = data.text || ""
    const htmlBody = data.html || ""

    // Try to extract structured fields from the text body
    const extractedName = extractField(textBody, "Név") || senderEmail
    const extractedCompany = extractField(textBody, "Cég")
    const extractedPhone = extractField(textBody, "Telefon")
    const extractedCity = extractField(textBody, "Város")
    const extractedEmail = extractField(textBody, "Email") || senderEmail
    const extractedService = extractField(textBody, "Szolgáltatás")
    const extractedBusiness = extractField(textBody, "Tevékenység")

    // Build attachment list if any
    const attachments = data.attachments || []
    const attachmentList = attachments.length > 0
      ? attachments.map((a: { filename?: string; content_type?: string }) =>
          `${a.filename || "ismeretlen fájl"} (${a.content_type || "?"})`
        ).join(", ")
      : null

    const timestamp = new Date().toLocaleString("hu-HU", {
      timeZone: "Europe/Budapest",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const forwardHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #22c55e; padding-bottom: 12px;">
          Új beérkezett üzenet
        </h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555; width: 140px;">Feladó:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${senderEmail}</td></tr>
          <tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Tárgy:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${subject}</td></tr>
          ${extractedName !== senderEmail ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Név:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${extractedName}</td></tr>` : ""}
          ${extractedCompany ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Cég:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${extractedCompany}</td></tr>` : ""}
          ${extractedBusiness ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Tevékenység:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${extractedBusiness}</td></tr>` : ""}
          ${extractedCity ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Város:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${extractedCity}</td></tr>` : ""}
          ${extractedPhone ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Telefon:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${extractedPhone}</td></tr>` : ""}
          ${extractedEmail !== senderEmail ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Email:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${extractedEmail}">${extractedEmail}</a></td></tr>` : ""}
          ${extractedService ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Szolgáltatás:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${extractedService}</td></tr>` : ""}
          ${attachmentList ? `<tr><td style="padding: 10px 12px; font-weight: bold; border-bottom: 1px solid #eee; color: #555;">Csatolmányok:</td><td style="padding: 10px 12px; border-bottom: 1px solid #eee;">${attachmentList}</td></tr>` : ""}
        </table>

        <div style="margin-top: 20px; padding: 16px; background: #f8f8f8; border-radius: 8px;">
          <h3 style="margin: 0 0 8px; font-size: 14px; color: #555;">Eredeti üzenet:</h3>
          <div style="white-space: pre-wrap; font-size: 14px; color: #333;">${htmlBody || textBody || "Nincs tartalom"}</div>
        </div>

        <p style="margin-top: 20px; font-size: 12px; color: #999;">Továbbítva: ${timestamp}</p>
      </div>
    `

    const forwardText = [
      `Új beérkezett üzenet`,
      ``,
      `Feladó: ${senderEmail}`,
      `Tárgy: ${subject}`,
      extractedName !== senderEmail ? `Név: ${extractedName}` : null,
      extractedCompany ? `Cég: ${extractedCompany}` : null,
      extractedPhone ? `Telefon: ${extractedPhone}` : null,
      extractedEmail !== senderEmail ? `Email: ${extractedEmail}` : null,
      attachmentList ? `Csatolmányok: ${attachmentList}` : null,
      ``,
      `--- Eredeti üzenet ---`,
      textBody || "Nincs tartalom",
      ``,
      `Továbbítva: ${timestamp}`,
    ]
      .filter(Boolean)
      .join("\n")

    const { error } = await resend.emails.send({
      from: VERIFIED_SENDER,
      to: [FORWARD_TO],
      replyTo: extractedEmail || senderEmail,
      subject: `Új űrlap beküldés: ${extractedName}`,
      html: forwardHtml,
      text: forwardText,
    })

    if (error) {
      console.error("Webhook forward hiba:", error)
      return NextResponse.json({ error: "Failed to forward email" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Webhook hiba:", err)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
