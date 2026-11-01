'use client';

import { useCallback, useEffect, useState, type TouchEvent } from 'react';
import { CONFIG } from '@/lib/config';
import { prefersReducedMotion, useLang } from '@/lib/lang';

const SLIDES = [
  { img: '/images/hero-india.jpg', alt: 'Indian bride and groom exchanging varmala garlands at a palace wedding', href: '#contact', n: 1 },
  { img: '/images/hero-france.jpg', alt: 'Bride and groom at a French château at sunset', href: '#destinations', n: 2 },
  { img: '/images/hero-beach.jpg', alt: 'Coastal ceremony under a floral arch at sunset', href: '#beach', n: 3 },
];

export function Hero() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [halted, setHalted] = useState(false); // hover / focus / touch
  const [tabHidden, setTabHidden] = useState(false);
  const [x0, setX0] = useState<number | null>(null);

  const show = useCallback((n: number) => {
    setIndex(((n % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  /* autoplay: one timeout per slide, restarted on every change */
  useEffect(() => {
    if (prefersReducedMotion() || paused || halted || tabHidden) return;
    const id = window.setTimeout(() => show(index + 1), CONFIG.slideMs);
    return () => window.clearTimeout(id);
  }, [index, paused, halted, tabHidden, show]);

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  /* a manual change restarts autoplay, as the original did */
  const go = (n: number) => {
    show(n);
    setHalted(false);
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 48) show(index + (dx < 0 ? 1 : -1));
    setHalted(false);
    setX0(null);
  };

  return (
    <section
      className="hero"
      id="top"
      aria-roledescription="carousel"
      aria-label="Featured weddings"
      onMouseEnter={() => setHalted(true)}
      onMouseLeave={() => setHalted(false)}
      onFocus={() => setHalted(true)}
      onBlur={() => setHalted(false)}
      onTouchStart={(e) => {
        setX0(e.touches[0].clientX);
        setHalted(true);
      }}
      onTouchEnd={onTouchEnd}
    >
      {SLIDES.map((s, i) => {
        const on = i === index;
        return (
          <div
            key={s.n}
            className={`slide${on ? ' is-active' : ''}`}
            data-slide={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${s.n} of 3`}
            aria-hidden={on ? 'false' : 'true'}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="slide-img"
              src={s.img}
              alt={s.alt}
              width={1920}
              height={760}
              {...(i === 0 ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })}
            />
            <div className="slide-veil"></div>
            <div className="wrap slide-body">
              <p className="eyebrow" data-rise>{t(`hero.${s.n}.eyebrow`)}</p>
              <h1 data-rise>{t(`hero.${s.n}.title`)}</h1>
              <p className="lede" data-rise>{t(`hero.${s.n}.text`)}</p>
              <p data-rise className="slide-cta">
                <a className="btn btn--gold" href={s.href} tabIndex={on ? undefined : -1}>{t(`hero.${s.n}.cta`)}</a>
              </p>
            </div>
          </div>
        );
      })}

      <div className="wrap hero-controls">
        <div className="dots" role="tablist" aria-label="Choose slide">
          {SLIDES.map((s, i) => (
            <button key={s.n} type="button" role="tab" aria-selected={i === index ? 'true' : 'false'} onClick={() => go(i)}>
              <span className="sr">{s.n}</span>
            </button>
          ))}
        </div>
        <div className="arrows">
          <button type="button" className="rnd" aria-label="Previous slide" onClick={() => go(index - 1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19 8 12l7-7" /></svg>
          </button>
          <button type="button" className="rnd" data-pause aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused((p) => !p)}>
            <svg className="i-pause" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" {...{ hidden: paused }}><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
            <svg className="i-play" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" {...{ hidden: !paused }}><path d="M8 5l11 7-11 7z" /></svg>
          </button>
          <button type="button" className="rnd" aria-label="Next slide" onClick={() => go(index + 1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
