import { NextRequest, NextResponse } from "next/server";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbz3Sagu3lMAxF4MXHJMzn-KaJCC2bIbyatQ8NDbW5tktd4-4Hkk78auvv6hOymgL4o/exec";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    // silently fail — sheet is non-critical
  }
  return NextResponse.json({ ok: true });
}
