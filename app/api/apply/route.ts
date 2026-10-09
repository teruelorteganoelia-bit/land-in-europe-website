import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

const ROLES: Record<string, string> = {
  "hunter-b2b": "Hunter B2B — Servicios y Soluciones IT",
  "hunter-startups": "Hunter Startups — Servicios y Soluciones Tecnológicas",
};

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Demasiados intentos. Espera unos minutos." }, { status: 429 });
  }

  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return NextResponse.json({ error: "Error al procesar el formulario." }, { status: 400 });
  }

  // Honeypot check
  const honeypot = data.get("website") as string;
  if (honeypot) {
    return NextResponse.json({ ok: true }); // Silent reject
  }

  // Extract fields
  const role        = (data.get("role") as string)?.trim();
  const name        = (data.get("name") as string)?.trim();
  const email       = (data.get("email") as string)?.trim();
  const phone       = (data.get("phone") as string)?.trim();
  const city        = (data.get("city") as string)?.trim();
  const linkedin    = (data.get("linkedin") as string)?.trim();
  const english     = (data.get("english") as string)?.trim();
  const notice      = (data.get("notice") as string)?.trim();
  const salary      = (data.get("salary") as string)?.trim();
  const workauth    = (data.get("workauth") as string)?.trim();
  const message     = (data.get("message") as string)?.trim();
  const consent     = data.get("consent");
  const cvFile      = data.get("cv") as File | null;

  // Validation
  if (!role || !ROLES[role]) return NextResponse.json({ error: "Puesto no válido." }, { status: 400 });
  if (!name || !email || !linkedin || !workauth) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email no válido." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Debes aceptar la política de privacidad." }, { status: 400 });
  }
  if (!cvFile || cvFile.size === 0) {
    return NextResponse.json({ error: "El CV es obligatorio." }, { status: 400 });
  }
  if (cvFile.size > 4 * 1024 * 1024) {
    return NextResponse.json({ error: "El CV no puede superar los 4 MB." }, { status: 400 });
  }
  const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (!allowedTypes.includes(cvFile.type)) {
    return NextResponse.json({ error: "Formato de CV no válido. Solo PDF o DOCX." }, { status: 400 });
  }

  // Read CV as buffer
  const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

  // Build email
  const roleName = ROLES[role];
  const workauthLabel = workauth === "yes" ? "Sí" : "No";

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #111;">
      <h2 style="color: #C9A84C; border-bottom: 1px solid #eee; padding-bottom: 8px;">
        Nueva candidatura: ${roleName}
      </h2>
      <table style="width:100%; border-collapse:collapse; margin-top:16px;">
        <tr><td style="padding:6px 0; color:#666; width:180px;">Nombre</td><td style="padding:6px 0; font-weight:600;">${name}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:6px 4px; color:#666;">Email</td><td style="padding:6px 4px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:6px 0; color:#666;">Teléfono</td><td style="padding:6px 0;">${phone}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:6px 4px; color:#666;">Ciudad</td><td style="padding:6px 4px;">${city}</td></tr>
        <tr><td style="padding:6px 0; color:#666;">LinkedIn</td><td style="padding:6px 0;"><a href="${linkedin}">${linkedin}</a></td></tr>
        <tr style="background:#f9f9f9"><td style="padding:6px 4px; color:#666;">Nivel de inglés</td><td style="padding:6px 4px;">${english}</td></tr>
        <tr><td style="padding:6px 0; color:#666;">Preaviso</td><td style="padding:6px 0;">${notice}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:6px 4px; color:#666;">Horquilla salarial</td><td style="padding:6px 4px;">${salary}</td></tr>
        <tr><td style="padding:6px 0; color:#666;">Autorización de trabajo en España</td><td style="padding:6px 0;">${workauthLabel}</td></tr>
        ${message ? `<tr style="background:#f9f9f9"><td style="padding:6px 4px; color:#666; vertical-align:top;">Mensaje</td><td style="padding:6px 4px;">${message.replace(/\n/g, "<br>")}</td></tr>` : ""}
      </table>
      <p style="margin-top:24px; font-size:12px; color:#999;">
        Candidatura recibida a través de landineuropecoaching.com. El CV se adjunta a este correo.
      </p>
    </div>
  `;

  // Send via Zoho SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Land in Europe · Candidaturas" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: email,
      subject: `Candidatura: ${roleName} — ${name}`,
      html,
      attachments: [
        {
          filename: cvFile.name,
          content: cvBuffer,
          contentType: cvFile.type,
        },
      ],
    });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Error al enviar la candidatura. Por favor, inténtalo de nuevo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
