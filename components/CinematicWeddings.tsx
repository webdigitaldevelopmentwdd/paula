'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Reveal from './Reveal';
import { useCinematicText } from './useCinematicText';
import { CINEMATIC_PHOTOS } from '@/lib/cinematic-content';
import './CinematicWeddings.css';

/**
 * Cinematic Weddings page body. Every visible string comes from locales/<lang>/cinematic.json
 * through the site's existing language selector.
 */
export default function CinematicWeddings() {
  const tr = useCinematicText();
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const total = CINEMATIC_PHOTOS.length;

  const close = useCallback(() => {
    setActive(null);
    opener.current?.focus();
  }, []);
  const step = useCallback((d: number) => setActive((a) => (a === null ? a : (a + d + total) % total)), [total]);

  // Keyboard, scroll lock and focus while the viewer is open.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab') {
        const f = document.querySelectorAll<HTMLElement>('.lb button');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active, close, step]);

  const current = active === null ? null : CINEMATIC_PHOTOS[active];

  return (
    <>
      <section className="cw-head">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">{tr('cinematic.eyebrow')}</div>
            <h2>{tr('cinematic.title')}</h2>
            <p className="cw-sub">{tr('cinematic.subtitle')}</p>
            <span className="wp-rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="cw-scene1">
        <div className="wrap">
          <Reveal className="cw-narrow">
            <p className="cw-lead">{tr('cinematic.p1')}</p>
            <p className="cw-body">{tr('cinematic.p2')}</p>
          </Reveal>
        </div>
      </section>

      <section className="cw-scene2">
        <div className="wrap">
          <Reveal className="cw-pair">
            <div>
              <span className="cw-numeral" aria-hidden="true">I</span>
              <p>{tr('cinematic.p3')}</p>
            </div>
            <span className="cw-pair-rule" aria-hidden="true" />
            <div>
              <span className="cw-numeral" aria-hidden="true">II</span>
              <p>{tr('cinematic.p4')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cw-finale">
        <div className="wrap">
          <Reveal className="cw-narrow">
            <p className="cw-finale-quote">{tr('cinematic.p5')}</p>
            <p className="cw-finale-line">
              {tr('cinematic.p6')}
              <span className="cw-question">{tr('cinematic.p6q')}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cw-gallery" aria-labelledby="cw-gallery-title">
        <div className="wrap">
          <Reveal className="cw-gallery-head">
            <div className="eyebrow">{tr('cinematic.gallery.eyebrow')}</div>
            <h2 id="cw-gallery-title">{tr('cinematic.gallery.title')}</h2>
          </Reveal>
          <div className="cw-mosaic">
            {CINEMATIC_PHOTOS.map((p, i) => {
              const caption = tr(`cinematic.photo.${p.id}.caption`);
              return (
                <Reveal as="figure" className={`cw-item cw-${p.layout}`} key={p.id}>
                  <button
                    type="button"
                    className="cw-open"
                    aria-label={`${tr('cinematic.lb.open')}: ${caption}`}
                    onClick={(e) => {
                      opener.current = e.currentTarget;
                      setActive(i);
                    }}
                  >
                    <img
                      src={p.src}
                      alt={tr(`cinematic.photo.${p.id}.alt`)}
                      width={p.width}
                      height={p.height}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </button>
                  <figcaption>{caption}</figcaption>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-cta" aria-label={tr('cinematic.cta.eyebrow')}>
        <div className="wrap cta-inner">
          <div>
            <div className="eyebrow">{tr('cinematic.cta.eyebrow')}</div>
            <h2>{tr('cinematic.cta.title')}</h2>
            <p>{tr('cinematic.cta.text')}</p>
          </div>
          <Link className="btn" href="/contact">{tr('cinematic.cta.button')}</Link>
        </div>
      </section>

      {current && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={`${tr('cinematic.lb.dialog')}: ${tr(`cinematic.photo.${current.id}.caption`)}`}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button ref={closeRef} type="button" className="lb-close" onClick={close} aria-label={tr('cinematic.lb.close')}>×</button>
          <button type="button" className="lb-nav lb-prev" onClick={() => step(-1)} aria-label={tr('cinematic.lb.prev')}>←</button>
          <button type="button" className="lb-nav lb-next" onClick={() => step(1)} aria-label={tr('cinematic.lb.next')}>→</button>
          <figure className="lb-fig">
            <img key={current.id} src={current.src} alt={tr(`cinematic.photo.${current.id}.alt`)} width={current.width} height={current.height} />
            <figcaption>
              <span>{tr(`cinematic.photo.${current.id}.caption`)}</span>
              <span className="lb-count" aria-hidden="true">{String((active ?? 0) + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
