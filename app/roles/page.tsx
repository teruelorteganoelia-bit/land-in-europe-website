"use client";
import { useState, useRef } from "react";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

const ROLES = [
  {
    id: "hunter-b2b",
    title: "Hunter B2B",
    subtitle: "Servicios y Soluciones IT",
    location: "Valencia · Híbrido",
    languages: "Español nativo · Inglés B2 mínimo",
    summary:
      "Impulsar la captación de nuevos clientes y la apertura de mercado mediante la venta consultiva B2B de servicios y soluciones tecnológicas. Perfil claramente orientado a la prospección, la generación de oportunidades y el cierre de nuevo negocio, con foco en consultoras, integradores y empresas del sector IT.",
    responsibilities: [
      "Identificar y prospectar nuevos clientes y mercados.",
      "Generar y desarrollar un pipeline propio de oportunidades comerciales.",
      "Mantener reuniones con CIO, CTO, responsables de IT, compras y otros decisores.",
      "Detectar necesidades y plantear soluciones junto con los equipos técnicos y de preventa.",
      "Elaborar y presentar propuestas comerciales, participando en concursos y RFP.",
      "Gestionar el ciclo de venta completo: prospección, cualificación, propuesta, negociación y cierre.",
      "Mantener actualizado el CRM y realizar previsiones comerciales.",
    ],
    requirements: [
      "Experiencia demostrable en captación de nuevos clientes y venta consultiva B2B de servicios o soluciones tecnológicas.",
      "Capacidad para generar oportunidades de forma proactiva y gestionar ciclos de venta con varios interlocutores.",
      "Experiencia en negociación y cierre de acuerdos.",
      "Manejo de CRM y gestión de pipeline.",
      "Inglés profesional, mínimo B2.",
    ],
    valued: [
      "Red de contactos en consultoras, integradores y empresas del sector IT.",
      "Experiencia en comercialización de servicios de consultoría tecnológica, cloud, ciberseguridad o datos.",
      "Experiencia en cuentas estratégicas y procesos de compra complejos.",
    ],
  },
  {
    id: "hunter-startups",
    title: "Hunter Startups",
    subtitle: "Servicios y Soluciones Tecnológicas",
    location: "Valencia · Híbrido",
    languages: "Español nativo · Inglés B2 mínimo",
    summary:
      "Captar nuevas startups como clientes de servicios y soluciones IT, combinando la prospección directa con el desarrollo de relaciones con aceleradoras, incubadoras, fondos de inversión, venture builders y otros actores del ecosistema emprendedor.",
    responsibilities: [
      "Identificar startups con necesidades tecnológicas, presupuesto y capacidad de decisión.",
      "Generar oportunidades mediante prospección directa, contactos, eventos y comunidades.",
      "Desarrollar relaciones con aceleradoras, incubadoras, fondos y venture builders.",
      "Diseñar acuerdos de colaboración y acciones comerciales conjuntas con actores del ecosistema.",
      "Entender los retos del cliente y preparar propuestas junto con preventa y los equipos técnicos.",
      "Gestionar el ciclo comercial completo, desde el primer contacto hasta la negociación y el cierre.",
      "Mantener actualizado el CRM y realizar seguimiento del pipeline.",
    ],
    requirements: [
      "Experiencia demostrable en captación de nuevos clientes y cierre de ventas B2B de servicios o soluciones tecnológicas.",
      "Conocimiento del entorno startup y de sus principales etapas de desarrollo.",
      "Capacidad para vender a founders y perfiles técnicos.",
      "Experiencia en prospección directa y generación de negocio a través de colaboradores.",
      "Manejo de CRM y disciplina en la gestión del pipeline.",
      "Inglés profesional, mínimo B2.",
    ],
    valued: [
      "Red activa de contactos en startups, aceleradoras, incubadoras y fondos.",
      "Experiencia vendiendo desarrollo de software, cloud, datos, inteligencia artificial o ciberseguridad.",
      "Participación en comunidades y eventos del ecosistema emprendedor.",
      "Inglés C1 y experiencia comercial internacional.",
    ],
  },
];

type Status = "idle" | "sending" | "sent" | "error";

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6.5" stroke="#C9A84C" strokeOpacity="0.4"/>
      <path d="M4 7l2 2 4-4" stroke="#C9A84C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function RolesPage() {
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApply = (roleId: string) => {
    setActiveRole(roleId);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  return (
    <>
      <PageNav />
      <main className="bg-[#0A0B0D] min-h-screen">

        {/* Hero */}
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-6">Posiciones abiertas</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
              Roles comerciales en una{" "}
              <span className="text-[#C9A84C] italic font-normal">empresa tecnológica en Valencia.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              Proceso gestionado por Land in Europe Coaching. Reviso cada candidatura personalmente y te respondo con feedback honesto.
            </p>
          </div>
        </section>

        {/* Role cards */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {ROLES.map((role) => (
              <div key={role.id} className="bg-[#1C1F26] border border-white/8 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-white/6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-light text-white mb-1">{role.title}</h2>
                      <p className="text-[#C9A84C] text-sm font-medium">{role.subtitle}</p>
                    </div>
                    <button
                      onClick={() => handleApply(role.id)}
                      className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0B0D] font-bold text-sm px-6 py-3 rounded-full hover:bg-[#E8C96A] transition-colors"
                    >
                      Enviar candidatura
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1a3.5 3.5 0 0 1 3.5 3.5c0 2.5-3.5 6.5-3.5 6.5S2.5 7 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.1"/><circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.1"/></svg>
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.1"/><path d="M6 3v3l2 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></svg>
                      A confirmar
                    </span>
                    <span>{role.languages}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 grid md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">Objetivo del puesto</p>
                      <p className="text-white/50 text-sm leading-relaxed">{role.summary}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">Responsabilidades</p>
                      <ul className="space-y-2.5">
                        {role.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check />
                            <span className="text-white/50 text-sm leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">Requisitos imprescindibles</p>
                      <ul className="space-y-2.5">
                        {role.requirements.map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Check />
                            <span className="text-white/50 text-sm leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/20 uppercase tracking-[0.15em] mb-3">Se valorará</p>
                      <ul className="space-y-2.5">
                        {role.valued.map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5"><circle cx="7" cy="7" r="6.5" stroke="white" strokeOpacity="0.1"/><path d="M4 7l2 2 4-4" stroke="white" strokeOpacity="0.2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <span className="text-white/30 text-sm leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application form */}
        <section ref={formRef} className="py-20 px-6" id="formulario">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Candidatura</p>
              <h2 className="font-serif text-3xl font-light text-white mb-3">Envía tu perfil</h2>
              <p className="text-white/40 text-sm leading-relaxed">
                Reviso cada candidatura personalmente. Si tu perfil encaja te contacto en los próximos días.
              </p>
            </div>
            <ApplicationForm preselectedRole={activeRole} />
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}

function ApplicationForm({ preselectedRole }: { preselectedRole: string | null }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [cvName, setCvName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    role: preselectedRole ?? "hunter-b2b",
    name: "",
    email: "",
    phone: "",
    city: "",
    linkedin: "",
    english: "",
    notice: "",
    salary: "",
    workauth: "",
    message: "",
    consent: false,
    website: "", // honeypot
  });

  // Sync role when preselectedRole changes from a card click
  const currentRole = preselectedRole ?? form.role;

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
      setErrorMsg("El CV no puede superar los 4 MB.");
      e.target.value = "";
      return;
    }
    setCvName(file.name);
    setErrorMsg("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    const file = fileRef.current?.files?.[0];
    if (!file) { setErrorMsg("Adjunta tu CV antes de enviar."); return; }

    setStatus("sending");
    const fd = new FormData();
    fd.append("role", preselectedRole ?? form.role);
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("phone", form.phone);
    fd.append("city", form.city);
    fd.append("linkedin", form.linkedin);
    fd.append("english", form.english);
    fd.append("notice", form.notice);
    fd.append("salary", form.salary);
    fd.append("workauth", form.workauth);
    fd.append("message", form.message);
    fd.append("consent", form.consent ? "true" : "");
    fd.append("website", form.website); // honeypot
    fd.append("cv", file);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) { setErrorMsg(json.error ?? "Error al enviar."); setStatus("error"); return; }
      setStatus("sent");
    } catch {
      setErrorMsg("Error de conexión. Inténtalo de nuevo.");
      setStatus("error");
    }
  };

  const inp = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all";
  const label = "block text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-1.5";

  if (status === "sent") {
    return (
      <div className="bg-[#1C1F26] border border-white/8 rounded-2xl p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-6">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11l5 5L18 6" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="font-serif text-2xl font-light text-white mb-3">Candidatura recibida.</h3>
        <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
          He recibido tu CV y tus datos. Si tu perfil encaja con la posición te contactaré en los próximos días.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-[#1C1F26] border border-white/8 rounded-2xl p-8 space-y-5">
      {/* Honeypot — hidden from humans */}
      <input type="text" name="website" value={form.website} onChange={ch} tabIndex={-1} aria-hidden="true" className="absolute opacity-0 pointer-events-none w-0 h-0" autoComplete="off" />

      {/* Role selector */}
      <div>
        <label className={label}>Puesto al que aplicas *</label>
        <select name="role" value={preselectedRole ?? form.role} onChange={ch} className={inp} required>
          <option value="hunter-b2b">Hunter B2B — Servicios y Soluciones IT</option>
          <option value="hunter-startups">Hunter Startups — Servicios y Soluciones Tecnológicas</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Nombre completo *</label>
          <input required name="name" value={form.name} onChange={ch} placeholder="Tu nombre" className={inp} />
        </div>
        <div>
          <label className={label}>Email *</label>
          <input required type="email" name="email" value={form.email} onChange={ch} placeholder="tu@email.com" className={inp} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Teléfono *</label>
          <input required name="phone" value={form.phone} onChange={ch} placeholder="+34 600 000 000" className={inp} />
        </div>
        <div>
          <label className={label}>Ciudad de residencia *</label>
          <input required name="city" value={form.city} onChange={ch} placeholder="Valencia" className={inp} />
        </div>
      </div>

      <div>
        <label className={label}>URL de LinkedIn *</label>
        <input required type="url" name="linkedin" value={form.linkedin} onChange={ch} placeholder="https://linkedin.com/in/tu-perfil" className={inp} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Nivel de inglés *</label>
          <select required name="english" value={form.english} onChange={ch} className={inp}>
            <option value="">Selecciona</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="Nativo">Nativo</option>
          </select>
        </div>
        <div>
          <label className={label}>Preaviso *</label>
          <input required name="notice" value={form.notice} onChange={ch} placeholder="Ej: 1 mes, inmediata..." className={inp} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Horquilla salarial anual bruta *</label>
          <input required name="salary" value={form.salary} onChange={ch} placeholder="Ej: 35.000 — 45.000 €" className={inp} />
        </div>
        <div>
          <label className={label}>Autorización de trabajo en España *</label>
          <select required name="workauth" value={form.workauth} onChange={ch} className={inp}>
            <option value="">Selecciona</option>
            <option value="yes">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* CV upload */}
      <div>
        <label className={label}>CV (PDF o DOCX, máx. 4 MB) *</label>
        <div
          className="border border-dashed border-white/15 rounded-xl px-4 py-5 text-center cursor-pointer hover:border-[#C9A84C]/40 transition-colors"
          onClick={() => fileRef.current?.click()}
        >
          <input ref={fileRef} type="file" name="cv" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFile} className="hidden" required />
          {cvName ? (
            <p className="text-[#C9A84C] text-sm font-medium">{cvName}</p>
          ) : (
            <>
              <p className="text-white/30 text-sm mb-1">Haz clic para seleccionar tu CV</p>
              <p className="text-white/15 text-xs">PDF o DOCX · Máximo 4 MB</p>
            </>
          )}
        </div>
      </div>

      {/* Optional message */}
      <div>
        <label className={label}>Mensaje (opcional)</label>
        <textarea name="message" value={form.message} onChange={ch} rows={3} placeholder="Algo que quieras añadir sobre tu candidatura..." className={`${inp} resize-none`} />
      </div>

      {/* GDPR consent */}
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={form.consent}
          onChange={ch}
          required
          className="mt-0.5 w-4 h-4 accent-[#C9A84C] flex-shrink-0"
        />
        <label htmlFor="consent" className="text-xs text-white/35 leading-relaxed cursor-pointer">
          Acepto que mis datos sean tratados por Noelia Teruel Ortega (Land in Europe Coaching) con la finalidad de gestionar mi candidatura para el proceso de selección indicado. Los datos se conservarán durante el tiempo necesario para resolver el proceso y hasta un máximo de 2 años, salvo que solicites su supresión antes. Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición y portabilidad escribiendo a{" "}
          <a href="mailto:noelia@landineuropecoaching.com" className="text-[#C9A84C] hover:underline">noelia@landineuropecoaching.com</a>.{" "}
          <a href="/privacidad" target="_blank" className="text-[#C9A84C] hover:underline">Política de privacidad completa.</a>
        </label>
      </div>

      {(status === "error" || errorMsg) && (
        <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          {errorMsg || "Error al enviar. Inténtalo de nuevo."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#C9A84C] text-[#0A0B0D] font-bold py-4 rounded-xl hover:bg-[#E8C96A] transition-colors disabled:opacity-50 text-sm shadow-lg shadow-[#C9A84C]/20"
      >
        {status === "sending" ? "Enviando..." : "Enviar candidatura"}
      </button>
    </form>
  );
}
