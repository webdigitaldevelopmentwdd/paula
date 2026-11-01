'use client';

import { useCallback, useEffect, useState } from 'react';
import { EXP, type ExpKey } from '@/lib/experiences';
import { prefersReducedMotion, useLang } from '@/lib/lang';
import { Reveal } from './Reveal';
import { Leaf } from './Sections';

const KEYS: ExpKey[] = ['palace', 'beach', 'mountain', 'city', 'farm', 'chateau', 'fusion'];

/* Selected tab + the cross-fade: the tab switches at once, the panel
   content swaps 160ms later while `exp-fade` is on. */
export function useExperience() {
  const [selected, setSelected] = useState<ExpKey>('palace');
  const [shown, setShown] = useState<ExpKey>('palace');
  const [fading, setFading] = useState(false);

  const select = useCallback((key: ExpKey) => {
    if (!EXP[key]) key = 'palace';
    setSelected(key);
    if (prefersReducedMotion()) {
      setShown(key);
      return;
    }
    setFading(true);
  }, []);

  useEffect(() => {
    if (!fading) return;
    const id = window.setTimeout(() => {
      setShown(selected);
      setFading(false);
    }, 160);
    return () => window.clearTimeout(id);
  }, [fading, selected]);

  return { selected, shown, fading, select };
}

type Props = { selected: ExpKey; shown: ExpKey; fading: boolean; onSelect: (key: ExpKey) => void };

export function Experience({ selected, shown, fading, onSelect }: Props) {
  const { t, lang } = useLang();
  const data = EXP[shown];
  const copy = data[lang] || data.en;

  return (
    <section className="exp" id="experience">
      <Leaf id="b" />

      <div className="wrap">
        <Reveal as="header" className="sec-head">
          <p className="eyebrow">{t('exp.eyebrow')}</p>
          <h2>{t('exp.title')}</h2>
          <p className="sec-sub">{t('exp.sub')}</p>
        </Reveal>

        <Reveal className="tabs" role="tablist" aria-label="Wedding styles">
          {KEYS.map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              className={`tab${k === selected ? ' is-on' : ''}`}
              aria-selected={k === selected ? 'true' : 'false'}
              onClick={() => onSelect(k)}
            >
              {t(`exp.t.${k}`)}
            </button>
          ))}
        </Reveal>

        <Reveal className={`exp-panel${fading ? ' exp-fade' : ''}`} id="expPanel">
          <div className="exp-art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.img} alt={data.alt} width={1200} height={800} />
          </div>
          <div className="exp-copy">
            <h3>{copy.t}</h3>
            <p>{copy.p}</p>
            <ul className="ticks">
              {copy.l.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p><a className="btn btn--line" href="#contact">{t('exp.cta')}</a></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
