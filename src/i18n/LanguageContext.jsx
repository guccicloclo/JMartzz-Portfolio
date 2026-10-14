import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from './strings';

const STORAGE_KEY = 'jmartzz-lang';
const DEFAULT_LANG = 'fr';
const LanguageContext = createContext(null);

function initialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'en' || saved === 'fr' ? saved : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', ui[lang].meta.description);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage can be unavailable (private mode); the choice simply won't persist.
    }
  }, [lang]);

  // Resolves a { fr, en } value (or a plain string) to the active language.
  const t = useCallback((value) => (value && typeof value === 'object' ? value[lang] : value), [lang]);
  const value = useMemo(() => ({ lang, setLang, t, s: ui[lang] }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
