'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { CONFIG, TEL, waLink } from '@/lib/config';
import { TILES } from '@/lib/gallery';
import { LangProvider, prefersReducedMotion, useLang } from '@/lib/lang';
import { Chat } from './Chat';
import { Contact } from './Contact';
import { Experience, useExperience } from './Experience';
import { Footer } from './Footer';
import { Drawer, Header, type MenuName } from './Header';
import { Hero } from './Hero';
import { About, Band, Beach, Destinations, Gallery, Services } from './Sections';
import { useEnquiry } from './useEnquiry';

const SECTION_IDS = ['top', 'about', 'destinations', 'beach', 'gallery', 'services', 'experience', 'contact'];

function SiteInner() {
  const { t, setLang } = useLang();
  const exp = useExperience();
  const enquiry = useEnquiry();

  const [stuck, setStuck] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState('top');

  const [openMenu, setOpenMenu] = useState<MenuName>(null);

  const [drawerShown, setDrawerShown] = useState(false); // not [hidden]
  const [drawerOn, setDrawerOn] = useState(false);       // slid in (body.menu-open)
  const drawerTimer = useRef<number | null>(null);

  const [lb, setLb] = useState<number | null>(null);
  const lbClose = useRef<HTMLButtonElement>(null);

  const [chatOpen, setChatOpenState] = useState(false);
  const [bubbleHidden, setBubbleHidden] = useState(false);

  /* ── drawer ─────────────────────────────────────────────────────── */
  const openDrawer = useCallback(() => {
    if (drawerTimer.current) window.clearTimeout(drawerTimer.current);
    setDrawerShown(true);
    window.requestAnimationFrame(() => setDrawerOn(true));
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOn(false);
    if (drawerTimer.current) window.clearTimeout(drawerTimer.current);
    drawerTimer.current = window.setTimeout(() => setDrawerShown(false), 400);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', drawerOn);
  }, [drawerOn]);

  useEffect(() => {
    document.body.style.overflow = drawerOn || lb !== null ? 'hidden' : '';
  }, [drawerOn, lb]);

  /* ── chat ───────────────────────────────────────────────────────── */
  const setChatOpen = useCallback((open: boolean) => {
    setChatOpenState(open);
    setBubbleHidden(true);
  }, []);

  /* the welcome bubble says hello once, then gets out of the way */
  useEffect(() => {
    const id = window.setTimeout(() => setBubbleHidden(true), 9000);
    return () => window.clearTimeout(id);
  }, []);

  /* ── lightbox ───────────────────────────────────────────────────── */
  const openLb = useCallback((i: number) => {
    setLb(((i % TILES.length) + TILES.length) % TILES.length);
  }, []);

  useEffect(() => {
    if (lb !== null) lbClose.current?.focus();
  }, [lb === null]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── scroll state: header, back-to-top, scroll-spy ──────────────── */
  useEffect(() => {
    const sync = () => {
      const y = window.scrollY;
      setStuck(y > 12);
      setShowTop(y > 600);
      let cur = 'top';
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) cur = id;
      });
      setActive(cur);
    };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    return () => window.removeEventListener('scroll', sync);
  }, []);

  /* ── in-page anchors: offset for the sticky header, close menus ─── */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('.has-menu')) setOpenMenu(null);

      const a = target.closest('a[href^="#"]');
      const href = a?.getAttribute('href');
      if (!a || !href || href.length < 2) return;
      const dest = document.querySelector(href);
      if (!dest) return;
      e.preventDefault();
      closeDrawer();
      setOpenMenu(null);
      const head = document.getElementById('siteHead');
      const off = head ? head.offsetHeight - 1 : 0;
      window.scrollTo({
        top: dest.getBoundingClientRect().top + window.scrollY - off,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [closeDrawer]);

  /* ── keyboard ───────────────────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lb !== null) return setLb(null);
        if (drawerOn) return closeDrawer();
        if (chatOpen) return setChatOpen(false);
        return setOpenMenu(null);
      }
      if (lb !== null) {
        if (e.key === 'ArrowRight') openLb(lb + 1);
        if (e.key === 'ArrowLeft') openLb(lb - 1);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lb, drawerOn, chatOpen, closeDrawer, setChatOpen, openLb]);

  const pickLang = (code: string) => {
    setLang(code);
    setOpenMenu(null);
    if (drawerOn) closeDrawer();
  };

  const tile = lb !== null ? TILES[lb] : null;

  return (
    <>
      <a className="skip" href="#main">{t('skip')}</a>

      <Header
        stuck={stuck}
        active={active}
        openMenu={openMenu}
        onToggleMenu={(name) => setOpenMenu((m) => (m === name ? null : name))}
        onOpenDrawer={openDrawer}
        onPickLang={pickLang}
        onJump={exp.select}
      />
      <Drawer shown={drawerShown} onClose={closeDrawer} onPickLang={pickLang} />

      <main id="main">
        <Hero />
        <About />
        <Destinations onJump={exp.select} />
        <Beach />
        <Gallery onOpen={openLb} />
        <Services />
        <Experience selected={exp.selected} shown={exp.shown} fading={exp.fading} onSelect={exp.select} />
        <Band />
        <Contact enquiry={enquiry} />
      </main>

      <Footer />

      <div className="float-left">
        <Chat
          open={chatOpen}
          setOpen={setChatOpen}
          bubbleHidden={bubbleHidden}
          hideBubble={() => setBubbleHidden(true)}
          onPrefill={enquiry.prefill}
        />
      </div>

      <div className="float-right">
        {TEL && (
          <a className="fab fab--call" href={'tel:' + TEL} aria-label="Call us">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 3h3.1l1.6 4-2.3 1.6a12.7 12.7 0 0 0 6.4 6.4l1.6-2.3 4 1.6v3.1a2.6 2.6 0 0 1-2.8 2.6A17.7 17.7 0 0 1 4 5.8 2.6 2.6 0 0 1 6.6 3Z" /></svg>
          </a>
        )}
        {CONFIG.whatsapp && (
          <a className="fab fab--wa" href={waLink('')} target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg width="23" height="23" viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3Zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4A10.5 10.5 0 0 1 5.4 16c0-5.8 4.8-10.6 10.6-10.6S26.6 10.2 26.6 16 21.8 26.6 16 26.6Zm5.9-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1a8.6 8.6 0 0 1-4.3-3.7c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-1 1-1.3 2.4-.8 3.9.8 2.4 2.4 4.4 4.5 5.8 2.9 2 3.9 1.7 4.7 1.6.9-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.3Z" /></svg>
          </a>
        )}
      </div>

      <button
        type="button"
        className={`to-top${showTop ? '' : ' is-off'}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>

      <div
        className="lb"
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Gallery"
        hidden={lb === null}
        onClick={(e) => { if (e.target === e.currentTarget) setLb(null); }}
      >
        <button type="button" className="lb-x" aria-label="Close" ref={lbClose} onClick={() => setLb(null)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
        <button type="button" className="lb-nav lb-prev" aria-label="Previous image" onClick={() => lb !== null && openLb(lb - 1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19 8 12l7-7" /></svg>
        </button>
        <figure className="lb-fig">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tile?.src} alt={tile?.alt ?? ''} />
          <figcaption><span>{lb !== null ? `${lb + 1} / ${TILES.length}` : ''}</span></figcaption>
        </figure>
        <button type="button" className="lb-nav lb-next" aria-label="Next image" onClick={() => lb !== null && openLb(lb + 1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m9 5 7 7-7 7" /></svg>
        </button>
      </div>
    </>
  );
}

export function Site() {
  return (
    <LangProvider>
      <SiteInner />
    </LangProvider>
  );
}
