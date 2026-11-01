import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Intro, Destinations, Beach, Gallery, Services, WhyDifferent, Process, ContactCta } from '@/components/Sections';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import FloatingContact from '@/components/FloatingContact';

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Destinations />
        <Beach />
        <Gallery />
        <Services />
        <WhyDifferent />
        <Process />
        <ContactCta />
      </main>
      <Footer />
      <ChatWidget />
      <FloatingContact />
    </LanguageProvider>
  );
}
