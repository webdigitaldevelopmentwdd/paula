export type GalleryCategory = 'medieval' | 'mediterranean' | 'cultural' | 'destination';

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'medieval', label: 'Medieval Castle' },
  { id: 'mediterranean', label: 'Mediterranean Autumn' },
  { id: 'cultural', label: 'Cultural Celebrations' },
  { id: 'destination', label: 'Destination' },
];

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
  alt: string;
  caption: string;
  full: string;
  width: number;
  height: number;
  thumb: string;
  thumbWidth: number;
  thumbHeight: number;
};

const wp = (id: string) => `/images/wedding-plans/${id}.webp`;
const gal = (id: string) => `/images/gallery/${id}.webp`;
const th = (id: string) => `/images/gallery/thumbs/${id}.webp`;

/** Every photograph uploaded to the site, with true dimensions so nothing is cropped or stretched. */
export const GALLERY: GalleryImage[] = [
  {
    id: 'gothic-hall-banquet', category: 'medieval',
    alt: 'Gothic vaulted stone hall set with long banquet tables and white floral arrangements',
    caption: 'Gothic arches, long tables, white florals',
    full: wp('gothic-hall-banquet'), width: 1125, height: 757, thumb: th('gothic-hall-banquet'), thumbWidth: 720, thumbHeight: 484,
  },
  {
    id: 'autumn-stone-arches', category: 'mediterranean',
    alt: 'Long banquet table beneath old stone arches draped in autumn foliage, with woven rattan lanterns and terracotta, peach and pink florals',
    caption: 'Stone arches in autumn foliage',
    full: wp('autumn-stone-arches'), width: 1125, height: 1704, thumb: th('autumn-stone-arches'), thumbWidth: 720, thumbHeight: 1091,
  },
  {
    id: 'indian-varmala-arch', category: 'cultural',
    alt: 'Indian bride and groom exchanging varmala beneath a grand floral arch',
    caption: 'Varmala beneath a grand floral arch',
    full: gal('indian-varmala-arch'), width: 1600, height: 533, thumb: th('indian-varmala-arch'), thumbWidth: 720, thumbHeight: 240,
  },
  {
    id: 'castle-dining-burgundy', category: 'medieval',
    alt: 'Couple in a castle dining room with red damask walls and a long table dressed in burgundy florals and candles',
    caption: 'Burgundy florals, red damask, candlelit banquet',
    full: wp('castle-dining-burgundy'), width: 1125, height: 739, thumb: th('castle-dining-burgundy'), thumbWidth: 720, thumbHeight: 473,
  },
  {
    id: 'terracotta-long-table', category: 'mediterranean',
    alt: 'Long outdoor dinner table with a terracotta silk runner, brass candlesticks, linen napkins and warm orange and burgundy florals',
    caption: 'Terracotta, brass and candlelight',
    full: wp('terracotta-long-table'), width: 1125, height: 746, thumb: th('terracotta-long-table'), thumbWidth: 720, thumbHeight: 477,
  },
  {
    id: 'tuscan-sunset-table', category: 'destination',
    alt: 'Eclesare by Paula — candlelit terrace table with burgundy and blush flowers at sunset',
    caption: 'Candlelight at golden hour',
    full: wp('tuscan-sunset-table'), width: 1024, height: 1536, thumb: th('tuscan-sunset-table'), thumbWidth: 720, thumbHeight: 1080,
  },
  {
    id: 'castle-ceremony-blossom', category: 'medieval',
    alt: 'Couple kissing in a candlelit medieval stone hall flanked by white blossom trees',
    caption: 'A ceremony in ancient stone',
    full: wp('castle-ceremony-blossom'), width: 1125, height: 907, thumb: th('castle-ceremony-blossom'), thumbWidth: 720, thumbHeight: 580,
  },
  {
    id: 'golden-arabian-courtyard', category: 'cultural',
    alt: 'Golden Arabian courtyard wedding with ornate arches and warm lantern light',
    caption: 'Golden Arabian courtyard',
    full: gal('golden-arabian-courtyard'), width: 1600, height: 911, thumb: th('golden-arabian-courtyard'), thumbWidth: 720, thumbHeight: 410,
  },
  {
    id: 'arch-ceremony-vineyard', category: 'mediterranean',
    alt: 'Outdoor ceremony beneath a monumental terracotta arch among oak trees, with guests seated on woven chairs and orange floral aisle arrangements',
    caption: 'A ceremony beneath a sculptural arch',
    full: wp('arch-ceremony-vineyard'), width: 1125, height: 1117, thumb: th('arch-ceremony-vineyard'), thumbWidth: 720, thumbHeight: 715,
  },
  {
    id: 'candelabra-table', category: 'medieval',
    alt: 'Long dining table with gold candelabras, tall ivory candles and gold-rimmed glassware before a carved oak fireplace',
    caption: 'Antique candelabras and gold-rimmed glass',
    full: wp('candelabra-table'), width: 1125, height: 1058, thumb: th('candelabra-table'), thumbWidth: 720, thumbHeight: 677,
  },
  {
    id: 'indian-varmala-ceremony', category: 'cultural',
    alt: 'Indian bride and groom during a traditional varmala ceremony',
    caption: 'A traditional varmala ceremony',
    full: gal('indian-varmala-ceremony'), width: 1600, height: 914, thumb: th('indian-varmala-ceremony'), thumbWidth: 720, thumbHeight: 411,
  },
  {
    id: 'chateau-sunset-embrace', category: 'destination',
    alt: 'Couple embracing at sunset in front of a château, with floral arrangements along a stone terrace',
    caption: 'Sunset beside a château',
    full: gal('chateau-sunset-embrace'), width: 1600, height: 640, thumb: th('chateau-sunset-embrace'), thumbWidth: 720, thumbHeight: 288,
  },
  {
    id: 'indian-garland-exchange', category: 'cultural',
    alt: 'Indian bride and groom exchanging flower garlands beneath a floral canopy, surrounded by guests',
    caption: 'Garlands, family and celebration',
    full: gal('indian-garland-exchange'), width: 1600, height: 500, thumb: th('indian-garland-exchange'), thumbWidth: 720, thumbHeight: 225,
  },
  {
    id: 'about-varmala-canopy', category: 'cultural',
    alt: 'Bride and groom exchanging garlands beneath a hanging floral canopy',
    caption: 'Beneath a hanging floral canopy',
    full: gal('about-varmala-canopy'), width: 900, height: 1050, thumb: th('about-varmala-canopy'), thumbWidth: 720, thumbHeight: 840,
  },
];
