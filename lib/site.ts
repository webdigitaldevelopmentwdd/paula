/**
 * Shared site data for the multi-page site.
 * Every piece of copy here comes from content already in the project
 * (the live home page, the Wedding Plans pages, or earlier versions in git history).
 */

export const SITE_URL = 'https://eclesarewedding.com';

/** Contact details exactly as already shown in the footer. Nothing else is published. */
export const CONTACT = {
  email: 'hello@eclesare.com',
  phoneDisplay: '+346566330*',
  phoneHref: 'tel:+346566330',
  location: 'Barcelona, Spain · Available worldwide',
};

/* ── Wedding Plans concepts ──────────────────────────────────────────── */
export type Concept = {
  slug: string;
  title: string;
  subtitle: string;
  blurb: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const CONCEPTS: Concept[] = [
  {
    slug: 'between-history-and-eternity',
    title: 'Between History and Eternity',
    subtitle: 'A Medieval-Inspired Celebration',
    blurb: 'Gothic arches, candlelight and sculptural florals, where historical heritage meets contemporary design.',
    image: {
      src: '/images/gallery/thumbs/gothic-hall-banquet.webp',
      alt: 'Gothic vaulted stone hall set with long banquet tables and white floral arrangements',
      width: 720,
      height: 484,
    },
  },
  {
    slug: 'mediterranean-in-a-different-light',
    title: 'The Mediterranean in a Different Light',
    subtitle: 'An Autumn Wedding Inspired by Architecture and Natural Beauty',
    blurb: 'An unexpected Mediterranean: more artistic, more architectural, and more intimate, where autumn becomes the true protagonist of the celebration.',
    image: {
      src: '/images/gallery/thumbs/autumn-stone-arches.webp',
      alt: 'Long banquet table beneath old stone arches draped in autumn foliage',
      width: 720,
      height: 1091,
    },
  },
  {
    slug: 'thematic-weddings',
    title: 'Thematic Weddings',
    subtitle: 'Shaped around your story, your cultures and the traditions that matter to you',
    blurb: 'We create thematic weddings shaped around your story, your cultures and the traditions that matter to you — while preserving the authentic spirit of a real Spanish wedding.',
    image: {
      src: '/images/gallery/thumbs/golden-arabian-courtyard.webp',
      alt: 'Golden Arabian courtyard wedding with ornate arches and warm lantern light',
      width: 720,
      height: 410,
    },
  },
];

export const conceptHref = (slug: string) => `/wedding-plans/${slug}`;

/* ── Thematic weddings (the seven themes already on the home page) ───── */
export type Theme = { number: string; title: string; text: string; image: string; alt: string; type: string; local?: { width: number; height: number } };

export const THEMES: Theme[] = [
  {
    number: '01',
    title: 'Indian Style',
    text: 'Colour, rituals, music and meaningful family traditions.',
    image: '/images/gallery/indian-varmala-ceremony.webp',
    alt: 'Indian bride and groom during a traditional varmala ceremony',
    type: 'Indian Style',
    local: { width: 1600, height: 914 },
  },
  {
    number: '02',
    title: 'Oriental Style',
    text: 'Thoughtful symbolism, refined details and atmospheric design.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    alt: 'Elegant oriental-inspired wedding design',
    type: 'Oriental Style',
  },
  {
    number: '03',
    title: 'Arabic Style',
    text: 'Rich textures, glowing light and generous hospitality.',
    image: '/images/gallery/golden-arabian-courtyard.webp',
    alt: 'Golden Arabian courtyard wedding with ornate arches and warm lantern light',
    type: 'Arabic Style',
    local: { width: 1600, height: 911 },
  },
  {
    number: '04',
    title: 'Medieval Romance',
    text: 'Historic settings, candlelight and dramatic architectural details.',
    image: '/images/wedding-plans/castle-ceremony-blossom.webp',
    alt: 'Couple kissing in a candlelit medieval stone hall flanked by white blossom trees',
    type: 'Medieval Romance',
    local: { width: 1125, height: 907 },
  },
  {
    number: '05',
    title: 'American Style',
    text: 'Personal vows, modern celebrations and distinctive reception experiences.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    alt: 'Contemporary American wedding celebration',
    type: 'American Style',
  },
  {
    number: '06',
    title: 'Church Weddings',
    text: 'Meaningful ceremonies with respectful, elegant styling.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85',
    alt: 'Elegant church wedding ceremony',
    type: 'Church Wedding',
  },
  {
    number: '07',
    title: 'The Real Spanish Wedding',
    text: 'And of course, we preserve the soul of a real Spanish wedding — its local traditions, warm hospitality, food, music and unmistakable Mediterranean spirit.',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=85',
    alt: 'Spanish destination wedding atmosphere',
    type: 'Spanish Wedding',
  },
];

/* ── Services (exact titles and descriptions from the live site) ─────── */
export type Service = {
  slug: string;
  number: string;
  kind: string;
  title: string;
  text: string;
  /** Indexes into PROCESS_STEPS that belong to this service. */
  steps: number[];
  image: { src: string; alt: string; width: number; height: number };
  /** Concept slugs that show this service in practice. */
  related: string[];
};

export const PROCESS_STEPS = [
  { num: '01', title: 'Concept', text: 'Story, inspiration and creative direction.' },
  { num: '02', title: 'Design', text: 'Materials, palette, spatial studies and moodboards.' },
  { num: '03', title: 'Planning', text: 'Partners, logistics, guest experience and schedule.' },
  { num: '04', title: 'Execution', text: 'Production, coordination and thoughtful delivery.' },
];

export const SERVICES: Service[] = [
  {
    slug: 'design-and-concept',
    number: '01',
    kind: 'Creative',
    title: 'Design & Concept',
    text: 'Visual language, spatial concept, materials and atmosphere.',
    steps: [0, 1],
    image: {
      src: '/images/wedding-plans/autumn-stone-arches.webp',
      alt: 'Long banquet table beneath old stone arches draped in autumn foliage, with woven rattan lanterns',
      width: 1125,
      height: 1704,
    },
    related: ['mediterranean-in-a-different-light', 'between-history-and-eternity'],
  },
  {
    slug: 'full-planning',
    number: '02',
    kind: 'Planning',
    title: 'Full Planning',
    text: 'Venue research, budgets, timelines and trusted partners.',
    steps: [2],
    image: {
      src: '/images/wedding-plans/gothic-hall-banquet.webp',
      alt: 'Gothic vaulted stone hall set with long banquet tables and white floral arrangements',
      width: 1125,
      height: 757,
    },
    related: ['between-history-and-eternity', 'thematic-weddings'],
  },
  {
    slug: 'production-and-styling',
    number: '03',
    kind: 'Production',
    title: 'Production & Styling',
    text: 'Installations, lighting, décor and on-site coordination.',
    steps: [3],
    image: {
      src: '/images/wedding-plans/candelabra-table.webp',
      alt: 'Long dining table with gold candelabras, tall ivory candles and gold-rimmed glassware',
      width: 1125,
      height: 1058,
    },
    related: ['between-history-and-eternity', 'mediterranean-in-a-different-light'],
  },
  {
    slug: 'guest-experience',
    number: '04',
    kind: 'Destination',
    title: 'Guest Experience',
    text: 'Travel, hospitality and a seamless destination journey.',
    steps: [2],
    image: {
      src: '/images/wedding-plans/arch-ceremony-vineyard.webp',
      alt: 'Outdoor ceremony beneath a monumental terracotta arch, with guests seated on woven chairs',
      width: 1125,
      height: 1117,
    },
    related: ['mediterranean-in-a-different-light', 'thematic-weddings'],
  },
];

export const serviceHref = (slug: string) => `/services/${slug}`;

/* ── Destinations (existing home-page cards) ─────────────────────────── */
export const DESTINATIONS = [
  { title: 'India', text: 'Ritual, heritage, contemporary design.' },
  { title: 'France', text: 'Châteaux, architecture, understated romance.' },
  { title: 'Spain', text: 'Sunlit landscapes and expressive gatherings.' },
  { title: 'Beyond', text: 'Mountains, coastlines and private estates.' },
];

/* ── Types of wedding offered in the enquiry form ────────────────────── */
export const WEDDING_TYPES = [
  'Between History and Eternity (medieval-inspired)',
  'The Mediterranean in a Different Light (autumn)',
  'Indian Style',
  'Oriental Style',
  'Arabic Style',
  'Medieval Romance',
  'American Style',
  'Church Wedding',
  'Spanish Wedding',
  'Destination Wedding',
  'Not sure yet',
];
