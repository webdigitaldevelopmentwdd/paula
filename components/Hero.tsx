'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';

const TOTAL = 3;
const INTERVAL_MS = 6000;

export default function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // (Re)start the auto-advance timer; paused while the tab is hidden or reduced motion is requested.
  const startSlider = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !document.hidden) {
      timer.current = setInterval(() => setCurrent((c) => (c + 1) % TOTAL), INTERVAL_MS);
    }
  }, []);

  useEffect(() => {
    startSlider();
    document.addEventListener('visibilitychange', startSlider);
    return () => {
      document.removeEventListener('visibilitychange', startSlider);
      if (timer.current) clearInterval(timer.current);
    };
  }, [startSlider]);

  // `to` is either an absolute slide index or a relative step ({ by: ±1 }).
  const showSlide = (to: number | { by: number }) => {
    setCurrent((c) => {
      const n = typeof to === 'number' ? to : c + to.by;
      return (n + TOTAL) % TOTAL;
    });
    startSlider();
  };

  const slideClass = (i: number) => `slide${i === current ? ' active' : ''}`;

  return (
    <section className="hero" id="home" aria-label="Wedding hero slider">
      <div className="slides">
        <article className={slideClass(0)}>
          <img src="/images/hero-1.png" alt="Indian bride and groom exchanging varmala beneath a grand floral arch" />
          <div className="hero-copy">
            <div className="eyebrow">{t('heroEyebrow', 'Arquitectura de emociones')}</div>
            <h1>{t('heroTitle', 'Extraordinary celebrations by design')}</h1>
            <p>{t('heroText', 'We design and plan bespoke weddings and unforgettable celebrations around the world.')}</p>
            <a className="btn" href="#contacto">{t('discover', 'Plan your celebration  →')}</a>
          </div>
        </article>
        <article className={slideClass(1)}>
          <img src="/images/hero-2.png" alt="Elegant destination wedding with refined floral styling" loading="lazy" />
          <div className="hero-copy">
            <div className="hero-copy">
              <div className="eyebrow">Indian weddings</div>
              <h1>Tradition, beauty &amp; emotion</h1>
              <p>Celebrate the timeless joy of an Indian varmala ceremony, designed with intention and unforgettable detail.</p>
              <a className="btn" href="#destinos">Explore Indian weddings&nbsp; →</a>
            </div>
          </div>
        </article>
        <article className={slideClass(2)}>
          <img src="/images/hero-3.png" alt="Atmospheric wedding dinner beneath warm lights" loading="lazy" />
          <div className="hero-copy">
            <div className="eyebrow">Art · Place · Emotion</div>
            <h1>{t('heroThird', 'Spaces that tell your story')}</h1>
            <p>{t('heroThirdText', 'From sculptural installations to intimate destination gatherings, every detail has intention.')}</p>
            <a className="btn" href="#galeria">{t('viewWork', 'View the gallery  →')}</a>
          </div>
        </article>
      </div>
      <div className="hero-controls">
        <div className="arrows">
          <button className="circle-btn" id="prevSlide" aria-label="Previous slide" onClick={() => showSlide({ by: -1 })}>←</button>
          <button className="circle-btn" id="nextSlide" aria-label="Next slide" onClick={() => showSlide({ by: 1 })}>→</button>
        </div>
        <div className="dots" id="slideDots">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`dot${i === current ? ' active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => showSlide(i)}
            />
          ))}
        </div>
        <div className="hero-count" id="slideCount">{String(current + 1).padStart(2, '0')} / 03</div>
      </div>
    </section>
  );
}
