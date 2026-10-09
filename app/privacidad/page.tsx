import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata = {
  title: "Política de Privacidad | Land in Europe",
  description: "Información sobre el tratamiento de datos personales en Land in Europe Coaching.",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageNav />
      <main className="bg-white min-h-screen">
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Legal</p>
            <h1 className="font-serif text-4xl font-bold text-gray-900 mb-10 leading-tight">
              Política de Privacidad
            </h1>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-600 text-sm leading-relaxed">

              <div>
                <h2 className="font-semibold text-gray-900 text-base mb-2">1. Responsable del tratamiento</h2>
                <p>
                  Noelia Teruel Ortega, actividad bajo la marca Land in Europe Coaching.<br/>
                  Correo de contacto: <a href="mailto:noelia@landineuropecoaching.com" className="text-[#C9A84C]">noelia@landineuropecoaching.com</a>
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 text-base mb-2">2. Finalidades del tratamiento</h2>
                <p>Los datos recabados a través de este sitio web se tratan con las siguientes finalidades:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Gestión de candidaturas:</strong> tramitar tu solicitud de empleo y evaluar tu perfil para los procesos de selección publicados en este sitio. Los datos pueden ser compartidos con la empresa cliente para la que se gestiona el proceso, sin que se revele información confidencial sobre dicha empresa más allá de lo necesario.</li>
                  <li><strong>Consultas y contacto:</strong> responder a los mensajes enviados a través de los formularios de contacto del sitio.</li>
                  <li><strong>Servicios de coaching:</strong> gestionar la relación contractual con clientes que contratan servicios de career coaching o reescritura de CV.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 text-base mb-2">3. Base jurídica</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Candidaturas: consentimiento del interesado (art. 6.1.a RGPD).</li>
                  <li>Ejecución de servicios contratados: ejecución de contrato (art. 6.1.b RGPD).</li>
                  <li>Consultas generales: interés legítimo en responder a comunicaciones recibidas (art. 6.1.f RGPD).</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 text-base mb-2">4. Plazo de conservación</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Candidaturas: durante el tiempo necesario para resolver el proceso de selección y hasta un máximo de 2 años desde la recepción, salvo que solicites su supresión antes.</li>
                  <li>Clientes: durante la vigencia de la relación contractual y el plazo legal de prescripción de responsabilidades (5 años).</li>
                  <li>Consultas: el tiempo imprescindible para gestionar la comunicación.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 text-base mb-2">5. Destinatarios</h2>
                <p>
                  Los datos no se ceden a terceros salvo obligación legal o cuando sea necesario para prestar el servicio solicitado (por ejemplo, la empresa cliente en un proceso de selección, siempre con tu consentimiento). Los proveedores técnicos que acceden a los datos actúan como encargados del tratamiento bajo contrato.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 text-base mb-2">6. Tus derechos</h2>
                <p>Puedes ejercer los siguientes derechos escribiendo a <a href="mailto:noelia@landineuropecoaching.com" className="text-[#C9A84C]">noelia@landineuropecoaching.com</a>:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Acceso:</strong> saber qué datos tenemos sobre ti.</li>
                  <li><strong>Rectificación:</strong> corregir datos inexactos.</li>
                  <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
                  <li><strong>Oposición:</strong> oponerte a determinados tratamientos.</li>
                  <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
                  <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
                </ul>
                <p className="mt-2">
                  Si consideras que el tratamiento no se ajusta a la normativa, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 text-base mb-2">7. Cookies</h2>
                <p>Este sitio utiliza únicamente cookies técnicas necesarias para el funcionamiento del sistema de autenticación de clientes y cookies analíticas anónimas (Vercel Analytics). No se utilizan cookies de seguimiento publicitario.</p>
              </div>

              <div className="text-xs text-gray-400 pt-4 border-t border-gray-100">
                Última actualización: octubre de 2026.
              </div>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
