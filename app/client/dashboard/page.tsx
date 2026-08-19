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

function daysLabel(days: number) {
  if (days === 0) return "Applied today";
  if (days === 1) return "Applied yesterday";
  return `Applied ${days} days ago`;
}

function googleSearch(company: string) {
  return `https://www.google.com/search?q=${encodeURIComponent(`site:linkedin.com/in "${company}" ("talent acquisition" OR "recruiter" OR "HR manager" OR "hiring manager")`)}`;
}

function generateMessage(clientName: string, app: Application, achievement: string, whyCompany: string, isFollowUp: boolean): string {
  const first = clientName.split(" ")[0];
  const recruiter = app.contacts && app.contacts.length > 0 ? `Hi ${app.contacts[0].split(" ")[0]},` : "Hi,";
  const days = daysSince(app.appliedDate);
  const timeRef = days < 7 ? "last week" : days < 14 ? "a couple of weeks ago" : `${days} days ago`;

  if (isFollowUp) {
    return `${recruiter}

I applied for the ${app.role} position at ${app.company} ${timeRef} and wanted to follow up directly.

${achievement ? achievement + "." : `I have a strong background in this area and I am confident I can contribute from day one.`}

${whyCompany ? whyCompany + "." : `I am genuinely interested in ${app.company} specifically, not just in the role.`}

I know you receive a lot of applications. I just wanted to make sure mine did not get lost, and to show that I am serious about this. Would you be able to point me in the right direction?

${first}`;
  }

  return `${recruiter}

I recently applied for the ${app.role} position at ${app.company} and wanted to reach out to you directly.

${achievement ? achievement + "." : `I have relevant experience for this role and I am confident I can add real value to the team.`}

${whyCompany ? whyCompany + "." : `I am particularly interested in ${app.company} and would love the chance to speak with someone from the team.`}

Would you be able to pass my application along, or let me know if it reached the right person?

${first}`;
}

export default function ClientDashboard() {
  const router = useRouter();
  const [client, setClient] = useState<SafeClient | null>(null);
  const [loading, setLoading] = useState(true);
  const [newApp, setNewApp] = useState({ company: "", role: "" });
  const [addingApp, setAddingApp] = useState(false);
  const [newContact, setNewContact] = useState<Record<string, string>>({});
  const [messageState, setMessageState] = useState<Record<string, { open: boolean; achievement: string; whyCompany: string; generated: string }>>({});

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

  const addContact = async (appId: string, name: string) => {
    if (!name.trim()) return;
    const app = client?.applications.find(a => a.id === appId);
    if (!app) return;
    const contacts = [...(app.contacts || []), name.trim()];
    await fetch("/api/client/applications", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: appId, contacts }),
    });
    setClient(c => c ? { ...c, applications: c.applications.map(a => a.id === appId ? { ...a, contacts } : a) } : c);
    setNewContact(nc => ({ ...nc, [appId]: "" }));
  };

  const removeContact = async (appId: string, index: number) => {
    const app = client?.applications.find(a => a.id === appId);
    if (!app) return;
    const contacts = (app.contacts || []).filter((_, i) => i !== index);
    await fetch("/api/client/applications", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: appId, contacts }),
    });
    setClient(c => c ? { ...c, applications: c.applications.map(a => a.id === appId ? { ...a, contacts } : a) } : c);
  };

  const markFollowUpSent = async (appId: string) => {
    await fetch("/api/client/applications", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: appId, followUpSent: true }),
    });
    setClient(c => c ? { ...c, applications: c.applications.map(a => a.id === appId ? { ...a, followUpSent: true } : a) } : c);
    setMessageState(ms => ({ ...ms, [appId]: { ...ms[appId], open: false, generated: "" } }));
  };

  const toggleMessage = (appId: string) => {
    setMessageState(ms => ({
      ...ms,
      [appId]: ms[appId]?.open
        ? { ...ms[appId], open: false }
        : { open: true, achievement: ms[appId]?.achievement || "", whyCompany: ms[appId]?.whyCompany || "", generated: "" }
    }));
  };

  const generateMsg = (clientName: string, app: Application, appId: string, isFollowUp: boolean) => {
    const state = messageState[appId] || { achievement: "", whyCompany: "" };
    const msg = generateMessage(clientName, app, state.achievement, state.whyCompany, isFollowUp);
    setMessageState(ms => ({ ...ms, [appId]: { ...ms[appId], generated: msg } }));
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

        {/* Follow-up alert */}
        {followUpDue.length > 0 && (
          <div className="mb-8 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-2xl px-6 py-4">
            <p className="text-[#C9A84C] text-sm font-semibold mb-1">
              {followUpDue.length === 1 ? "1 application needs a follow-up" : `${followUpDue.length} applications need a follow-up`}
            </p>
            <p className="text-white/40 text-xs">No reply after 2 weeks from: {followUpDue.map(a => a.company).join(", ")}. Use the message builder below to follow up.</p>
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
                  <p className={`text-sm font-semibold ${s.completed ? "text-white" : "text-white/40"}`}>Session {s.number}: {s.title}</p>
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
            <button onClick={() => setAddingApp(true)} className="text-[#C9A84C] text-xs font-semibold hover:underline">+ Add application</button>
          </div>

          {addingApp && (
            <form onSubmit={addApplication} className="bg-white/5 border border-[#C9A84C]/20 rounded-xl px-5 py-4 mb-4 flex flex-col sm:flex-row gap-3">
              <input value={newApp.company} onChange={e => setNewApp(a => ({ ...a, company: e.target.value }))}
                placeholder="Company name" required autoFocus
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50" />
              <input value={newApp.role} onChange={e => setNewApp(a => ({ ...a, role: e.target.value }))}
                placeholder="Role applied for" required
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50" />
              <div className="flex gap-2">
                <button type="submit" className="bg-[#C9A84C] text-black text-xs font-bold px-4 py-2 rounded-lg">Add</button>
                <button type="button" onClick={() => setAddingApp(false)} className="text-white/30 text-xs px-3 py-2">Cancel</button>
              </div>
            </form>
          )}

          {client.applications.length === 0 && !addingApp ? (
            <div className="bg-white/[0.02] border border-white/8 rounded-2xl px-5 py-8 text-center">
              <p className="text-white/30 text-sm">No applications yet.</p>
              <button onClick={() => setAddingApp(true)} className="text-[#C9A84C] text-xs font-semibold mt-2 hover:underline">Add your first application</button>
            </div>
          ) : (
            <div className="space-y-4">
              {client.applications.map((app) => {
                const days = daysSince(app.appliedDate);
                const isFollowUp = app.status === "waiting" && !app.followUpSent && days >= 14;
                const ms = messageState[app.id] || { open: false, achievement: "", whyCompany: "", generated: "" };

                return (
                  <div key={app.id} className={`bg-white/[0.03] border rounded-2xl overflow-hidden ${isFollowUp ? "border-[#C9A84C]/30" : "border-white/8"}`}>

                    {/* Header */}
                    <div className="px-5 pt-4 pb-3 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-white font-bold text-base">{app.company}</p>
                        <p className="text-white/50 text-sm mt-0.5">{app.role}</p>
                        <p className="text-white/25 text-xs mt-1">{daysLabel(days)} · {app.appliedDate}</p>
                      </div>
                      <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full border ${STATUS_COLORS[app.status]}`}>
                        {STATUS_LABELS[app.status]}
                      </span>
                    </div>

                    <div className="border-t border-white/5 mx-5" />

                    {/* Actions */}
                    <div className="px-5 py-3 flex flex-wrap items-center gap-4">
                      <a href={googleSearch(app.company)} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-white/40 text-xs font-semibold hover:text-white transition-colors">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                        Find recruiter
                      </a>

                      <button onClick={() => toggleMessage(app.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                          isFollowUp
                            ? "bg-[#C9A84C]/15 text-[#C9A84C] border-[#C9A84C]/30 hover:bg-[#C9A84C]/25"
                            : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10"
                        }`}>
                        {isFollowUp ? "Write follow-up" : "Write outreach message"}
                      </button>

                      {app.followUpSent && <span className="text-white/20 text-xs">Follow-up sent</span>}
                    </div>

                    {/* Recruiters */}
                    <div className="px-5 pb-4">
                      <p className="text-white/20 text-[10px] font-semibold uppercase tracking-widest mb-2">Recruiters saved</p>
                      {(app.contacts || []).length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                          {(app.contacts || []).map((name, i) => (
                            <div key={i} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                              <span className="text-white text-xs font-semibold">{name}</span>
                              <button onClick={() => removeContact(app.id, i)} className="text-white/25 hover:text-white/60 text-xs">×</button>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <input
                          value={newContact[app.id] || ""}
                          onChange={e => setNewContact(nc => ({ ...nc, [app.id]: e.target.value }))}
                          onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addContact(app.id, newContact[app.id] || ""); }}}
                          placeholder="Save recruiter name"
                          className="bg-white/5 border border-white/8 rounded-lg px-3 py-1.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/40 w-44"
                        />
                        <button onClick={() => addContact(app.id, newContact[app.id] || "")}
                          className="text-[#C9A84C] text-xs font-semibold hover:underline">Save</button>
                      </div>
                    </div>

                    {/* Message builder */}
                    {ms.open && (
                      <div className="border-t border-white/8 bg-[#0A0B0D]">
                        <div className="px-5 py-4">
                          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-4">
                            {isFollowUp ? "Follow-up message builder" : "Outreach message builder"}
                          </p>

                          <div className="space-y-3 mb-4">
                            <div>
                              <label className="block text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-1.5">
                                Your biggest achievement relevant to this role
                              </label>
                              <input
                                value={ms.achievement}
                                onChange={e => setMessageState(prev => ({ ...prev, [app.id]: { ...prev[app.id], achievement: e.target.value } }))}
                                placeholder={`e.g. "I managed a team of 8 and reduced delivery time by 30%"`}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50"
                              />
                            </div>
                            <div>
                              <label className="block text-white/40 text-[10px] font-semibold uppercase tracking-widest mb-1.5">
                                Why {app.company} specifically
                              </label>
                              <input
                                value={ms.whyCompany}
                                onChange={e => setMessageState(prev => ({ ...prev, [app.id]: { ...prev[app.id], whyCompany: e.target.value } }))}
                                placeholder={`e.g. "I have followed your expansion into Southern Europe and I want to be part of it"`}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50"
                              />
                            </div>
                          </div>

                          <button
                            onClick={() => generateMsg(client.name, app, app.id, isFollowUp)}
                            className="bg-[#C9A84C] text-black text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#b8953f] transition-colors">
                            Generate message
                          </button>

                          {ms.generated && (
                            <div className="mt-5">
                              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{ms.generated}</p>
                              </div>
                              <div className="flex items-center gap-4 mt-3">
                                <button
                                  onClick={() => { navigator.clipboard.writeText(ms.generated); }}
                                  className="bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-white/15 transition-colors">
                                  Copy message
                                </button>
                                {isFollowUp && (
                                  <button onClick={() => markFollowUpSent(app.id)}
                                    className="text-white/30 text-xs hover:text-white transition-colors">
                                    Mark as sent
                                  </button>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Contact Noelia */}
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
