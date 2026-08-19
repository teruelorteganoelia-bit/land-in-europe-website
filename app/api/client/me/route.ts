import { NextResponse } from "next/server";
import { getClientSession } from "@/lib/auth";
import { getClient } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  const session = await getClientSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const client = await getClient(session.email);
  if (!client) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { passwordHash: _, ...safe } = client;
  return NextResponse.json(safe);
}
