import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

const SERVICE_LABELS: Record<string, string> = {
  "CV Rewrite": "CV Rewrite",
  "LinkedIn Optimization": "LinkedIn Optimization",
  "Career Strategy Session": "Career Strategy Session",
  "Full Coaching Package": "Full Coaching Package",
};

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let body: { name: string; email: string; answers: Record<string, string>; result: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, answers, result } = body;

  if (!name || !email || !answers || !result) {
    return NextResponse.json({ error: "Missing fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const answerLabels: Record<string, string> = {
    time: "How long searching",
    challenge: "Biggest challenge",
    situation: "Current situation",
    market: "Target market",
    need: "What would help most",
  };

  const answerRows = Object.entries(answers)
    .map(([k, v]) => `<tr><td style="padding:5px 0;color:#666;width:200px;">${answerLabels[k] ?? k}</td><td style="padding:5px 0;font-weight:500;">${v}</td></tr>`)
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;color:#111;">
      <h2 style="color:#C9A84C;border-bottom:1px solid #eee;padding-bottom:8px;">
        New quiz lead: ${name}
      </h2>
      <table style="width:100%;border-collapse:collapse;margin-top:12px;">
        <tr><td style="padding:5px 0;color:#666;width:200px;">Name</td><td style="padding:5px 0;font-weight:600;">${name}</td></tr>
        <tr style="background:#f9f9f9"><td style="padding:5px 4px;color:#666;">Email</td><td style="padding:5px 4px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:5px 0;color:#666;">Recommended service</td><td style="padding:5px 0;font-weight:600;color:#C9A84C;">${result}</td></tr>
      </table>
      <h3 style="margin-top:20px;font-size:14px;color:#444;">Quiz answers</h3>
      <table style="width:100%;border-collapse:collapse;">
        ${answerRows}
      </table>
      <p style="margin-top:24px;font-size:12px;color:#999;">
        Received via the quiz at landineuropecoaching.com/quiz
      </p>
    </div>
  `;

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
      from: `"Land in Europe · Quiz" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: email,
      subject: `Quiz lead: ${name} → ${result}`,
      html,
    });
  } catch (err) {
    console.error("Quiz email error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
