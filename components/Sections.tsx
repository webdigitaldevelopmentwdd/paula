'use client';

import Reveal from './Reveal';
import { useLanguage } from './LanguageProvider';

export function Intro() {
  const { t } = useLanguage();
  return (
    <section className="intro" id="filosofia">
      <div className="wrap intro-grid">
        <Reveal className="intro-visual">
          <div className="backdrop"></div>
          <div className="frame"></div>
          <img
            src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1100&q=85"
            alt="Indian wedding couple in a timeless editorial portrait"
            loading="lazy"
          />
        </Reveal>
        <Reveal className="intro-copy">
          <div className="eyebrow">{t('philosophyLabel', 'Nuestra filosofía')}</div>
          <h2>{t('philosophyTitle', 'More than events. Meaningful experiences.')}</h2>
          <p>
            {t(
              'philosophyText',
              'En Eclesare by Paula creemos que cada celebración es una obra de arte viva. Diseñamos espacios que emocionan, conectan y permanecen en la memoria. Nuestra mirada une arquitectura, materiales, luz y emoción para crear celebraciones con una identidad propia.',
            )}
          </p>
          <p className="side-note">{t('philosophyNote', 'Architecture of emotion — celebrations shaped with intention.')}</p>
          <a className="btn" href="#proceso">{t('ourStory', 'Conoce nuestra historia  →')}</a>
        </Reveal>
      </div>
    </section>
  );
}

const DESTINATIONS = [
  {
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=85',
    alt: 'Indian destination wedding setting',
    title: 'India',
    text: 'Ritual, heritage, contemporary design.',
    link: 'Explore India ↗',
  },
  {
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    alt: 'Elegant European wedding celebration',
    title: 'France',
    text: 'Châteaux, architecture, understated romance.',
    link: 'Explore France ↗',
  },
  {
    img: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85',
    alt: 'Mediterranean coastal destination',
    title: 'Spain',
    text: 'Sunlit landscapes and expressive gatherings.',
    link: 'Explore Spain ↗',
  },
  {
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
    alt: 'Outdoor destination wedding in a scenic landscape',
    title: 'Beyond',
    text: 'Mountains, coastlines and private estates.',
    link: 'Explore worldwide ↗',
  },
];

export function Destinations() {
  const { t } = useLanguage();
  return (
    <section className="section destinations" id="destinos">
      <div className="wrap">
        <Reveal className="section-head center">
          <div className="eyebrow">{t('destinationsLabel', 'Destinos')}</div>
          <h2>{t('destinationsTitle', 'A world of extraordinary places')}</h2>
          <p>{t('destinationsText', 'Each setting brings its own character. We shape the celebration around the place, never the other way around.')}</p>
        </Reveal>
        <div className="destination-grid">
          {DESTINATIONS.map((d) => (
            <Reveal as="article" className="destination-card" key={d.title}>
              <a className="image-link" href="#contacto">
                <img src={d.img} alt={d.alt} loading="lazy" />
              </a>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              <a className="arrow-link" href="#contacto">{d.link}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Beach() {
  const { t } = useLanguage();
  return (
    <section className="beach">
      <Reveal className="beach-image">
        <img
          src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1500&q=85"
          alt="Sunset destination wedding by the sea"
          loading="lazy"
        />
      </Reveal>
      <Reveal className="beach-copy">
        <div className="eyebrow">{t('beachLabel', 'Destination experience')}</div>
        <h2>{t('beachTitle', 'A setting as singular as your story.')}</h2>
        <p>
          {t(
            'beachText',
            'From a Mediterranean coastline to a mountain retreat or a private countryside estate, we design celebrations that belong to their landscape. Architecture, materials and light become part of the experience.',
          )}
        </p>
        <a className="btn btn-dark" href="#contacto">{t('planCelebration', 'Plan your celebration  →')}</a>
      </Reveal>
    </section>
  );
}

const GALLERY = [
  { img: 'photo-1591604466107-ec97de577aff', alt: 'Wedding couple portrait', caption: 'Human connection' },
  { img: 'photo-1519741497674-611481863552', alt: 'Ceremony architecture and floral installation', caption: 'Structure & form' },
  { img: 'photo-1464366400600-7168b8af9bc3', alt: 'Wedding table styling and lighting', caption: 'Light & material' },
  { img: 'photo-1519225421980-715cb0215aed', alt: 'Romantic outdoor celebration', caption: 'Place & atmosphere' },
  { img: 'photo-1507504031003-b417219a0fde', alt: 'Coastal wedding landscape', caption: 'Destination stories' },
  { img: 'photo-1606800052052-a08af7148866', alt: 'Indian wedding details', caption: 'Cultural dialogue' },
];

export function Gallery() {
  const { t } = useLanguage();
  return (
    <section className="section gallery" id="galeria">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="eyebrow">{t('galleryLabel', 'Galería')}</div>
            <h2>{t('galleryTitle', 'Spaces that tell stories')}</h2>
            <p>
              {t(
                'galleryText',
                'A study of atmosphere, structure, texture and human connection. Inspiration imagery is illustrative and not represented as completed Eclesare work.',
              )}
            </p>
          </div>
          <a className="btn" href="#contacto">{t('discussProject', 'Discuss a project  →')}</a>
        </Reveal>
        <div className="gallery-grid">
          {GALLERY.map((g) => (
            <Reveal as="figure" key={g.img}>
              <img
                src={`https://images.unsplash.com/${g.img}?auto=format&fit=crop&w=900&q=85`}
                alt={g.alt}
                loading="lazy"
              />
              <figcaption>{g.caption}</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { number: '01 / CREATIVE', title: 'Design & Concept', text: 'Visual language, spatial concept, materials and atmosphere.' },
  { number: '02 / PLANNING', title: 'Full Planning', text: 'Venue research, budgets, timelines and trusted partners.' },
  { number: '03 / PRODUCTION', title: 'Production & Styling', text: 'Installations, lighting, décor and on-site coordination.' },
  { number: '04 / DESTINATION', title: 'Guest Experience', text: 'Travel, hospitality and a seamless destination journey.' },
];

export function Services() {
  const { t } = useLanguage();
  return (
    <section className="section services" id="servicios">
      <div className="wrap">
        <Reveal className="section-head center">
          <div className="eyebrow">{t('servicesLabel', 'Servicios')}</div>
          <h2>{t('servicesTitle', 'A considered approach, from idea to experience')}</h2>
          <p>{t('servicesText', 'A close, collaborative process built around creative direction, careful planning and calm execution.')}</p>
        </Reveal>
        <div className="service-grid">
          {SERVICES.map((s) => (
            <Reveal as="article" className="service" key={s.number}>
              <span className="number">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const THEMES = [
  {
    number: '01',
    img: '/images/theme-indian.png',
    alt: 'Indian bride and groom during a traditional varmala ceremony',
    title: 'Indian Style',
    text: 'Colour, rituals, music and meaningful family traditions.',
  },
  {
    number: '02',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
    alt: 'Elegant oriental-inspired wedding design',
    title: 'Oriental Style',
    text: 'Thoughtful symbolism, refined details and atmospheric design.',
  },
  {
    number: '03',
    img: '/images/theme-arabic.png',
    alt: 'Golden Arabian courtyard wedding with ornate arches and warm lantern light',
    title: 'Arabic Style',
    text: 'Rich textures, glowing light and generous hospitality.',
  },
  {
    number: '04',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
    alt: 'Romantic medieval-inspired wedding setting',
    title: 'Medieval Romance',
    text: 'Historic settings, candlelight and dramatic architectural details.',
  },
  {
    number: '05',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85',
    alt: 'Contemporary American wedding celebration',
    title: 'American Style 🇺🇸',
    text: 'Personal vows, modern celebrations and distinctive reception experiences.',
  },
  {
    number: '06',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
    alt: 'Elegant church wedding ceremony',
    title: 'Church Weddings',
    text: 'Meaningful ceremonies with respectful, elegant styling.',
  },
  {
    number: '07',
    span: true,
    img: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1500&q=85',
    alt: 'Spanish destination wedding atmosphere',
    title: 'The Real Spanish Wedding',
    text: 'And of course, we preserve the soul of a real Spanish wedding — its local traditions, warm hospitality, food, music and unmistakable Mediterranean spirit.',
  },
];

export function WhyDifferent() {
  return (
    <section className="section thematic" id="why-different">
      <div className="wrap">
        <Reveal className="section-head center">
          <div className="eyebrow">Our creative signature</div>
          <h2>Why We Are Different</h2>
          <p>
            We create thematic weddings shaped around your story, your cultures and the traditions that matter to you — while preserving the authentic spirit of a real Spanish wedding.
          </p>
        </Reveal>
        <div className="theme-grid">
          {THEMES.map((th) => (
            <Reveal as="article" className={`theme-card${th.span ? ' theme-span' : ''}`} key={th.number}>
              <img src={th.img} alt={th.alt} loading="lazy" />
              <div className="theme-copy">
                <span className="number">{th.number}</span>
                <h3>{th.title}</h3>
                <p>{th.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { num: '01', title: 'Concept', text: 'Story, inspiration and creative direction.' },
  { num: '02', title: 'Design', text: 'Materials, palette, spatial studies and moodboards.' },
  { num: '03', title: 'Planning', text: 'Partners, logistics, guest experience and schedule.' },
  { num: '04', title: 'Execution', text: 'Production, coordination and thoughtful delivery.' },
];

export function Process() {
  const { t } = useLanguage();
  return (
    <section className="section process" id="proceso">
      <div className="wrap process-grid">
        <Reveal className="process-image">
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85"
            alt="Wedding design details and creative preparation"
            loading="lazy"
          />
        </Reveal>
        <Reveal>
          <div className="eyebrow">{t('processLabel', 'Nuestro proceso')}</div>
          <h2>{t('processTitle', 'From the first idea to the final moment')}</h2>
          <p className="muted">{t('processText', 'A clear, creative and collaborative process gives every celebration its own identity.')}</p>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.num}>
                <span className="num">{s.num}</span>
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </div>
              </li>
            ))}
          </ol>
          <a className="btn" href="#contacto">{t('startConversation', 'Start a conversation  →')}</a>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactCta() {
  const { t } = useLanguage();
  return (
    <section className="contact-cta" id="contacto">
      <div className="wrap cta-inner">
        <div>
          <div className="eyebrow">{t('contactLabel', 'Your celebration begins here')}</div>
          <h2>{t('contactTitle', 'Let’s create something meaningful.')}</h2>
          <p>{t('contactText', 'Tell us a little about your plans, the place you imagine and what matters most to you.')}</p>
        </div>
        <a className="btn" href="mailto:hello@eclesare.com?subject=Wedding%20enquiry">{t('contactButton', 'Talk to us  →')}</a>
      </div>
    </section>
  );
}
