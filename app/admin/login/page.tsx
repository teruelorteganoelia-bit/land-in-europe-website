"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (r.ok) {
      router.push("/admin");
    } else {
      setError("Wrong password");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0A0B0D] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-2">Land in Europe</p>
          <p className="text-white/30 text-xs">Admin access</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-1.5">Password</label>
              <input
                type="password" required value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                autoFocus
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/60 transition-all"
              />
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button
              type="submit" disabled={loading}
              className="w-full bg-[#C9A84C] text-black font-bold py-3.5 rounded-xl hover:bg-[#b8953f] transition-colors disabled:opacity-50 text-sm"
            >
              {loading ? "..." : "Enter"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
