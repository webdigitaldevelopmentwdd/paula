export type Tile = { src: string; alt: string; width: number; height: number; cls: string; cap: string };

export const TILES: Tile[] = [
  { src: '/images/gal-india.jpg', alt: 'Indian wedding ceremony with garlands and marigolds', width: 900, height: 1200, cls: 'tile tile--tall', cap: 'gal.c1' },
  { src: '/images/gal-france.jpg', alt: 'French château garden wedding', width: 1200, height: 800, cls: 'tile', cap: 'gal.c2' },
  { src: '/images/gal-beach.jpg', alt: 'Beach ceremony at sunset', width: 1200, height: 800, cls: 'tile', cap: 'gal.c3' },
  { src: '/images/gal-spain.jpg', alt: 'Candlelit wedding table setting — photograph by Paula', width: 900, height: 1200, cls: 'tile tile--tall', cap: 'gal.c4' },
  { src: '/images/gal-mountain.jpg', alt: 'Mountain lakeside wedding', width: 1200, height: 800, cls: 'tile tile--wide', cap: 'gal.c5' },
];
