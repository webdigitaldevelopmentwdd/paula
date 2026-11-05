'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';
import { CONCEPTS, conceptHref } from '@/lib/site';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false); // mobile menu
  const [sub, setSub] = useState(false); // Wedding Plans dropdown
  const ddRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeAll = () => {
    setOpen(false);
    setSub(false);
  };

  // Close menus after navigating.
  useEffect(() => {
    setOpen(false);
    setSub(false);
  }, [pathname]);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!sub) return;
    const onDown = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setSub(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSub(false);
        ddRef.current?.querySelector<HTMLButtonElement>('.nav-dd-toggle')?.focus();
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [sub]);

  const current = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'));
  const aria = (href: string) => (current(href) ? ('page' as const) : undefined);

  // Hover opens the dropdown on desktop only (the mobile menu uses the toggle button).
  const hoverOk = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (min-width: 961px)').matches;
  const enter = () => {
    if (!hoverOk()) return;
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setSub(true);
  };
  const leave = () => {
    if (!hoverOk()) return;
    leaveTimer.current = setTimeout(() => setSub(false), 140);
  };

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand logo-brand" href="/" aria-label="Eclesare by Paula home" onClick={closeAll}>
          <img src="/images/logo.png" alt="Eclesare by Paula logo" />
        </Link>
        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks" aria-label="Main">
          <Link href="/" onClick={closeAll} aria-current={aria('/')}>{t('home', 'Home')}</Link>
          <Link href="/about" onClick={closeAll} aria-current={aria('/about')}>{t('about', 'About')}</Link>

          <div
            className={`nav-dd${sub ? ' open' : ''}`}
            ref={ddRef}
            onMouseEnter={enter}
            onMouseLeave={leave}
          >
            <Link
              className="nav-dd-link"
              href="/wedding-plans"
              onClick={closeAll}
              aria-current={aria('/wedding-plans')}
            >
              Wedding Plans
            </Link>
            <button
              type="button"
              className="nav-dd-toggle"
              aria-expanded={sub}
              aria-controls="wpMenu"
              aria-label="Show wedding concepts"
              onClick={() => setSub((s) => !s)}
            >
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <path d="M1 1l4 4 4-4" />
              </svg>
            </button>
            <ul className="nav-dd-menu" id="wpMenu">
              {CONCEPTS.map((c) => (
                <li key={c.slug}>
                  <Link href={conceptHref(c.slug)} onClick={closeAll} aria-current={aria(conceptHref(c.slug))}>
                    {c.title}
                  </Link>
                </li>
              ))}
              <li className="nav-dd-all">
                <Link href="/wedding-plans" onClick={closeAll}>All Wedding Plans →</Link>
              </li>
            </ul>
          </div>

          <Link href="/services" onClick={closeAll} aria-current={aria('/services')}>{t('services', 'Servicios')}</Link>
          <Link href="/gallery" onClick={closeAll} aria-current={aria('/gallery')}>{t('gallery', 'Galería')}</Link>
          <Link href="/contact" onClick={closeAll} aria-current={aria('/contact')}>{t('contact', 'Contacto')}</Link>
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
          <Link className="btn btn-dark" href="/contact">{t('letsTalk', 'Hablemos  →')}</Link>
        </div>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}
