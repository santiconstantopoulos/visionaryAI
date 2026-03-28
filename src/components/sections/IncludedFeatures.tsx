"use client";
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function IncludedFeatures() {
  const { lang } = useLanguage();

  const title = lang === 'es' ? (
    <>Modelos de <span className="text-gray-400">Inversión Claros.</span></>
  ) : (
    <>Clear Investment <span className="text-gray-400">Models.</span></>
  );

  const subtitle = lang === 'es'
    ? "Sin sorpresas ni costos ocultos. Soluciones empaquetadas para maximizar tu retorno de inversión desde el primer día."
    : "No surprises or hidden costs. Packaged solutions to maximize your ROI from day one.";

  const packages = lang === 'es' ? [
    { 
      title: "Landing Page Express", 
      desc: "Ideal para validar ideas o captar leads rápidamente.",
      tag: "Rápido",
      features: ["Diseño UX/UI Moderno", "Copywriting persuasivo (AI Assisted)", "Integración con WhatsApp/Email", "Hosting optimizado", "Entrega en 5 días hábiles"],
      cta: "Empezar Ahora"
    },
    { 
      title: "Automatización PyME", 
      desc: "Elimina tareas repetitivas y conecta tus herramientas.",
      tag: "Mejor Valor",
      features: ["Auditoría de procesos", "Conexión CRM <-> Hojas de Cálculo", "Bots de notificación (Telegram/Slack)", "Dashboard de control básico", "Soporte post-implementación"],
      cta: "Automatizar Mi Negocio"
    },
    { 
      title: "MVP Startups", 
      desc: "Tu aplicación web completa lista para salir al mercado.",
      tag: "Escalable",
      features: ["Desarrollo Full Stack (Next.js)", "Autenticación de usuarios", "Base de datos escalable", "Panel de administración", "Entrega en semanas, no meses"],
      cta: "Agendar Consultoría"
    }
  ] : [
    { 
      title: "Landing Page Express", 
      desc: "Ideal to validate ideas or capture leads quickly.",
      tag: "Fast",
      features: ["Modern UX/UI Design", "Persuasive Copywriting (AI Assisted)", "WhatsApp/Email integration", "Optimized Hosting", "Delivery in 5 business days"],
      cta: "Start Now"
    },
    { 
      title: "SME Automation", 
      desc: "Eliminates repetitive tasks and connects your tools.",
      tag: "Best Value",
      features: ["Process Audit", "CRM <-> Spreadsheets connection", "Notification Bots (Telegram/Slack)", "Basic Control Dashboard", "Post-implementation support"],
      cta: "Automate My Business"
    },
    { 
      title: "Startup MVP", 
      desc: "Your complete web application ready to hit the market.",
      tag: "Scalable",
      features: ["Full Stack Development (Next.js)", "User Authentication", "Scalable database", "Admin panel", "Delivery in weeks, not months"],
      cta: "Schedule Consultancy"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50/50 border-y border-gray-100" id="servicios">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`bg-white p-8 rounded-3xl border ${i === 1 ? 'border-gray-900 shadow-xl relative' : 'border-gray-200'} flex flex-col h-full`}>
              {i === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {pkg.tag}
                </div>
              )}
              <h3 className="font-heading font-extrabold text-2xl text-gray-900 mb-2">{pkg.title}</h3>
              <p className="text-gray-500 font-medium mb-8 text-sm">{pkg.desc}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contacto" className="block w-full">
                <button className={`w-full h-12 rounded-xl font-bold transition-all ${i === 1 ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  {pkg.cta}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
