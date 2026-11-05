import en from '@/locales/en/services.json';
import es from '@/locales/es/services.json';
import fr from '@/locales/fr/services.json';

export type ServicesDict = Record<string, string>;

/**
 * Services page text, one JSON file per language (locales/<lang>/services.json), keyed like
 * "services.photography.title". The language codes match the site's selector (es / en / fr).
 * English is the fallback, so a missing key never renders blank.
 */
export const SERVICES_DICT: Record<string, ServicesDict> = { en, es, fr };

export function servicesText(lang: string, key: string): string {
  return SERVICES_DICT[lang]?.[key] ?? SERVICES_DICT.en[key] ?? key;
}
