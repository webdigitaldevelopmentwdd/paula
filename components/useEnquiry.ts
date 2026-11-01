'use client';

import { useCallback, useState, type FormEvent } from 'react';
import { CONFIG, waLink } from '@/lib/config';
import { useLang } from '@/lib/lang';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export type Values = {
  company: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  date: string;
  guests: string;
  style: string;
  message: string;
  consent: boolean;
};

const EMPTY: Values = {
  company: '', name: '', email: '', phone: '', destination: '',
  date: '', guests: '', style: '', message: '', consent: false,
};

type Errors = Partial<Record<'name' | 'email' | 'message' | 'consent', string>>;
type Status = { cls: string; text: string };

export const DEST_OPTIONS: [string, string][] = [
  ['India', 'dd.d1'], ['France', 'dd.d2'], ['Spain', 'dd.d3'], ['Italy', 'dd.d4'],
  ['Switzerland', 'dd.d5'], ['Greece', 'dd.d6'], ['Worldwide', 'dd.d7'],
];

export type ChatAnswers = Partial<Record<'dest' | 'date' | 'guests' | 'contact', string>>;

export function useEnquiry() {
  const { t } = useLang();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ cls: 'form-status', text: '' });

  const set = <K extends keyof Values>(key: K, value: Values[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  const collect = (v: Values) => {
    const out: string[] = [];
    const map: [keyof Values, string][] = [
      ['name', t('form.name')], ['email', t('form.email')], ['phone', t('form.phone')],
      ['destination', t('form.dest')], ['date', t('form.date')], ['guests', t('form.guests')],
      ['style', t('form.style')],
    ];
    map.forEach(([k, label]) => {
      const val = v[k];
      if (val) out.push(label.replace(' *', '') + ': ' + val);
    });
    out.push('', v.message);
    return out.join('\n');
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const v = values;
    if (v.company) return; // honeypot

    const next: Errors = {};
    let first: string | null = null;
    if (v.name.trim().length < 2) { next.name = t('err.name'); first = first || 'f-name'; }
    if (!EMAIL_RE.test(v.email.trim())) { next.email = t('err.email'); first = first || 'f-email'; }
    if (v.message.trim().length < 10) { next.message = t('err.message'); first = first || 'f-msg'; }
    if (!v.consent) { next.consent = t('err.consent'); first = first || 'f-consent'; }
    setErrors(next);

    if (first) {
      document.getElementById(first)?.focus();
      setStatus({ cls: 'form-status', text: '' });
      return;
    }

    const body = collect(v);

    if (CONFIG.formEndpoint) {
      setStatus({ cls: 'form-status pending', text: t('form.sending') });
      fetch(CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: v.name, email: v.email, message: body }),
      })
        .then((res) => {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          setStatus({ cls: 'form-status ok', text: t('form.sent') });
          setValues(EMPTY);
        })
        .catch(() => setStatus({ cls: 'form-status', text: t('form.failed') }));
      return;
    }

    /* No endpoint: hand off honestly rather than pretend an enquiry was sent. */
    if (CONFIG.email) {
      setStatus({ cls: 'form-status pending', text: t('form.mailto') });
      window.location.href =
        'mailto:' + CONFIG.email +
        '?subject=' + encodeURIComponent('Eclesare — ' + v.name) +
        '&body=' + encodeURIComponent(body);
    } else if (CONFIG.whatsapp) {
      setStatus({ cls: 'form-status pending', text: t('form.waSent') });
      window.open(waLink('Eclesare enquiry\n' + body), '_blank', 'noopener');
    } else {
      setStatus({ cls: 'form-status pending', text: '' });
    }
  };

  /* fill the form from the assistant's answers */
  const prefill = useCallback(
    (answers: ChatAnswers, summary: string) => {
      setValues((v) => {
        const n = { ...v };
        if (answers.date) n.date = answers.date;
        if (answers.dest) {
          const hit = DEST_OPTIONS.find(([, key]) => t(key).trim().toLowerCase() === answers.dest!.toLowerCase());
          if (hit) n.destination = hit[0];
        }
        const g = (answers.guests || '').match(/\d+/);
        if (g) n.guests = g[0];
        if (!n.message) n.message = summary;
        if (answers.contact) {
          const email = answers.contact.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
          if (email) n.email = email[0];
          const name = answers.contact
            .replace(/[^\s@]+@[^\s@]+\.[^\s@]+/, '')
            .replace(/[\d+()\-]{6,}/, '')
            .trim();
          if (name) n.name = name.replace(/[,;]+$/, '');
          const phone = answers.contact.match(/[\d+][\d\s()\-]{6,}/);
          if (phone) n.phone = phone[0].trim();
        }
        return n;
      });
    },
    [t],
  );

  return { values, set, errors, status, submit, prefill };
}

export type Enquiry = ReturnType<typeof useEnquiry>;
