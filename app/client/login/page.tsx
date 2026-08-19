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
    <main className="min-h-screen bg-[#0A0B0D] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <a href="/" className="block text-center text-base font-bold text-white mb-10 tracking-tight">
          Land in Europe
        </a>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="font-serif text-2xl font-bold text-white mb-1">Client portal</h1>
          <p className="text-white/40 text-sm mb-8">Sign in to track your progress</p>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5">Email</label>
              <input
                type="email" required value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/60 transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5">Password</label>
              <input
                type="password" required value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/60 transition-all"
              />
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit" disabled={loading}
              className="w-full bg-[#C9A84C] text-black font-bold py-3.5 rounded-xl hover:bg-[#b8953f] transition-colors disabled:opacity-50 text-sm mt-2"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
          <p className="text-white/25 text-xs text-center mt-6">
            Need access? Contact{" "}
            <a href="mailto:noelia@landineuropecoaching.com" className="text-[#C9A84C] hover:underline">
              noelia@landineuropecoaching.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
