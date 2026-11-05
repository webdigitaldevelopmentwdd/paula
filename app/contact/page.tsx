import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { CONTACT, SERVICES, WEDDING_TYPES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact — Wedding Enquiries | ECLESARE by Paula',
  description:
    'Tell us about your wedding: date, location and the celebration you imagine. Contact Eclesare by Paula, wedding design and planning from Barcelona, available worldwide.',
  alternates: { canonical: '/contact' },
};

type Search = { type?: string | string[]; service?: string | string[] };
const one = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v) ?? '';

export default async function ContactPage({ searchParams }: { searchParams: Promise<Search> }) {
  const sp = await searchParams;
  // Allow other pages to pre-select a wedding type or mention a service, but only accept known values.
  const type = WEDDING_TYPES.find((t) => t === one(sp.type)) ?? '';
  const service = SERVICES.find((s) => s.title === one(sp.service));
  const initialMessage = service ? `I would like to enquire about: ${service.title}.\n\n` : '';

  return (
    <PageShell>
      <Breadcrumbs items={[{ name: 'Contact' }]} />

      <section className="ct-section">
        <div className="wrap ct-grid-wrap">
          <Reveal className="ct-intro">
            <div className="eyebrow">Your celebration begins here</div>
            <h1>Let’s create something meaningful.</h1>
            <p>Tell us a little about your plans, the place you imagine and what matters most to you.</p>
            <span className="wp-rule ct-rule" aria-hidden="true" />
            <dl className="ct-details">
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{CONTACT.location}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="ct-card">
            <h2 className="ct-card-title">Wedding enquiry</h2>
            <ContactForm key={`${type}|${service?.slug ?? ''}`} initialType={type} initialMessage={initialMessage} />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
