import { NextRequest, NextResponse } from "next/server";
import { getClientSession } from "@/lib/auth";
import { getClient, saveClient } from "@/lib/db";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const session = await getClientSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const client = await getClient(session.email);
  if (!client) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { company, role } = await req.json();
  if (!company || !role) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const application = {
    id: randomUUID(),
    company: company.trim(),
    role: role.trim(),
    appliedDate: new Date().toISOString().split("T")[0],
    status: "waiting" as const,
  };

  client.applications.push(application);
  await saveClient(client);
  return NextResponse.json(application, { status: 201 });
}

export async function PUT(req: NextRequest) {
  const session = await getClientSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const client = await getClient(session.email);
  if (!client) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { id, ...updates } = await req.json();
  client.applications = client.applications.map(a => a.id === id ? { ...a, ...updates } : a);
  await saveClient(client);
  return NextResponse.json({ ok: true });
}
