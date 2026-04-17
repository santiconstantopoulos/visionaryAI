"use client";
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { lang } = useLanguage();

  const texts = lang === 'es' ? {
    copyright: `© ${new Date().getFullYear()} Visionary AI. Todos los derechos reservados.`,
    privacy: 'Privacidad',
    terms: 'Términos',
    contact: 'Contacto',
  } : {
    copyright: `© ${new Date().getFullYear()} Visionary AI. All rights reserved.`,
    privacy: 'Privacy',
    terms: 'Terms',
    contact: 'Contact',
  };

  return (
    <footer className="border-t border-gray-100 bg-white py-12 md:py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-heading font-extrabold text-xl tracking-tighter text-gray-900">
            Visionary<span className="text-gray-400 font-medium">.ai</span>
          </Link>
          <p className="text-sm text-gray-400">
            {texts.copyright}
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm tracking-tight text-gray-500 hover:text-gray-900 transition-colors">
            {texts.privacy}
          </Link>
          <Link href="#" className="text-sm tracking-tight text-gray-500 hover:text-gray-900 transition-colors">
            {texts.terms}
          </Link>
          <Link href="#" className="text-sm tracking-tight text-gray-500 hover:text-gray-900 transition-colors">
            {texts.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
