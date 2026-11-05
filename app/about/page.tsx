import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Breadcrumbs from '@/components/Breadcrumbs';
import AboutPage from '@/components/AboutPage';
import EnquiryCta from '@/components/EnquiryCta';

export const metadata: Metadata = {
  title: 'About Eclesare Wedding — Our Story & Philosophy | ECLESARE by Paula',
  description:
    'Eclesare Wedding, by Paula, is a wedding design studio for celebrations that feel personal, cultural and timeless: our story, philosophy and process.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ name: 'About' }]} />
      <AboutPage />
      <EnquiryCta />
    </PageShell>
  );
}
