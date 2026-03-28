import { Terminal, Bot, Database, BarChart3, ArrowUpRight } from 'lucide-react';

export function ServicesBento() {
  return (
    <section className="py-24 md:py-32 bg-gray-50/50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-4">
            Soluciones Para Tu <span className="text-gray-400">Negocio</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl font-medium">
            Tecnología estratégica diseñada para escalar tu negocio y recuperar tu tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[300px]">
          {/* Primary 1 */}
          <div className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-white border border-gray-200 flex flex-col justify-between group transition-all hover:shadow-sm">
            <div className="flex justify-between items-start mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <Terminal className="w-6 h-6 text-gray-900" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-gray-900 mb-2">Desarrollo de Software</h3>
              <p className="text-gray-500 font-medium md:max-w-md">Obtienes aplicaciones web y móviles personalizadas que se adaptan perfectamente a tus flujos de trabajo. Tu aplicación es escalable, profesional y 100% tuya.</p>
            </div>
          </div>

          {/* Secondary 1 */}
          <div className="md:col-span-1 p-8 md:p-10 rounded-3xl bg-white border border-gray-200 flex flex-col justify-between group transition-all hover:shadow-sm">
            <div className="flex justify-between items-start mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <Database className="w-6 h-6 text-gray-900" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-gray-900 mb-2">Integración de Sistemas</h3>
              <p className="text-gray-500 font-medium text-sm">Unificas tus herramientas para que los datos fluyan automáticamente entre ellas en tiempo real.</p>
            </div>
          </div>

          {/* Secondary 2 */}
          <div className="md:col-span-1 p-8 md:p-10 rounded-3xl bg-white border border-gray-200 flex flex-col justify-between group transition-all hover:shadow-sm">
            <div className="flex justify-between items-start mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <BarChart3 className="w-6 h-6 text-gray-900" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-gray-900 mb-2">Landing Pages</h3>
              <p className="text-gray-500 font-medium text-sm">Páginas de alta conversión que cargan instantáneamente y convierten visitantes en clientes.</p>
            </div>
          </div>

          {/* Primary 2 */}
          <div className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-black border border-gray-800 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="flex justify-between items-start relative z-10 mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <div className="relative z-10">
              <h3 className="font-heading text-2xl font-bold tracking-tight text-white mb-2">Automatización de Procesos</h3>
              <p className="text-gray-400 font-medium md:max-w-md">Eliminas tareas repetitivas mediante bots y scripts inteligentes. Ahorras hasta 20 horas por semana en tareas manuales y eliminas errores humanos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
