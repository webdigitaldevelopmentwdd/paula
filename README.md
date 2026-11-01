# ECLESARE by Paula — website

Plain HTML5, CSS3 and vanilla JavaScript. No Next.js, no React, no Node, no
database, no build step. Three languages (EN / FR / ES), a three-slide hero,
a working gallery lightbox, filterable wedding styles, a guided enquiry
assistant, and floating call / WhatsApp buttons.

---

## Files

```
eclesare-site/
  index.html                 the whole page
  README.md                  this file
  assets/css/style.css       all styling
  assets/css/fonts/          Cormorant Garamond, Inter, Italianno (18 woff2)
  assets/js/script.js        slider, menus, languages, filters, lightbox,
                             assistant, form — plus the CONFIG block
  assets/images/             23 photographs
  assets/logo/               the supplied logo, 4 files
```

## How to open it

Double-click `index.html` — it works straight from the disk, because every
path is relative and nothing is fetched from another domain.

To upload: put the **contents** of this folder into `public_html` (cPanel) or
any web host, so that `index.html` sits at the top. It also works unchanged
inside a subfolder.

If you prefer a local server while editing:

```bash
cd eclesare-site
python3 -m http.server 8000     # then open http://localhost:8000
```

---

## The one block you need to edit

Open `assets/js/script.js`. The first thirty lines are `CONFIG`:

```js
var CONFIG = {
  phoneDisplay: '+34 656 6330',
  phone:        '+346566330',
  whatsapp:     '346566330',
  email:        '',
  address:      'Spain · destination weddings worldwide',
  mapsUrl:      '',
  instagram:    '',
  pinterest:    '',
  facebook:     '',
  formEndpoint: '',
  slideMs:      5000
};
```

**The phone number needs checking before launch.** You gave `+346566330`.
A Spanish mobile is `+34` followed by **nine** digits; this has seven. It has
been used exactly as supplied and **no digits have been invented** — but the
call button and the WhatsApp link will not reach anyone until the full number
is confirmed. Change `phone`, `phoneDisplay` and `whatsapp` together.

Any value left empty **hides that control** rather than showing a fake one.
That is why there is currently no email address and no social icons in the
footer: fill `email`, `instagram`, `pinterest` and `facebook` in and they
appear by themselves.

---

## Photographs

### What is in `assets/images/`

| Source | Used for |
| --- | --- |
| **The six photographs you supplied** | all three hero slides, the About portrait, the India / France / Mountain cards, the beach feature, four gallery tiles, five of the seven wedding-style panels |
| **Paula's own photographs** (from the earlier project) | the Spain card, one gallery tile, the City and Farm panels, the footer picture |

Paula's photographs carry a "by Paula" watermark along the bottom edge.
Every crop is anchored so the watermark survives intact — nothing is cropped
over it or retouched.

### What is honestly missing

The brief asked for a different photograph in every slot and for stock
photography from Unsplash or Pexels to fill the gaps. **The build machine
cannot reach any image host** — `images.unsplash.com`, `images.pexels.com`,
Wikimedia and Pixabay are all blocked by the network policy here, which was
confirmed, not assumed. So nothing was downloaded, and no photograph is
claimed to be here that is not.

The consequence: eleven photographs are covering about twenty-two slots, so
some appear twice in different crops. Specifically —

* the Indian varmala photograph appears in About, one gallery tile and the
  Fusion panel;
* the beach photograph appears in hero slide 3, the beach feature, one
  gallery tile and the Beach panel;
* the **Spain** card and the **City** and **Farm** panels use Paula's
  detail photographs rather than a Spanish, city or farm wedding, because
  there is no such photograph in the set.

Those are the slots to replace first. Drop a new JPEG into
`assets/images/` under the same filename and it appears — no code change
needed. The filenames are self-describing: `dest-spain.jpg`, `exp-city.jpg`,
`exp-farm.jpg`, and so on.

### Fonts

Cormorant Garamond, Inter and Italianno are **self-hosted** in
`assets/css/fonts/`. No request goes to Google Fonts — faster, and one less
GDPR question for a European site.

---

## What works with no backend

* Three-slide hero: autoplay every 5 s, arrows, three dots, pause control,
  swipe on touch, pauses on hover, focus and when the tab is hidden, and
  respects `prefers-reduced-motion`.
* Navigation, both dropdowns, mobile drawer, scroll-spy underline.
* Language switch EN / FR / ES — every heading, paragraph, button, form
  label, placeholder, footer link and the wedding-style panels are
  translated. The choice is remembered in `localStorage`, and if the browser
  blocks storage the site carries on without it.
* Gallery lightbox: click any tile, arrow keys, Escape to close.
* The seven wedding-style tabs, each with its own photograph, text and
  highlights.
* Form validation with error messages in all three languages.
* The guided enquiry assistant.
* Call and WhatsApp buttons.

## What needs configuring

| Thing | What happens now | To finish it |
| --- | --- | --- |
| **Phone / WhatsApp** | Uses `+346566330` as supplied — very likely short by two digits | Confirm and update `CONFIG` |
| **Email** | Hidden everywhere; the form falls back to WhatsApp | Set `CONFIG.email` |
| **Enquiry form** | Validates, then hands the message to your email app, or to WhatsApp if no email is set. **It never says an enquiry was sent when nothing was sent.** | Create a free Formspree or Web3Forms endpoint and paste the URL into `CONFIG.formEndpoint`. The form then POSTs JSON and reports the real result. |
| **Social links** | Icons hidden | Set `instagram`, `pinterest`, `facebook` |
| **Address / map** | Shows the generic line above | Set `address` and `mapsUrl` |
| **Gallery** | "View Full Gallery" goes to the contact form | Point it at a gallery page once there is one |

## The assistant, honestly

It is a **scripted, guided enquiry form in a chat window — not an AI.** The
panel says so under its own title. It asks four questions (destination, date,
guest count, contact), then offers to send the answers by WhatsApp, by email,
or to fill the main form for you. Nothing is sent anywhere without a click.

To make it a real AI later, the API key must live on a server, never in
`script.js` — that file is public to anyone who visits the site.

The avatar is a drawn illustration, not a photograph. A stock photograph of
a stranger presented as Paula's assistant would imply a real person endorses
the business. Replace it with a photograph of Paula or a team member and it
becomes genuinely better — it is the inline `<svg>` inside `.launcher` in
`index.html`.

---

## Verified

Headless Chromium over HTTP, 23 October 2026:

* **1920 / 1440 / 1280 / 1024 / 768 / 430 / 390 / 375 / 360 / 320 px** — no
  horizontal overflow at any width; the desktop nav and the burger never both
  show or both hide.
* No console errors, no page errors, no failed requests, no broken images,
  every `<img>` has an `alt`.
* Hero: arrows, dots and pause verified, and slide 2's headline confirmed
  visible (an earlier build left non-active slides' text permanently
  transparent).
* Both dropdowns open, and only one at a time.
* All seven wedding-style tabs load seven **distinct** photographs.
* Lightbox opens, advances and closes on Escape.
* The assistant completes a full four-answer flow and prefills the form.
* Empty form submission produces exactly four field errors.
* Language switch verified in all three: `<html lang>`, the slide headline,
  the About heading, the style panel, a form label, the placeholder and the
  footer text all change, and no image breaks.
* Mobile drawer slides in, locks scrolling and closes on a nav tap.
* At 360×740, 390×844, 768×1024, 1440×900 and 1920×1080: no overlap between
  the floating controls and the hero controls, and nothing floating covers
  the footer credit.

**Not verified:** nothing has been seen in a real browser on real hardware,
and the site has never been loaded from a live domain. Check it once after
upload.

---

## Editing

* **Text** lives in `I18N` in `assets/js/script.js`, keyed by `data-i18n`
  attributes in `index.html`. Change `en`, `fr` and `es` together. A key
  missing from `fr` or `es` falls back to English rather than going blank.
* **Wedding styles** live in `EXP` in the same file — image, alt text and
  the three-language copy for each of the seven.
* **Colours** are CSS custom properties at the top of `style.css`:
  `--ivory`, `--champagne`, `--rose`, `--brown`, `--charcoal`.

---

Design & development by [Web Digital Development](https://webdigitaldevelopment.in/)
