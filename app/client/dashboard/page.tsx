"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Client, Application } from "@/lib/db";

type SafeClient = Omit<Client, "passwordHash">;

const STATUS_LABELS: Record<Application["status"], string> = {
  waiting: "Applied",
  interview: "Interview",
  offer: "Offer",
  rejected: "No reply",
};

const STATUS_DOT: Record<Application["status"], string> = {
  waiting: "bg-yellow-400",
  interview: "bg-blue-400",
  offer: "bg-emerald-400",
  rejected: "bg-white/15",
};

const STATUS_TEXT: Record<Application["status"], string> = {
  waiting: "text-yellow-400",
  interview: "text-blue-300",
  offer: "text-emerald-400",
  rejected: "text-white/25",
};

function daysSince(dateStr: string) {
  return Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
}

function daysLabel(days: number) {
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 14) return "1 week ago";
  return `${Math.floor(days / 7)} weeks ago`;
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
  const [messageState, setMessageState] = useState<Record<string, { open: boolean; generated: string }>>({});
  const [copied, setCopied] = useState<Record<string, boolean>>({});

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
    setMessageState(ms => ({ ...ms, [appId]: { open: false, generated: "" } }));
  };

  const generateMsg = (clientName: string, app: Application, appId: string, isFollowUp: boolean) => {
    const first = clientName.split(" ")[0];
    const recruiter = app.contacts?.length ? `Hi ${app.contacts[0].split(" ")[0]},` : "Hi,";
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

  const copyMessage = async (appId: string, msg: string) => {
    await navigator.clipboard.writeText(msg);
    setCopied(c => ({ ...c, [appId]: true }));
    setTimeout(() => setCopied(c => ({ ...c, [appId]: false })), 2000);
  };

  if (loading) return (
    <main className="min-h-screen bg-[#0A0B0D] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-[#C9A84C]/20 border-t-[#C9A84C]/80 animate-spin" />
        <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase">Loading your portal</p>
      </div>
    </main>
  );

  if (!client) return null;

  const completedSessions = client.sessions.filter(s => s.completed).length;
  const completedActions = client.actionPoints.filter(a => a.completed).length;
  const followUpDue = client.applications.filter(a => a.status === "waiting" && !a.followUpSent && daysSince(a.appliedDate) >= 14);
  const progress = client.sessions.length > 0 ? Math.round((completedSessions / client.sessions.length) * 100) : 0;

  return (
    <main className="min-h-screen bg-[#0A0B0D]">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#C9A84C]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/[0.05] bg-[#0A0B0D]/90 backdrop-blur-2xl">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-5 h-5 rounded-full border border-[#C9A84C]/40 flex items-center justify-center group-hover:border-[#C9A84C]/70 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            </div>
            <span className="text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase group-hover:text-white/90 transition-colors">Land in Europe</span>
          </a>
          <button onClick={logout} className="text-white/20 hover:text-white/50 text-[11px] tracking-wide transition-colors">Sign out</button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-16 relative z-10">

        {/* Follow-up alert */}
        {followUpDue.length > 0 && (
          <div className="mb-10 flex gap-4 rounded-2xl border border-[#C9A84C]/20 bg-gradient-to-r from-[#C9A84C]/10 to-[#C9A84C]/5 px-5 py-4">
            <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            </div>
            <div>
              <p className="text-[#C9A84C] text-sm font-bold mb-0.5">
                {followUpDue.length === 1 ? "1 application needs a follow-up" : `${followUpDue.length} applications need follow-ups`}
              </p>
              <p className="text-white/30 text-xs leading-relaxed">No reply after 2 weeks from {followUpDue.map(a => a.company).join(", ")}. Scroll to the tracker to send a message.</p>
            </div>
          </div>
        )}

        {/* Welcome */}
        <div className="mb-16">
          <p className="text-[#C9A84C]/70 text-[10px] font-bold uppercase tracking-[0.35em] mb-5">Your portal</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white leading-[1.05] mb-4">
            {client.name.split(" ")[0]}.
          </h1>
          <p className="text-white/20 text-sm">{client.package} · Started {client.startDate}</p>
        </div>

        {/* Progress bar + stats */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white/25 text-xs">Program progress</p>
            <p className="text-white/40 text-xs font-semibold">{progress}%</p>
          </div>
          <div className="h-1 bg-white/6 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-gradient-to-r from-[#C9A84C] to-[#e8c96d] rounded-full transition-all duration-700" style={{ width: `${progress}%` }} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { n: completedSessions, of: client.sessions.length, label: "Sessions" },
              { n: completedActions, of: client.actionPoints.length, label: "Actions" },
              { n: client.applications.length, of: null, label: "Applied" },
            ].map(s => (
              <div key={s.label} className="rounded-2xl border border-white/6 bg-white/[0.025] px-4 py-4 hover:border-white/10 transition-colors">
                <p className="font-serif text-3xl font-light text-white mb-1">
                  {s.n}
                  {s.of !== null && <span className="text-white/15 text-xl">/{s.of}</span>}
                </p>
                <p className="text-white/25 text-[10px] tracking-wide uppercase font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sessions */}
        <section className="mb-14">
          <SectionHeader>Coaching sessions</SectionHeader>
          <div className="space-y-2">
            {client.sessions.map((s, i) => (
              <div key={s.id} className={`relative flex gap-4 rounded-2xl border px-5 py-4 transition-all ${s.completed ? "border-[#C9A84C]/15 bg-[#C9A84C]/4" : "border-white/5 bg-transparent"}`}>
                {s.completed && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-[#C9A84C] rounded-r-full" />}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${s.completed ? "bg-[#C9A84C] text-black" : "border border-white/10 text-white/20"}`}>
                  {s.completed ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : i + 1}
                </div>
                <div className="flex-1 min-w-0 py-0.5">
                  <p className={`text-sm font-semibold leading-snug ${s.completed ? "text-white" : "text-white/30"}`}>{s.title}</p>
                  {s.date && <p className="text-white/18 text-xs mt-0.5">{s.date}</p>}
                  {s.notes && <p className="text-white/35 text-xs mt-2 leading-relaxed border-l border-white/8 pl-3">{s.notes}</p>}
                </div>
                {!s.completed && <span className="text-white/10 text-[10px] uppercase tracking-wider self-start mt-1.5 font-medium">Upcoming</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Action Points */}
        {client.actionPoints.length > 0 && (
          <section className="mb-14">
            <SectionHeader>Action points</SectionHeader>
            <div className="rounded-2xl border border-white/6 overflow-hidden divide-y divide-white/[0.04]">
              {client.actionPoints.map(a => (
                <div key={a.id} className={`flex items-start gap-4 px-5 py-4 transition-colors ${a.completed ? "bg-white/[0.02]" : "hover:bg-white/[0.015]"}`}>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${a.completed ? "bg-[#C9A84C]" : "border border-white/12"}`}>
                    {a.completed && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-5" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed pt-0.5 ${a.completed ? "text-white/20 line-through decoration-white/15" : "text-white/65"}`}>{a.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Applications */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <SectionHeader>Applications</SectionHeader>
            <button onClick={() => setAddingApp(v => !v)}
              className="inline-flex items-center gap-1.5 text-[#C9A84C] text-xs font-bold hover:text-[#e8c96d] transition-colors -mt-4">
              <span className="text-sm">+</span> Add
            </button>
          </div>

          {addingApp && (
            <form onSubmit={addApplication} className="mb-5 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-5 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <FieldInput value={newApp.company} onChange={e => setNewApp(a => ({ ...a, company: e.target.value }))} placeholder="Company" required autoFocus />
                <FieldInput value={newApp.role} onChange={e => setNewApp(a => ({ ...a, role: e.target.value }))} placeholder="Role" required />
              </div>
              <FieldInput value={newApp.offerUrl} onChange={e => setNewApp(a => ({ ...a, offerUrl: e.target.value }))} placeholder="Job posting link (optional)" />
              <div className="flex gap-3 pt-1">
                <button type="submit" className="bg-[#C9A84C] text-black text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#d4b05a] transition-colors">Save</button>
                <button type="button" onClick={() => setAddingApp(false)} className="text-white/30 text-xs px-4 py-2.5 hover:text-white/60 transition-colors">Cancel</button>
              </div>
            </form>
          )}

          {client.applications.length === 0 && !addingApp ? (
            <div className="rounded-2xl border border-dashed border-white/8 px-8 py-12 text-center">
              <div className="w-10 h-10 rounded-full border border-white/8 flex items-center justify-center mx-auto mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
              </div>
              <p className="text-white/25 text-sm mb-1 font-medium">No applications yet</p>
              <p className="text-white/15 text-xs mb-5 leading-relaxed">Track every role you apply for. Add the company, role, and job link.</p>
              <button onClick={() => setAddingApp(true)} className="inline-flex items-center gap-2 bg-white/6 border border-white/10 text-white/50 text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 hover:text-white/80 transition-all">
                + Add your first application
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {client.applications.map(app => {
                const days = daysSince(app.appliedDate);
                const isFollowUp = app.status === "waiting" && !app.followUpSent && days >= 14;
                const ms = messageState[app.id] || { open: false, generated: "" };

                return (
                  <div key={app.id} className={`rounded-2xl border overflow-hidden transition-all ${isFollowUp ? "border-[#C9A84C]/25 bg-gradient-to-br from-[#C9A84C]/6 to-transparent" : "border-white/6 bg-white/[0.018]"}`}>

                    {/* Header */}
                    <div className="px-5 pt-5 pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-white font-bold text-base leading-tight">{app.company}</p>
                          <p className="text-white/40 text-sm mt-0.5">{app.role}</p>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[app.status]}`} />
                          <span className={`text-xs font-semibold ${STATUS_TEXT[app.status]}`}>{STATUS_LABELS[app.status]}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-3 flex-wrap">
                        <span className="text-white/18 text-xs">{daysLabel(days)}</span>
                        {app.offerUrl && (
                          <a href={app.offerUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-white/25 text-xs hover:text-[#C9A84C]/70 transition-colors">
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            View offer
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Contacts */}
                    <div className="px-5 pb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {(app.contacts || []).map((name, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 bg-white/5 border border-white/8 rounded-full px-3 py-1 text-xs text-white/55 font-medium">
                            {name}
                            <button onClick={() => removeContact(app.id, i)} className="text-white/20 hover:text-white/50 ml-0.5 transition-colors leading-none">×</button>
                          </span>
                        ))}
                        <div className="flex items-center gap-2">
                          <input
                            value={newContact[app.id] || ""}
                            onChange={e => setNewContact(nc => ({ ...nc, [app.id]: e.target.value }))}
                            onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addContact(app.id, newContact[app.id] || ""); }}}
                            placeholder="+ Add recruiter"
                            className="bg-transparent text-xs text-white/35 placeholder:text-white/18 focus:outline-none focus:text-white/60 w-28 transition-colors"
                          />
                          {newContact[app.id] && (
                            <button onClick={() => addContact(app.id, newContact[app.id] || "")} className="text-[#C9A84C] text-xs font-bold">Save</button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="border-t border-white/[0.04] px-5 py-3 flex items-center gap-5 flex-wrap">
                      <a href={googleSearch(app.company)} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-white/25 text-xs hover:text-white/55 transition-colors">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                        </svg>
                        Find recruiter
                      </a>
                      <button
                        onClick={() => setMessageState(ms => ({ ...ms, [app.id]: { open: !ms[app.id]?.open, generated: ms[app.id]?.generated || "" } }))}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all ${isFollowUp ? "border-[#C9A84C]/40 text-[#C9A84C] bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20" : "border-white/8 text-white/35 hover:border-white/20 hover:text-white/65"}`}>
                        {ms.open ? "Close" : isFollowUp ? "Write follow-up" : "Outreach message"}
                      </button>
                      {app.followUpSent && <span className="text-white/15 text-xs font-medium">Follow-up sent</span>}
                    </div>

                    {/* Message builder */}
                    {ms.open && (
                      <div className="border-t border-white/[0.04] bg-black/25 px-5 py-5">
                        {!ms.generated ? (
                          <div className="space-y-4">
                            <div>
                              <label className="block text-[9px] font-bold text-white/20 uppercase tracking-[0.3em] mb-2">Your experience in one sentence</label>
                              <input
                                defaultValue={app.experience || ""}
                                onBlur={e => saveExperience(app.id, e.target.value)}
                                placeholder={`e.g. "I managed sourcing across 12 roles simultaneously in fintech"`}
                                className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/12 focus:outline-none focus:border-[#C9A84C]/40 transition-all"
                              />
                              <p className="text-white/15 text-[10px] mt-1.5 leading-relaxed">One specific line with a number or result makes recruiters stop. It saves here for next time.</p>
                            </div>
                            <button
                              onClick={() => generateMsg(client.name, app, app.id, isFollowUp)}
                              className="inline-flex items-center gap-2 bg-[#C9A84C] text-black text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#d4b05a] active:scale-[0.98] transition-all">
                              Generate message
                            </button>
                          </div>
                        ) : (
                          <div>
                            <div className="bg-white/[0.03] border border-white/6 rounded-xl px-5 py-4 mb-4">
                              <p className="text-white/65 text-sm leading-[1.85] whitespace-pre-line font-light">{ms.generated}</p>
                            </div>
                            <div className="flex items-center gap-4 flex-wrap">
                              <button
                                onClick={() => copyMessage(app.id, ms.generated)}
                                className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl border transition-all ${copied[app.id] ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400" : "bg-white/6 border-white/10 text-white hover:bg-white/10"}`}>
                                {copied[app.id] ? (
                                  <>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    Copied
                                  </>
                                ) : (
                                  <>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                                    </svg>
                                    Copy message
                                  </>
                                )}
                              </button>
                              <button onClick={() => setMessageState(ms => ({ ...ms, [app.id]: { ...ms[app.id], generated: "" } }))}
                                className="text-white/20 text-xs hover:text-white/50 transition-colors">Edit</button>
                              {isFollowUp && (
                                <button onClick={() => markFollowUpSent(app.id)}
                                  className="text-white/20 text-xs hover:text-white/50 transition-colors">Mark as sent</button>
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
        <div className="rounded-2xl border border-white/6 bg-white/[0.02] px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-bold mb-0.5">Need to reach Noelia?</p>
            <p className="text-white/25 text-xs leading-relaxed">Questions, feedback, or anything in between. WhatsApp is fastest.</p>
          </div>
          <div className="flex gap-2.5 flex-shrink-0">
            <a href="https://wa.me/46769763498" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#1fbe5a] transition-colors">
              WhatsApp
            </a>
            <a href="mailto:noelia@landineuropecoaching.com"
              className="inline-flex items-center border border-white/10 text-white/35 text-xs font-semibold px-4 py-2.5 rounded-full hover:border-white/25 hover:text-white/65 transition-all">
              Email
            </a>
          </div>
        </div>

        <p className="text-center text-white/8 text-[9px] tracking-[0.4em] uppercase mt-12 font-medium">Private. Confidential.</p>
      </div>
    </main>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-1 rounded-full bg-[#C9A84C]/60" />
      <p className="text-white/25 text-[10px] font-bold uppercase tracking-[0.3em]">{children}</p>
      <div className="flex-1 h-px bg-white/[0.04]" />
    </div>
  );
}

function FieldInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-black/20 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/18 focus:outline-none focus:border-[#C9A84C]/40 transition-all"
    />
  );
}
