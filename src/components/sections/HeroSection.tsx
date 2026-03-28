"use client";
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export function HeroSection() {
  const { lang } = useLanguage();

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tighter text-gray-900 leading-[1.05] mb-6">
          {lang === 'es' ? (
            <>Creemos en negocios que operan <span className="text-gray-400">sin fricción.</span></>
          ) : (
            <>We believe in frictionless <span className="text-gray-400">businesses.</span></>
          )}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
          {lang === 'es'
            ? 'Por eso construimos infraestructura de software y automatización. Tecnología estratégica diseñada para resolver tu deuda técnica, escalar tu operación y recuperar tu tiempo.'
            : "That's why we build software and automation infrastructure. Strategic technology designed to resolve technical debt, scale your operation, and recover your time."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contacto" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full text-base h-14 px-8 rounded-xl font-bold shadow-sm hover:shadow-md transition-shadow">
              {lang === 'es' ? 'Agendar Llamada' : 'Schedule Call'}
            </Button>
          </a>
          <a href="#servicios" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full text-base h-14 px-8 rounded-xl font-bold">
              {lang === 'es' ? 'Ver Soluciones' : 'View Solutions'}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
