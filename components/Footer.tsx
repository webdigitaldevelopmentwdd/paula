'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  // Filled on the client, as in the original (avoids a server/client year mismatch).
  const [year, setYear] = useState('');
  useEffect(() => setYear(String(new Date().getFullYear())), []);
  // The destinations anchors live on the home page.
  const home = usePathname() === '/' ? '' : '/';

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">ECLESARE<small>BY PAULA</small></div>
            <p className="footer-copy">Architecture of emotion. Contemporary celebrations shaped by place, art and human connection.</p>
          </div>
          <div>
            <div className="footer-title">Explore</div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/wedding-plans">Wedding Plans</Link>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="footer-title">Destinations</div>
            <div className="footer-links">
              <a href={`${home}#destinos`}>India</a>
              <a href={`${home}#destinos`}>France</a>
              <a href={`${home}#destinos`}>Spain</a>
              <a href={`${home}#destinos`}>Mountains &amp; Coast</a>
              <a href={`${home}#destinos`}>Worldwide</a>
            </div>
          </div>
          <div>
            <div className="footer-title">Let’s talk</div>
            <div className="footer-links">
              <a href="mailto:hello@eclesare.com">hello@eclesare.com</a>
              <a href="tel:+346566330">+346566330*</a>
              <span>Barcelona, Spain · Available worldwide</span>
              <a href="https://webdigitaldevelopment.in/" target="_blank" rel="noopener">Design by Web Digital Development ↗</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span id="year">{year}</span> Eclesare by Paula. All rights reserved.</span>
          <span>Design by Web Digital Development</span>
        </div>
      </div>
    </footer>
  );
}
