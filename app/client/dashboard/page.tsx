"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Client, Application } from "@/lib/db";

type SafeClient = Omit<Client, "passwordHash">;

const STATUS_LABELS: Record<Application["status"], string> = {
  waiting: "Waiting",
  interview: "Interview",
  offer: "Offer",
  rejected: "No reply",
};

const STATUS_COLORS: Record<Application["status"], string> = {
  waiting: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  interview: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  offer: "bg-green-500/15 text-green-400 border-green-500/20",
  rejected: "bg-white/5 text-white/30 border-white/10",
};

function daysSince(dateStr: string) {
  const d = new Date(dateStr);
  const now = new Date();
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
}

function linkedInSearch(company: string) {
  return `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(`"${company}" (recruiter OR "talent acquisition" OR "HR manager" OR "hiring manager")`)}&origin=GLOBAL_SEARCH_HEADER`;
}

export default function ClientDashboard() {
  const router = useRouter();
  const [client, setClient] = useState<SafeClient | null>(null);
  const [loading, setLoading] = useState(true);
  const [newApp, setNewApp] = useState({ company: "", role: "" });
  const [addingApp, setAddingApp] = useState(false);
  const [editingContact, setEditingContact] = useState<string | null>(null);
  const [contactDraft, setContactDraft] = useState("");
  const [showDraft, setShowDraft] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/client/me")
      .then(r => {
        if (r.status === 401) { router.push("/client/login"); return null; }
        return r.json();
      })
      .then(data => { if (data) setClient(data); })
      .finally(() => setLoading(false));
  }, [router]);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/client/login");
  };

  const addApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApp.company.trim() || !newApp.role.trim()) return;
    const r = await fetch("/api/client/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newApp),
    });
    if (r.ok) {
      const app = await r.json();
      setClient(c => c ? { ...c, applications: [...c.applications, app] } : c);
      setNewApp({ company: "", role: "" });
      setAddingApp(false);
    }
  };

  const saveContactName = async (appId: string, contactName: string) => {
    await fetch("/api/client/applications", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: appId, contactName }),
    });
    setClient(c => c ? { ...c, applications: c.applications.map(a => a.id === appId ? { ...a, contactName } : a) } : c);
    setEditingContact(null);
  };

  const markFollowUpSent = async (appId: string) => {
    await fetch("/api/client/applications", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: appId, followUpSent: true }),
    });
    setClient(c => c ? { ...c, applications: c.applications.map(a => a.id === appId ? { ...a, followUpSent: true } : a) } : c);
    setShowDraft(null);
  };

  if (loading) return (
    <main className="min-h-screen bg-[#0A0B0D] flex items-center justify-center">
      <p className="text-white/30 text-sm">Loading...</p>
    </main>
  );

  if (!client) return null;

  const completedSessions = client.sessions.filter(s => s.completed).length;
  const completedActions = client.actionPoints.filter(a => a.completed).length;
  const followUpDue = client.applications.filter(a => a.status === "waiting" && !a.followUpSent && daysSince(a.appliedDate) >= 14);

  return (
    <main className="min-h-screen bg-[#0A0B0D]">
      <header className="border-b border-white/8 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-sm font-bold text-white tracking-tight">Land in Europe</a>
          <button onClick={logout} className="text-white/30 hover:text-white text-xs transition-colors">Sign out</button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Follow-up alert banner */}
        {followUpDue.length > 0 && (
          <div className="mb-8 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl px-6 py-4">
            <p className="text-[#C9A84C] text-sm font-semibold mb-1">
              {followUpDue.length === 1 ? "1 application needs a follow-up" : `${followUpDue.length} applications need a follow-up`}
            </p>
            <p className="text-white/40 text-xs">It has been 2 weeks or more with no reply from: {followUpDue.map(a => a.company).join(", ")}. Scroll down to send a follow-up message.</p>
          </div>
        )}

        {/* Welcome */}
        <div className="mb-12">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Client portal</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">
            Welcome back, {client.name.split(" ")[0]}
          </h1>
          <p className="text-white/30 text-sm">{client.package} · Started {client.startDate}</p>
        </div>

        {/* Progress summary */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Sessions done", value: `${completedSessions}/${client.sessions.length}` },
            { label: "Actions completed", value: `${completedActions}/${client.actionPoints.length}` },
            { label: "Applications sent", value: `${client.applications.length}` },
          ].map(s => (
            <div key={s.label} className="bg-white/5 border border-white/8 rounded-2xl p-5 text-center">
              <p className="font-serif text-3xl font-light text-[#C9A84C] mb-1">{s.value}</p>
              <p className="text-white/35 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Sessions */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Coaching Sessions</h2>
          <div className="space-y-3">
            {client.sessions.map((s) => (
              <div key={s.id} className={`flex items-start gap-4 rounded-xl border px-5 py-4 transition-colors ${s.completed ? "bg-white/5 border-[#C9A84C]/20" : "bg-white/[0.02] border-white/8"}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${s.completed ? "bg-[#C9A84C]" : "border border-white/20"}`}>
                  {s.completed && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${s.completed ? "text-white" : "text-white/40"}`}>
                    Session {s.number}: {s.title}
                  </p>
                  {s.date && <p className="text-white/25 text-xs mt-0.5">{s.date}</p>}
                  {s.notes && <p className="text-white/40 text-xs mt-2 leading-relaxed">{s.notes}</p>}
                </div>
                {!s.completed && <span className="text-white/20 text-xs flex-shrink-0 mt-0.5">Upcoming</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Action Points */}
        {client.actionPoints.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Your Action Points</h2>
            <div className="bg-white/5 border border-white/8 rounded-2xl divide-y divide-white/5">
              {client.actionPoints.map((a) => (
                <div key={a.id} className="flex items-center gap-4 px-5 py-4">
                  <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 ${a.completed ? "bg-[#C9A84C]" : "border border-white/20"}`}>
                    {a.completed && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <p className={`text-sm ${a.completed ? "text-white/40 line-through" : "text-white/80"}`}>{a.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Applications */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest">Applications Tracker</h2>
            <button onClick={() => setAddingApp(true)} className="text-[#C9A84C] text-xs font-semibold hover:underline">
              + Add application
            </button>
          </div>

          {addingApp && (
            <form onSubmit={addApplication} className="bg-white/5 border border-[#C9A84C]/20 rounded-xl px-5 py-4 mb-4 flex flex-col sm:flex-row gap-3">
              <input
                value={newApp.company}
                onChange={e => setNewApp(a => ({ ...a, company: e.target.value }))}
                placeholder="Company name"
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50"
              />
              <input
                value={newApp.role}
                onChange={e => setNewApp(a => ({ ...a, role: e.target.value }))}
                placeholder="Role applied for"
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50"
              />
              <div className="flex gap-2">
                <button type="submit" className="bg-[#C9A84C] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#b8953f] transition-colors">Add</button>
                <button type="button" onClick={() => setAddingApp(false)} className="text-white/30 text-xs px-3 py-2 hover:text-white transition-colors">Cancel</button>
              </div>
            </form>
          )}

          {client.applications.length === 0 && !addingApp ? (
            <div className="bg-white/[0.02] border border-white/8 rounded-2xl px-5 py-8 text-center">
              <p className="text-white/30 text-sm">No applications yet.</p>
              <button onClick={() => setAddingApp(true)} className="text-[#C9A84C] text-xs font-semibold mt-2 hover:underline">Add your first application</button>
            </div>
          ) : (
            <div className="space-y-3">
              {client.applications.map((app) => {
                const days = daysSince(app.appliedDate);
                const needsFollowUp = app.status === "waiting" && !app.followUpSent && days >= 14;
                return (
                  <div key={app.id} className={`bg-white/[0.03] border rounded-2xl px-5 py-4 ${needsFollowUp ? "border-[#C9A84C]/30" : "border-white/8"}`}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-white font-semibold text-sm">{app.company}</p>
                        <p className="text-white/40 text-xs">{app.role} · Applied {app.appliedDate}</p>
                      </div>
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_COLORS[app.status]}`}>
                        {STATUS_LABELS[app.status]}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {/* Find contact */}
                      <a href={linkedInSearch(app.company)} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#0A66C2] text-xs font-semibold hover:underline">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Find contact
                      </a>

                      {/* Contact name */}
                      {editingContact === app.id ? (
                        <div className="flex items-center gap-2">
                          <input
                            autoFocus
                            value={contactDraft}
                            onChange={e => setContactDraft(e.target.value)}
                            placeholder="Contact name"
                            className="bg-white/5 border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50 w-36"
                          />
                          <button onClick={() => saveContactName(app.id, contactDraft)}
                            className="text-[#C9A84C] text-xs font-semibold hover:underline">Save</button>
                          <button onClick={() => setEditingContact(null)}
                            className="text-white/30 text-xs hover:text-white">Cancel</button>
                        </div>
                      ) : app.contactName ? (
                        <button onClick={() => { setEditingContact(app.id); setContactDraft(app.contactName || ""); }}
                          className="text-white/50 text-xs hover:text-white transition-colors">
                          Contact: <span className="text-white font-semibold">{app.contactName}</span>
                        </button>
                      ) : (
                        <button onClick={() => { setEditingContact(app.id); setContactDraft(""); }}
                          className="text-white/25 text-xs hover:text-white/60 transition-colors">
                          + Save contact name
                        </button>
                      )}

                      {/* Follow-up */}
                      {needsFollowUp && (
                        <button onClick={() => setShowDraft(showDraft === app.id ? null : app.id)}
                          className="inline-flex items-center gap-1 bg-[#C9A84C]/15 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full border border-[#C9A84C]/30 hover:bg-[#C9A84C]/25 transition-colors">
                          Follow up now
                        </button>
                      )}
                      {app.followUpSent && (
                        <span className="text-white/25 text-xs">Follow-up sent</span>
                      )}
                    </div>

                    {/* Draft message */}
                    {showDraft === app.id && (
                      <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-3">Draft LinkedIn message</p>
                        <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{generateDraft(client.name, app)}</p>
                        <div className="flex gap-3 mt-4">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(generateDraft(client.name, app));
                            }}
                            className="bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-white/15 transition-colors">
                            Copy message
                          </button>
                          <button onClick={() => markFollowUpSent(app.id)}
                            className="text-white/30 text-xs hover:text-white transition-colors">
                            Mark as sent
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Contact */}
        <div className="bg-white/[0.03] border border-white/8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-white text-sm font-semibold mb-0.5">Need to reach Noelia?</p>
            <p className="text-white/30 text-xs">WhatsApp or email, whatever is easier.</p>
          </div>
          <div className="flex gap-3">
            <a href="https://wa.me/46769763498" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:opacity-90 transition-opacity">
              WhatsApp
            </a>
            <a href="mailto:noelia@landineuropecoaching.com"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-xs font-semibold px-4 py-2.5 rounded-full hover:border-white/30 transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}

function generateDraft(clientName: string, app: Application): string {
  const firstName = clientName.split(" ")[0];
  const contact = app.contactName ? `Hi ${app.contactName.split(" ")[0]},` : "Hi,";
  return `${contact}

My name is ${firstName} and I recently applied for the ${app.role} position at ${app.company}.

I wanted to follow up because I am genuinely interested in this role and the work your team is doing. I have a strong background in this area and believe I could bring real value to your team.

Would you be open to a short call to discuss whether this could be a good fit?

Thank you for your time.

${firstName}`;
}
