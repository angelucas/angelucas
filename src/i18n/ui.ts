import ptBr from './locales/pt-br';
import en from './locales/en';

export const languages = {
  'pt-br': 'PT',
  en: 'EN',
} as const;

export type Lang = keyof typeof languages;
export type UIKey = keyof typeof ptBr;

const translations = { 'pt-br': ptBr, en } as const;

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return translations[lang][key] ?? translations['pt-br'][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment === 'en') return 'en';
  return 'pt-br';
}

export function getLocalizedPath(lang: Lang, hash = ''): string {
  const base = lang === 'en' ? '/en/' : '/';
  return `${base}${hash}`;
}

export function switchLangPath(targetLang: Lang, hash = ''): string {
  return getLocalizedPath(targetLang, hash);
}
