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
  waiting: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  interview: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  offer: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  rejected: "bg-white/5 text-white/25 border-white/8",
};

function daysSince(dateStr: string) {
  const d = new Date(dateStr);
  const now = new Date();
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
}

function daysLabel(days: number) {
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

function googleSearch(company: string) {
  return `https://www.google.com/search?q=${encodeURIComponent(`site:linkedin.com/in "${company}" ("talent acquisition" OR "recruiter" OR "HR manager" OR "hiring manager")`)}`;
}

export default function ClientDashboard() {
  const router = useRouter();
  const [client, setClient] = useState<SafeClient | null>(null);
  const [loading, setLoading] = useState(true);
  const [newApp, setNewApp] = useState({ company: "", role: "", offerUrl: "" });
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
      setNewApp({ company: "", role: "", offerUrl: "" });
      setAddingApp(false);
    }
  };

  const addContact = async (appId: string, name: string) => {
    if (!name.trim()) return;
    const app = client?.applications.find(a => a.id === appId);
    if (!app) return;
    const contacts = [...(app.contacts || []), name.trim()];
    await fetch("/api/client/applications", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: appId, contacts }) });
    setClient(c => c ? { ...c, applications: c.applications.map(a => a.id === appId ? { ...a, contacts } : a) } : c);
    setNewContact(nc => ({ ...nc, [appId]: "" }));
  };

  const removeContact = async (appId: string, index: number) => {
    const app = client?.applications.find(a => a.id === appId);
    if (!app) return;
    const contacts = (app.contacts || []).filter((_, i) => i !== index);
    await fetch("/api/client/applications", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: appId, contacts }) });
    setClient(c => c ? { ...c, applications: c.applications.map(a => a.id === appId ? { ...a, contacts } : a) } : c);
  };

  const markFollowUpSent = async (appId: string) => {
    await fetch("/api/client/applications", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: appId, followUpSent: true }) });
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
    const first = clientName.split(" ")[0];
    const recruiter = app.contacts && app.contacts.length > 0 ? `Hi ${app.contacts[0].split(" ")[0]},` : "Hi,";
    const experience = app.experience?.trim();

    const msg = isFollowUp
      ? `${recruiter}\n\nI applied for the ${app.role} position at ${app.company} a couple of weeks ago and wanted to follow up directly.\n\n${experience ? experience + "." : "I have done this kind of work before and I know I can contribute from day one."} I am genuinely interested in ${app.company} specifically and I would not be following up if I did not think this was a real fit.\n\nWould you be able to let me know if my application is still under consideration?\n\n${first}`
      : `${recruiter}\n\nI applied for the ${app.role} position at ${app.company} and wanted to reach out directly.\n\n${experience ? experience + "." : "I have solid experience in this area and I know what good looks like in this role."} I am genuinely interested in ${app.company} specifically, not just the role.\n\nWould you be open to a quick 10-minute call?\n\n${first}`;

    setMessageState(ms => ({ ...ms, [appId]: { ...ms[appId], generated: msg } }));
  };

  const saveExperience = async (appId: string, experience: string) => {
    await fetch("/api/client/applications", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: appId, experience }) });
    setClient(c => c ? { ...c, applications: c.applications.map(a => a.id === appId ? { ...a, experience } : a) } : c);
  };

  if (loading) return (
    <main className="min-h-screen bg-[#0A0B0D] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-[#C9A84C]/30 border-t-[#C9A84C] animate-spin" />
        <p className="text-white/20 text-xs tracking-widest uppercase">Loading</p>
      </div>
    </main>
  );

  if (!client) return null;

  const completedSessions = client.sessions.filter(s => s.completed).length;
  const completedActions = client.actionPoints.filter(a => a.completed).length;
  const followUpDue = client.applications.filter(a => a.status === "waiting" && !a.followUpSent && daysSince(a.appliedDate) >= 14);

  return (
    <main className="min-h-screen bg-[#0A0B0D] relative">
      {/* Subtle top glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C9A84C]/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/6 bg-[#0A0B0D]/80 backdrop-blur-xl px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-[#C9A84C]/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            </div>
            <span className="text-white text-xs font-bold tracking-widest uppercase">Land in Europe</span>
          </div>
          <button onClick={logout} className="text-white/25 hover:text-white/60 text-xs transition-colors tracking-wide">Sign out</button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-14 relative">

        {/* Follow-up alert */}
        {followUpDue.length > 0 && (
          <div className="mb-10 relative overflow-hidden rounded-2xl border border-[#C9A84C]/25 bg-[#C9A84C]/8 px-6 py-5">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C]" />
            <p className="text-[#C9A84C] text-sm font-semibold mb-1">
              {followUpDue.length === 1 ? "Time to follow up" : `${followUpDue.length} applications need follow-ups`}
            </p>
            <p className="text-white/35 text-xs leading-relaxed">No reply after 2 weeks from {followUpDue.map(a => a.company).join(", ")}. Use the message builder below.</p>
          </div>
        )}

        {/* Welcome */}
        <div className="mb-14">
          <p className="text-[#C9A84C] text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">Client portal</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
            Welcome back,<br />{client.name.split(" ")[0]}.
          </h1>
          <p className="text-white/25 text-sm">{client.package} · Since {client.startDate}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-14">
          {[
            { label: "Sessions", value: `${completedSessions}`, total: client.sessions.length },
            { label: "Actions done", value: `${completedActions}`, total: client.actionPoints.length },
            { label: "Applications", value: `${client.applications.length}`, total: null },
          ].map(s => (
            <div key={s.label} className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="font-serif text-3xl font-light text-white mb-1">
                {s.value}
                {s.total !== null && <span className="text-white/20 text-lg">/{s.total}</span>}
              </p>
              <p className="text-white/30 text-[11px] tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Sessions */}
        <section className="mb-14">
          <SectionLabel>Coaching sessions</SectionLabel>
          <div className="space-y-2">
            {client.sessions.map((s, i) => (
              <div key={s.id} className={`flex items-start gap-4 rounded-2xl border px-5 py-4 transition-all ${s.completed ? "bg-white/[0.04] border-[#C9A84C]/15" : "bg-transparent border-white/6"}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold ${s.completed ? "bg-[#C9A84C] text-black" : "border border-white/15 text-white/20"}`}>
                  {s.completed ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-6" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold leading-snug ${s.completed ? "text-white" : "text-white/35"}`}>{s.title}</p>
                  {s.date && <p className="text-white/20 text-xs mt-0.5">{s.date}</p>}
                  {s.notes && <p className="text-white/35 text-xs mt-2 leading-relaxed">{s.notes}</p>}
                </div>
                {!s.completed && <span className="text-white/15 text-[10px] uppercase tracking-wider flex-shrink-0 mt-1">Upcoming</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Action Points */}
        {client.actionPoints.length > 0 && (
          <section className="mb-14">
            <SectionLabel>Action points</SectionLabel>
            <div className="rounded-2xl border border-white/6 bg-white/[0.02] divide-y divide-white/5 overflow-hidden">
              {client.actionPoints.map((a) => (
                <div key={a.id} className="flex items-center gap-4 px-5 py-4">
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${a.completed ? "bg-[#C9A84C]" : "border border-white/15"}`}>
                    {a.completed && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${a.completed ? "text-white/25 line-through" : "text-white/70"}`}>{a.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Applications */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <SectionLabel>Applications tracker</SectionLabel>
            <button onClick={() => setAddingApp(true)}
              className="inline-flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold hover:text-[#d4b05a] transition-colors">
              <span className="text-base leading-none">+</span> Add
            </button>
          </div>

          {addingApp && (
            <form onSubmit={addApplication} className="mb-4 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-5 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <PremiumInput value={newApp.company} onChange={e => setNewApp(a => ({ ...a, company: e.target.value }))} placeholder="Company name" required autoFocus />
                <PremiumInput value={newApp.role} onChange={e => setNewApp(a => ({ ...a, role: e.target.value }))} placeholder="Role applied for" required />
              </div>
              <PremiumInput value={newApp.offerUrl} onChange={e => setNewApp(a => ({ ...a, offerUrl: e.target.value }))} placeholder="Job posting link (optional)" />
              <div className="flex gap-3 pt-1">
                <button type="submit" className="bg-[#C9A84C] text-black text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#d4b05a] transition-colors">Save</button>
                <button type="button" onClick={() => setAddingApp(false)} className="text-white/30 text-xs px-4 py-2.5 hover:text-white transition-colors">Cancel</button>
              </div>
            </form>
          )}

          {client.applications.length === 0 && !addingApp ? (
            <div className="rounded-2xl border border-dashed border-white/10 px-6 py-10 text-center">
              <p className="text-white/20 text-sm mb-3">No applications tracked yet.</p>
              <button onClick={() => setAddingApp(true)} className="text-[#C9A84C] text-xs font-semibold hover:underline">Add your first application</button>
            </div>
          ) : (
            <div className="space-y-3">
              {client.applications.map((app) => {
                const days = daysSince(app.appliedDate);
                const isFollowUp = app.status === "waiting" && !app.followUpSent && days >= 14;
                const ms = messageState[app.id] || { open: false, achievement: "", whyCompany: "", generated: "" };

                return (
                  <div key={app.id} className={`rounded-2xl border overflow-hidden transition-all ${isFollowUp ? "border-[#C9A84C]/25 bg-[#C9A84C]/3" : "border-white/8 bg-white/[0.02]"}`}>

                    {/* Card header */}
                    <div className="px-5 pt-5 pb-4 flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-3 flex-wrap">
                          <div>
                            <p className="text-white font-bold text-base leading-snug">{app.company}</p>
                            <p className="text-white/40 text-sm mt-0.5">{app.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          <span className="text-white/20 text-xs">{daysLabel(days)}</span>
                          <span className="text-white/10 text-xs">·</span>
                          <span className="text-white/20 text-xs">{app.appliedDate}</span>
                          {app.offerUrl && (
                            <a href={app.offerUrl} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#C9A84C]/50 text-xs hover:text-[#C9A84C] transition-colors">
                              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                              </svg>
                              Job posting
                            </a>
                          )}
                        </div>
                      </div>
                      <span className={`flex-shrink-0 inline-block text-[11px] font-semibold px-3 py-1 rounded-full border ${STATUS_COLORS[app.status]}`}>
                        {STATUS_LABELS[app.status]}
                      </span>
                    </div>

                    {/* Recruiters */}
                    <div className="px-5 pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {(app.contacts || []).map((name, i) => (
                          <div key={i} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]/60" />
                            <span className="text-white/70 text-xs font-medium">{name}</span>
                            <button onClick={() => removeContact(app.id, i)} className="text-white/20 hover:text-white/50 text-xs ml-0.5 transition-colors">×</button>
                          </div>
                        ))}
                        <div className="flex items-center gap-1.5">
                          <input
                            value={newContact[app.id] || ""}
                            onChange={e => setNewContact(nc => ({ ...nc, [app.id]: e.target.value }))}
                            onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addContact(app.id, newContact[app.id] || ""); }}}
                            placeholder="+ Recruiter name"
                            className="bg-transparent text-xs text-white/40 placeholder:text-white/20 focus:outline-none focus:text-white w-32 transition-colors"
                          />
                          {newContact[app.id] && (
                            <button onClick={() => addContact(app.id, newContact[app.id] || "")}
                              className="text-[#C9A84C] text-xs font-semibold">Save</button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions bar */}
                    <div className="border-t border-white/5 px-5 py-3 flex items-center gap-4 flex-wrap">
                      <a href={googleSearch(app.company)} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-white/30 text-xs font-medium hover:text-white/70 transition-colors">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                        Find recruiter
                      </a>

                      <button onClick={() => toggleMessage(app.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                          isFollowUp
                            ? "bg-[#C9A84C]/15 text-[#C9A84C] border-[#C9A84C]/30 hover:bg-[#C9A84C]/25"
                            : "bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/25"
                        }`}>
                        {ms.open ? "Close" : isFollowUp ? "Write follow-up" : "Write message"}
                      </button>

                      {app.followUpSent && <span className="text-white/15 text-xs">Follow-up sent</span>}
                    </div>

                    {/* Message builder */}
                    {ms.open && (
                      <div className="border-t border-white/6 bg-black/20 px-5 py-5">
                        {!ms.generated ? (
                          <div className="space-y-4">
                            <div>
                              <label className="block text-white/25 text-[10px] font-semibold uppercase tracking-[0.2em] mb-2">
                                Your experience in one sentence
                              </label>
                              <input
                                defaultValue={app.experience || ""}
                                onBlur={e => saveExperience(app.id, e.target.value)}
                                placeholder={`e.g. "I spent 3 years managing finance teams across 4 countries"`}
                                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#C9A84C]/40 transition-all"
                              />
                              <p className="text-white/15 text-[10px] mt-1.5 leading-relaxed">This is the line that makes recruiters stop. Be specific, use a number if you can.</p>
                            </div>
                            <button
                              onClick={() => generateMsg(client.name, app, app.id, isFollowUp)}
                              className="bg-[#C9A84C] text-black text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#d4b05a] active:scale-[0.98] transition-all">
                              Generate message
                            </button>
                          </div>
                        ) : (
                          <div>
                            <div className="bg-white/[0.04] border border-white/8 rounded-xl px-5 py-4 mb-4">
                              <p className="text-white/75 text-sm leading-[1.8] whitespace-pre-line font-light">{ms.generated}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => navigator.clipboard.writeText(ms.generated)}
                                className="inline-flex items-center gap-2 bg-white/8 text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-white/12 transition-colors border border-white/10">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                                </svg>
                                Copy message
                              </button>
                              <button onClick={() => setMessageState(ms => ({ ...ms, [app.id]: { ...ms[app.id], generated: "" } }))}
                                className="text-white/25 text-xs hover:text-white/60 transition-colors">Edit</button>
                              {isFollowUp && (
                                <button onClick={() => markFollowUpSent(app.id)}
                                  className="text-white/25 text-xs hover:text-white/60 transition-colors">Mark as sent</button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Contact */}
        <div className="rounded-2xl border border-white/6 bg-white/[0.02] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-1">
            <p className="text-white text-sm font-semibold mb-0.5">Need to reach Noelia?</p>
            <p className="text-white/25 text-xs">WhatsApp or email, whatever is easier.</p>
          </div>
          <div className="flex gap-3">
            <a href="https://wa.me/46769763498" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/90 text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#25D366] transition-colors">
              WhatsApp
            </a>
            <a href="mailto:noelia@landineuropecoaching.com"
              className="inline-flex items-center gap-2 border border-white/10 text-white/40 text-xs font-semibold px-4 py-2.5 rounded-full hover:border-white/25 hover:text-white/70 transition-all">
              Email
            </a>
          </div>
        </div>

        <p className="text-center text-white/8 text-[10px] tracking-widest uppercase mt-12">Private · Confidential</p>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
      <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.25em]">{children}</p>
    </div>
  );
}

function PremiumInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/40 transition-all"
    />
  );
}
