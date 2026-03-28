"use client";
import { Settings, BarChart2, Link as LinkIcon, Brain } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function InternalOperations() {
  const { lang } = useLanguage();

  const title = lang === 'es' ? (
    <>Más allá de las ventas.<br /><span className="text-gray-400">¿Problemas internos frenan tu negocio?</span></>
  ) : (
    <>Beyond sales.<br /><span className="text-gray-400">Do internal problems slow you down?</span></>
  );

  const subtitle = lang === 'es'
    ? "Además del Blueprint para ventas, trabajamos con empresas para mapear, automatizar y resolver ineficiencias operativas internas con IA — sin necesidad de IT ni consultoras caras."
    : "Aside from the Sales Blueprint, we help companies map, automate, and resolve internal operational inefficiencies with AI — no need for an IT department or expensive consultants.";

  const problems = lang === 'es' ? [
    { title: "Procesos lentos o manuales", desc: "Tareas repetitivas que consumen horas de tu equipo — las automatizamos con IA.", icon: Settings },
    { title: "Falta de visibilidad y datos", desc: "Tu equipo no sabe qué está pasando. Construimos dashboards y alertas automáticas.", icon: BarChart2 },
    { title: "Herramientas desconectadas", desc: "Cinco apps que no hablan entre sí. Las integramos para que todo fluya sin intervención manual.", icon: LinkIcon },
    { title: "Decisiones que dependen de alguien", desc: "Documentamos y automatizamos el conocimiento para que el negocio no dependa de nadie en particular.", icon: Brain },
  ] : [
    { title: "Slow or manual processes", desc: "Repetitive tasks consuming your team's hours — we automate them with AI.", icon: Settings },
    { title: "Lack of visibility and data", desc: "Your team flies blind. We construct operational dashboards and automatic alerts.", icon: BarChart2 },
    { title: "Disconnected tools", desc: "Five apps that don't talk to each other. We integrate them so data flows without manual input.", icon: LinkIcon },
    { title: "Decisions relying on one person", desc: "We document and automate knowledge so your operations never bottleneck on a single person.", icon: Brain },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((prob, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                <prob.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{prob.title}</h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
