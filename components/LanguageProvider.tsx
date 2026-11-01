'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations } from '@/lib/translations';

type LanguageContextValue = {
  lang: string;
  setLang: (lang: string) => void;
  /** Returns the translation for `key`, or `fallback` when the key has no entry (same as the original data-i18n behaviour). */
  t: (key: string, fallback: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'eclesare-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  // The original page defaults its selector to "es" and applies it on load.
  const [lang, setLangState] = useState('es');

  // Restore saved language (the original read localStorage on load).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) setLangState(saved);
    } catch {}
  }, []);

  // Mirror applyLanguage(): keep <html lang> in sync.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: string) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const t = useCallback(
    (key: string, fallback: string) => translations[lang]?.[key] ?? fallback,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
