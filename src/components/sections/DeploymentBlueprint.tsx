import { Search, PenTool, Rocket, Activity } from 'lucide-react';

export function DeploymentBlueprint() {
  const steps = [
    { title: "Descubrimiento", description: "Recibes un análisis a fondo de tus operaciones actuales para identificar ineficiencias y oportunidades.", icon: Search },
    { title: "Prototipado Ágil", description: "Validas una solución preliminar rápida para asegurar que resuelves el problema correcto.", icon: PenTool },
    { title: "Implementación & Escala", description: "Implementas la solución final, tu equipo se capacita y cuentas con mantenimiento evolutivo.", icon: Rocket },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-16 md:mb-24">
          Proceso de <span className="text-gray-400">Implementación</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center relative gap-12 md:gap-4 before:absolute before:inset-0 before:top-1/2 before:-translate-y-1/2 before:w-full before:h-[1px] before:bg-gray-100 before:-z-10 before:hidden md:before:block">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center flex-1 bg-white relative">
              {/* Vertical line connector for mobile */}
              {i !== steps.length - 1 && (
                <div className="absolute top-12 left-1/2 w-[1px] h-full bg-gray-100 -z-10 md:hidden"></div>
              )}
              
              <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center mb-6 shadow-sm z-10 transition-transform hover:scale-105 duration-300">
                <step.icon className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
              </div>
              <h4 className="font-heading font-extrabold text-lg text-gray-900 tracking-tight mb-3 bg-white px-2">
                <span className="text-gray-400 font-medium mr-2">{i + 1}.</span>
                {step.title}
              </h4>
              <p className="text-sm font-medium text-gray-500 text-center px-2 md:px-4 leading-relaxed bg-white">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
