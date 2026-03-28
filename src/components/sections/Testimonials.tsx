"use client";
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Testimonials() {
  const { lang } = useLanguage();

  const title = lang === 'es' ? (
    <>Nuestras capacidades.<br /><span className="text-gray-400">Arquitecturas y Pruebas de Concepto.</span></>
  ) : (
    <>Our capabilities.<br /><span className="text-gray-400">Architectures and Proof of Concepts.</span></>
  );

  const testimonials = lang === 'es' ? [
    {
      text: "Agente de visión artificial integrado a WhatsApp. Procesa imágenes en tiempo real y ejecuta lógica de negocio conectada a bases de datos corporativas.",
      author: "Arquitectura IA de Visión",
      role: "Procesamiento de Imágenes · WhatsApp API",
      initials: "CV"
    },
    {
      text: "Sistema autónomo integrado con ERPs: controla operaciones, audita inventario y optimiza flujos de trabajo internos sin intervención manual.",
      author: "Automatización Operativa",
      role: "Integración API · ERP",
      initials: "API"
    },
    {
      text: "Agente de flujo conversacional conectado al CRM corporativo. Filtra leads, calendariza reuniones y actualiza el pipeline de forma escalable.",
      author: "Agente Integrado Inbound",
      role: "LLM Orchestration · CRM",
      initials: "LLM"
    }
  ] : [
    {
      text: "Computer vision agent integrated into WhatsApp. Processes images in real time and executes business logic connected to corporate databases.",
      author: "AI Vision Architecture",
      role: "Image Processing · WhatsApp API",
      initials: "CV"
    },
    {
      text: "Autonomous system integrated with ERPs: manages operations, audits inventory, and optimizes internal workflows without manual intervention.",
      author: "Operational Automation",
      role: "API Integration · ERP",
      initials: "API"
    },
    {
      text: "Conversational flow agent connected to corporate CRM. Filters leads, schedules meetings, and updates the pipeline scalably.",
      author: "Inbound Integrated Agent",
      role: "LLM Orchestration · CRM",
      initials: "LLM"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-gray-50/80 p-8 rounded-[2rem] border border-gray-100 flex flex-col justify-between hover:shadow-sm transition-shadow">
              <p className="text-gray-600 font-medium leading-relaxed mb-8 text-sm md:text-base">"{test.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-sm">
                  {test.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{test.author}</h4>
                  <p className="text-xs font-medium text-gray-500">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
