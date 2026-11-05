import { NextResponse } from 'next/server';
import { EMPTY_ENQUIRY, enquiryText, validateEnquiry, type EnquiryValues } from '@/lib/contact';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Enquiry endpoint. It only reports success when an email was really handed to the provider.
 *
 * Required environment variables (set them in Coolify → the app → Environment Variables):
 *   RESEND_API_KEY      API key from https://resend.com
 *   CONTACT_TO_EMAIL    where enquiries are delivered, e.g. hello@eclesare.com
 *   CONTACT_FROM_EMAIL  a sender on a domain verified in Resend, e.g. "Eclesare Website <enquiries@eclesarewedding.com>"
 * Without them the endpoint answers 503 "not_configured" and the form tells the visitor nothing was sent.
 */

// Small in-memory limiter: 5 enquiries per IP per 10 minutes (resets when the server restarts).
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 5;
}

export async function POST(req: Request) {
  let body: Partial<EnquiryValues>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, code: 'bad_request', message: 'Invalid request.' }, { status: 400 });
  }

  const values: EnquiryValues = { ...EMPTY_ENQUIRY };
  for (const k of Object.keys(EMPTY_ENQUIRY) as (keyof EnquiryValues)[]) {
    const raw = body[k];
    values[k] = typeof raw === 'string' ? raw : '';
  }

  // Bots fill the hidden field; pretend success without sending anything.
  if (values.company.trim()) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(values);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, code: 'invalid', errors }, { status: 400 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) {
    return NextResponse.json({ ok: false, code: 'rate_limited', message: 'Too many enquiries. Please try again later.' }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ ok: false, code: 'not_configured', message: 'Online enquiries are not connected to email yet.' }, { status: 503 });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email.trim(),
        subject: `Wedding enquiry from ${values.name.trim()}`,
        text: enquiryText(values),
      }),
    });
    if (!res.ok) {
      console.error('Enquiry email failed', res.status, await res.text().catch(() => ''));
      return NextResponse.json({ ok: false, code: 'send_failed', message: 'The email could not be sent.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Enquiry email error', err);
    return NextResponse.json({ ok: false, code: 'send_failed', message: 'The email could not be sent.' }, { status: 502 });
  }
}
