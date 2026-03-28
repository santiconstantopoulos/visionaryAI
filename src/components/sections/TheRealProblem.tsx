"use client";
import { useLanguage } from '@/context/LanguageContext';

export function TheRealProblem() {
  const { lang } = useLanguage();

  const title = lang === 'es' ? (
    <>El problema real.<br /><span className="text-gray-400">No perdés ventas por falta de interés. Perdés por operación.</span></>
  ) : (
    <>The real problem.<br /><span className="text-gray-400">You don't lose sales due to lack of interest. You lose due to operations.</span></>
  );

  const subtitle = lang === 'es' 
    ? "Hay gente que quiere comprarte y empresas que quieren trabajar mejor — pero el sistema no está. La IA lo pone."
    : "There are people who want to buy from you and companies that want to work better — but the system isn't there. AI provides it.";

  const problems = lang === 'es' ? [
    { title: "Responde tarde → lead frío", desc: "El 78% de los clientes elige quien responde primero. Cada minuto importa." },
    { title: "Mar de mensajes sin filtro", desc: "Se mezclan curiosos con compradores. Nadie sabe en qué concentrarse." },
    { title: "Sin seguimiento real", desc: "Chats colgados, ventas que se escaparon, sin sistema de recuperación." },
    { title: "Vendedores como respondedores", desc: "Tu equipo contesta FAQ en vez de cerrar deals. Tiempo desperdiciado." },
    { title: "Fuera de horario = sin venta", desc: "Noche y fines de semana: el negocio está cerrado aunque los clientes estén despiertos." },
    { title: "Procesos internos que queman tiempo", desc: "Cargar datos a mano, copiar info entre apps — horas perdidas diarias." },
    { title: "El negocio depende de una persona", desc: "Si falta una persona, algo se rompe. Sin sistema, no hay escala — hay dependencia." },
  ] : [
    { title: "Late response → cold lead", desc: "78% of clients choose who responds first. Every minute matters." },
    { title: "Sea of unfiltered messages", desc: "Curious people mix with buyers. No one knows what to focus on." },
    { title: "No real follow-up", desc: "Abandoned chats, lost sales, no recovery system." },
    { title: "Sellers acting as responders", desc: "Your team answers FAQs instead of closing deals. Wasted time." },
    { title: "Outside hours = no sale", desc: "Nights and weekends: the business is closed even if clients are awake." },
    { title: "Internal processes burning time", desc: "Manual data entry, copying info between apps — daily lost hours." },
    { title: "Dependency on one person", desc: "If someone is missing, something breaks. Without a system, there is no scale." },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-gray-500 font-medium max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {problems.map((prob, i) => (
            <div key={i} className="flex gap-4">
              <span className="font-heading font-extrabold text-2xl md:text-3xl text-gray-200">0{i + 1}</span>
              <div>
                <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-1">{prob.title}</h3>
                <p className="text-sm md:text-base font-medium text-gray-500 leading-relaxed">{prob.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
