import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import WeddingPlans from '@/components/WeddingPlans';
import { ContactCta } from '@/components/Sections';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import FloatingContact from '@/components/FloatingContact';

export const metadata: Metadata = {
  title: 'Wedding Plans — Between History and Eternity | ECLESARE by Paula',
  description:
    'A medieval-inspired wedding concept by Eclesare by Paula: Gothic arches, candlelight and sculptural florals, where historical heritage meets contemporary design.',
  alternates: { canonical: '/wedding-plans' },
};

export default function WeddingPlansPage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <WeddingPlans />
        <ContactCta />
      </main>
      <Footer />
      <ChatWidget />
      <FloatingContact />
    </LanguageProvider>
  );
}
