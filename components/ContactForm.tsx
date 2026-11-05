'use client';

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { EMPTY_ENQUIRY, enquiryText, validateEnquiry, type EnquiryErrors, type EnquiryValues } from '@/lib/contact';
import { CONTACT, WEDDING_TYPES } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'not_configured' | 'error';

export default function ContactForm({ initialType = '', initialMessage = '' }: { initialType?: string; initialMessage?: string }) {
  const [values, setValues] = useState<EnquiryValues>({
    ...EMPTY_ENQUIRY,
    weddingType: WEDDING_TYPES.includes(initialType) ? initialType : '',
    message: initialMessage,
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [note, setNote] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof EnquiryValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const focusFirst = (er: EnquiryErrors) => {
    const first = (['name', 'email', 'phone', 'weddingDate', 'location', 'weddingType', 'message'] as const).find((k) => er[k]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const er = validateEnquiry(values);
    setErrors(er);
    if (Object.keys(er).length) {
      setStatus('idle');
      setNote('');
      focusFirst(er);
      return;
    }
    setStatus('sending');
    setNote('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus('sent');
        setValues(EMPTY_ENQUIRY);
      } else if (data.code === 'not_configured') {
        setStatus('not_configured');
      } else if (data.code === 'invalid' && data.errors) {
        setErrors(data.errors);
        setStatus('idle');
        focusFirst(data.errors);
      } else {
        setStatus('error');
        setNote(data.message || '');
      }
    } catch {
      setStatus('error');
    }
  };

  const mailto =
    `mailto:${CONTACT.email}?subject=${encodeURIComponent('Wedding enquiry')}&body=${encodeURIComponent(enquiryText(values))}`;

  if (status === 'sent') {
    return (
      <div className="ct-result ct-ok" role="status">
        <h2>Thank you — your enquiry has been sent.</h2>
        <p>We have received your message and will reply personally to the email address you provided.</p>
        <button type="button" className="btn" onClick={() => setStatus('idle')}>Send another enquiry</button>
      </div>
    );
  }

  const field = (k: keyof EnquiryValues) => ({
    id: `ct-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? (true as const) : undefined,
    'aria-describedby': errors[k] ? `ct-${k}-err` : undefined,
  });
  const err = (k: keyof EnquiryValues) =>
    errors[k] ? <p className="ct-err" id={`ct-${k}-err`}>{errors[k]}</p> : null;

  return (
    <form className="ct-form" ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="ct-grid">
        <div className="ct-field">
          <label htmlFor="ct-name">Full Name <span aria-hidden="true">*</span></label>
          <input type="text" autoComplete="name" required {...field('name')} />
          {err('name')}
        </div>
        <div className="ct-field">
          <label htmlFor="ct-email">Email Address <span aria-hidden="true">*</span></label>
          <input type="email" autoComplete="email" required {...field('email')} />
          {err('email')}
        </div>
        <div className="ct-field">
          <label htmlFor="ct-phone">Phone Number</label>
          <input type="tel" autoComplete="tel" {...field('phone')} />
          {err('phone')}
        </div>
        <div className="ct-field">
          <label htmlFor="ct-weddingDate">Wedding Date</label>
          <input type="text" placeholder="e.g. May 2027, or still deciding" {...field('weddingDate')} />
          {err('weddingDate')}
        </div>
        <div className="ct-field">
          <label htmlFor="ct-location">Wedding Location</label>
          <input type="text" placeholder="Country, region or venue" {...field('location')} />
          {err('location')}
        </div>
        <div className="ct-field">
          <label htmlFor="ct-weddingType">Type of Wedding</label>
          <select {...field('weddingType')}>
            <option value="">Please choose</option>
            {WEDDING_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {err('weddingType')}
        </div>
      </div>

      <div className="ct-field">
        <label htmlFor="ct-message">Message <span aria-hidden="true">*</span></label>
        <textarea rows={6} required {...field('message')} />
        {err('message')}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="ct-hp" aria-hidden="true">
        <label htmlFor="ct-company">Company</label>
        <input id="ct-company" name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={set('company')} />
      </div>

      <p className="ct-req">Fields marked * are required.</p>

      <button type="submit" className="btn btn-dark ct-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Enquiry  →'}
      </button>

      {status === 'not_configured' && (
        <div className="ct-result ct-warn" role="alert">
          <strong>Your message has not been sent.</strong>
          <p>
            Online enquiries are not connected to email yet, so nothing left this page. Please send your enquiry by email
            instead — the details you entered are ready to go.
          </p>
          <a className="btn" href={mailto}>Email {CONTACT.email}&nbsp; →</a>
        </div>
      )}
      {status === 'error' && (
        <div className="ct-result ct-warn" role="alert">
          <strong>Your message has not been sent.</strong>
          <p>{note || 'Something went wrong while sending.'} Please try again, or write to us directly.</p>
          <a className="btn" href={mailto}>Email {CONTACT.email}&nbsp; →</a>
        </div>
      )}
    </form>
  );
}
