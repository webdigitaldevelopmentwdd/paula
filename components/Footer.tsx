'use client';

import { CONFIG, TEL, waLink } from '@/lib/config';
import { useLang } from '@/lib/lang';

const SOCIAL = [
  {
    key: 'instagram' as const,
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
    ),
  },
  {
    key: 'pinterest' as const,
    label: 'Pinterest',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="12" r="9" /><path d="M12 7c-2.2 0-3.6 1.4-3.6 3.1 0 .8.4 1.7 1.1 2L9 14.5c-.5 2-1 3.4-1.6 4.4" /><path d="M10.6 14.6c.4.3.9.5 1.5.5 2 0 3.4-1.8 3.4-4.1C15.5 8.8 14 7 12 7" /></svg>
    ),
  },
  {
    key: 'facebook' as const,
    label: 'Facebook',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M14 8h2V5h-2a3.5 3.5 0 0 0-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V8.8c0-.5.4-.8 1-.8Z" /></svg>
    ),
  },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/wordmark-light.png" alt="ECLESARE by Paula" width={640} height={229} />
          <p>{t('foot.blurb')}</p>
          <div className="social">
            {SOCIAL.filter((s) => CONFIG[s.key]).map((s) => (
              <a key={s.key} href={CONFIG[s.key]} target="_blank" rel="noopener" aria-label={s.label}>{s.icon}</a>
            ))}
          </div>
        </div>

        <div className="foot-col">
          <h4>{t('foot.quick')}</h4>
          <ul>
            <li><a href="#top">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#gallery">{t('nav.gallery')}</a></li>
            <li><a href="#beach">{t('dd.w3')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </div>

        <div className="foot-col">
          <h4>{t('foot.dest')}</h4>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <li key={n}><a href="#destinations">{t('dd.d' + n)}</a></li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <h4>{t('foot.contact')}</h4>
          <ul className="foot-contact">
            {TEL && <li><a href={'tel:' + TEL}>{CONFIG.phoneDisplay || TEL}</a></li>}
            {CONFIG.email && <li><a href={'mailto:' + CONFIG.email}>{CONFIG.email}</a></li>}
            {CONFIG.whatsapp && <li><a href={waLink('')}>{t('foot.wa')}</a></li>}
            {CONFIG.address && (
              <li>
                {CONFIG.mapsUrl ? (
                  <a href={CONFIG.mapsUrl} target="_blank" rel="noopener">{CONFIG.address}</a>
                ) : (
                  <span>{CONFIG.address}</span>
                )}
              </li>
            )}
          </ul>
          <figure className="foot-pic">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/footer-love.jpg" alt="Wedding stationery and florals — photograph by Paula" width={520} height={400} loading="lazy" />
            <figcaption>{t('foot.love')}</figcaption>
          </figure>
        </div>
      </div>

      <div className="wrap foot-base">
        <p>© <span suppressHydrationWarning>{new Date().getFullYear()}</span> ECLESARE by Paula. <span>{t('foot.rights')}</span></p>
        <p className="credit">
          <span>{t('foot.by')}</span>{' '}
          <a href="https://webdigitaldevelopment.in/" target="_blank" rel="noopener">Web Digital Development</a>
        </p>
      </div>
    </footer>
  );
}
