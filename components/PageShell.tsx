import type { ReactNode } from 'react';
import { LanguageProvider } from './LanguageProvider';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import FloatingContact from './FloatingContact';

/** Shared chrome (header, footer, chat, floating contact) for every inner page. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <ChatWidget />
      <FloatingContact />
    </LanguageProvider>
  );
}
