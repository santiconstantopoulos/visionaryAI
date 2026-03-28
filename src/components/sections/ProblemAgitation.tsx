"use client";
import { Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function ProblemAgitation() {
  const { lang } = useLanguage();

  const title = lang === 'es' ? (
    <>¿Deuda técnica y operativa? <br className="hidden md:block"/> <span className="text-gray-400">Reconocés el problema en 30 segundos.</span></>
  ) : (
    <>Technical & operational debt? <br className="hidden md:block"/> <span className="text-gray-400">You'll recognize the problem in 30 seconds.</span></>
  );

  const quotes = lang === 'es' ? [
    { text: "Me explota WhatsApp e Instagram y no llegamos a responder todo." },
    { text: "Contestamos tarde y después el cliente ya no responde más." },
    { text: "De noche preguntan y recién respondemos al otro día — la venta ya se fue." },
    { text: "Mi equipo pierde horas en tareas repetitivas — copiar datos, mandar mails, pasar info entre sistemas." }
  ] : [
    { text: "My WhatsApp and Instagram are blowing up and we can't respond to everything." },
    { text: "We reply late and then the client no longer responds." },
    { text: "They ask questions at night and we don't reply until the next day — the sale is already gone." },
    { text: "My team wastes hours on repetitive tasks — copying data, sending emails, moving info between systems." }
  ];

  const footer = lang === 'es' 
    ? "Cada una de esas situaciones tiene un costo real. La IA elimina ese costo y convierte esa fricción en ganancia."
    : "Each of these situations has a real cost. AI eliminates that cost and turns friction into profit.";

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-6">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {quotes.map((quote, i) => (
            <div key={i} className="p-8 md:p-10 rounded-[2rem] bg-gray-50/80 border border-gray-100 flex flex-col justify-start transition-colors hover:bg-gray-50">
              <Quote className="w-8 h-8 text-gray-200 mb-6" fill="currentColor" strokeWidth={0} />
              <p className="text-gray-600 font-medium leading-relaxed text-lg">"{quote.text}"</p>
            </div>
          ))}
        </div>
        <div className="text-center max-w-3xl mx-auto border-t border-gray-100 pt-10">
          <p className="text-lg md:text-xl font-bold text-gray-900">{footer}</p>
        </div>
      </div>
    </section>
  );
}
