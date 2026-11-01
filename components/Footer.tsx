'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  // Filled on the client, as in the original (avoids a server/client year mismatch).
  const [year, setYear] = useState('');
  useEffect(() => setYear(String(new Date().getFullYear())), []);

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
              <a href="#home">Home</a>
              <a href="#filosofia">Filosofía</a>
              <a href="#proceso">Proceso</a>
              <a href="#galeria">Galería</a>
              <a href="#servicios">Servicios</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>
          <div>
            <div className="footer-title">Destinations</div>
            <div className="footer-links">
              <a href="#destinos">India</a>
              <a href="#destinos">France</a>
              <a href="#destinos">Spain</a>
              <a href="#destinos">Mountains &amp; Coast</a>
              <a href="#destinos">Worldwide</a>
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
