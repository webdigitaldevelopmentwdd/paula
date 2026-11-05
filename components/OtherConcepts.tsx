import Link from 'next/link';
import Reveal from './Reveal';
import { CONCEPTS, conceptHref } from '@/lib/site';

/** Cards pointing to the other wedding concepts, shown at the end of each concept page. */
export default function OtherConcepts({ current }: { current: string }) {
  const others = CONCEPTS.filter((c) => c.slug !== current);
  return (
    <section className="oc" aria-labelledby="oc-title">
      <div className="wrap">
        <Reveal className="oc-head">
          <div className="eyebrow">Continue exploring</div>
          <h2 id="oc-title">More Wedding Plans</h2>
        </Reveal>
        <div className="oc-grid">
          {others.map((c) => (
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
  );
}
