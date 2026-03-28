"use client";
import { useLanguage } from '@/context/LanguageContext';

export function TrustMetrics() {
  const { lang } = useLanguage();

  const metrics = lang === 'es' ? [
    { value: '+40', label: 'Empresas implementadas en Latam' },
    { value: '5–10 hs', label: 'Por semana para implementarlo' },
    { value: '24/7', label: 'Respuesta sin intervención humana' },
    { value: 'Ingeniería', label: 'Sistemas SaaS y plataformas web de última generación' },
  ] : [
    { value: '+40', label: 'Companies implemented in Latam' },
    { value: '5–10 hrs', label: 'Per week to implement' },
    { value: '24/7', label: 'Response without human intervention' },
    { value: 'Engineering', label: 'Next-gen SaaS systems and web platforms' },
  ];

  return (
    <section className="py-16 md:py-20 border-y border-gray-100 bg-gray-50/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5 md:gap-2">
              <span className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tighter">{metric.value}</span>
              <span className="text-sm md:text-base font-semibold text-gray-500 leading-tight md:max-w-[200px]">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
