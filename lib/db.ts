import { kv } from "@vercel/kv";

export type SessionItem = {
  id: string;
  number: number;
  title: string;
  date: string;
  completed: boolean;
  notes: string;
};

export type ActionPoint = {
  id: string;
  text: string;
  completed: boolean;
};

export type Application = {
  id: string;
  company: string;
  role: string;
  appliedDate: string;
  status: "waiting" | "interview" | "offer" | "rejected";
  contactName?: string;
  followUpSent?: boolean;
};

export type Client = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  package: string;
  startDate: string;
  sessions: SessionItem[];
  actionPoints: ActionPoint[];
  applications: Application[];
};

export async function getClient(email: string): Promise<Client | null> {
  return kv.get(`client:${email.toLowerCase()}`);
}

export async function saveClient(client: Client): Promise<void> {
  await kv.set(`client:${client.email.toLowerCase()}`, client);
  const emails: string[] = (await kv.get("clients:index")) || [];
  if (!emails.includes(client.email.toLowerCase())) {
    emails.push(client.email.toLowerCase());
    await kv.set("clients:index", emails);
  }
}

export async function getAllClients(): Promise<Client[]> {
  const emails: string[] = (await kv.get("clients:index")) || [];
  const clients = await Promise.all(emails.map((e) => getClient(e)));
  return clients.filter(Boolean) as Client[];
}

export async function deleteClient(email: string): Promise<void> {
  await kv.del(`client:${email.toLowerCase()}`);
  const emails: string[] = (await kv.get("clients:index")) || [];
  await kv.set(
    "clients:index",
    emails.filter((e) => e !== email.toLowerCase())
  );
}
