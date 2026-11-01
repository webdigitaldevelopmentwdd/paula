'use client';

import { CONFIG, TEL, waLink } from '@/lib/config';
import { useLang } from '@/lib/lang';
import { DEST_OPTIONS, type Enquiry } from './useEnquiry';
import { Reveal } from './Reveal';

const STYLE_OPTIONS: [string, string][] = [
  ['Royal Palace', 'exp.t.palace'], ['Beach', 'exp.t.beach'], ['Mountain', 'exp.t.mountain'],
  ['City', 'exp.t.city'], ['Farm', 'exp.t.farm'], ['Chateau', 'exp.t.chateau'], ['Fusion', 'exp.t.fusion'],
];

export function Contact({ enquiry }: { enquiry: Enquiry }) {
  const { t } = useLang();
  const { values, set, errors, status, submit } = enquiry;

  /* a field's error message, wired to the input with aria-describedby */
  const aria = (id: string, msg?: string) =>
    msg ? { 'aria-invalid': true as const, 'aria-describedby': id + '-err' } : {};
  const err = (id: string, msg?: string) =>
    msg ? <p className="field-error" id={id + '-err'}>{msg}</p> : null;

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-intro">
          <p className="eyebrow">{t('form.eyebrow')}</p>
          <h2>{t('form.title')}</h2>
          <p>{t('form.sub')}</p>

          <ul className="contact-lines">
            {TEL && (
              <li>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
                <a href={'tel:' + TEL}>{CONFIG.phoneDisplay || TEL}</a>
              </li>
            )}
            {CONFIG.email && (
              <li>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                <a href={'mailto:' + CONFIG.email}>{CONFIG.email}</a>
              </li>
            )}
            {CONFIG.address && (
              <li>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
                {CONFIG.mapsUrl ? (
                  <a href={CONFIG.mapsUrl} target="_blank" rel="noopener">{CONFIG.address}</a>
                ) : (
                  <span>{CONFIG.address}</span>
                )}
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal as="form" className="form" id="enquiry" noValidate onSubmit={submit}>
          <p className="hp" aria-hidden="true">
            <label>Company <input type="text" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={(e) => set('company', e.target.value)} /></label>
          </p>

          <div className="row">
            <div className="field">
              <label htmlFor="f-name">{t('form.name')}</label>
              <input id="f-name" name="name" type="text" autoComplete="name" required value={values.name} onChange={(e) => set('name', e.target.value)} {...aria('f-name', errors.name)} />
              {err('f-name', errors.name)}
            </div>
            <div className="field">
              <label htmlFor="f-email">{t('form.email')}</label>
              <input id="f-email" name="email" type="email" autoComplete="email" required value={values.email} onChange={(e) => set('email', e.target.value)} {...aria('f-email', errors.email)} />
              {err('f-email', errors.email)}
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="f-phone">{t('form.phone')}</label>
              <input id="f-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => set('phone', e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="f-dest">{t('form.dest')}</label>
              <select id="f-dest" name="destination" value={values.destination} onChange={(e) => set('destination', e.target.value)}>
                <option value="">{t('form.choose')}</option>
                {DEST_OPTIONS.map(([v, key]) => (
                  <option key={v} value={v}>{t(key)}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="f-date">{t('form.date')}</label>
              <input id="f-date" name="date" type="text" placeholder={t('form.datePh')} value={values.date} onChange={(e) => set('date', e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="f-guests">{t('form.guests')}</label>
              <input id="f-guests" name="guests" type="number" min={2} max={2000} inputMode="numeric" value={values.guests} onChange={(e) => set('guests', e.target.value)} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="f-style">{t('form.style')}</label>
            <select id="f-style" name="style" value={values.style} onChange={(e) => set('style', e.target.value)}>
              <option value="">{t('form.choose')}</option>
              {STYLE_OPTIONS.map(([v, key]) => (
                <option key={v} value={v}>{t(key)}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="f-msg">{t('form.message')}</label>
            <textarea id="f-msg" name="message" rows={5} required value={values.message} onChange={(e) => set('message', e.target.value)} {...aria('f-msg', errors.message)}></textarea>
            {err('f-msg', errors.message)}
          </div>

          <div className="field check">
            <label>
              <input id="f-consent" name="consent" type="checkbox" required checked={values.consent} onChange={(e) => set('consent', e.target.checked)} {...aria('f-consent', errors.consent)} />{' '}
              <span>{t('form.consent')}</span>
            </label>
            {err('f-consent', errors.consent)}
          </div>

          <div className="form-actions">
            <button className="btn btn--gold" type="submit">{t('form.send')}</button>
            {CONFIG.whatsapp && <a className="btn btn--wa" href={waLink('')}>{t('form.wa')}</a>}
          </div>

          <p className={status.cls} role="status" aria-live="polite">{status.text}</p>
          <p className="form-note">{CONFIG.email ? t('form.note') : t('form.noteWa')}</p>
        </Reveal>
      </div>
    </section>
  );
}
