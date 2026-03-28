"use client";
import { Button } from '@/components/ui/Button';
import { Shield, Loader2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function ContactSection() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', desc: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.desc) return;

    setStatus('loading');
    try {
      // Usamos el hash seguro de FormSubmit en lugar del correo visible
      const res = await fetch('https://formsubmit.co/ajax/856cd7c4ec0d4d953365f2a8263e5457', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Solicitud de Diagnóstico IA - ${formData.name}`,
          nombre: formData.name,
          email: formData.email,
          problema_actual: formData.desc,
          _replyto: formData.email
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', desc: '' });

        // FormSubmit requires a first activation click on the target email
        alert('¡Mensaje enviado con éxito! (NOTA AL DEV: Si es tu primer envío, andá a santiagocons1206@gmail.com y dale "Activar" al correo de FormSubmit).');

        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const data = await res.json();
        console.error("FormSubmit Error: ", data);
        alert("Error de Envío. Por favor intenta mediante WhatsApp.");
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      alert("Error de red o conexión.");
      setStatus('error');
    }
  };

  const title = lang === 'es' ? (
    <>Hablemos de <span className="text-gray-400">Tu Proyecto</span></>
  ) : (
    <>Let's talk about <span className="text-gray-400">Your Project</span></>
  );

  const texts = lang === 'es' ? {
    p1: "Agenda una llamada de descubrimiento gratuita. Sin compromisos. Descubre cómo la tecnología puede escalar tu operación.",
    btnWA: "Enviar Mensaje por WhatsApp",
    waUrl: "https://wa.me/542945469323?text=Hola,%20quiero%20solicitar%20un%20presupuesto%20para%20mi%20empresa.",
    subWA: "Te respondemos en minutos.",
    formTitle: "Formulario de Contacto",
    name: "Nombre Completo",
    email: "Correo Electrónico",
    desc: "Describe brevemente el proyecto que te interesa o tu inquietud.",
    send: "Enviar",
    sending: "Enviando...",
    sent: "Enviado con éxito",
    namePlace: "Ej: Elon Musk...",
    emailPlace: "ejemplo@dominio.com...",
    descPlace: "Ej: Landing page personalizada...",
  } : {
    p1: "Schedule a free discovery call. No strings attached. Discover how technology can scale your operation.",
    btnWA: "Send WhatsApp Message",
    waUrl: "https://wa.me/542945469323?text=Hi,%20I'd%20like%20to%20request%20a%20quote%20for%20my%20business.",
    subWA: "We reply in minutes.",
    formTitle: "Contact Form",
    name: "Full Name",
    email: "Corporate Email",
    desc: "Briefly describe the project you're interested in or your concern.",
    send: "Submit",
    sending: "Sending...",
    sent: "Sent successfully",
    namePlace: "e.g. Elon Musk...",
    emailPlace: "example@domain.com...",
    descPlace: "e.g. Custom landing page...",
  };

  return (
    <section className="py-24 md:py-32 bg-gray-50/50 border-t border-gray-100" id="contacto">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-500 font-medium mb-12 leading-relaxed">
              {texts.p1}
            </p>

            <a href={texts.waUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
              <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl h-14 font-bold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <WhatsAppIcon className="w-6 h-6" />
                {texts.btnWA}
              </button>
            </a>
            <p className="text-sm text-gray-400 font-semibold mt-5 text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {texts.subWA}
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-200 shadow-sm relative overflow-hidden">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-gray-900 mb-8">
              {texts.formTitle}
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 tracking-tight block">{texts.name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full h-12 bg-gray-50/50 border border-gray-200 rounded-xl px-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all shadow-sm"
                  placeholder={texts.namePlace}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 tracking-tight block">{texts.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full h-12 bg-gray-50/50 border border-gray-200 rounded-xl px-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all shadow-sm"
                  placeholder={texts.emailPlace}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 tracking-tight block">{texts.desc}</label>
                <textarea
                  value={formData.desc}
                  onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                  required
                  className="w-full h-32 bg-gray-50/50 border border-gray-200 rounded-xl p-4 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all resize-none shadow-sm"
                  placeholder={texts.descPlace}
                ></textarea>
              </div>

              <Button
                variant="primary"
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full h-12 text-base gap-2 mt-2 rounded-xl transition-all"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> {texts.sending}</>
                ) : status === 'success' ? (
                  <><CheckCircle2 className="w-5 h-5 text-green-400" /> {texts.sent}</>
                ) : (
                  <><Shield className="w-4 h-4" /> {texts.send}</>
                )}
              </Button>
              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium mt-2 text-center">There was an error sending the message.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
