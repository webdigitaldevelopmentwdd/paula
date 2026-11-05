import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import ConceptNav from '@/components/ConceptNav';
import WeddingPlans from '@/components/WeddingPlans';
import OtherConcepts from '@/components/OtherConcepts';
import EnquiryCta from '@/components/EnquiryCta';

const path = '/wedding-plans/between-history-and-eternity';

export const metadata: Metadata = {
  title: 'Between History and Eternity — A Medieval-Inspired Wedding | ECLESARE by Paula',
  description:
    'A medieval-inspired wedding concept: Gothic arches, candlelight and sculptural florals, where historical heritage meets contemporary design.',
  alternates: { canonical: path },
};

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ name: 'Wedding Plans', href: '/wedding-plans' }, { name: 'Between History and Eternity' }]} />
      <ConceptNav />
      <WeddingPlans />
      <OtherConcepts current="between-history-and-eternity" />
      <EnquiryCta />
    </PageShell>
  );
}
