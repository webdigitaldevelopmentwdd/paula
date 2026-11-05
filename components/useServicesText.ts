'use client';

import { useCallback } from 'react';
import { useLanguage } from './LanguageProvider';
import { servicesText } from '@/lib/services-i18n';

/** Translator for the Services page: follows the site's existing language selector and saved preference. */
export function useServicesText() {
  const { lang } = useLanguage();
  return useCallback((key: string) => servicesText(lang, key), [lang]);
}
