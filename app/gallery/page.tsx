import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HeroBanner from '@/components/HeroBanner';
import Reveal from '@/components/Reveal';
import GalleryView from '@/components/GalleryView';
import EnquiryCta from '@/components/EnquiryCta';

export const metadata: Metadata = {
  title: 'Gallery — Spaces That Tell Stories | ECLESARE by Paula',
  description:
    'A study of atmosphere, structure, texture and human connection: medieval castle, Mediterranean autumn, cultural and destination wedding photography.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <PageShell>
      <HeroBanner
        title="Our Gallery"
        subtitle="A Collection of Moments, Memories and Beautiful Celebrations."
        image="/images/banners/gallery.webp"
        crumbs={[{ name: 'Gallery' }]}
      />

      <section className="gl-hero">
        <div className="wrap">
          <Reveal className="gl-hero-copy">
            <div className="eyebrow">Galería · Gallery</div>
            <h2>Spaces that tell stories</h2>
            <p className="gl-lead">
              A study of atmosphere, structure, texture and human connection. Inspiration imagery is illustrative and not
              represented as completed Eclesare work.
            </p>
            <span className="wp-rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="gl-section" aria-label="Photograph gallery">
        <div className="wrap">
          <GalleryView />
          <p className="gl-more">
            See the stories behind these images in our <Link href="/wedding-plans">Wedding Plans</Link>.
          </p>
        </div>
      </section>

      <EnquiryCta />
    </PageShell>
  );
}
