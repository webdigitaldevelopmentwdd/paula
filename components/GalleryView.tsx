'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { GALLERY, GALLERY_CATEGORIES, type GalleryCategory } from '@/lib/gallery';

type Filter = 'all' | GalleryCategory;

export default function GalleryView() {
  const [filter, setFilter] = useState<Filter>('all');
  const [active, setActive] = useState<number | null>(null); // index within `items`
  const opener = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const items = filter === 'all' ? GALLERY : GALLERY.filter((g) => g.category === filter);
  const count = (c: Filter) => (c === 'all' ? GALLERY.length : GALLERY.filter((g) => g.category === c).length);

  const open = (i: number, el: HTMLElement) => {
    opener.current = el;
    setActive(i);
  };
  const close = useCallback(() => {
    setActive(null);
    opener.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setActive((a) => (a === null ? a : (a + d + items.length) % items.length)),
    [items.length],
  );

  // Keyboard, scroll lock and focus while the lightbox is open.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab') {
        // Keep focus inside the dialog.
        const f = document.querySelectorAll<HTMLElement>('.lb button');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, step]);

  // Warm the neighbours so next/previous feel instant.
  useEffect(() => {
    if (active === null) return;
    [1, -1].forEach((d) => {
      const n = items[(active + d + items.length) % items.length];
      if (n) new Image().src = n.full;
    });
  }, [active, items]);

  const current = active === null ? null : items[active];

  return (
    <>
      <div className="gl-filters" role="group" aria-label="Filter photographs by category">
        {(['all', ...GALLERY_CATEGORIES.map((c) => c.id)] as Filter[]).map((id) => {
          const label = id === 'all' ? 'All' : GALLERY_CATEGORIES.find((c) => c.id === id)!.label;
          return (
            <button key={id} type="button" aria-pressed={filter === id} className={filter === id ? 'on' : ''} onClick={() => setFilter(id)}>
              {label} <span aria-hidden="true">{count(id)}</span>
            </button>
          );
        })}
      </div>

      <p className="gl-status" role="status" aria-live="polite">
        Showing {items.length} {items.length === 1 ? 'photograph' : 'photographs'}
      </p>

      <ul className="gl-masonry">
        {items.map((g, i) => (
          <li key={g.id} className="gl-item">
            <button type="button" className="gl-btn" onClick={(e) => open(i, e.currentTarget)} aria-label={`Open photograph: ${g.caption}`}>
              <img
                src={g.thumb}
                alt={g.alt}
                width={g.thumbWidth}
                height={g.thumbHeight}
                loading={i < 4 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span className="gl-cap">{g.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={`Photograph viewer: ${current.caption}`}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button ref={closeRef} type="button" className="lb-close" onClick={close} aria-label="Close viewer">×</button>
          {items.length > 1 && (
            <>
              <button type="button" className="lb-nav lb-prev" onClick={() => step(-1)} aria-label="Previous photograph">←</button>
              <button type="button" className="lb-nav lb-next" onClick={() => step(1)} aria-label="Next photograph">→</button>
            </>
          )}
          <figure className="lb-fig">
            <img key={current.id} src={current.full} alt={current.alt} width={current.width} height={current.height} />
            <figcaption>
              <span>{current.caption}</span>
              <span className="lb-count" aria-hidden="true">{String((active ?? 0) + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
