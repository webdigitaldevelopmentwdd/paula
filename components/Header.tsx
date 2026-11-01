'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageProvider';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand logo-brand" href="#home" aria-label="Eclesare by Paula home">
          <img src="/images/logo.png" alt="Eclesare by Paula logo" />
        </a>
        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <a href="#home" onClick={close}>{t('home', 'Home')}</a>
          <a href="#filosofia" onClick={close}>{t('philosophy', 'Filosofía')}</a>
          <a href="#proceso" onClick={close}>{t('process', 'Proceso')}</a>
          <a href="#galeria" onClick={close}>{t('gallery', 'Galería')}</a>
          <a href="#servicios" onClick={close}>{t('services', 'Servicios')}</a>
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
