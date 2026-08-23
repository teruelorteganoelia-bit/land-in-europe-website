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
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-sm relative">
        {/* Logo */}
        <div className="text-center mb-10">
          <a href="/" className="inline-flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-[#C9A84C]/40 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
            </div>
            <span className="text-white font-bold text-sm tracking-widest uppercase">Land in Europe</span>
          </a>
        </div>

        {/* Card */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/8 to-white/3 pointer-events-none" />
          <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="mb-8">
              <h1 className="font-serif text-2xl font-bold text-white mb-1.5">Welcome back</h1>
              <p className="text-white/35 text-sm">Sign in to your private client portal</p>
            </div>

            <form onSubmit={submit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-2">Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#C9A84C]/50 focus:bg-black/40 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-2">Password</label>
                <input
                  type="password" required value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#C9A84C]/50 focus:bg-black/40 transition-all"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5">
                  <p className="text-red-400 text-xs">{error}</p>
                </div>
              )}

              <button
                type="submit" disabled={loading}
                className="w-full bg-[#C9A84C] text-black font-bold py-4 rounded-2xl hover:bg-[#d4b05a] active:scale-[0.99] transition-all disabled:opacity-50 text-sm tracking-wide mt-1"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/6 text-center">
              <p className="text-white/20 text-xs leading-relaxed">
                Need access?{" "}
                <a href="mailto:noelia@landineuropecoaching.com" className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors">
                  Contact Noelia
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-white/10 text-[10px] mt-8 tracking-widest uppercase">Private · Confidential</p>
      </div>
    </main>
  );
}
