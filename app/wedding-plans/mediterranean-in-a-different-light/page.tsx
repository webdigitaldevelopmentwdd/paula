import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import ConceptNav from '@/components/ConceptNav';
import MediterraneanAutumn from '@/components/MediterraneanAutumn';
import OtherConcepts from '@/components/OtherConcepts';
import EnquiryCta from '@/components/EnquiryCta';

const path = '/wedding-plans/mediterranean-in-a-different-light';

export const metadata: Metadata = {
  title: 'The Mediterranean in a Different Light — An Autumn Wedding | ECLESARE by Paula',
  description:
    'An autumn Mediterranean wedding inspired by architecture and natural beauty: terracotta, plum and aged copper, sculptural ceramics and organic florals.',
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ name: 'Wedding Plans', href: '/wedding-plans' }, { name: 'The Mediterranean in a Different Light' }]} />
      <ConceptNav />
      <MediterraneanAutumn />
      <OtherConcepts current="mediterranean-in-a-different-light" />
      <EnquiryCta />
    </PageShell>
  );
}
