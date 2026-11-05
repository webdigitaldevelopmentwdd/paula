/**
 * The wedding services. Only structure lives here (order, number, image);
 * every visible word comes from locales/<lang>/services.json:
 *   main services       -> services.<id>.title / .description / .alt  (+ optional .extra)
 *   additional services -> additionalServices.<id>.title / .description / .alt
 */
export type ServiceGroup = 'services' | 'additionalServices';
export type ServiceItem = { id: string; number: string; image: string; width: number; height: number };

const img = (name: string) => ({ image: `/images/services/${name}.webp`, width: 960, height: 720 });

/** The ten main services. */
export const SERVICE_ITEMS: ServiceItem[] = [
  { id: 'photography', number: '01', ...img('photography') },
  { id: 'catering', number: '02', ...img('catering') },
  { id: 'cakes', number: '03', ...img('cakes') },
  { id: 'hair', number: '04', ...img('hair-makeup') },
  { id: 'attire', number: '05', ...img('attire') },
  { id: 'decoration', number: '06', ...img('decoration') },
  { id: 'venues', number: '07', ...img('venues') },
  { id: 'music', number: '08', ...img('music') },
  { id: 'stationery', number: '09', ...img('stationery') },
  { id: 'planning', number: '10', ...img('planning') },
];

/**
 * Additional services that are genuinely new categories. The other additional descriptions overlap a main
 * service (decoration, photography, catering, cakes, hair & makeup, attire, music, stationery) and are merged
 * into it as that service's `.extra` paragraph instead of being listed twice.
 */
export const ADDITIONAL_ITEMS: ServiceItem[] = [
  { id: 'furniture', number: '11', ...img('furniture') },
  { id: 'guestExperiences', number: '12', ...img('guest-experiences') },
  { id: 'favours', number: '13', ...img('favours') },
  { id: 'ceremonies', number: '14', ...img('ceremonies') },
  { id: 'lighting', number: '15', ...img('lighting') },
  { id: 'transportation', number: '16', ...img('transport') },
  { id: 'keepsakes', number: '17', ...img('live-art') },
];

export const PROCESS_STEP_NUMBERS = ['01', '02', '03', '04'] as const;
