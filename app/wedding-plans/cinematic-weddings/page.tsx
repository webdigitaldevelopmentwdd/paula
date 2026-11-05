import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import HeroBanner from '@/components/HeroBanner';
import ConceptNav from '@/components/ConceptNav';
import CinematicWeddings from '@/components/CinematicWeddings';
import CTx from '@/components/CTx';
import { CINEMATIC_BANNER } from '@/lib/cinematic-content';
import { DROPDOWN_CONCEPTS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cinematic Weddings — When Imagination Becomes a Love Story | ECLESARE by Paula',
  description:
    'Cinematic wedding concepts by Eclesare by Paula: fairytale palaces, enchanted forests and film-inspired settings reimagined as elegant, unforgettable celebrations.',
  alternates: { canonical: '/wedding-plans/cinematic-weddings' },
};

export default function Page() {
  return (
    // English is the default on this page until the visitor picks a language (their choice is saved sitewide).
    <PageShell defaultLang="en">
      <HeroBanner
        title={<CTx k="cinematic.hero.title" />}
        subtitle={<CTx k="cinematic.hero.subtitle" />}
        image={CINEMATIC_BANNER}
        crumbs={[
          { name: 'Wedding Plans', href: '/wedding-plans' },
          { name: 'Cinematic Weddings', label: <CTx k="cinematic.nav" /> },
        ]}
        homeLabel={<CTx k="cinematic.crumb.home" />}
        className="hb-long"
      />
      <ConceptNav concepts={DROPDOWN_CONCEPTS} />
      <CinematicWeddings />
    </PageShell>
  );
}
