import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import AboutPage from '@/components/AboutPage';
import EnquiryCta from '@/components/EnquiryCta';

export const metadata: Metadata = {
  title: 'About Us — The Art of Creating Unforgettable Celebrations | Eclesare by Paula',
  description:
    'Meet Paula, wedding planner and founder of Eclesare by Paula: elegant, editorial weddings with soul, designed around each couple’s story.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return (
    <PageShell>
      <AboutPage />
      <EnquiryCta label="Let’s Create Your Wedding  →" />
    </PageShell>
  );
}
