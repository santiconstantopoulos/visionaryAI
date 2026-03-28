"use client";
import { useLanguage } from '@/context/LanguageContext';

export function SolutionsBlueprint() {
  const { lang } = useLanguage();

  const title = lang === 'es' ? (
    <>La solución.<br /><span className="text-gray-400">Arquitectura y Evolución Digital</span></>
  ) : (
    <>The solution.<br /><span className="text-gray-400">Architecture & Digital Evolution</span></>
  );

  const subtitle = lang === 'es'
    ? "Una consultoría de mejora de procesos e implementación a medida. Al terminar, tu negocio opera con una infraestructura de software que escala — resolviendo cuellos de botella mediante cambio de paradigma tecnológico."
    : "A process improvement and custom implementation consultancy. When finished, your business operates with a software infrastructure that scales — resolving bottlenecks through a technological paradigm shift.";

  const steps = lang === 'es' ? [
    { title: "Diagnóstico de Deuda Operativa", desc: "Auditamos tu arquitectura actual y procesos. Mapeamos exactamente dónde están las fricciones y oportunidades de mejora de procesos." },
    { title: "Arquitectura e Infraestructura", desc: "Diseñamos e instalamos el stack tecnológico. Creamos bases sólidas con código seguro y APIs integradas." },
    { title: "Desarrollo de IA a Medida", desc: "Integramos modelos de lenguaje y agentes sobre tu infraestructura. Evolución digital que potencia a tu equipo de desarrollo o ventas." },
    { title: "Pruebas y Escalabilidad", desc: "El código pasa por Q&A. El sistema responde, clasifica y ejecuta lógica de negocio de manera confiable." },
    { title: "Mantenimiento y Evolución", desc: "Un stack tecnológico requiere mantenimiento. Monitoreamos y iteramos para garantizar robustez a largo plazo." },
  ] : [
    { title: "Operational Debt Diagnosis", desc: "We audit your current architecture and processes. We map exactly where frictions and process improvement opportunities lie." },
    { title: "Architecture & Infrastructure", desc: "We design and install the tech stack. We create solid foundations with secure code and integrated APIs." },
    { title: "Custom AI Development", desc: "We integrate language models and agents on top of your infrastructure. Digital evolution that empowers your dev or sales team." },
    { title: "Testing & Scalability", desc: "The code goes through Q&A. The system reliably responds, classifies, and executes business logic." },
    { title: "Maintenance & Evolution", desc: "A tech stack requires maintenance. We monitor and iterate to guarantee long-term robustness." },
  ];

  return (
    <section className="py-20 md:py-28 bg-white" id="que-incluye">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-8 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="text-left space-y-8 md:space-y-12 max-w-3xl mx-auto relative before:absolute before:inset-0 before:left-[17px] md:before:left-[27px] before:h-full before:w-[2px] before:bg-gray-100 before:-z-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 md:gap-8 items-start relative z-10 group">
              <div className="w-9 h-9 md:w-14 md:h-14 shrink-0 rounded-full bg-black border-[5px] border-white flex items-center justify-center text-white font-bold font-heading text-sm md:text-lg transition-transform group-hover:scale-110">
                0{i + 1}
              </div>
              <div className="pt-1.5 md:pt-3 bg-white pr-4">
                <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-base md:text-lg font-medium text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
