import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimit = new Map<string, { count: number; reset: number }>();

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (entry && entry.reset > now) {
    if (entry.count >= 3) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, reset: now + 10 * 60 * 1000 });
  }

  const { name, company, role, market, message } = await req.json();
  if (!name || !company || !role) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: { user: process.env.ZOHO_USER, pass: process.env.ZOHO_PASS },
  });

  const notificationHtml = `
<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0A0B0D;color:#fff;">
  <p style="color:#C9A84C;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 24px;">New Hiring Inquiry</p>
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:10px 0;color:#888;font-size:13px;width:120px;">Name</td><td style="padding:10px 0;color:#fff;font-size:13px;">${name}</td></tr>
    <tr><td style="padding:10px 0;color:#888;font-size:13px;">Company</td><td style="padding:10px 0;color:#fff;font-size:13px;">${company}</td></tr>
    <tr><td style="padding:10px 0;color:#888;font-size:13px;">Role to fill</td><td style="padding:10px 0;color:#C9A84C;font-size:13px;font-weight:600;">${role}</td></tr>
    <tr><td style="padding:10px 0;color:#888;font-size:13px;">Market</td><td style="padding:10px 0;color:#fff;font-size:13px;">${market || "Not specified"}</td></tr>
  </table>
  ${message ? `<div style="margin-top:20px;padding:16px;background:#1a1b1e;border-left:3px solid #C9A84C;"><p style="color:#ccc;font-size:13px;line-height:1.6;margin:0;">${message}</p></div>` : ""}
</div>`;

  await transporter.sendMail({
    from: `"Land in Europe" <${process.env.ZOHO_USER}>`,
    to: process.env.ZOHO_USER,
    subject: `Hiring inquiry: ${role} — ${company}`,
    html: notificationHtml,
    replyTo: undefined,
  });

  return NextResponse.json({ ok: true });
}
