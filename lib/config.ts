/* ═════ CONFIG — edit these, nothing else ═══════════════════════════════
 *
 * phone          as supplied by the client: +346566330
 *                A Spanish mobile is normally +34 followed by NINE
 *                digits; this one has seven, so it is very likely
 *                incomplete. No digits have been invented — confirm the
 *                full number and replace it in BOTH fields below.
 * whatsapp       digits only, no "+", no spaces.
 * email/address  empty strings hide the control rather than showing a
 *                plausible-looking fake.
 * formEndpoint   leave empty and the form hands off to the visitor's own
 *                mail app. Put a Formspree/Web3Forms URL here and it
 *                POSTs the enquiry as JSON instead.
 */
export const CONFIG = {
  phoneDisplay: '+34 656 6330',
  phone: '+346566330',
  whatsapp: '346566330',
  email: '',
  address: 'Spain · destination weddings worldwide',
  mapsUrl: '',
  instagram: '',
  pinterest: '',
  facebook: '',
  formEndpoint: '',
  slideMs: 5000,
};

export const TEL = CONFIG.phone.replace(/[^\d+]/g, '');

export function waLink(body?: string): string {
  const base = 'https://wa.me/' + CONFIG.whatsapp;
  const text = body || 'Hello Eclesare, I would like to enquire about planning our wedding.';
  return base + '?text=' + encodeURIComponent(text);
}
