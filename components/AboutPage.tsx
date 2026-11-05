import Reveal from './Reveal';

const IMG = '/images/about';

/**
 * About Us. All copy comes from the founder's About page (the reference supplied by the client),
 * kept in her first-person voice. Each paragraph is used once; nothing has been added.
 */
export default function AboutPage() {
  return (
    <>
      {/* The hero banner is rendered by <HeroBanner /> in app/about/page.tsx */}

      {/* 2 · Introduction */}
      <section className="abt-intro" aria-labelledby="abt-intro-title">
        <div className="wrap">
          <Reveal className="abt-intro-inner">
            <div className="eyebrow" id="abt-intro-title">Meet the founder</div>
            <p className="abt-lead">
              I’m Paula, a wedding planner based in Alicante and the founder of Eclesare by Paula, a project born from my
              passion for art, design, and the excitement of transforming love stories into extraordinary celebrations.
            </p>
            <p className="abt-sign">Paula, founder of Eclesare by Paula</p>
          </Reveal>
        </div>
      </section>

      {/* 3 · Brand / personal story */}
      <section className="abt-story" aria-labelledby="abt-story-title">
        <div className="wrap abt-story-grid">
          <Reveal className="abt-story-visual">
            <figure className="wp-figure">
              <div className="wp-frame">
                <img
                  src={`${IMG}/portrait-desk-flowers.webp`}
                  alt="Paula, founder of Eclesare by Paula, resting her chin on her hand at a desk with a sketchbook, laptop and flowers"
                  width={1362}
                  height={2048}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          </Reveal>
          <Reveal className="abt-story-copy">
            <div className="eyebrow">My story</div>
            <h2 id="abt-story-title">Art, design and the beauty of the unexpected</h2>
            <p>
              I believe in elegant weddings with soul and a personality of their own. I draw inspiration from editorial and
              cinematic aesthetics, architecture, sculptures, geometric forms, and the beauty of the unexpected. I love to
              explore, take intentional creative risks, and design spaces that surprise, move, and immerse guests in a
              visual and sensory experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4 · Philosophy */}
      <section className="abt-philosophy" aria-labelledby="abt-phil-title">
        <div className="wrap">
          <Reveal className="abt-phil-inner">
            <div className="eyebrow">Philosophy</div>
            <h2 id="abt-phil-title">More than beauty alone</h2>
            <p>
              But an extraordinary wedding is built on more than beauty alone. It also grows from trust, personal
              connection, and the peace of mind that comes from knowing you are in good hands. I want to hear your story,
              understand your dreams, and help bring them to life with sensitivity, thoughtful planning, and dedication.
            </p>
            <blockquote className="abt-quote">
              <p>
                Because it’s not about creating identical weddings, but about discovering what makes each story unique and
                turning it into an unforgettable memory.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* 5 · Values and approach */}
      <section className="abt-approach" aria-labelledby="abt-approach-title">
        <div className="wrap">
          <Reveal className="abt-approach-head">
            <div className="eyebrow">Values &amp; approach</div>
            <h2 id="abt-approach-title">How I work</h2>
          </Reveal>
          <div className="abt-cards">
            <Reveal as="article" className="abt-card">
              <span className="abt-card-num">01</span>
              <h3>My goal</h3>
              <p>
                My goal is to design weddings that go beyond the conventional, where every detail has a purpose and every
                choice reflects the essence of the couple. From creative direction and décor to supplier selection and full
                wedding planning, I work to bring each celebration to life with a unique vision, meticulous attention to
                detail, and a deeper sense of meaning.
              </p>
            </Reveal>
            <Reveal as="article" className="abt-card">
              <span className="abt-card-num">02</span>
              <h3>Tailored services</h3>
              <p>
                Through a range of tailored services, I aim to adapt each proposal to the needs, priorities, and budget of
                every couple, while always preserving the essence of their celebration.
              </p>
            </Reveal>
            <Reveal as="article" className="abt-card">
              <span className="abt-card-num">03</span>
              <h3>My purpose</h3>
              <p>
                My purpose is to help you experience your wedding with excitement, confidence, and emotion, while we create
                a day that reflects who you are and stays in your hearts forever.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 · Image gallery */}
      <section className="abt-gallery" aria-labelledby="abt-gallery-title">
        <div className="wrap">
          <Reveal className="abt-gallery-head">
            <div className="eyebrow">Eclesare by Paula</div>
            <h2 id="abt-gallery-title">An aesthetic that dares. A story that endures.</h2>
            <p>Weddings designed to move you.</p>
          </Reveal>
          <div className="abt-gallery-grid">
            <Reveal className="abt-g">
              <figure className="wp-figure">
                <div className="wp-frame">
                  <img
                    src={`${IMG}/portrait-white-studio.webp`}
                    alt="Paula, founder of Eclesare by Paula, smiling in a black blazer against a white studio background"
                    width={1064}
                    height={1600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </Reveal>
            <Reveal className="abt-g abt-g-offset">
              <figure className="wp-figure">
                <div className="wp-frame">
                  <img
                    src={`${IMG}/portrait-desk-flowers.webp`}
                    alt="Paula, founder of Eclesare by Paula, at her desk with a sketchbook, laptop and a vase of flowers"
                    width={1362}
                    height={2048}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </Reveal>
            <Reveal className="abt-g">
              <figure className="wp-figure">
                <div className="wp-frame">
                  <img
                    src={`${IMG}/portrait-arms-crossed.webp`}
                    alt="Paula, founder of Eclesare by Paula, smiling with her arms crossed in a black blazer"
                    width={1362}
                    height={2048}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
