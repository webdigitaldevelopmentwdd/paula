'use client';

import { useLang } from '@/lib/lang';
import { TILES } from '@/lib/gallery';
import type { ExpKey } from '@/lib/experiences';
import { Reveal } from './Reveal';

const Leaf = ({ id }: { id: 'a' | 'b' }) => (
  <span className={`leaf leaf--${id}`} aria-hidden="true">
    <svg viewBox="0 0 120 220" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M60 215V20" />
      <path d="M60 60c-22-6-34-22-36-44 22 2 34 16 36 44ZM60 60c22-6 34-22 36-44-22 2-34 16-36 44ZM60 112c-22-6-34-22-36-44 22 2 34 16 36 44ZM60 112c22-6 34-22 36-44-22 2-34 16-36 44ZM60 164c-22-6-34-22-36-44 22 2 34 16 36 44ZM60 164c22-6 34-22 36-44-22 2-34 16-36 44Z" />
    </svg>
  </span>
);

export { Leaf };

/* ── About ───────────────────────────────────────────────────────────── */
export function About() {
  const { t } = useLang();
  return (
    <section className="about" id="about">
      <Leaf id="a" />

      <div className="wrap about-grid">
        <Reveal className="about-art">
          <span className="art-frame" aria-hidden="true"></span>
          <span className="art-slab" aria-hidden="true"></span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about-india.jpg" alt="Bride and groom during the varmala ceremony beneath a floral canopy" width={900} height={1050} loading="lazy" />
        </Reveal>

        <Reveal className="about-copy">
          <p className="eyebrow">{t('about.eyebrow')}</p>
          <h2>{t('about.title')}</h2>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <p className="about-btn"><a className="btn btn--line" href="#experience">{t('about.cta')}</a></p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Destinations ────────────────────────────────────────────────────── */
const DESTS: { href: string; jump: ExpKey | null; img: string; alt: string }[] = [
  { href: '#experience', jump: 'palace', img: '/images/dest-india.jpg', alt: 'Indian palace wedding ceremony' },
  { href: '#experience', jump: 'chateau', img: '/images/dest-france.jpg', alt: 'Couple in the gardens of a French château' },
  { href: '#gallery', jump: null, img: '/images/dest-spain.jpg', alt: 'Bride beside a candlelit garden table — photograph by Paula' },
  { href: '#experience', jump: 'mountain', img: '/images/dest-mountain.jpg', alt: 'Lakeside mountain ceremony beneath a floral arch' },
];

export function Destinations({ onJump }: { onJump: (key: ExpKey) => void }) {
  const { t } = useLang();
  return (
    <section className="dest" id="destinations">
      <div className="wrap">
        <Reveal as="header" className="sec-head">
          <p className="eyebrow">{t('dest.eyebrow')}</p>
          <h2>{t('dest.title')}</h2>
          <p className="sec-sub">{t('dest.sub')}</p>
        </Reveal>

        <div className="dest-grid">
          {DESTS.map((d, i) => (
            <Reveal as="article" className="card" key={d.img}>
              <a href={d.href} onClick={d.jump ? () => onJump(d.jump as ExpKey) : undefined}>
                <span className="card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.img} alt={d.alt} width={1100} height={825} loading="lazy" />
                </span>
                <h3>{t(`dest.${i + 1}.t`)}</h3>
                <p>{t(`dest.${i + 1}.d`)}</p>
                <span className="card-go">
                  <span>{t('common.explore')}</span>
                  <svg width="16" height="10" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M0 6h18M13 1l5 5-5 5" /></svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Beach feature ───────────────────────────────────────────────────── */
export function Beach() {
  const { t } = useLang();
  return (
    <section className="beach" id="beach">
      <div className="wrap beach-grid">
        <Reveal className="beach-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/beach-feature.jpg" alt="Seaside ceremony with guests and a white floral arch" width={1280} height={960} loading="lazy" />
        </Reveal>
        <Reveal className="beach-copy">
          <p className="eyebrow">{t('beach.eyebrow')}</p>
          <h2>{t('beach.title')}</h2>
          <p>{t('beach.text')}</p>
          <ul className="ticks">
            <li>{t('beach.l1')}</li>
            <li>{t('beach.l2')}</li>
            <li>{t('beach.l3')}</li>
          </ul>
          <p><a className="btn btn--line" href="#contact">{t('beach.cta')}</a></p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Gallery ─────────────────────────────────────────────────────────── */
export function Gallery({ onOpen }: { onOpen: (i: number) => void }) {
  const { t } = useLang();
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <Reveal as="header" className="sec-head">
          <p className="eyebrow">{t('gal.eyebrow')}</p>
          <h2>{t('gal.title')}</h2>
          <p className="sec-sub">{t('gal.sub')}</p>
        </Reveal>

        <Reveal className="gal-grid">
          {TILES.map((tile, i) => (
            <figure className={tile.cls} data-tile key={tile.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tile.src} alt={tile.alt} width={tile.width} height={tile.height} loading="lazy" />
              <button type="button" className="tile-btn" aria-label={`Open image ${i + 1}`} onClick={() => onOpen(i)}></button>
              <figcaption>{t(tile.cap)}</figcaption>
            </figure>
          ))}
        </Reveal>

        <Reveal as="p" className="center"><a className="btn btn--line" href="#contact">{t('gal.cta')}</a></Reveal>
      </div>
    </section>
  );
}

/* ── Services ────────────────────────────────────────────────────────── */
const SERVICES: React.ReactNode[] = [
  <><rect x="5" y="7" width="22" height="20" rx="2" /><path d="M5 13h22M11 4v5M21 4v5M11 19h4M11 23h10" /></>,
  <><circle cx="16" cy="16" r="11" /><path d="M5 16h22M16 5c6 6 6 16 0 22-6-6-6-16 0-22" /></>,
  <><path d="M16 27s-9-5.7-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.3-9 12-9 12Z" /><path d="M16 12v15" /></>,
  <><path d="M6 25V9l10-4 10 4v16" /><path d="M6 25h20M12 25v-7h8v7M12 13h2M18 13h2" /></>,
  <><circle cx="12" cy="12" r="4" /><circle cx="22" cy="14" r="3" /><path d="M5 26c0-4 3.3-7 7-7s7 3 7 7M20 26c0-2.6 1.6-5 4-5.6" /></>,
  <><circle cx="11" cy="19" r="6" /><circle cx="21" cy="19" r="6" /><path d="M8 9l3-4 3 4M18 9l3-4 3 4" /></>,
  <path d="M16 4v24M4 10h24M7 10c0 4 3 6 9 6s9-2 9-6M9 28h14" />,
];

export function Services() {
  const { t } = useLang();
  return (
    <section className="services" id="services">
      <div className="wrap">
        <Reveal as="header" className="sec-head">
          <p className="eyebrow">{t('svc.eyebrow')}</p>
          <h2>{t('svc.title')}</h2>
          <p className="sec-sub">{t('svc.sub')}</p>
        </Reveal>

        <Reveal as="ul" className="svc-grid">
          {SERVICES.map((icon, i) => (
            <li className="svc" key={i}>
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">{icon}</svg>
              <h3>{t(`svc.${i + 1}`)}</h3>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ── CTA band ────────────────────────────────────────────────────────── */
export function Band() {
  const { t } = useLang();
  return (
    <section className="band">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="band-img" src="/images/cta-band.jpg" alt="" width={1920} height={620} loading="lazy" />
      <div className="band-veil"></div>
      <Reveal className="wrap band-body">
        <h2>{t('band.title')}</h2>
        <p>{t('band.text')}</p>
        <a className="btn btn--gold" href="#contact">{t('band.cta')}</a>
      </Reveal>
    </section>
  );
}
