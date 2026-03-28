"use client";
import { Check, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function ForWhom() {
  const { lang } = useLanguage();

  const isForYou = lang === 'es' ? [
    "Tenés un negocio activo con clientes reales — ya recibís consultas todos los días.",
    "Tu equipo pierde tiempo respondiendo siempre lo mismo o haciendo tareas manuales.",
    "Querés automatizar la atención al cliente, los procesos internos, o ambos.",
    "El volumen de operación ya supera lo que podés manejar bien sin un sistema.",
    "Estás dispuesto a dedicar una persona 5–10 horas por semana para implementarlo."
  ] : [
    "You run an active business with real clients — you already receive daily inquiries.",
    "Your team wastes time answering the same questions or doing manual tasks.",
    "You want to automate customer service, internal processes, or both.",
    "The operational volume already exceeds what you can handle well manually.",
    "You are willing to dedicate 5-10 hours per week of one person's time."
  ];

  const notForYou = lang === 'es' ? [
    "Todavía no tenés operación real ni clientes — el sistema no tiene dónde aplicarse.",
    "El volumen es mínimo — el esfuerzo de implementar no vale la pena todavía."
  ] : [
    "You have no real operations or clients yet — the system has nowhere to be applied.",
    "Operation volume is minimal — the implementation effort isn't worth it yet."
  ];

  const headers = lang === 'es' 
    ? { title: "Para quién es.", subtitle: "Esto es para vos si...", pos: "Es para vos", neg: "No es para vos" }
    : { title: "Who is this for.", subtitle: "This is for you if...", pos: "It is for you", neg: "It is NOT for you" };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-4">{headers.title}</h2>
          <p className="text-xl text-gray-400 font-medium">{headers.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Positives */}
          <div className="bg-gray-50/50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Check className="w-6 h-6 text-green-500" /> {headers.pos}
            </h3>
            <ul className="space-y-6">
              {isForYou.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0" />
                  <p className="text-gray-600 font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Negatives */}
          <div className="bg-gray-50/50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <X className="w-6 h-6 text-red-500" /> {headers.neg}
            </h3>
            <ul className="space-y-6">
              {notForYou.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 shrink-0" />
                  <p className="text-gray-600 font-medium leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
