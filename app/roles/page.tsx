"use client";
import { useState, useRef } from "react";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

const ROLES = {
  es: [
    {
      id: "hunter-b2b",
      title: "Hunter B2B",
      subtitle: "Servicios y Soluciones IT",
      location: "Valencia · Híbrido",
      languages: "Español nativo · Inglés B2 mínimo",
      summary: "Impulsar la captación de nuevos clientes y la apertura de mercado mediante la venta consultiva B2B de servicios y soluciones tecnológicas. Perfil claramente orientado a la prospección, la generación de oportunidades y el cierre de nuevo negocio, con foco en consultoras, integradores y empresas del sector IT.",
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
      summary: "Captar nuevas startups como clientes de servicios y soluciones IT, combinando la prospección directa con el desarrollo de relaciones con aceleradoras, incubadoras, fondos de inversión, venture builders y otros actores del ecosistema emprendedor.",
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
  ],
  en: [
    {
      id: "hunter-b2b",
      title: "B2B Hunter",
      subtitle: "IT Services & Solutions",
      location: "Valencia · Hybrid",
      languages: "Native Spanish · English B2 minimum",
      summary: "Drive new client acquisition and market expansion through consultative B2B sales of technology services and solutions. We are looking for a profile clearly focused on prospecting, opportunity generation, and closing new business, with a focus on consultancies, integrators, and IT companies.",
      responsibilities: [
        "Identify and prospect new clients and markets.",
        "Build and develop a personal pipeline of commercial opportunities.",
        "Hold meetings with CIOs, CTOs, IT managers, procurement and other decision-makers.",
        "Identify client needs and propose solutions together with technical and pre-sales teams.",
        "Prepare and present commercial proposals, participating in tenders and RFPs.",
        "Manage the full sales cycle: prospecting, qualification, proposal, negotiation and close.",
        "Keep CRM up to date and produce sales forecasts.",
      ],
      requirements: [
        "Proven experience in new client acquisition and consultative B2B sales of IT services or technology solutions.",
        "Ability to generate opportunities proactively and manage sales cycles with multiple stakeholders.",
        "Experience in negotiation and closing deals.",
        "CRM usage and pipeline management.",
        "Professional English, minimum B2.",
      ],
      valued: [
        "Network of contacts in consultancies, integrators and IT companies.",
        "Experience selling technology consulting services, cloud, cybersecurity or data services.",
        "Experience with strategic accounts and complex procurement processes.",
      ],
    },
    {
      id: "hunter-startups",
      title: "Startup Hunter",
      subtitle: "Technology Services & Solutions",
      location: "Valencia · Hybrid",
      languages: "Native Spanish · English B2 minimum",
      summary: "Acquire new startups as clients for IT services and solutions, combining direct prospecting with relationship-building across accelerators, incubators, investment funds, venture builders and other players in the entrepreneurial ecosystem.",
      responsibilities: [
        "Identify startups with technology needs, budget and decision-making capacity.",
        "Generate opportunities through direct prospecting, contacts, events and communities.",
        "Build relationships with accelerators, incubators, funds and venture builders.",
        "Design collaboration agreements and joint commercial actions with ecosystem players.",
        "Understand client challenges and prepare proposals with pre-sales and technical teams.",
        "Manage the full commercial cycle from first contact through negotiation and close.",
        "Keep CRM up to date and track pipeline and sales forecasts.",
      ],
      requirements: [
        "Proven experience in new client acquisition and closing B2B sales of technology services or solutions.",
        "Knowledge of the startup environment and its main stages of development.",
        "Ability to sell to founders and technical profiles.",
        "Experience in direct prospecting and generating business through collaborators.",
        "CRM usage and pipeline discipline.",
        "Professional English, minimum B2.",
      ],
      valued: [
        "Active network of contacts in startups, accelerators, incubators and funds.",
        "Experience selling software development, cloud, data, AI or cybersecurity services.",
        "Participation in entrepreneurial ecosystem communities and events.",
        "C1 English and international commercial experience.",
      ],
    },
  ],
};

const UI = {
  es: {
    eyebrow: "Posiciones abiertas",
    hero: "Roles comerciales en una",
    heroAccent: "empresa tecnológica en Valencia.",
    heroSub: "Proceso gestionado por Land in Europe Coaching. Reviso cada candidatura personalmente y te respondo con feedback honesto.",
    apply: "Enviar candidatura",
    confirm: "A confirmar",
    objective: "Objetivo del puesto",
    responsibilities: "Responsabilidades",
    requirements: "Requisitos imprescindibles",
    valued: "Se valorará",
    formEyebrow: "Candidatura",
    formTitle: "Envía tu perfil",
    formSub: "Reviso cada candidatura personalmente. Si tu perfil encaja con la posición te contactaré en los próximos días.",
    roleLabel: "Puesto al que aplicas *",
    roleOptions: ["B2B Hunter — IT Services & Solutions", "Startup Hunter — Technology Services & Solutions"],
    nameLabel: "Nombre completo *",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email *",
    phoneLabel: "Teléfono *",
    phonePlaceholder: "+34 600 000 000",
    cityLabel: "Ciudad de residencia *",
    cityPlaceholder: "Valencia",
    linkedinLabel: "URL de LinkedIn *",
    englishLabel: "Nivel de inglés *",
    englishOptions: ["Selecciona", "B2", "C1", "C2", "Nativo"],
    noticeLabel: "Preaviso *",
    noticePlaceholder: "Ej: 1 mes, inmediata...",
    salaryLabel: "Horquilla salarial anual bruta *",
    salaryPlaceholder: "Ej: 40.000 €",
    workauthLabel: "Autorización de trabajo en España *",
    workauthOptions: ["Selecciona", "Sí", "No"],
    cvLabel: "CV (PDF o DOCX, máx. 4 MB) *",
    cvClick: "Haz clic para seleccionar tu CV",
    cvHint: "PDF o DOCX · Máximo 4 MB",
    messageLabel: "Mensaje (opcional)",
    messagePlaceholder: "Algo que quieras añadir sobre tu candidatura...",
    consent: "Acepto que mis datos sean tratados por Noelia Teruel Ortega (Land in Europe Coaching) con la finalidad de gestionar mi candidatura para el proceso de selección indicado. Los datos se conservarán durante el tiempo necesario para resolver el proceso y hasta un máximo de 2 años. Puedes ejercer tus derechos escribiendo a",
    consentPrivacy: "Política de privacidad completa.",
    submit: "Enviar candidatura",
    sending: "Enviando...",
    successTitle: "Candidatura recibida.",
    successSub: "He recibido tu CV y tus datos. Si tu perfil encaja con la posición te contactaré en los próximos días.",
    cvError: "Adjunta tu CV antes de enviar.",
    langToggle: "English",
  },
  en: {
    eyebrow: "Open positions",
    hero: "Sales roles at a",
    heroAccent: "tech company in Valencia.",
    heroSub: "Recruitment managed by Land in Europe Coaching. I review every application personally and reply with honest feedback.",
    apply: "Apply now",
    confirm: "To be confirmed",
    objective: "Role overview",
    responsibilities: "Responsibilities",
    requirements: "Requirements",
    valued: "Nice to have",
    formEyebrow: "Application",
    formTitle: "Send your profile",
    formSub: "I review every application personally. If your profile is a fit I will contact you within the next few days.",
    roleLabel: "Role you are applying for *",
    roleOptions: ["B2B Hunter — IT Services & Solutions", "Startup Hunter — Technology Services & Solutions"],
    nameLabel: "Full name *",
    namePlaceholder: "Your name",
    emailLabel: "Email *",
    phoneLabel: "Phone *",
    phonePlaceholder: "+34 600 000 000",
    cityLabel: "City of residence *",
    cityPlaceholder: "Valencia",
    linkedinLabel: "LinkedIn URL *",
    englishLabel: "English level *",
    englishOptions: ["Select", "B2", "C1", "C2", "Native"],
    noticeLabel: "Notice period *",
    noticePlaceholder: "e.g. 1 month, immediate...",
    salaryLabel: "Expected annual gross salary *",
    salaryPlaceholder: "e.g. 40,000 €",
    workauthLabel: "Work authorisation in Spain *",
    workauthOptions: ["Select", "Yes", "No"],
    cvLabel: "CV (PDF or DOCX, max 4 MB) *",
    cvClick: "Click to select your CV",
    cvHint: "PDF or DOCX · Maximum 4 MB",
    messageLabel: "Message (optional)",
    messagePlaceholder: "Anything you would like to add about your application...",
    consent: "I agree that my data will be processed by Noelia Teruel Ortega (Land in Europe Coaching) for the purpose of managing my application for the indicated recruitment process. Data will be retained for the time necessary to resolve the process and for a maximum of 2 years. You may exercise your rights by writing to",
    consentPrivacy: "Full privacy policy.",
    submit: "Submit application",
    sending: "Sending...",
    successTitle: "Application received.",
    successSub: "I have received your CV and details. If your profile is a fit I will be in touch within the next few days.",
    cvError: "Please attach your CV before submitting.",
    langToggle: "Español",
  },
};

type Lang = "es" | "en";
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
  const [lang, setLang] = useState<Lang>("es");
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const t = UI[lang];
  const roles = ROLES[lang];

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
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em]">{t.eyebrow}</p>
              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="text-xs font-semibold text-white/30 border border-white/10 rounded-full px-3 py-1 hover:border-[#C9A84C]/40 hover:text-white/60 transition-colors"
              >
                {t.langToggle}
              </button>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
              {t.hero}{" "}
              <span className="text-[#C9A84C] italic font-normal">{t.heroAccent}</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">{t.heroSub}</p>
          </div>
        </section>

        {/* Role cards */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {roles.map((role) => (
              <div key={role.id} className="bg-[#1C1F26] border border-white/8 rounded-2xl overflow-hidden">
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
                      {t.apply}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1a3.5 3.5 0 0 1 3.5 3.5c0 2.5-3.5 6.5-3.5 6.5S2.5 7 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.1"/><circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.1"/></svg>
                      {role.location}
                    </span>
                    <span>{role.languages}</span>
                  </div>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">{t.objective}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{role.summary}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">{t.responsibilities}</p>
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
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">{t.requirements}</p>
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
                      <p className="text-xs font-semibold text-white/20 uppercase tracking-[0.15em] mb-3">{t.valued}</p>
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
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">{t.formEyebrow}</p>
              <h2 className="font-serif text-3xl font-light text-white mb-3">{t.formTitle}</h2>
              <p className="text-white/40 text-sm leading-relaxed">{t.formSub}</p>
            </div>
            <ApplicationForm preselectedRole={activeRole} t={t} lang={lang} />
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}

function ApplicationForm({ preselectedRole, t, lang }: { preselectedRole: string | null; t: typeof UI["es"]; lang: Lang }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [cvName, setCvName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    role: preselectedRole ?? "hunter-b2b",
    name: "", email: "", phone: "", city: "", linkedin: "",
    english: "", notice: "", salary: "", workauth: "", message: "",
    consent: false, website: "",
  });

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) { setErrorMsg(lang === "es" ? "El CV no puede superar los 4 MB." : "CV cannot exceed 4 MB."); e.target.value = ""; return; }
    setCvName(file.name);
    setErrorMsg("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    const file = fileRef.current?.files?.[0];
    if (!file) { setErrorMsg(t.cvError); return; }
    setStatus("sending");
    const fd = new FormData();
    Object.entries({ ...form, role: preselectedRole ?? form.role, consent: form.consent ? "true" : "" }).forEach(([k, v]) => fd.append(k, v as string));
    fd.append("cv", file);
    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) { setErrorMsg(json.error ?? "Error"); setStatus("error"); return; }
      setStatus("sent");
    } catch { setErrorMsg(lang === "es" ? "Error de conexión. Inténtalo de nuevo." : "Connection error. Please try again."); setStatus("error"); }
  };

  const inp = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all";
  const lbl = "block text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-1.5";

  if (status === "sent") {
    return (
      <div className="bg-[#1C1F26] border border-white/8 rounded-2xl p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-6">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11l5 5L18 6" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h3 className="font-serif text-2xl font-light text-white mb-3">{t.successTitle}</h3>
        <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">{t.successSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-[#1C1F26] border border-white/8 rounded-2xl p-8 space-y-5">
      <input type="text" name="website" value={form.website} onChange={ch} tabIndex={-1} aria-hidden="true" className="absolute opacity-0 pointer-events-none w-0 h-0" autoComplete="off" />

      <div>
        <label className={lbl}>{t.roleLabel}</label>
        <select name="role" value={preselectedRole ?? form.role} onChange={ch} className={inp} required>
          <option value="hunter-b2b">{t.roleOptions[0]}</option>
          <option value="hunter-startups">{t.roleOptions[1]}</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={lbl}>{t.nameLabel}</label><input required name="name" value={form.name} onChange={ch} placeholder={t.namePlaceholder} className={inp} /></div>
        <div><label className={lbl}>{t.emailLabel}</label><input required type="email" name="email" value={form.email} onChange={ch} placeholder="you@email.com" className={inp} /></div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={lbl}>{t.phoneLabel}</label><input required name="phone" value={form.phone} onChange={ch} placeholder={t.phonePlaceholder} className={inp} /></div>
        <div><label className={lbl}>{t.cityLabel}</label><input required name="city" value={form.city} onChange={ch} placeholder={t.cityPlaceholder} className={inp} /></div>
      </div>

      <div><label className={lbl}>{t.linkedinLabel}</label><input required type="url" name="linkedin" value={form.linkedin} onChange={ch} placeholder="https://linkedin.com/in/your-profile" className={inp} /></div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={lbl}>{t.englishLabel}</label>
          <select required name="english" value={form.english} onChange={ch} className={inp}>
            {t.englishOptions.map((o, i) => <option key={o} value={i === 0 ? "" : o}>{o}</option>)}
          </select>
        </div>
        <div><label className={lbl}>{t.noticeLabel}</label><input required name="notice" value={form.notice} onChange={ch} placeholder={t.noticePlaceholder} className={inp} /></div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={lbl}>{t.salaryLabel}</label><input required name="salary" value={form.salary} onChange={ch} placeholder={t.salaryPlaceholder} className={inp} /></div>
        <div>
          <label className={lbl}>{t.workauthLabel}</label>
          <select required name="workauth" value={form.workauth} onChange={ch} className={inp}>
            {t.workauthOptions.map((o, i) => <option key={o} value={i === 0 ? "" : (i === 1 ? "yes" : "no")}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={lbl}>{t.cvLabel}</label>
        <div className="border border-dashed border-white/15 rounded-xl px-4 py-5 text-center cursor-pointer hover:border-[#C9A84C]/40 transition-colors" onClick={() => fileRef.current?.click()}>
          <input ref={fileRef} type="file" name="cv" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFile} className="hidden" required />
          {cvName ? <p className="text-[#C9A84C] text-sm font-medium">{cvName}</p> : (<><p className="text-white/30 text-sm mb-1">{t.cvClick}</p><p className="text-white/15 text-xs">{t.cvHint}</p></>)}
        </div>
      </div>

      <div><label className={lbl}>{t.messageLabel}</label><textarea name="message" value={form.message} onChange={ch} rows={3} placeholder={t.messagePlaceholder} className={`${inp} resize-none`} /></div>

      <div className="flex items-start gap-3 pt-2">
        <input type="checkbox" id="consent" name="consent" checked={form.consent} onChange={ch} required className="mt-0.5 w-4 h-4 accent-[#C9A84C] flex-shrink-0" />
        <label htmlFor="consent" className="text-xs text-white/35 leading-relaxed cursor-pointer">
          {t.consent}{" "}
          <a href="mailto:noelia@landineuropecoaching.com" className="text-[#C9A84C] hover:underline">noelia@landineuropecoaching.com</a>.{" "}
          <a href="/privacidad" target="_blank" className="text-[#C9A84C] hover:underline">{t.consentPrivacy}</a>
        </label>
      </div>

      {(status === "error" || errorMsg) && (
        <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">{errorMsg || "Error"}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="w-full bg-[#C9A84C] text-[#0A0B0D] font-bold py-4 rounded-xl hover:bg-[#E8C96A] transition-colors disabled:opacity-50 text-sm shadow-lg shadow-[#C9A84C]/20">
        {status === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}
