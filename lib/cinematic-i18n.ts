import en from '@/locales/en/cinematic.json';
import es from '@/locales/es/cinematic.json';
import fr from '@/locales/fr/cinematic.json';

export type CinematicDict = Record<string, string>;

/**
 * Cinematic Weddings page text, one JSON file per language (locales/<lang>/cinematic.json).
 * The language codes match the site's selector (es / en / fr); English is the fallback.
 */
export const CINEMATIC_DICT: Record<string, CinematicDict> = { en, es, fr };

export function cinematicText(lang: string, key: string): string {
  return CINEMATIC_DICT[lang]?.[key] ?? CINEMATIC_DICT.en[key] ?? key;
}
