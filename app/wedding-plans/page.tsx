import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import WeddingPlans from '@/components/WeddingPlans';
import MediterraneanAutumn, { ConceptNav } from '@/components/MediterraneanAutumn';
import { ContactCta } from '@/components/Sections';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import FloatingContact from '@/components/FloatingContact';

export const metadata: Metadata = {
  title: 'Wedding Plans — Between History and Eternity | ECLESARE by Paula',
  description:
    'Two wedding concepts by Eclesare by Paula: a medieval-inspired celebration of Gothic arches and candlelight, and an autumn Mediterranean wedding inspired by architecture and natural beauty.',
  alternates: { canonical: '/wedding-plans' },
};

export default function WeddingPlansPage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <ConceptNav />
        <WeddingPlans />
        <MediterraneanAutumn />
        <ContactCta />
      </main>
      <Footer />
      <ChatWidget />
      <FloatingContact />
    </LanguageProvider>
  );
}
