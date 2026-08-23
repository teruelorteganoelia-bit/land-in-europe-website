"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const r = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (r.ok) {
      router.push("/client/dashboard");
    } else {
      const data = await r.json();
      setError(data.error || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0A0B0D] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C9A84C]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A84C]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[400px] relative">

        {/* Logo */}
        <a href="/" className="flex flex-col items-center gap-3 mb-12 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center group-hover:border-[#C9A84C]/60 transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C9A84C]" />
            </div>
            <div className="absolute inset-0 rounded-full bg-[#C9A84C]/10 blur-lg" />
          </div>
          <span className="text-white font-bold text-sm tracking-[0.2em] uppercase">Land in Europe</span>
        </a>

        {/* Card */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* gradient border */}
          <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-b from-white/12 to-white/4 pointer-events-none" />
          <div className="relative bg-[#111318] rounded-3xl px-8 py-9">

            <div className="mb-8">
              <h1 className="font-serif text-3xl font-bold text-white leading-tight mb-2">Welcome back</h1>
              <p className="text-white/30 text-sm leading-relaxed">Your private client portal is ready.</p>
            </div>

            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-white/25 uppercase tracking-[0.25em] mb-2">Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full bg-white/[0.04] border border-white/8 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#C9A84C]/50 focus:bg-white/[0.06] transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-white/25 uppercase tracking-[0.25em] mb-2">Password</label>
                <input
                  type="password" required value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full bg-white/[0.04] border border-white/8 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#C9A84C]/50 focus:bg-white/[0.06] transition-all"
                />
              </div>

              {error && (
                <div className="bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3">
                  <p className="text-red-400 text-xs leading-relaxed">{error}</p>
                </div>
              )}

              <button
                type="submit" disabled={loading}
                className="w-full relative overflow-hidden bg-[#C9A84C] text-black font-bold py-4 rounded-2xl hover:bg-[#d4b05a] active:scale-[0.99] transition-all disabled:opacity-50 text-sm tracking-wide mt-2"
              >
                <span className={`transition-opacity ${loading ? "opacity-0" : "opacity-100"}`}>Sign in to your portal</span>
                {loading && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                  </span>
                )}
              </button>
            </form>

            <div className="mt-7 pt-6 border-t border-white/6 text-center">
              <p className="text-white/18 text-xs leading-relaxed">
                No access yet?{" "}
                <a href="mailto:noelia@landineuropecoaching.com" className="text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors underline underline-offset-2">
                  Contact Noelia
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-8 h-px bg-white/8" />
          <p className="text-white/12 text-[9px] tracking-[0.3em] uppercase font-medium">Private. Confidential.</p>
          <div className="w-8 h-px bg-white/8" />
        </div>
      </div>
    </main>
  );
}
