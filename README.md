# ECLESARE by Paula — website

Next.js (App Router) + React + TypeScript. The design, copy and behaviour are
a one-to-one port of the earlier static HTML/CSS/JS site: the stylesheet is
unchanged, and every section, language (EN / FR / ES), the three-slide hero,
the gallery lightbox, the wedding-style tabs, the guided enquiry assistant, the
enquiry form and the floating call / WhatsApp buttons are rebuilt as React
components.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Requires Node 20 or newer. It deploys to Vercel with no configuration; set
`NEXT_PUBLIC_SITE_URL` (for example `https://eclesare.example`) so the
Open Graph image URL points at your real domain.

## Layout

```
app/
  layout.tsx            metadata, viewport, font preloads
  page.tsx              renders <Site />
  globals.css           the original stylesheet, unchanged apart from font paths
components/
  Site.tsx              page shell: scroll state, drawer, lightbox, shortcuts
  Header.tsx            header, dropdowns, language menu, mobile drawer
  Hero.tsx              three-slide hero (autoplay, arrows, dots, swipe, pause)
  Sections.tsx          About, Destinations, Beach, Gallery, Services, CTA band
  Experience.tsx        the seven wedding-style tabs
  Contact.tsx           contact details + enquiry form
  Chat.tsx              guided enquiry assistant
  Footer.tsx
  useEnquiry.ts         form state, validation, submit, chat prefill
  Reveal.tsx            scroll-reveal wrapper
lib/
  config.ts             CONFIG: phone, WhatsApp, email, socials, form endpoint
  i18n.ts               all EN / FR / ES text
  experiences.ts        the seven wedding styles (image + three-language copy)
  gallery.ts            gallery tiles
  lang.tsx              language context (remembered in localStorage)
public/
  images/  logo/  fonts/   self-hosted photographs, logo and fonts
```

Plain `<img>` tags are used on purpose so the markup and sizing match the
original exactly. Fonts (Cormorant Garamond, Inter, Italianno) are
self-hosted; nothing is requested from Google Fonts.

## The one file you need to edit

`lib/config.ts`:

```ts
export const CONFIG = {
  phoneDisplay: '+34 656 6330',
  phone: '+346566330',
  whatsapp: '346566330',
  email: '',
  address: 'Spain · destination weddings worldwide',
  mapsUrl: '',
  instagram: '', pinterest: '', facebook: '',
  formEndpoint: '',
  slideMs: 5000,
};
```

**The phone number needs checking before launch.** `+346566330` has seven
digits after `+34`; a Spanish mobile has nine. It is used exactly as supplied
and no digits have been invented, but the call button and the WhatsApp link
will not reach anyone until the full number is confirmed. Change `phone`,
`phoneDisplay` and `whatsapp` together.

Any value left empty hides that control instead of showing a fake one, which
is why there is no email address or social icons yet.

## The enquiry form and the assistant

* With no `formEndpoint` and no `email`, the form validates and hands the
  message to WhatsApp. With an `email` it opens the visitor's mail app. It
  never says an enquiry was sent when nothing was sent.
* Set `formEndpoint` to a Formspree or Web3Forms URL and the form POSTs JSON
  and reports the real result.
* The assistant is a scripted four-question enquiry, not an AI, and says so
  in its own header. To make it a real AI later, the API key must live on a
  server (a Next.js route handler), never in client code.

## Editing

* **Text**: `lib/i18n.ts`. Change `en`, `fr` and `es` together; a missing
  key falls back to English.
* **Wedding styles**: `lib/experiences.ts`.
* **Colours and type**: CSS custom properties at the top of `app/globals.css`.
* **Photographs**: replace a file in `public/images/` under the same name.

## Photographs

Eleven photographs cover about twenty-two slots, so some appear twice in
different crops (the Spain card and the City and Farm panels use Paula's
detail photographs). These are the slots to replace first: `dest-spain.jpg`,
`exp-city.jpg`, `exp-farm.jpg`.

---

Design & development by [Web Digital Development](https://webdigitaldevelopment.in/)
