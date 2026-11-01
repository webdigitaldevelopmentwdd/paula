'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { I18N, type Lang } from './i18n';

type LangCtx = {
  lang: Lang;
  setLang: (code: string, save?: boolean) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
};

const Ctx = createContext<LangCtx | null>(null);

/* localStorage throws in a few browser modes; the site must not care. */
function store(key: string, value?: string): string | null {
  try {
    if (value === undefined) return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
  } catch {
    /* private window, blocked site data — ignore */
  }
  return null;
}

const isLang = (c: string | null): c is Lang => !!c && Object.prototype.hasOwnProperty.call(I18N, c);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  const setLang = useCallback((code: string, save = true) => {
    const next: Lang = isLang(code) ? code : 'en';
    setLangState(next);
    if (save) store('eclesare-lang', next);
  }, []);

  /* boot: saved choice, else the browser language, else English */
  useEffect(() => {
    const saved = store('eclesare-lang');
    const nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    setLang(isLang(saved) ? saved : isLang(nav) ? nav : 'en', false);
  }, [setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangCtx>(() => {
    const raw = (key: string) => {
      const d = I18N[lang] || I18N.en;
      return key in d ? d[key] : I18N.en[key] !== undefined ? I18N.en[key] : key;
    };
    return {
      lang,
      setLang,
      t: (key) => String(raw(key)),
      ta: (key) => {
        const v = raw(key);
        return Array.isArray(v) ? v : [];
      },
    };
  }, [lang, setLang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useLang outside LangProvider');
  return v;
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
