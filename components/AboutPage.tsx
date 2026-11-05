import Link from 'next/link';
import Reveal from './Reveal';
import { CONCEPTS, DESTINATIONS, PROCESS_STEPS, conceptHref } from '@/lib/site';

export default function AboutPage() {
  return (
    <>
      <section className="ab-hero">
        <div className="wrap">
          <Reveal className="ab-hero-copy">
            <div className="eyebrow">About us</div>
            <h1>About Eclesare Wedding</h1>
            <p className="ab-lead">
              Eclesare Wedding, by Paula, is a wedding design studio devoted to celebrations that feel personal, cultural
              and timeless. Every wedding is shaped around the couple, bringing together architecture, materials, light and
              emotion to create spaces that move people and stay in memory.
            </p>
            <span className="wp-rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="ab-story">
        <div className="wrap ab-story-grid">
          <Reveal className="ab-story-visual">
            <figure className="wp-figure">
              <div className="wp-frame">
                <img
                  src="/images/gallery/about-varmala-canopy.webp"
                  alt="Bride and groom exchanging garlands beneath a hanging floral canopy"
                  width={900}
                  height={1050}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </figure>
          </Reveal>
          <Reveal className="ab-story-copy">
            <div className="eyebrow">About Eclesare</div>
            <h2>Crafting Extraordinary Weddings Across Cultures</h2>
            <p>
              At Eclesare by Paula, we believe every wedding tells a unique story — a beautiful blend of emotions,
              traditions and personal dreams. With a passion for Indian and European celebrations, we create bespoke
              weddings in France, Spain, India and destinations across the world.
            </p>
            <p>
              From royal palaces and romantic French châteaux to Mediterranean coastal celebrations, we bring cultures
              together through thoughtful planning, elegant design and personal attention.
            </p>
            <p>
              From venue selection and décor to guest travel, hospitality, ceremonies and on-the-day coordination, we
              manage the details so every couple can enjoy their celebration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="ab-philosophy">
        <div className="wrap ab-philosophy-grid">
          <Reveal className="ab-philosophy-copy">
            <div className="eyebrow">Our philosophy</div>
            <h2>More than events. Meaningful experiences.</h2>
            <p>
              At Eclesare by Paula, we believe every celebration is a living work of art. We design spaces that move
              people, connect cultures and stay in memory. Our approach brings together architecture, materials, light
              and emotion to create celebrations with a distinct identity.
            </p>
            <p className="side-note">Architecture of emotion — celebrations shaped with intention.</p>
            <Link className="btn" href="/wedding-plans">Explore our Wedding Plans&nbsp; →</Link>
          </Reveal>
          <Reveal className="ab-philosophy-visual">
            <figure className="wp-figure">
              <div className="wp-frame">
                <img
                  src="/images/wedding-plans/tuscan-sunset-table.webp"
                  alt="Eclesare by Paula — candlelit terrace table with burgundy and blush flowers at sunset"
                  width={1024}
                  height={1536}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="ab-approach">
        <div className="wrap">
          <Reveal className="ab-approach-head">
            <div className="eyebrow">Our process</div>
            <h2>From the first idea to the final moment</h2>
            <p>A clear, creative and collaborative process gives every celebration its own identity.</p>
          </Reveal>
          <ol className="ab-steps">
            {PROCESS_STEPS.map((s) => (
              <Reveal as="li" key={s.num}>
                <span className="ab-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="ab-approach-cta">
            <Link className="btn" href="/services">See our services&nbsp; →</Link>
          </Reveal>
        </div>
      </section>

      <section className="ab-places">
        <div className="wrap">
          <Reveal className="ab-places-head">
            <div className="eyebrow">Destinos</div>
            <h2>A world of extraordinary places</h2>
            <p>Each setting brings its own character. We shape the celebration around the place, never the other way around.</p>
          </Reveal>
          <ul className="ab-places-list">
            {DESTINATIONS.map((d) => (
              <Reveal as="li" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="ab-different">
        <div className="wrap">
          <Reveal className="ab-different-inner">
            <div className="eyebrow">Our creative signature</div>
            <h2>Why We Are Different</h2>
            <p>
              We create thematic weddings shaped around your story, your cultures and the traditions that matter to you —
              while preserving the authentic spirit of a real Spanish wedding.
            </p>
            <div className="ab-links">
              {CONCEPTS.map((c) => (
                <Link key={c.slug} className="arrow-link" href={conceptHref(c.slug)}>{c.title} →</Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
