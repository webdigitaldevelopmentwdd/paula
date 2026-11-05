import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HeroBanner from '@/components/HeroBanner';
import Reveal from '@/components/Reveal';
import EnquiryCta from '@/components/EnquiryCta';
import { CONCEPTS, conceptHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Wedding Plans — Wedding Concepts & Stories | ECLESARE by Paula',
  description:
    'Explore the wedding concepts of Eclesare by Paula: a medieval-inspired celebration, an autumn Mediterranean wedding and thematic weddings shaped around your story.',
  alternates: { canonical: '/wedding-plans' },
};

export default function WeddingPlansIndex() {
  return (
    <PageShell>
      <HeroBanner
        title="Wedding Plans"
        subtitle="Discover Beautifully Curated Wedding Experiences."
        image="/images/banners/wedding-plans.webp"
        crumbs={[{ name: 'Wedding Plans' }]}
      />

      <section className="wpi-hero">
        <div className="wrap">
          <Reveal className="wpi-hero-copy">
            <div className="eyebrow">Wedding Plans</div>
            <h2>Wedding Concepts &amp; Stories</h2>
            <p className="wpi-lead">
              We create thematic weddings shaped around your story, your cultures and the traditions that matter to you.
            </p>
            <span className="wp-rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="wpi-list" aria-label="Wedding concepts">
        <div className="wrap">
          {CONCEPTS.map((c, i) => (
            <Reveal as="article" className={`wpi-card${i % 2 ? ' wpi-card-flip' : ''}`} key={c.slug}>
              <Link href={conceptHref(c.slug)} className="wpi-media" aria-hidden="true" tabIndex={-1}>
                <div className="wp-frame">
                  <img src={c.image.src} alt="" width={c.image.width} height={c.image.height} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
                </div>
              </Link>
              <div className="wpi-copy">
                <span className="wpi-num">{['I', 'II', 'III'][i]}</span>
                <h2><Link href={conceptHref(c.slug)}>{c.title}</Link></h2>
                <p className="wpi-sub">{c.subtitle}</p>
                <p>{c.blurb}</p>
                <Link className="btn" href={conceptHref(c.slug)} aria-label={`Read the story: ${c.title}`}>Read the story&nbsp; →</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <EnquiryCta />
    </PageShell>
  );
}
