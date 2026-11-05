'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  // On the home page the section links stay in-page anchors; on other pages they point back to the home sections.
  const onWeddingPlans = usePathname() === '/wedding-plans';
  const home = onWeddingPlans ? '/' : '';

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand logo-brand" href={`${home}#home`} aria-label="Eclesare by Paula home">
          <img src="/images/logo.png" alt="Eclesare by Paula logo" />
        </a>
        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <a href={`${home}#home`} onClick={close}>{t('home', 'Home')}</a>
          <a href={`${home}#filosofia`} onClick={close}>{t('philosophy', 'Filosofía')}</a>
          <a href={`${home}#proceso`} onClick={close}>{t('process', 'Proceso')}</a>
          <a href={`${home}#galeria`} onClick={close}>{t('gallery', 'Galería')}</a>
          <a href={`${home}#servicios`} onClick={close}>{t('services', 'Servicios')}</a>
          <Link href="/wedding-plans" onClick={close} aria-current={onWeddingPlans ? 'page' : undefined}>
            {t('weddingPlans', 'Wedding Plans')}
          </Link>
          <a href="#contacto" onClick={close}>{t('contact', 'Contacto')}</a>
        </nav>
        <div className="nav-actions">
          <select
            className="lang"
            id="language"
            aria-label="Select language"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <a className="btn btn-dark" href="#contacto">{t('letsTalk', 'Hablemos  →')}</a>
        </div>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}
