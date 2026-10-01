import es from './es.json';
import en from './en.json';

export type Language = 'es' | 'en';
export type TranslationKeys = typeof es;

export const translations: Record<Language, TranslationKeys> = {
  es,
  en,
};

export { es, en };
