import Reveal from './Reveal';

const IMG = '/images/wedding-plans';

type Photo = { src: string; alt: string; width: number; height: number; caption: string };

const PHOTOS: Record<'hall' | 'sunset' | 'dining' | 'ceremony' | 'candelabra', Photo> = {
  hall: {
    src: `${IMG}/gothic-hall-banquet.webp`,
    alt: 'Gothic vaulted stone hall set with long banquet tables and white floral arrangements',
    width: 1125,
    height: 757,
    caption: 'Gothic arches, long tables, white florals',
  },
  sunset: {
    src: `${IMG}/tuscan-sunset-table.webp`,
    alt: 'Eclesare by Paula — candlelit terrace table with burgundy and blush flowers at sunset',
    width: 1024,
    height: 1536,
    caption: 'Candlelight at golden hour',
  },
  dining: {
    src: `${IMG}/castle-dining-burgundy.webp`,
    alt: 'Couple in a castle dining room with red damask walls and a long table dressed in burgundy florals and candles',
    width: 1125,
    height: 739,
    caption: 'Burgundy florals, red damask, candlelit banquet',
  },
  ceremony: {
    src: `${IMG}/castle-ceremony-blossom.webp`,
    alt: 'Couple kissing in a candlelit medieval stone hall flanked by white blossom trees',
    width: 1125,
    height: 907,
    caption: 'A ceremony in ancient stone',
  },
  candelabra: {
    src: `${IMG}/candelabra-table.webp`,
    alt: 'Long dining table with gold candelabras, tall ivory candles and gold-rimmed glassware before a carved oak fireplace',
    width: 1125,
    height: 1058,
    caption: 'Antique candelabras and gold-rimmed glass',
  },
};

const PALETTE = [
  { name: 'Deep Burgundy', color: '#5B1D2B' },
  { name: 'Forest Green', color: '#2F4A3A' },
  { name: 'Ivory', color: '#F4EFE7' },
  { name: 'Antique Gold', color: '#B08D57' },
];

const MATERIALS = [
  'Natural Stone',
  'Luxurious Velvet',
  'Premium Linen',
  'Antique Candelabras',
  'Sculptural Floral Arrangements',
];

function Figure({ photo, priority = false, className = '' }: { photo: Photo; priority?: boolean; className?: string }) {
  return (
    <figure className={`wp-figure ${className}`.trim()}>
      <div className="wp-frame">
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...(priority ? { fetchPriority: 'high' as const } : {})}
        />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export default function WeddingPlans() {
  return (
    <>
      <section className="wp-hero" id="wedding-plans">
        <div className="wrap">
          <Reveal className="wp-hero-copy">
            <div className="eyebrow">Wedding Plans</div>
            <h1>Between History and Eternity</h1>
            <p className="wp-subtitle">A Medieval-Inspired Celebration</p>
            <span className="wp-rule" aria-hidden="true" />
          </Reveal>
        </div>
        <div className="wp-hero-stage">
          <div className="wrap">
            <Reveal>
              <Figure photo={PHOTOS.hall} priority />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wp-intro">
        <div className="wrap wp-intro-grid">
          <Reveal className="wp-intro-visual">
            <Figure photo={PHOTOS.sunset} />
          </Reveal>
          <Reveal className="wp-intro-copy">
            <p className="wp-lead">
              Some places seem to preserve the memories of centuries past. Spaces where architecture, light, and the
              beauty of natural materials create an atmosphere that transcends time.
            </p>
            <p>
              This wedding concept draws inspiration from the grandeur of historic castles and the sophistication of
              ancient European courts, reimagined through a contemporary perspective.
            </p>
            <p>
              Monumental stone structures, Gothic arches, candlelight, and sculptural floral arrangements come together
              with luxurious fabrics, handcrafted metalwork, and a deep, refined colour palette.
            </p>
            <p>
              Every space is envisioned as a carefully curated setting, where decoration does more than simply enhance
              its surroundings — it interacts with the architecture to create a truly immersive sensory experience.
            </p>
            <p>
              Atmospheric lighting, imperial dining tables, and artisanal details bring character, intimacy, and an
              understated elegance that reveals itself in every detail.
            </p>
            <p className="wp-closing">
              The result is a celebration of majestic presence and romantic sensibility — a wedding where historical
              heritage meets contemporary design to create an unforgettable love story.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="wp-gallery" aria-label="Wedding Plans gallery">
        <div className="wrap">
          <Reveal>
            <Figure photo={PHOTOS.dining} className="wp-wide" />
          </Reveal>
          <div className="wp-pair">
            <Reveal>
              <Figure photo={PHOTOS.ceremony} />
            </Reveal>
            <Reveal className="wp-pair-offset">
              <Figure photo={PHOTOS.candelabra} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wp-aesthetic">
        <div className="wrap">
          <Reveal className="wp-aesthetic-head">
            <div className="eyebrow">The Concept</div>
            <h2>Aesthetic Direction</h2>
          </Reveal>
          <div className="wp-aesthetic-grid">
            <Reveal className="wp-col">
              <h3>Colour Palette</h3>
              <ul className="wp-palette">
                {PALETTE.map((p) => (
                  <li key={p.name}>
                    <span className="wp-swatch" style={{ background: p.color }} aria-hidden="true" />
                    <span className="wp-swatch-name">{p.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="wp-col">
              <h3>Materials &amp; Styling</h3>
              <ul className="wp-materials">
                {MATERIALS.map((m, i) => (
                  <li key={m}>
                    <span className="wp-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wp-essence">
        <div className="wrap">
          <Reveal className="wp-essence-inner">
            <span className="wp-rule wp-rule-light" aria-hidden="true" />
            <h2>The Essence of the Concept</h2>
            <p>
              Timeless elegance inspired by history, where every detail becomes part of a harmonious, sophisticated, and
              unforgettable composition.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
