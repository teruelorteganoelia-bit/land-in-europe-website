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

const answerLabels: Record<string, string> = {
  time: "How long searching",
  challenge: "Biggest challenge",
  situation: "Current situation",
  market: "Target market",
  need: "What would help most",
};

// Per-result welcome email content
const RESULT_CONTENT: Record<string, { subject: string; intro: string; tip: string; cta: string; ctaUrl: string }> = {
  "CV Rewrite": {
    subject: "Your European job search: what the quiz found",
    intro: "Based on your answers, the main thing holding back your search is your CV. Not your experience. Not the market. The document itself is not landing the way it should in Europe.",
    tip: "European recruiters read CVs fast. The first ten seconds determine whether your application moves forward. A CV built for a different market, without a clear professional summary and achievements with specific numbers, gets filtered out before anyone reads your background properly.",
    cta: "See how a CV rewrite works",
    ctaUrl: "https://landineuropecoaching.com/services",
  },
  "LinkedIn Optimization": {
    subject: "Your European job search: what the quiz found",
    intro: "Based on your answers, the main thing holding back your search is your LinkedIn. European recruiters are searching for people like you every day. The problem is that your profile is not showing up in those searches.",
    tip: "LinkedIn Recruiter works on keyword filters. Your headline, your About section, and your location all determine whether you appear when a recruiter in Amsterdam or Stockholm searches for your profile. If those are not optimized for the European market, you are invisible, regardless of how strong your background is.",
    cta: "See how LinkedIn optimization works",
    ctaUrl: "https://landineuropecoaching.com/services",
  },
  "Career Strategy Session": {
    subject: "Your European job search: what the quiz found",
    intro: "Based on your answers, what you need most right now is clarity on your strategy. You are applying but the results are not matching the effort. That gap is almost always about targeting: the wrong roles, the wrong approach, or a positioning that does not connect with what European employers are looking for.",
    tip: "A job search without a clear strategy is exhausting and slow. One session to work out exactly what you are targeting, how to position your background, and what to do in the next two weeks can save months of misdirected effort.",
    cta: "Book a career strategy session",
    ctaUrl: "https://landineuropecoaching.com/services",
  },
  "Full Coaching Package": {
    subject: "Your European job search: what the quiz found",
    intro: "Based on your answers, you are dealing with more than one thing at once: the documents need work, the strategy needs sharpening, and you want someone in your corner while you navigate the European market. That is exactly what the full package is for.",
    tip: "The international professionals who move fastest are the ones who get their positioning right, their documents rebuilt for the European market, and a clear strategy, all at the same time. Not one thing at a time over six months.",
    cta: "See what the full package includes",
    ctaUrl: "https://landineuropecoaching.com/services",
  },
};

function buildLeadEmail(name: string, result: string, market: string): string {
  const firstName = name.split(" ")[0];
  const content = RESULT_CONTENT[result] ?? RESULT_CONTENT["Career Strategy Session"];

  const marketNote = market
    ? `<p style="margin:0 0 16px;">You mentioned you are targeting <strong>${market}</strong>. That market has its own specific expectations and I work with professionals navigating it every week.</p>`
    : "";

  return `
    <div style="font-family:Georgia,'Times New Roman',serif;max-width:580px;color:#111;line-height:1.7;">
      <p style="margin:0 0 20px;font-size:15px;">Hi ${firstName},</p>
      <p style="margin:0 0 16px;font-size:15px;">${content.intro}</p>
      ${marketNote}
      <div style="background:#faf8f4;border-left:3px solid #C9A84C;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
        <p style="margin:0;font-size:14px;color:#444;font-style:italic;">${content.tip}</p>
      </div>
      <p style="margin:0 0 16px;font-size:15px;">If you want to fix this properly, I can take a look at your documents and tell you exactly what needs to change for the European market. No vague advice. Specific, actionable feedback.</p>
      <p style="margin:0 0 28px;font-size:15px;">Reply to this email with your CV attached and I will take a look. Or if you want to go straight to the full session:</p>
      <a href="${content.ctaUrl}" style="display:inline-block;background:#C9A84C;color:#000;font-family:Arial,sans-serif;font-weight:700;font-size:14px;padding:14px 28px;border-radius:100px;text-decoration:none;">${content.cta}</a>
      <p style="margin:32px 0 8px;font-size:15px;">Talk soon,</p>
      <p style="margin:0;font-size:15px;font-weight:600;">Noelia</p>
      <p style="margin:4px 0 0;font-size:13px;color:#999;">Career Coach and International Recruiter, Land in Europe</p>
      <p style="margin:28px 0 0;font-size:11px;color:#bbb;border-top:1px solid #eee;padding-top:16px;">
        You received this because you completed the quiz at landineuropecoaching.com/quiz.
      </p>
    </div>
  `;
}

function buildNotificationEmail(name: string, email: string, answers: Record<string, string>, result: string): string {
  const answerRows = Object.entries(answers)
    .map(([k, v]) => `<tr><td style="padding:5px 0;color:#666;width:200px;">${answerLabels[k] ?? k}</td><td style="padding:5px 0;font-weight:500;">${v}</td></tr>`)
    .join("");

  return `
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
      <p style="margin-top:16px;font-size:13px;color:#666;">
        Welcome email sent automatically to ${email}.
      </p>
      <p style="margin-top:8px;font-size:12px;color:#999;">
        Received via the quiz at landineuropecoaching.com/quiz
      </p>
    </div>
  `;
}

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

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  const market = answers.market ?? "";
  const resultKey = RESULT_CONTENT[result] ? result : "Career Strategy Session";

  try {
    // Email 1: notification to Noelia
    await transporter.sendMail({
      from: `"Land in Europe · Quiz" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: email,
      subject: `Quiz lead: ${name} → ${result}`,
      html: buildNotificationEmail(name, email, answers, result),
    });

    // Email 2: welcome email to the lead
    await transporter.sendMail({
      from: `"Noelia · Land in Europe" <${process.env.ZOHO_USER}>`,
      to: email,
      replyTo: process.env.ZOHO_USER,
      subject: RESULT_CONTENT[resultKey].subject,
      html: buildLeadEmail(name, resultKey, market),
    });
  } catch (err) {
    console.error("Quiz email error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
