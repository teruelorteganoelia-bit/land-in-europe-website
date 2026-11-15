import { NextRequest, NextResponse } from "next/server";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbyrWzLp-um7alflh00QNXcT3MJP_3YUcDWNIbw93j9lEZFM1BN4j1pniG8nOOn-XP2F/exec";

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
