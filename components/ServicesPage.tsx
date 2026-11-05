'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { useServicesText } from './useServicesText';
import { PROCESS_STEP_NUMBERS, SERVICE_ITEMS } from '@/lib/services-content';
import './ServicesPage.css';

/**
 * Services page body. Every visible string is looked up by key in locales/<lang>/services.json
 * through the site's existing language selector, so the page follows the visitor's chosen language.
 */
export default function ServicesPage() {
  const tr = useServicesText();

  return (
    <>
      <section className="sv-hero">
        <div className="wrap">
          <Reveal className="sv-hero-copy">
            <div className="eyebrow">{tr('services.page.eyebrow')}</div>
            <h2>{tr('services.page.title')}</h2>
            <p className="sv-lead">{tr('services.page.intro')}</p>
            <span className="wp-rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="sv-list" aria-label={tr('services.list.label')}>
        <div className="wrap">
          {SERVICE_ITEMS.map((s, i) => {
            const title = tr(`services.${s.id}.title`);
            return (
              <Reveal as="article" className={`sv-row${i % 2 ? ' sv-row-flip' : ''}`} key={s.id}>
                <div className="sv-media">
                  <div className="wp-frame">
                    <img
                      src={s.image}
                      alt={tr(`services.${s.id}.alt`)}
                      width={s.width}
                      height={s.height}
                      loading={i < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="sv-copy">
                  <span className="sv-num">{s.number}</span>
                  <h3 id={`service-${s.id}`}>{title}</h3>
                  {tr(`services.${s.id}.description`)
                    .split('\n\n')
                    .map((para, n) => (
                      <p key={n}>{para}</p>
                    ))}
                  <div className="sv-actions">
                    <Link className="btn btn-dark" href="/contact" aria-label={`${tr('services.enquire')}: ${title}`}>
                      {tr('services.enquire')}&nbsp; →
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="sv-process" aria-labelledby="sv-process-title">
        <div className="wrap">
          <Reveal className="sv-process-head">
            <div className="eyebrow">{tr('services.process.eyebrow')}</div>
            <h2 id="sv-process-title">{tr('services.process.title')}</h2>
            <p>{tr('services.process.text')}</p>
          </Reveal>
          <ol className="ab-steps">
            {PROCESS_STEP_NUMBERS.map((num, i) => (
              <Reveal as="li" key={num}>
                <span className="ab-step-num">{num}</span>
                <h3>{tr(`services.process.${i + 1}.title`)}</h3>
                <p>{tr(`services.process.${i + 1}.text`)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="contact-cta" aria-label={tr('services.cta.eyebrow')}>
        <div className="wrap cta-inner">
          <div>
            <div className="eyebrow">{tr('services.cta.eyebrow')}</div>
            <h2>{tr('services.cta.title')}</h2>
            <p>{tr('services.cta.text')}</p>
          </div>
          <Link className="btn" href="/contact">{tr('services.cta.button')}</Link>
        </div>
      </section>
    </>
  );
}
