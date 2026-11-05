import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import ConceptNav from '@/components/ConceptNav';
import ThematicWeddings from '@/components/ThematicWeddings';
import OtherConcepts from '@/components/OtherConcepts';
import EnquiryCta from '@/components/EnquiryCta';

const path = '/wedding-plans/thematic-weddings';

export const metadata: Metadata = {
  title: 'Thematic Weddings — Indian, Arabic, Oriental, Spanish & More | ECLESARE by Paula',
  description:
    'Thematic weddings shaped around your story, your cultures and your traditions: Indian, Oriental, Arabic, Medieval Romance, American, church and Spanish weddings.',
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ name: 'Wedding Plans', href: '/wedding-plans' }, { name: 'Thematic Weddings' }]} />
      <ConceptNav />
      <ThematicWeddings />
      <OtherConcepts current="thematic-weddings" />
      <EnquiryCta />
    </PageShell>
  );
}
