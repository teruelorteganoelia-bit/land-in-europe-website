"use client";

import { useState } from "react";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

const CHECKLIST_PREVIEW = [
  { section: "Your CV", items: ["Two pages maximum, clean European format", "Professional summary targeting the right market", "Achievements with numbers, not responsibilities", "Language levels stated clearly (B2, C1, native)"] },
  { section: "Your LinkedIn", items: ["Headline with keywords recruiters actually search", "Location set to your target city", "About section written in first person", "Open to Work turned on in recruiter-only mode"] },
  { section: "Before you apply", items: ["One primary market understood in depth", "Local salary range researched", "10 to 15 target companies identified", "Three specialist recruiters bookmarked"] },
  { section: "Applications and follow-up", items: ["Cover note: three sentences, specific, not generic", "Follow-up after two weeks of silence", "Five active applications at any given time"] },
  { section: "Interviews", items: ["Clear answer to 'Tell me about yourself'", "Real answer to 'Why this country?'", "Salary number ready. Not 'whatever you think'", "Follow-up email sent the same day"] },
];

export default function ChecklistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setState("loading");
    try {
      const res = await fetch("/api/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">Free resource</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              The European Job Search Checklist
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              25 things to check before you apply to your next role in Europe. Most international candidates miss at least five. Get it sent to your inbox.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

            {/* Preview */}
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-6">What is inside:</p>
              <div className="space-y-6">
                {CHECKLIST_PREVIEW.map((section) => (
                  <div key={section.section}>
                    <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">{section.section}</p>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C9A84C]" viewBox="0 0 16 16" fill="none">
                            <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                            <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-300 mt-8">Written by Noelia Teruel Ortega, recruiter and career coach based in Stockholm.</p>
            </div>

            {/* Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-[#0A0B0D] rounded-3xl p-8 sm:p-10">
                {state === "done" ? (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 rounded-full bg-[#C9A84C]/15 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-6 h-6 text-[#C9A84C]" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="font-serif text-xl font-bold text-white mb-3">Check your inbox</p>
                    <p className="text-white/40 text-sm leading-relaxed">
                      The checklist is on its way. If you do not see it in the next few minutes, check your spam folder.
                    </p>
                    <p className="text-white/30 text-xs mt-5">
                      While you wait, go through the preview on the left and see how many boxes you can already tick.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Get the free checklist</p>
                    <p className="font-serif text-2xl font-bold text-white mb-2 leading-snug">
                      25 things to check before your next application
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed mb-8">
                      Free. Sent directly to your inbox. No spam.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-[0.12em] mb-2">
                          First name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-[0.12em] mb-2">
                          Email address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                        />
                      </div>
                      {state === "error" && (
                        <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                      )}
                      <button
                        type="submit"
                        disabled={state === "loading"}
                        className="w-full bg-[#C9A84C] text-black font-bold text-sm py-3.5 rounded-full hover:bg-[#b8953f] transition-colors disabled:opacity-60 mt-2"
                      >
                        {state === "loading" ? "Sending..." : "Send me the checklist"}
                      </button>
                    </form>
                    <p className="text-white/20 text-xs text-center mt-4 leading-relaxed">
                      By submitting you agree to receive occasional emails from Land in Europe. Unsubscribe at any time.
                    </p>
                  </>
                )}
              </div>

              {/* Social proof */}
              <div className="mt-6 flex items-start gap-3 bg-gray-50 rounded-2xl border border-gray-200 px-5 py-4">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#C9A84C] font-bold text-xs">N</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  "Most of the people I coach have missed at least five of these. Finding which five is usually what breaks the silence." <span className="font-semibold text-gray-700">— Noelia Teruel Ortega</span>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Blog link */}
        <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-400 text-sm mb-4">Want to go deeper on any of these?</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#C9A84C] transition-colors"
            >
              Read the guides on the blog
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
