'use client';

import { useCallback } from 'react';
import { useLanguage } from './LanguageProvider';
import { cinematicText } from '@/lib/cinematic-i18n';

/** Translator for the Cinematic Weddings page: follows the site's language selector and saved preference. */
export function useCinematicText() {
  const { lang } = useLanguage();
  return useCallback((key: string) => cinematicText(lang, key), [lang]);
}
