'use client';

import { useLang } from '@/lib/lang';
import type { ExpKey } from '@/lib/experiences';

export type MenuName = 'weddings' | 'dest' | 'lang' | null;

type Props = {
  stuck: boolean;
  active: string;
  openMenu: MenuName;
  onToggleMenu: (name: Exclude<MenuName, null>) => void;
  onOpenDrawer: () => void;
  onPickLang: (code: string) => void;
  onJump: (key: ExpKey) => void;
};

const Chev = () => (
  <svg className="chev" width="10" height="7" viewBox="0 0 10 7" aria-hidden="true">
    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export function Header({ stuck, active, openMenu, onToggleMenu, onOpenDrawer, onPickLang, onJump }: Props) {
  const { t, lang } = useLang();
  const cur = (id: string) => (active === id ? ' is-current' : '');

  const wedding: [string, ExpKey | null, string][] = [
    ['#experience', 'palace', 'dd.w1'],
    ['#experience', 'chateau', 'dd.w2'],
    ['#beach', null, 'dd.w3'],
    ['#experience', 'mountain', 'dd.w4'],
    ['#experience', 'city', 'dd.w5'],
    ['#experience', 'farm', 'dd.w6'],
    ['#experience', 'fusion', 'dd.w7'],
  ];

  return (
    <header className={`site-head${stuck ? ' is-stuck' : ''}`} id="siteHead">
      <div className="wrap head-inner">
        <a className="brand" href="#top" aria-label="ECLESARE by Paula — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/wordmark.png" alt="ECLESARE by Paula" width={640} height={229} />
        </a>

        <nav className="nav" id="primaryNav" aria-label="Primary">
          <ul className="nav-list">
            <li><a href="#top" className={`nav-link${cur('top')}`}>{t('nav.home')}</a></li>
            <li><a href="#about" className={`nav-link${cur('about')}`}>{t('nav.about')}</a></li>

            <li className="has-menu">
              <button type="button" className="nav-link nav-toggle" aria-expanded={openMenu === 'weddings'} aria-controls="menuWeddings" onClick={() => onToggleMenu('weddings')}>
                <span>{t('nav.weddings')}</span>
                <Chev />
              </button>
              <ul className={`dd${openMenu === 'weddings' ? ' is-open' : ''}`} id="menuWeddings">
                {wedding.map(([href, key, label]) => (
                  <li key={label}>
                    <a href={href} onClick={key ? () => onJump(key) : undefined}>{t(label)}</a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="has-menu">
              <button type="button" className="nav-link nav-toggle" aria-expanded={openMenu === 'dest'} aria-controls="menuDest" onClick={() => onToggleMenu('dest')}>
                <span>{t('nav.destinations')}</span>
                <Chev />
              </button>
              <ul className={`dd${openMenu === 'dest' ? ' is-open' : ''}`} id="menuDest">
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <li key={n}><a href="#destinations">{t('dd.d' + n)}</a></li>
                ))}
              </ul>
            </li>

            <li><a href="#gallery" className={`nav-link${cur('gallery')}`}>{t('nav.gallery')}</a></li>
            <li><a href="#services" className={`nav-link${cur('services')}`}>{t('nav.services')}</a></li>
            <li><a href="#contact" className={`nav-link${cur('contact')}`}>{t('nav.contact')}</a></li>
          </ul>
        </nav>

        <div className="head-actions">
          <div className="lang has-menu">
            <button type="button" className="lang-btn" aria-expanded={openMenu === 'lang'} aria-controls="menuLang" onClick={() => onToggleMenu('lang')}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" /></svg>
              <span>{lang.toUpperCase()}</span>
              <Chev />
            </button>
            <ul className={`dd dd--lang${openMenu === 'lang' ? ' is-open' : ''}`} id="menuLang">
              <li><button type="button" aria-current={lang === 'en' ? 'true' : 'false'} onClick={() => onPickLang('en')}><b>EN</b> English</button></li>
              <li><button type="button" aria-current={lang === 'fr' ? 'true' : 'false'} onClick={() => onPickLang('fr')}><b>FR</b> Français</button></li>
              <li><button type="button" aria-current={lang === 'es' ? 'true' : 'false'} onClick={() => onPickLang('es')}><b>ES</b> Español</button></li>
            </ul>
          </div>

          <a className="btn btn--gold head-cta" href="#contact">{t('cta.plan')}</a>

          <button type="button" className="burger" aria-expanded="false" aria-controls="drawer" onClick={onOpenDrawer}>
            <span></span><span></span><span></span>
            <em className="sr">{t('nav.menu')}</em>
          </button>
        </div>
      </div>
    </header>
  );
}

type DrawerProps = { shown: boolean; onClose: () => void; onPickLang: (code: string) => void };

export function Drawer({ shown, onClose, onPickLang }: DrawerProps) {
  const { t } = useLang();
  return (
    <>
      <div className="drawer" id="drawer" hidden={!shown}>
        <div className="drawer-head">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/wordmark.png" alt="ECLESARE by Paula" width={640} height={229} />
          <button type="button" className="x" aria-label="Close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Mobile">
          <a href="#top">{t('nav.home')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#destinations">{t('nav.destinations')}</a>
          <a href="#beach">{t('dd.w3')}</a>
          <a href="#gallery">{t('nav.gallery')}</a>
          <a href="#services">{t('nav.services')}</a>
          <a href="#experience">{t('nav.weddings')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>
        <div className="drawer-foot">
          <div className="drawer-langs">
            <button type="button" onClick={() => onPickLang('en')}>EN</button>
            <button type="button" onClick={() => onPickLang('fr')}>FR</button>
            <button type="button" onClick={() => onPickLang('es')}>ES</button>
          </div>
          <a className="btn btn--gold" href="#contact">{t('cta.plan')}</a>
        </div>
      </div>
      <div className="scrim" hidden={!shown} onClick={onClose}></div>
    </>
  );
}
