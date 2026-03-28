"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export function Navbar() {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-heading font-extrabold text-2xl tracking-tighter text-gray-900">
          Visionary<span className="text-gray-400 font-medium">.ai</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <button 
            onClick={toggleLang}
            className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          
          <a href="#contacto">
            <Button variant="primary" className="hidden sm:inline-flex rounded-xl font-bold px-6 tracking-tight shadow-sm">
              {lang === 'es' ? 'Solicitar Diagnóstico' : 'Request Diagnosis'}
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
