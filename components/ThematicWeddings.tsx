import Link from 'next/link';
import Reveal from './Reveal';
import { CONCEPTS, THEMES } from '@/lib/site';

const concept = CONCEPTS.find((c) => c.slug === 'thematic-weddings')!;

export default function ThematicWeddings() {
  return (
    <>
      <section className="th-hero">
        <div className="wrap">
          <Reveal className="th-hero-copy">
            <div className="eyebrow">Wedding Plans · Our creative signature</div>
            <h1>{concept.title}</h1>
            <p className="th-sub">Why We Are Different</p>
            <span className="wp-rule" aria-hidden="true" />
            <p className="th-lead">{concept.blurb}</p>
          </Reveal>
        </div>
      </section>

      <section className="th-list" aria-label="Wedding themes">
        <div className="wrap">
          {THEMES.map((th, i) => (
            <Reveal as="article" className={`th-row${i % 2 ? ' th-row-flip' : ''}`} key={th.number}>
              <div className="th-media">
                <div className="wp-frame">
                  <img
                    src={th.image}
                    alt={th.alt}
                    {...(th.local ? { width: th.local.width, height: th.local.height } : {})}
                    loading="lazy"
                    decoding="async"
                    className={th.local ? undefined : 'th-stock'}
                  />
                </div>
              </div>
              <div className="th-copy">
                <span className="th-num">{th.number}</span>
                <h2>{th.title}</h2>
                <p>{th.text}</p>
                <Link className="arrow-link" href={`/contact?type=${encodeURIComponent(th.type)}`}>
                  Enquire about this style →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
