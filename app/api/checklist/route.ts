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
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

function buildChecklistEmail(name: string): string {
  const firstName = name.split(" ")[0];

  return `
    <div style="font-family:Georgia,'Times New Roman',serif;max-width:600px;color:#111;line-height:1.75;">

      <p style="margin:0 0 20px;font-size:15px;">Hi ${firstName},</p>
      <p style="margin:0 0 24px;font-size:15px;">Here is the checklist. Go through it honestly before you apply to your next role. Most of the people I coach have missed at least five of these.</p>

      <!-- SECTION 1 -->
      <h2 style="font-family:Georgia,serif;font-size:18px;color:#C9A84C;border-bottom:1px solid #eee;padding-bottom:8px;margin:28px 0 16px;">1. Your CV</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Two pages maximum. One page if you have fewer than three years of experience.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">Professional summary at the top: who you are, what you bring, what you are targeting. Three to four lines.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Every role has at least one achievement with a number. Not responsibilities. Results.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">Language skills listed clearly with honest CEFR levels: A2, B1, B2, C1, C2, native.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Right to work status stated explicitly: EU citizen, Blue Card holder, permit required. One line.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">Clean layout. No heavy design, no graphics, no icons in headers. ATS systems filter these out.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Photo: not required in most European markets. Standard in Germany and some central European countries.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">No objective statement. Replace with a professional summary if you do not have one.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Education section after experience, unless you graduated in the last two years.</td></tr>
      </table>

      <!-- SECTION 2 -->
      <h2 style="font-family:Georgia,serif;font-size:18px;color:#C9A84C;border-bottom:1px solid #eee;padding-bottom:8px;margin:32px 0 16px;">2. Your LinkedIn profile</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Headline uses your exact job title plus keywords. Not "Open to opportunities." Not "Experienced professional."</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">Location set to your target city or "Open to relocation to [City]" in your About section.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Open to Work turned on in recruiter-only mode (not the green banner, the private setting).</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">About section written in first person. Three to five short paragraphs. What you do, what you are good at, what you are looking for.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Experience section mirrors your CV with achievements and numbers, not a copy of your job description.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">Language skills added in the Languages section with correct levels.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Profile photo is professional. Plain background. Clear face. Not a selfie or a holiday photo.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">At least one post, comment, or piece of activity in the last 30 days. Active profiles get contacted more.</td></tr>
      </table>

      <!-- SECTION 3 -->
      <h2 style="font-family:Georgia,serif;font-size:18px;color:#C9A84C;border-bottom:1px solid #eee;padding-bottom:8px;margin:32px 0 16px;">3. Before you apply</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">You have picked one primary market and understood how it actually works: language requirements, CV format expectations, visa situation.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">You know the salary range for your role and level in your target market. Not your home country rate. The local rate.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">You have researched the company. Their LinkedIn, their recent news, who you would be reporting to.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">Your professional summary is rewritten for this specific role, not a generic version.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">You have at least three specialist recruiters in your sector bookmarked and have connected with them on LinkedIn.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">You have a list of 10 to 15 target companies you are approaching directly, not just applying to ads.</td></tr>
      </table>

      <!-- SECTION 4 -->
      <h2 style="font-family:Georgia,serif;font-size:18px;color:#C9A84C;border-bottom:1px solid #eee;padding-bottom:8px;margin:32px 0 16px;">4. Applications and follow-up</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">Cover note or email is short: three to four sentences. Why this role, why this company, one specific thing you bring.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">You have followed up after two weeks of silence. One short professional message. Not three in a week.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">You are tracking applications in a spreadsheet: company, role, date applied, status, next action.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">You have at least five applications or outreach messages active at any given time. Not one at a time.</td></tr>
      </table>

      <!-- SECTION 5 -->
      <h2 style="font-family:Georgia,serif;font-size:18px;color:#C9A84C;border-bottom:1px solid #eee;padding-bottom:8px;margin:32px 0 16px;">5. Interviews</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">You have a clear, rehearsed answer to "Tell me about yourself." Not your life story. Two minutes, logical arc, ending at this role.</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">You have a real answer to "Why this country?" Not "I love the culture." Something about the market, the opportunity, your plan.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">You know the local salary range and have a number ready when asked. Not "whatever you think is fair."</td></tr>
        <tr style="background:#fafaf8;"><td style="padding:6px 4px;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 4px;font-size:14px;color:#333;">You send a follow-up email the same day or the next morning. Three sentences. Almost nobody does this in Europe.</td></tr>
        <tr><td style="padding:6px 0;vertical-align:top;width:24px;font-size:16px;">&#9633;</td><td style="padding:6px 0;font-size:14px;color:#333;">You have three questions ready to ask at the end. Not about salary or holidays. About the role, the team, what success looks like.</td></tr>
      </table>

      <div style="background:#faf8f4;border:1px solid #e8d9b0;border-radius:10px;padding:20px 24px;margin:36px 0;">
        <p style="margin:0 0 10px;font-size:14px;font-weight:700;color:#C9A84C;">One last thing</p>
        <p style="margin:0;font-size:14px;color:#444;line-height:1.7;">If you go through this list and you are missing more than a few boxes, the issue is not the market. It is something specific and fixable. Reply to this email with your CV and tell me which market you are targeting. I will tell you what I see.</p>
      </div>

      <p style="margin:28px 0 8px;font-size:15px;">Good luck,</p>
      <p style="margin:0;font-size:15px;font-weight:600;">Noelia</p>
      <p style="margin:4px 0 0;font-size:13px;color:#999;">Career Coach and International Recruiter, Land in Europe</p>
      <p style="margin:28px 0 0;font-size:11px;color:#bbb;border-top:1px solid #eee;padding-top:16px;">
        You requested this checklist at landineuropecoaching.com/checklist.
      </p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let body: { name: string; email: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email } = body;

  if (!name || !email) {
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

  try {
    await transporter.sendMail({
      from: `"Noelia · Land in Europe" <${process.env.ZOHO_USER}>`,
      to: email,
      replyTo: process.env.ZOHO_USER,
      subject: "Your European Job Search Checklist (25 items)",
      html: buildChecklistEmail(name),
    });

    await transporter.sendMail({
      from: `"Land in Europe · Checklist" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: email,
      subject: `Checklist lead: ${name} (${email})`,
      html: `<p style="font-family:sans-serif;">New checklist download: <strong>${name}</strong> &lt;<a href="mailto:${email}">${email}</a>&gt;</p>`,
    });
  } catch (err) {
    console.error("Checklist email error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
