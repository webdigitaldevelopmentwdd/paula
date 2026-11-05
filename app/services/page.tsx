import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import HeroBanner from '@/components/HeroBanner';
import ServicesPage from '@/components/ServicesPage';
import Tx from '@/components/Tx';

export const metadata: Metadata = {
  title: 'Our Wedding Services — Photography, Catering, Venues & Full Planning | ECLESARE by Paula',
  description:
    'Ten wedding services by Eclesare by Paula: photography and videography, catering, cakes, hair and makeup, attire, floral design, venues, music, stationery and full planning.',
  alternates: { canonical: '/services' },
};

export default function Page() {
  return (
    // English is the default on this page until the visitor picks a language (their choice is saved sitewide).
    <PageShell defaultLang="en">
      <HeroBanner
        title={<Tx k="services.hero.title" />}
        subtitle={<Tx k="services.hero.subtitle" />}
        image="/images/banners/services.webp"
        crumbs={[{ name: 'Services', label: <Tx k="services.crumb.services" /> }]}
        homeLabel={<Tx k="services.crumb.home" />}
      />
      <ServicesPage />
    </PageShell>
  );
}
