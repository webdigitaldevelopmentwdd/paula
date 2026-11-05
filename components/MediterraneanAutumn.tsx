import Reveal from './Reveal';

const IMG = '/images/wedding-plans';

type Photo = { src: string; alt: string; width: number; height: number; caption: string };

const PHOTOS: Record<'arches' | 'table' | 'ceremony', Photo> = {
  arches: {
    src: `${IMG}/autumn-stone-arches.webp`,
    alt: 'Long banquet table beneath old stone arches draped in autumn foliage, with woven rattan lanterns and terracotta, peach and pink florals',
    width: 1125,
    height: 1704,
    caption: 'Stone arches in autumn foliage',
  },
  table: {
    src: `${IMG}/terracotta-long-table.webp`,
    alt: 'Long outdoor dinner table with a terracotta silk runner, brass candlesticks, linen napkins and warm orange and burgundy florals',
    width: 1125,
    height: 746,
    caption: 'Terracotta, brass and candlelight',
  },
  ceremony: {
    src: `${IMG}/arch-ceremony-vineyard.webp`,
    alt: 'Outdoor ceremony beneath a monumental terracotta arch among oak trees, with guests seated on woven chairs and orange floral aisle arrangements',
    width: 1125,
    height: 1117,
    caption: 'A ceremony beneath a sculptural arch',
  },
};

const PALETTE = [
  { name: 'Burnt Terracotta', color: '#B4553A' },
  { name: 'Deep Plum', color: '#4B2340' },
  { name: 'Aged Copper', color: '#9A6A3E' },
  { name: 'Olive Green', color: '#6B6B3A' },
  { name: 'Warm Ivory', color: '#F4EBDD' },
];

const MATERIALS = [
  'Natural Stone',
  'Sculptural Ceramics',
  'Textured Linen',
  'Artistic Glassware',
  'Organic Floral Arrangements',
  'Aged Metallic Accents',
];

function Figure({ photo, className = '' }: { photo: Photo; className?: string }) {
  return (
    <figure className={`wp-figure ${className}`.trim()}>
      <div className="wp-frame">
        <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

/** Slim switcher so both Wedding Plans concepts stay one tap away. */
export function ConceptNav() {
  return (
    <nav className="wp-concepts" aria-label="Wedding concepts">
      <div className="wrap wp-concepts-inner">
        <a href="#wedding-plans">
          <span className="wp-concepts-num">I</span>
          <span className="wp-concepts-long">Between History and Eternity</span>
          <span className="wp-concepts-short">Medieval</span>
        </a>
        <a href="#mediterranean">
          <span className="wp-concepts-num">II</span>
          <span className="wp-concepts-long">The Mediterranean in a Different Light</span>
          <span className="wp-concepts-short">Mediterranean</span>
        </a>
      </div>
    </nav>
  );
}

export default function MediterraneanAutumn() {
  return (
    <section className="med" id="mediterranean">
      <div className="wrap med-top">
        <Reveal className="med-copy">
          <div className="med-label">
            <span className="med-roman">II</span>
            <span className="eyebrow">Wedding Plans · Concept Two</span>
          </div>
          <h2 className="med-title">The Mediterranean in a Different Light</h2>
          <p className="med-subtitle">An Autumn Wedding Inspired by Architecture and Natural Beauty</p>
          <span className="med-rule" aria-hidden="true" />
          <p className="med-lead">
            The Mediterranean reveals a different kind of beauty when autumn arrives. The light turns warmer and more
            golden, colours gain depth, and landscapes embrace a sense of serenity that invites a more intimate way of
            celebrating.
          </p>
          <p>
            This concept reinterprets the essence of Mediterranean living through a contemporary, artistic, and
            sophisticated perspective. Organic architecture, sculptural forms, and natural materials become the defining
            elements of a celebration where every detail is thoughtfully considered.
          </p>
          <p>
            The colour palette moves beyond traditional summer tones, exploring rich shades of terracotta, plum, aged
            copper, deep olive green, and warm ivory. Floral design takes on an expressive character, featuring
            asymmetrical arrangements, unexpected textures, and contrasts inspired by the richness of the Mediterranean
            landscape in autumn.
          </p>
          <p>
            Tables are envisioned as true design statements: organic silhouettes, handcrafted ceramics, delicate
            glassware, aged metals, and atmospheric lighting that transforms the surroundings as evening falls.
          </p>
          <p>
            Rather than recreating a traditional Mediterranean postcard, this concept seeks to reinterpret it. A
            celebration where nature meets art, tradition meets contemporary design, and elegance emerges through an
            unexpected combination of shapes, materials, and sensations.
          </p>
          <p className="med-closing">
            The result is a warm, immersive, and deeply personal experience, created for couples who envision a
            Mediterranean wedding with its own distinctive identity — far from convention and perfectly in harmony with
            the beauty of autumn.
          </p>
        </Reveal>
        <Reveal className="med-visual">
          <Figure photo={PHOTOS.arches} />
        </Reveal>
      </div>

      <div className="wrap med-gallery" role="group" aria-label="Mediterranean autumn gallery">
        <Reveal className="med-gallery-main">
          <Figure photo={PHOTOS.table} />
        </Reveal>
        <Reveal className="med-gallery-side">
          <Figure photo={PHOTOS.ceremony} />
        </Reveal>
      </div>

      <div className="wrap med-aesthetic">
        <Reveal className="med-aesthetic-head">
          <div className="eyebrow">The Concept</div>
          <h2>Aesthetic Direction</h2>
        </Reveal>
        <Reveal className="med-block">
          <h3>Colour Palette</h3>
          <ul className="med-palette">
            {PALETTE.map((p) => (
              <li key={p.name}>
                <span className="med-tile" style={{ background: p.color }} aria-hidden="true" />
                <span className="med-tile-name">{p.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="med-block">
          <h3>Materials &amp; Styling</h3>
          <ul className="med-materials">
            {MATERIALS.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="med-essence">
        <div className="wrap">
          <Reveal className="med-essence-inner">
            <span className="wp-rule med-rule-light" aria-hidden="true" />
            <h2>The Essence of the Concept</h2>
            <p>
              An unexpected Mediterranean: more artistic, more architectural, and more intimate, where autumn becomes the
              true protagonist of the celebration.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
