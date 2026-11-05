import Link from 'next/link';

/** Closing call-to-action for inner pages. Styled like the home page's contact banner, links to the Contact page. */
export default function EnquiryCta({
  title = 'Let’s create something meaningful.',
  text = 'Tell us a little about your plans, the place you imagine and what matters most to you.',
  href = '/contact',
  label = 'Talk to us  →',
}: {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="contact-cta" aria-label="Enquiries">
      <div className="wrap cta-inner">
        <div>
          <div className="eyebrow">Your celebration begins here</div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn" href={href}>{label}</Link>
      </div>
    </section>
  );
}
