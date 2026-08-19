import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getAdminSession } from "@/lib/auth";
import { getAllClients, getClient, saveClient, deleteClient, Client } from "@/lib/db";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

async function checkAdmin(req: NextRequest) {
  const token = req.cookies.get("admin_session")?.value;
  if (!token) return false;
  const session = await getAdminSession();
  return !!session;
}

export async function GET(req: NextRequest) {
  if (!await checkAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const clients = await getAllClients();
  const safe = clients.map(({ passwordHash: _, ...c }) => c);
  return NextResponse.json(safe);
}

export async function POST(req: NextRequest) {
  if (!await checkAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { name, email, password, pkg } = body;
  if (!name || !email || !password) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const existing = await getClient(email);
  if (existing) return NextResponse.json({ error: "Client already exists" }, { status: 409 });

  const passwordHash = await bcrypt.hash(password, 10);
  const client: Client = {
    id: randomUUID(),
    name,
    email: email.toLowerCase(),
    passwordHash,
    package: pkg || "Full Coaching Package",
    startDate: new Date().toISOString().split("T")[0],
    sessions: [
      { id: randomUUID(), number: 1, title: "Clarity & Diagnosis", date: "", completed: false, notes: "" },
      { id: randomUUID(), number: 2, title: "European Positioning", date: "", completed: false, notes: "" },
      { id: randomUUID(), number: 3, title: "LinkedIn & Visibility", date: "", completed: false, notes: "" },
      { id: randomUUID(), number: 4, title: "Your Target Company Map", date: "", completed: false, notes: "" },
      { id: randomUUID(), number: 5, title: "Applications & Momentum", date: "", completed: false, notes: "" },
    ],
    actionPoints: [],
    applications: [],
  };

  await saveClient(client);
  const { passwordHash: _, ...safe } = client;
  return NextResponse.json(safe, { status: 201 });
}

export async function PUT(req: NextRequest) {
  if (!await checkAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const { email, ...updates } = body;
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  const client = await getClient(email);
  if (!client) return NextResponse.json({ error: "Client not found" }, { status: 404 });

  const updated = { ...client, ...updates };
  await saveClient(updated);
  const { passwordHash: _, ...safe } = updated;
  return NextResponse.json(safe);
}

export async function DELETE(req: NextRequest) {
  if (!await checkAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });
  await deleteClient(email);
  return NextResponse.json({ ok: true });
}
