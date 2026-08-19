"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Client, SessionItem, ActionPoint, Application } from "@/lib/db";

type SafeClient = Omit<Client, "passwordHash">;

export default function AdminPage() {
  const router = useRouter();
  const [clients, setClients] = useState<SafeClient[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<SafeClient | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [newClient, setNewClient] = useState({ name: "", email: "", password: "", pkg: "Full Coaching Package" });
  const [saving, setSaving] = useState(false);
  const [addError, setAddError] = useState("");

  const loadClients = useCallback(async () => {
    const r = await fetch("/api/admin/clients");
    if (r.status === 401) { router.push("/admin/login"); return; }
    const data = await r.json();
    setClients(data);
    setLoading(false);
  }, [router]);

  useEffect(() => { loadClients(); }, [loadClients]);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const addClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setAddError("");
    const r = await fetch("/api/admin/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newClient.name, email: newClient.email, password: newClient.password, pkg: newClient.pkg }),
    });
    if (r.ok) {
      setNewClient({ name: "", email: "", password: "", pkg: "Full Coaching Package" });
      setShowAdd(false);
      await loadClients();
    } else {
      const data = await r.json();
      setAddError(data.error || "Error adding client");
    }
    setSaving(false);
  };

  const toggleSession = async (client: SafeClient, sessionId: string) => {
    const updated = {
      ...client,
      sessions: client.sessions.map(s => s.id === sessionId ? { ...s, completed: !s.completed, date: !s.completed ? new Date().toISOString().split("T")[0] : s.date } : s),
    };
    setClients(cs => cs.map(c => c.email === client.email ? updated : c));
    if (selected?.email === client.email) setSelected(updated);
    await fetch("/api/admin/clients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
  };

  const updateSessionNotes = async (client: SafeClient, sessionId: string, notes: string) => {
    const updated = { ...client, sessions: client.sessions.map(s => s.id === sessionId ? { ...s, notes } : s) };
    setClients(cs => cs.map(c => c.email === client.email ? updated : c));
    if (selected?.email === client.email) setSelected(updated);
    await fetch("/api/admin/clients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
  };

  const addActionPoint = async (client: SafeClient, text: string) => {
    if (!text.trim()) return;
    const point: ActionPoint = { id: crypto.randomUUID(), text: text.trim(), completed: false };
    const updated = { ...client, actionPoints: [...client.actionPoints, point] };
    setClients(cs => cs.map(c => c.email === client.email ? updated : c));
    if (selected?.email === client.email) setSelected(updated);
    await fetch("/api/admin/clients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
  };

  const toggleActionPoint = async (client: SafeClient, apId: string) => {
    const updated = { ...client, actionPoints: client.actionPoints.map(a => a.id === apId ? { ...a, completed: !a.completed } : a) };
    setClients(cs => cs.map(c => c.email === client.email ? updated : c));
    if (selected?.email === client.email) setSelected(updated);
    await fetch("/api/admin/clients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
  };

  const addApplication = async (client: SafeClient, company: string, role: string) => {
    if (!company.trim() || !role.trim()) return;
    const app: Application = { id: crypto.randomUUID(), company: company.trim(), role: role.trim(), appliedDate: new Date().toISOString().split("T")[0], status: "waiting" };
    const updated = { ...client, applications: [...client.applications, app] };
    setClients(cs => cs.map(c => c.email === client.email ? updated : c));
    if (selected?.email === client.email) setSelected(updated);
    await fetch("/api/admin/clients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
  };

  const updateAppStatus = async (client: SafeClient, appId: string, status: Application["status"]) => {
    const updated = { ...client, applications: client.applications.map(a => a.id === appId ? { ...a, status } : a) };
    setClients(cs => cs.map(c => c.email === client.email ? updated : c));
    if (selected?.email === client.email) setSelected(updated);
    await fetch("/api/admin/clients", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
  };

  const deleteClient = async (email: string) => {
    if (!confirm("Delete this client? This cannot be undone.")) return;
    await fetch("/api/admin/clients", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setClients(cs => cs.filter(c => c.email !== email));
    if (selected?.email === email) setSelected(null);
  };

  if (loading) return (
    <main className="min-h-screen bg-[#0A0B0D] flex items-center justify-center">
      <p className="text-white/30 text-sm">Loading...</p>
    </main>
  );

  return (
    <main className="min-h-screen bg-[#0A0B0D]">
      <header className="border-b border-white/8 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-sm">Land in Europe</p>
            <p className="text-white/30 text-xs">Admin panel</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowAdd(true)} className="bg-[#C9A84C] text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-[#b8953f] transition-colors">
              Add client
            </button>
            <button onClick={logout} className="text-white/30 hover:text-white text-xs transition-colors">Sign out</button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-6">
        {/* Client list */}
        <div className="w-64 flex-shrink-0">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-3">{clients.length} clients</p>
          <div className="space-y-2">
            {clients.map(c => (
              <button key={c.email} onClick={() => setSelected(c)}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${selected?.email === c.email ? "bg-white/10 border-[#C9A84C]/30" : "bg-white/[0.02] border-white/8 hover:bg-white/5"}`}>
                <p className="text-white text-sm font-semibold">{c.name}</p>
                <p className="text-white/30 text-xs">{c.sessions.filter(s => s.completed).length}/{c.sessions.length} sessions</p>
              </button>
            ))}
          </div>
        </div>

        {/* Client detail */}
        <div className="flex-1 min-w-0">
          {!selected ? (
            <div className="flex items-center justify-center h-64 text-white/20 text-sm">
              Select a client to manage
            </div>
          ) : (
            <ClientDetail
              client={selected}
              onToggleSession={toggleSession}
              onUpdateNotes={updateSessionNotes}
              onAddActionPoint={addActionPoint}
              onToggleAction={toggleActionPoint}
              onAddApplication={addApplication}
              onUpdateAppStatus={updateAppStatus}
              onDelete={deleteClient}
            />
          )}
        </div>
      </div>

      {/* Add client modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6">
          <div className="bg-[#1C1F26] border border-white/10 rounded-2xl p-8 w-full max-w-sm">
            <h2 className="text-white font-serif text-xl font-bold mb-6">Add client</h2>
            <form onSubmit={addClient} className="space-y-4">
              {[
                { label: "Full name", key: "name", type: "text", placeholder: "Sara De Weve" },
                { label: "Email", key: "email", type: "email", placeholder: "sara@email.com" },
                { label: "Password", key: "password", type: "password", placeholder: "Create a password for them" },
                { label: "Package", key: "pkg", type: "text", placeholder: "Full Coaching Package" },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5">{f.label}</label>
                  <input
                    type={f.type} required={f.key !== "pkg"} placeholder={f.placeholder}
                    value={newClient[f.key as keyof typeof newClient]}
                    onChange={e => setNewClient({ ...newClient, [f.key]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/60 transition-all"
                  />
                </div>
              ))}
              {addError && <p className="text-red-400 text-xs">{addError}</p>}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => { setShowAdd(false); setAddError(""); }}
                  className="flex-1 border border-white/15 text-white/60 text-sm font-semibold py-3 rounded-xl hover:border-white/30 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={saving}
                  className="flex-1 bg-[#C9A84C] text-black text-sm font-bold py-3 rounded-xl hover:bg-[#b8953f] transition-colors disabled:opacity-50">
                  {saving ? "Adding..." : "Add client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function ClientDetail({
  client, onToggleSession, onUpdateNotes, onAddActionPoint, onToggleAction,
  onAddApplication, onUpdateAppStatus, onDelete
}: {
  client: SafeClient;
  onToggleSession: (c: SafeClient, id: string) => void;
  onUpdateNotes: (c: SafeClient, id: string, notes: string) => void;
  onAddActionPoint: (c: SafeClient, text: string) => void;
  onToggleAction: (c: SafeClient, id: string) => void;
  onAddApplication: (c: SafeClient, company: string, role: string) => void;
  onUpdateAppStatus: (c: SafeClient, id: string, status: Application["status"]) => void;
  onDelete: (email: string) => void;
}) {
  const [newAction, setNewAction] = useState("");
  const [newApp, setNewApp] = useState({ company: "", role: "" });
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [notesDraft, setNotesDraft] = useState<Record<string, string>>({});

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">{client.name}</h2>
          <p className="text-white/40 text-sm">{client.email} · {client.package}</p>
          <p className="text-white/25 text-xs mt-0.5">Started {client.startDate}</p>
        </div>
        <button onClick={() => onDelete(client.email)}
          className="text-red-400/50 hover:text-red-400 text-xs transition-colors">
          Delete client
        </button>
      </div>

      {/* Sessions */}
      <section>
        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Sessions</h3>
        <div className="space-y-2">
          {client.sessions.map(s => (
            <div key={s.id} className="bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3">
                <button onClick={() => onToggleSession(client, s.id)}
                  className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${s.completed ? "bg-[#C9A84C]" : "border border-white/20 hover:border-[#C9A84C]/50"}`}>
                  {s.completed && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5l2.5 2.5 4.5-5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${s.completed ? "text-white" : "text-white/40"}`}>
                    {s.number}. {s.title}
                  </p>
                  {s.date && <p className="text-white/25 text-xs">{s.date}</p>}
                </div>
                <button onClick={() => setExpandedSession(expandedSession === s.id ? null : s.id)}
                  className="text-white/25 hover:text-white/60 text-xs transition-colors">
                  {expandedSession === s.id ? "Close" : "Notes"}
                </button>
              </div>
              {expandedSession === s.id && (
                <div className="border-t border-white/5 px-4 py-3">
                  <textarea
                    value={notesDraft[s.id] ?? s.notes}
                    onChange={e => setNotesDraft(d => ({ ...d, [s.id]: e.target.value }))}
                    placeholder="Session notes..."
                    rows={3}
                    className="w-full bg-transparent text-white/60 text-xs resize-none focus:outline-none placeholder:text-white/20"
                  />
                  <button
                    onClick={() => { onUpdateNotes(client, s.id, notesDraft[s.id] ?? s.notes); setExpandedSession(null); }}
                    className="text-[#C9A84C] text-xs font-semibold mt-1 hover:underline">
                    Save notes
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Action Points */}
      <section>
        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Action Points</h3>
        <div className="space-y-2 mb-3">
          {client.actionPoints.map(a => (
            <div key={a.id} className="flex items-center gap-3 bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3">
              <button onClick={() => onToggleAction(client, a.id)}
                className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors ${a.completed ? "bg-[#C9A84C]" : "border border-white/20"}`}>
                {a.completed && (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4l2 2 4-4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <p className={`text-xs ${a.completed ? "text-white/30 line-through" : "text-white/70"}`}>{a.text}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={newAction}
            onChange={e => setNewAction(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") { onAddActionPoint(client, newAction); setNewAction(""); } }}
            placeholder="Add action point..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-all"
          />
          <button onClick={() => { onAddActionPoint(client, newAction); setNewAction(""); }}
            className="bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#C9A84C]/30 transition-colors">
            Add
          </button>
        </div>
      </section>

      {/* Applications */}
      <section>
        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">Applications</h3>
        <div className="space-y-2 mb-3">
          {client.applications.map(app => (
            <div key={app.id} className="flex items-center gap-3 bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                <p className="text-white text-xs font-semibold">{app.company} <span className="font-normal text-white/40">· {app.role}</span></p>
                <a
                  href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(`"${app.company}" (recruiter OR "talent acquisition" OR "HR manager" OR "hiring manager")`)}&origin=GLOBAL_SEARCH_HEADER`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0A66C2] text-[10px] font-semibold hover:underline flex-shrink-0"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Find contact
                </a>
              </div>
                <p className="text-white/25 text-[10px]">{app.appliedDate}</p>
              </div>
              <select
                value={app.status}
                onChange={e => onUpdateAppStatus(client, app.id, e.target.value as Application["status"])}
                className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-white/70 focus:outline-none">
                <option value="waiting">Waiting</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejected">No reply</option>
              </select>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={newApp.company}
            onChange={e => setNewApp(a => ({ ...a, company: e.target.value }))}
            placeholder="Company"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-all"
          />
          <input
            value={newApp.role}
            onChange={e => setNewApp(a => ({ ...a, role: e.target.value }))}
            placeholder="Role"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-all"
          />
          <button onClick={() => { onAddApplication(client, newApp.company, newApp.role); setNewApp({ company: "", role: "" }); }}
            className="bg-[#C9A84C]/20 text-[#C9A84C] text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#C9A84C]/30 transition-colors">
            Add
          </button>
        </div>
      </section>
    </div>
  );
}
