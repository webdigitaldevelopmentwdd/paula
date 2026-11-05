/**
 * The ten wedding services. Only structure lives here (order, number, image);
 * every visible word comes from locales/<lang>/services.json via the key `services.<id>.*`.
 */
export type ServiceItem = { id: string; number: string; image: string; width: number; height: number };

const img = (name: string) => ({ image: `/images/services/${name}.webp`, width: 960, height: 720 });

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

export const PROCESS_STEP_NUMBERS = ['01', '02', '03', '04'] as const;
