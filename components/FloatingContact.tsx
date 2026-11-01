export default function FloatingContact() {
  return (
    <div className="floating">
      <a className="float-btn call-btn" href="tel:+346566330" aria-label="Call Eclesare" title="Call">
        <svg viewBox="0 0 24 24">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 18a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.2 3.2 2 2 0 0 1 4.2 1h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7.2 9.3a16 16 0 0 0 7.5 7.5l1.9-1.9a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.7 2.1z" />
        </svg>
      </a>
      <a
        className="float-btn wa-btn"
        href="https://wa.me/346566330?text=Hello%20Eclesare%2C%20I%27d%20like%20to%20discuss%20my%20wedding."
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp Eclesare"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M20.5 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.9a8.5 8.5 0 1 1 16.3-3.6z" />
          <path d="M8.7 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1.1 1.4 1.9 1.8.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5-.1.7-.5 1.3-1.1 1.6-.5.3-1.2.4-2.1.1-1-.3-2.2-1-3.2-2-1-.9-1.7-2.1-2-3.1-.3-.9-.1-1.6.2-2.1z" />
        </svg>
      </a>
    </div>
  );
}
