import { WEDDING_TYPES } from './site';

export type EnquiryValues = {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  weddingType: string;
  message: string;
  /** Honeypot: real visitors never see or fill this. */
  company: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

export const EMPTY_ENQUIRY: EnquiryValues = {
  name: '',
  email: '',
  phone: '',
  weddingDate: '',
  location: '',
  weddingType: '',
  message: '',
  company: '',
};

/** Same rules run in the browser (for instant feedback) and on the server (the ones that count). */
export function validateEnquiry(v: EnquiryValues): EnquiryErrors {
  const e: EnquiryErrors = {};
  const name = v.name.trim();
  if (name.length < 2) e.name = 'Please enter your full name.';
  else if (name.length > 100) e.name = 'Please keep your name under 100 characters.';

  const email = v.email.trim();
  if (!email) e.email = 'Please enter your email address.';
  else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = 'Please enter a valid email address.';

  const phone = v.phone.trim();
  if (phone && (!/^[+()\d\s.\-]{6,25}$/.test(phone) || phone.replace(/\D/g, '').length < 6)) {
    e.phone = 'Please enter a valid phone number, or leave it blank.';
  }

  if (v.weddingDate.trim().length > 60) e.weddingDate = 'Please keep this under 60 characters.';
  if (v.location.trim().length > 120) e.location = 'Please keep this under 120 characters.';
  if (v.weddingType && !WEDDING_TYPES.includes(v.weddingType)) e.weddingType = 'Please choose one of the options.';

  const message = v.message.trim();
  if (message.length < 10) e.message = 'Please tell us a little about your wedding (at least 10 characters).';
  else if (message.length > 4000) e.message = 'Please keep your message under 4000 characters.';

  return e;
}

export function enquiryText(v: EnquiryValues): string {
  const line = (label: string, value: string) => `${label}: ${value.trim() || '—'}`;
  return [
    line('Full name', v.name),
    line('Email', v.email),
    line('Phone', v.phone),
    line('Wedding date', v.weddingDate),
    line('Wedding location', v.location),
    line('Type of wedding', v.weddingType),
    '',
    'Message:',
    v.message.trim(),
  ].join('\n');
}
