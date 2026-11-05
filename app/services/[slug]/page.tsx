import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import EnquiryCta from '@/components/EnquiryCta';
import { CONCEPTS, PROCESS_STEPS, SERVICES, conceptHref, serviceHref } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} — Wedding Services | ECLESARE by Paula`,
    description: `${s.title}: ${s.text} A service of Eclesare by Paula, wedding design and planning.`,
    alternates: { canonical: serviceHref(s.slug) },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const i = SERVICES.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const s = SERVICES[i];
  const prev = SERVICES[(i + SERVICES.length - 1) % SERVICES.length];
  const next = SERVICES[(i + 1) % SERVICES.length];
  const steps = s.steps.map((n) => PROCESS_STEPS[n]);
  const related = CONCEPTS.filter((c) => s.related.includes(c.slug));

  return (
    <PageShell>
      <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: s.title }]} />

      <section className="sd-hero">
        <div className="wrap sd-hero-grid">
          <Reveal className="sd-hero-copy">
            <div className="eyebrow">{s.number} / {s.kind.toUpperCase()}</div>
            <h1>{s.title}</h1>
            <p className="sd-lead">{s.text}</p>
            <span className="wp-rule sd-rule" aria-hidden="true" />
            <div className="sv-actions">
              <Link className="btn btn-dark" href={`/contact?service=${encodeURIComponent(s.title)}`}>Enquire about this service&nbsp; →</Link>
              <Link className="arrow-link" href="/services">All services</Link>
            </div>
          </Reveal>
          <Reveal className="sd-hero-visual">
            <figure className="wp-figure">
              <div className="wp-frame">
                <img src={s.image.src} alt={s.image.alt} width={s.image.width} height={s.image.height} loading="eager" decoding="async" />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="sd-steps" aria-labelledby="sd-steps-title">
        <div className="wrap">
          <Reveal className="sd-steps-head">
            <div className="eyebrow">Within our process</div>
            <h2 id="sd-steps-title">How this fits into your celebration</h2>
          </Reveal>
          <ol className="ab-steps sd-steps-list">
            {steps.map((st) => (
              <Reveal as="li" key={st.num}>
                <span className="ab-step-num">{st.num}</span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="sd-related" aria-labelledby="sd-related-title">
        <div className="wrap">
          <Reveal className="sd-steps-head">
            <div className="eyebrow">See it in practice</div>
            <h2 id="sd-related-title">Related wedding stories</h2>
          </Reveal>
          <div className="oc-grid">
            {related.map((c) => (
              <Reveal key={c.slug} as="article" className="oc-card">
                <Link href={conceptHref(c.slug)} className="oc-media" aria-hidden="true" tabIndex={-1}>
                  <img src={c.image.src} alt="" width={c.image.width} height={c.image.height} loading="lazy" decoding="async" />
                </Link>
                <div className="oc-copy">
                  <h3><Link href={conceptHref(c.slug)}>{c.title}</Link></h3>
                  <p className="oc-sub">{c.subtitle}</p>
                  <Link className="arrow-link" href={conceptHref(c.slug)}>Read the story →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <nav className="sd-pager" aria-label="Other services">
        <div className="wrap">
          <Link href={serviceHref(prev.slug)}><span>← Previous</span><strong>{prev.title}</strong></Link>
          <Link href={serviceHref(next.slug)} className="sd-pager-next"><span>Next →</span><strong>{next.title}</strong></Link>
        </div>
      </nav>

      <EnquiryCta />
    </PageShell>
  );
}
