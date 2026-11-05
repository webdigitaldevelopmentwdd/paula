'use client';

import Link from 'next/link';
import Reveal from './Reveal';
import { useServicesText } from './useServicesText';
import { hasServicesText } from '@/lib/services-i18n';
import { ADDITIONAL_ITEMS, PROCESS_STEP_NUMBERS, SERVICE_ITEMS, type ServiceGroup, type ServiceItem } from '@/lib/services-content';
import './ServicesPage.css';

/**
 * Services page body. Every visible string is looked up by key in locales/<lang>/services.json
 * through the site's existing language selector, so the page follows the visitor's chosen language.
 */
export default function ServicesPage() {
  const tr = useServicesText();

  const rows = (items: ServiceItem[], group: ServiceGroup) =>
    items.map((s, i) => {
      const title = tr(`${group}.${s.id}.title`);
      // A main service may carry an extra paragraph merged in from the additional-services text.
      const paragraphs = [tr(`${group}.${s.id}.description`), hasServicesText(`${group}.${s.id}.extra`) ? tr(`${group}.${s.id}.extra`) : '']
        .filter(Boolean)
        .flatMap((t) => t.split('\n\n'));
      return (
        <Reveal as="article" className={`sv-row${i % 2 ? ' sv-row-flip' : ''}`} key={s.id}>
          <div className="sv-media">
            <div className="wp-frame">
              <img
                src={s.image}
                alt={tr(`${group}.${s.id}.alt`)}
                width={s.width}
                height={s.height}
                loading={group === 'services' && i < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          </div>
          <div className="sv-copy">
            <span className="sv-num">{s.number}</span>
            <h3 id={`service-${s.id}`}>{title}</h3>
            {paragraphs.map((para, n) => (
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
    });

  return (
    <>
      <section className="sv-hero">
        <div className="wrap">
          <Reveal className="sv-hero-copy">
            <div className="eyebrow">{tr('services.page.eyebrow')}</div>
            <h2>{tr('services.page.title')}</h2>
            <p className="sv-lead">{tr('services.page.intro')}</p>
            <nav className="sv-jump" aria-label={tr('services.list.label')}>
              <a className="arrow-link" href="#main-services">{tr('services.main.title')} ↓</a>
              <a className="arrow-link" href="#additional-services">{tr('additionalServices.title')} ↓</a>
            </nav>
            <span className="wp-rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="sv-block" id="main-services" aria-labelledby="sv-main-title">
        <div className="wrap">
          <Reveal className="sv-section-head">
            <h2 id="sv-main-title">{tr('services.main.title')}</h2>
          </Reveal>
          {rows(SERVICE_ITEMS, 'services')}
        </div>
      </section>

      <section className="sv-block sv-block-add" id="additional-services" aria-labelledby="sv-add-title">
        <div className="wrap">
          <Reveal className="sv-section-head">
            <h2 id="sv-add-title">{tr('additionalServices.title')}</h2>
            <p>{tr('additionalServices.intro')}</p>
          </Reveal>
          {rows(ADDITIONAL_ITEMS, 'additionalServices')}
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
