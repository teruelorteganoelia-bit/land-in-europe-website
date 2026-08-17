"use client";
import { useState } from "react";
import PageNav from "../components/PageNav";

export default function CVFeedbackPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sub = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("https://formspree.io/f/maqgdozn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email, _subject: "Free CV Feedback Request" }),
      });
      if (r.ok) { setStatus("sent"); setForm({ name: "", email: "", role: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inp = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#C9A84C]/60 focus:ring-2 focus:ring-[#C9A84C]/10 transition-all";

  return (
    <main className="bg-white">
      <PageNav />

      {/* Hero */}
      <section className="pt-24 pb-16 px-6 bg-[#0A0B0D]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse"/>
            <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em]">Free · No commitment</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Send me your CV.<br/>
            <span className="text-[#C9A84C] italic font-normal">I will tell you honestly what is not working.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            I recruit for European companies every day. I know in the first ten seconds whether a CV will land. Send me yours and I will tell you exactly what I see.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-6 bg-[#1C1F26]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-8 text-center">What you get</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                n: "01",
                title: "What is not landing",
                body: "I tell you what a European recruiter sees in the first ten seconds and why your application might be getting skipped.",
              },
              {
                n: "02",
                title: "The one thing to fix first",
                body: "Not a list of 20 things. The single most important change that will make the biggest difference immediately.",
              },
              {
                n: "03",
                title: "An honest read",
                body: "Not generic feedback. Specific, direct, based on what actually works in the European market right now.",
              },
            ].map((c) => (
              <div key={c.n} className="bg-white/5 border border-white/8 rounded-2xl p-6">
                <p className="text-[#C9A84C]/50 text-xs font-mono mb-4">{c.n}</p>
                <h3 className="text-white font-semibold text-sm mb-2">{c.title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              Send me your CV
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Paste the link to your CV or describe your situation below. I reply within 24 hours with honest, specific feedback.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-[#C9A84C] flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4.5 4.5L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Got it.</h3>
                <p className="text-gray-400 text-sm">I will come back to you within 24 hours with honest feedback on your CV.</p>
              </div>
            ) : (
              <form onSubmit={sub} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Name *</label>
                    <input required name="name" value={form.name} onChange={ch} placeholder="Your name" className={inp} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={ch} placeholder="you@email.com" className={inp} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">What role or market are you targeting? *</label>
                  <input required name="role" value={form.role} onChange={ch} placeholder="e.g. Finance roles in the Netherlands, Sales Manager in Germany" className={inp} />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Paste a link to your CV or describe your situation *</label>
                  <textarea required name="message" value={form.message} onChange={ch} rows={5}
                    placeholder="Paste a Google Drive or Dropbox link to your CV, or tell me what is not working in your job search right now."
                    className={`${inp} resize-none`} />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-xs">Something went wrong. Email me directly at <a href="mailto:noelia@landineuropecoaching.com" className="underline">noelia@landineuropecoaching.com</a></p>
                )}
                <button type="submit" disabled={status === "sending"}
                  className="w-full bg-[#C9A84C] text-black font-bold py-4 rounded-xl hover:bg-[#b8953f] transition-colors disabled:opacity-50 text-sm shadow-lg shadow-[#C9A84C]/20">
                  {status === "sending" ? "Sending..." : "Get my free CV feedback"}
                </button>
                <p className="text-center text-xs text-gray-300">Free. No pitch. Just honest feedback.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs font-semibold text-gray-300 uppercase tracking-[0.2em] mb-10">What happens after the feedback</p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: "24h", label: "I reply within 24 hours" },
              { stat: "15+", label: "Nationalities coached" },
              { stat: "100%", label: "Honest, no generic advice" },
            ].map((s) => (
              <div key={s.stat}>
                <p className="font-serif text-4xl font-light text-[#C9A84C] mb-2">{s.stat}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-500 text-sm leading-relaxed italic mb-6">
              "I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process."
            </p>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Valdrin Januzi</p>
              <p className="text-gray-400 text-xs mt-0.5">Electrical Engineer, Energy Metering and Power Systems</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
