'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import es from '@/locales/es.json';
import en from '@/locales/en.json';

type Language = 'es' | 'en';
type Translations = typeof es;

const translationsMap: Record<Language, Translations> = { es, en };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: es,
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    // 1. Verificar si hay preferencia guardada por el usuario
    const savedLang = localStorage.getItem('app-lang') as Language;

    if (savedLang && ['es', 'en'].includes(savedLang)) {
      setLanguageState(savedLang);
    } else if (typeof window !== 'undefined' && navigator.language) {
      // 2. Detección automática del idioma del sistema/navegador
      const userLang = navigator.language.toLowerCase().startsWith('es')
        ? 'es'
        : 'en';
      setLanguageState(userLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-lang', lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translationsMap[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
