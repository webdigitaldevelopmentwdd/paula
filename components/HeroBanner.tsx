import ReactDOM from 'react-dom';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';
import './HeroBanner.css';

type Props = {
  /** Page heading, shown in capitals (the page's h1). */
  title: string;
  subtitle: string;
  /** Background photograph (decorative). Shown with `cover` and centred, so it is never stretched. */
  image: string;
  /** Breadcrumb trail shown inside the banner. */
  crumbs: Crumb[];
};

/**
 * Compact hero banner used directly under the navigation on the internal pages.
 * 300px tall on desktop, 260px on tablet, 220px on mobile.
 * Not used on the homepage.
 */
export default function HeroBanner({ title, subtitle, image, crumbs }: Props) {
  // The background is a CSS image, so ask the browser to fetch it early.
  ReactDOM.preload(image, { as: 'image', fetchPriority: 'high' });

  return (
    <section className="hb" aria-labelledby="hb-title">
      <div className="hb-bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="hb-overlay" aria-hidden="true" />
      <Breadcrumbs items={crumbs} className="hb-crumbs" />
      <div className="hb-text">
        <h1 id="hb-title" className="hb-fade">{title}</h1>
        <p className="hb-subtitle hb-up">{subtitle}</p>
      </div>
    </section>
  );
}
