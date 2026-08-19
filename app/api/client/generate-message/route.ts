import { NextRequest, NextResponse } from "next/server";
import { getClientSession } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const session = await getClientSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { clientName, company, role, appliedDate, contacts, achievement, whyCompany, isFollowUp } = await req.json();

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "API key not configured" }, { status: 500 });

  const recruiterName = contacts && contacts.length > 0 ? contacts[0].split(" ")[0] : null;
  const greeting = recruiterName ? `Hi ${recruiterName},` : "Hi,";

  const appliedDaysAgo = Math.floor((Date.now() - new Date(appliedDate).getTime()) / (1000 * 60 * 60 * 24));
  const timeRef = appliedDaysAgo < 7 ? "last week" : appliedDaysAgo < 14 ? "a couple of weeks ago" : `${appliedDaysAgo} days ago`;

  const prompt = isFollowUp
    ? `You are a career coach writing a LinkedIn follow-up message for a candidate who has not received a reply after applying for a job.

Write a short, human, professional LinkedIn message. Rules:
- Start with: ${greeting}
- Mention they applied for "${role}" at "${company}" ${timeRef} and have not heard back
- Include this achievement naturally (do not copy it word for word, rephrase it to sound human): "${achievement || "relevant experience in this field"}"
- Include this reason for interest in the company (rephrase naturally): "${whyCompany || `genuine interest in ${company}`}"
- End with a low-pressure ask: something like asking if the application reached the right person, or if they could point them in the right direction
- Sign off with just the first name: ${clientName.split(" ")[0]}
- Maximum 5 sentences total. No subject line. No bullet points. Sound like a real person, not a template.`
    : `You are a career coach writing a LinkedIn outreach message for a candidate who just applied for a job and wants to reach out to a recruiter directly.

Write a short, human, professional LinkedIn message. Rules:
- Start with: ${greeting}
- Mention they recently applied for "${role}" at "${company}"
- Include this achievement naturally (do not copy it word for word, rephrase it to sound human): "${achievement || "relevant experience in this field"}"
- Include this reason for interest in the company (rephrase naturally): "${whyCompany || `genuine interest in ${company}`}"
- End with a simple ask: can the recruiter pass their application along or confirm it reached the right person
- Sign off with just the first name: ${clientName.split(" ")[0]}
- Maximum 5 sentences total. No subject line. No bullet points. Sound like a real person, not a template.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 300 },
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to generate message" }, { status: 500 });
  }

  const data = await response.json();
  const message = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  return NextResponse.json({ message: message.trim() });
}
