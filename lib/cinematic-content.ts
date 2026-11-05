/**
 * The photographs of the Cinematic Weddings page (the client's own uploads).
 * Only structure lives here; captions and alt texts are translated through
 * locales/<lang>/cinematic.json under cinematic.photo.<id>.caption / .alt.
 * Width and height are the real pixel size of each file, so nothing is stretched or shifts while loading.
 */
export type CinematicPhoto = { id: string; src: string; width: number; height: number; layout: 'wide' | 'a' | 'b' | 'c' };

export const CINEMATIC_PHOTOS: CinematicPhoto[] = [
  { id: 'tea', src: '/images/cinematic/tea-table.webp', width: 1125, height: 721, layout: 'wide' },
  { id: 'garden', src: '/images/cinematic/garden-giant-blooms.webp', width: 1125, height: 1577, layout: 'a' },
  { id: 'wisteria', src: '/images/cinematic/wisteria-hall.webp', width: 915, height: 737, layout: 'b' },
  { id: 'aisle', src: '/images/cinematic/woodland-aisle.webp', width: 1125, height: 1539, layout: 'c' },
];

export const CINEMATIC_BANNER = '/images/banners/cinematic.webp';
