import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import HeroBanner from '@/components/HeroBanner';
import Reveal from '@/components/Reveal';
import EnquiryCta from '@/components/EnquiryCta';
import { PROCESS_STEPS, SERVICES, serviceHref } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services — Design, Planning, Production & Guest Experience | ECLESARE by Paula',
  description:
    'A considered approach, from idea to experience: design and concept, full planning, production and styling, and guest experience for destination weddings.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <HeroBanner
        title="Our Services"
        subtitle="Thoughtful Planning, Exceptional Celebrations."
        image="/images/banners/services.webp"
        crumbs={[{ name: 'Services' }]}
      />

      <section className="sv-hero">
        <div className="wrap">
          <Reveal className="sv-hero-copy">
            <div className="eyebrow">Services</div>
            <h2>A considered approach, from idea to experience</h2>
            <p className="sv-lead">A close, collaborative process built around creative direction, careful planning and calm execution.</p>
            <span className="wp-rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="sv-list" aria-label="Our services">
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <Reveal as="article" className={`sv-row${i % 2 ? ' sv-row-flip' : ''}`} key={s.slug} >
              <Link href={serviceHref(s.slug)} className="sv-media" aria-hidden="true" tabIndex={-1}>
                <div className="wp-frame">
                  <img src={s.image.src} alt="" width={s.image.width} height={s.image.height} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
                </div>
              </Link>
              <div className="sv-copy">
                <span className="sv-num">{s.number} / {s.kind.toUpperCase()}</span>
                <h2 id={s.slug}><Link href={serviceHref(s.slug)}>{s.title}</Link></h2>
                <p>{s.text}</p>
                <div className="sv-actions">
                  <Link className="btn btn-dark" href={serviceHref(s.slug)}>Learn more&nbsp; →</Link>
                  <Link className="arrow-link" href={`/contact?service=${encodeURIComponent(s.title)}`}>Enquire about this service</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="sv-process" aria-labelledby="sv-process-title">
        <div className="wrap">
          <Reveal className="sv-process-head">
            <div className="eyebrow">Our process</div>
            <h2 id="sv-process-title">From the first idea to the final moment</h2>
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
        </div>
      </section>

      <EnquiryCta />
    </PageShell>
  );
}
