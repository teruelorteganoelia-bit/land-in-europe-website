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

export default function ClientDashboard() {
  const router = useRouter();
  const [client, setClient] = useState<SafeClient | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return (
    <main className="min-h-screen bg-[#0A0B0D] flex items-center justify-center">
      <p className="text-white/30 text-sm">Loading...</p>
    </main>
  );

  if (!client) return null;

  const completedSessions = client.sessions.filter(s => s.completed).length;
  const completedActions = client.actionPoints.filter(a => a.completed).length;

  return (
    <main className="min-h-screen bg-[#0A0B0D]">
      {/* Header */}
      <header className="border-b border-white/8 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="text-sm font-bold text-white tracking-tight">Land in Europe</a>
          <button onClick={logout} className="text-white/30 hover:text-white text-xs transition-colors">Sign out</button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">

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
          <h2 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest text-xs text-white/40">Coaching Sessions</h2>
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
                {!s.completed && (
                  <span className="text-white/20 text-xs flex-shrink-0 mt-0.5">Upcoming</span>
                )}
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
        {client.applications.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Applications Tracker</h2>
            <div className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden">
              <div className="hidden sm:grid grid-cols-5 px-5 py-3 border-b border-white/8 text-[10px] font-semibold text-white/25 uppercase tracking-widest">
                <span>Company</span>
                <span>Role</span>
                <span>Date Applied</span>
                <span>Status</span>
                <span>Follow up</span>
              </div>
              <div className="divide-y divide-white/5">
                {client.applications.map((app) => (
                  <div key={app.id} className="grid sm:grid-cols-5 gap-2 sm:gap-0 px-5 py-4 items-center">
                    <p className="text-white text-sm font-semibold">{app.company}</p>
                    <p className="text-white/50 text-sm">{app.role}</p>
                    <p className="text-white/30 text-xs sm:text-sm">{app.appliedDate}</p>
                    <div>
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_COLORS[app.status]}`}>
                        {STATUS_LABELS[app.status]}
                      </span>
                    </div>
                    <div>
                      <a
                        href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(app.company + " recruiter OR HR OR talent OR hiring manager")}&origin=GLOBAL_SEARCH_HEADER`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#0A66C2] text-xs font-semibold hover:underline"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Find contact
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
