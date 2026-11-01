/* ═══════════════════════════════════════════════════════════════════════
   ECLESARE by Paula — site script
   Vanilla JavaScript. No framework, no build step, no dependencies.

   Sections below: CONFIG · TRANSLATIONS · EXPERIENCES · runtime.
   Everything you are likely to need to change lives in CONFIG.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ═════ CONFIG — edit these, nothing else ═══════════════════════════
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

  /* ═════ TRANSLATIONS ════════════════════════════════════════════════
   * English is the source. A key missing from fr/es falls back to en, so
   * an incomplete translation degrades to English rather than to a blank.
   */
  var I18N = {
    en: {
      'skip': 'Skip to content',
      'nav.home': 'Home', 'nav.about': 'About', 'nav.weddings': 'Weddings',
      'nav.destinations': 'Destinations', 'nav.gallery': 'Gallery',
      'nav.services': 'Services', 'nav.contact': 'Contact', 'nav.menu': 'Menu',
      'dd.w1': 'Royal Palace Weddings', 'dd.w2': 'French Château Weddings',
      'dd.w3': 'Beach Weddings', 'dd.w4': 'Mountain Weddings',
      'dd.w5': 'City Weddings', 'dd.w6': 'Farm Weddings', 'dd.w7': 'Indian–French Fusion',
      'dd.d1': 'India', 'dd.d2': 'France', 'dd.d3': 'Spain', 'dd.d4': 'Italy',
      'dd.d5': 'Switzerland', 'dd.d6': 'Greece', 'dd.d7': 'Worldwide',
      'cta.plan': 'Plan Your Wedding',
      'common.explore': 'Explore',

      'hero.1.eyebrow': 'Indian Royal Weddings',
      'hero.1.title': 'A Celebration Without Borders',
      'hero.1.text': 'India • France • Spain • Worldwide',
      'hero.1.cta': 'Plan Your Dream Wedding',
      'hero.2.eyebrow': 'French Luxury Weddings',
      'hero.2.title': 'Château Romance, Quietly Perfected',
      'hero.2.text': 'Historic estates, formal gardens and long golden evenings.',
      'hero.2.cta': 'Discover French Weddings',
      'hero.3.eyebrow': 'Destination & Beach Weddings',
      'hero.3.title': 'Vows Beside the Sea',
      'hero.3.text': 'Mediterranean light, open horizons and ceremonies that feel unhurried.',
      'hero.3.cta': 'Explore Destination Weddings',

      'about.eyebrow': 'About Eclesare',
      'about.title': 'Crafting Extraordinary Weddings Across Cultures',
      'about.p1': 'At Eclesare by Paula, we believe every wedding tells a unique story — a beautiful blend of emotions, traditions and personal dreams. With a passion for Indian and European celebrations, we create bespoke weddings in France, Spain, India and destinations across the world.',
      'about.p2': 'From royal palaces and romantic French châteaux to Mediterranean coastal celebrations, we bring cultures together through thoughtful planning, elegant design and personal attention.',
      'about.p3': 'From venue selection and décor to guest travel, hospitality, ceremonies and on-the-day coordination, we manage the details so every couple can enjoy their celebration.',
      'about.cta': 'Our Story',

      'dest.eyebrow': 'Destinations',
      'dest.title': 'Your Wedding, Any Corner of the World.',
      'dest.sub': 'From royal Indian celebrations to romantic European escapes, we design weddings in extraordinary locations.',
      'dest.1.t': 'India', 'dest.1.d': 'Royal Traditions, Modern Stories.',
      'dest.2.t': 'France', 'dest.2.d': 'Châteaux & Romantic Celebrations.',
      'dest.3.t': 'Spain', 'dest.3.d': 'Sun, Soul & Vibrant Festivities.',
      'dest.4.t': 'Mountain Weddings', 'dest.4.d': 'Intimate & Scenic Celebrations.',

      'beach.eyebrow': 'Beach Weddings',
      'beach.title': 'Sun, Sand & Unforgettable Vows',
      'beach.text': 'Exchange your vows beside the sea with breathtaking views, elegant décor and seamless planning. From intimate sunset ceremonies to luxurious coastal celebrations, we create beach weddings that feel relaxed, personal and unforgettable.',
      'beach.l1': 'Coastal venue scouting and permissions',
      'beach.l2': 'Weather and tide contingency planning',
      'beach.l3': 'Guest travel, stays and transfers',
      'beach.cta': 'Explore Beach Weddings',

      'gal.eyebrow': 'Real Weddings',
      'gal.title': 'Real Weddings, Real Emotions',
      'gal.sub': 'A glimpse into the beautiful celebrations we have had the honour to create.',
      'gal.c1': 'Indian ceremony', 'gal.c2': 'French château', 'gal.c3': 'Beach ceremony',
      'gal.c4': 'Spanish celebration', 'gal.c5': 'Mountain wedding',
      'gal.cta': 'View Full Gallery',

      'svc.eyebrow': 'Services',
      'svc.title': 'From Vision to Celebration',
      'svc.sub': 'End-to-end wedding planning, design and management with attention to every detail.',
      'svc.1': 'Full Wedding Planning', 'svc.2': 'Destination Weddings',
      'svc.3': 'Design & Décor', 'svc.4': 'Vendor Management',
      'svc.5': 'Guest Experience', 'svc.6': 'Multi-Cultural Weddings',
      'svc.7': 'Pre & Post Wedding Events',

      'exp.eyebrow': 'Indian Experience',
      'exp.title': 'Indian Traditions, Global Elegance',
      'exp.sub': 'Celebrations that bring cultures together, with every detail thoughtfully designed around your story.',
      'exp.cta': 'Enquire About This Style',
      'exp.t.palace': 'Royal Palace Weddings', 'exp.t.beach': 'Beach Weddings',
      'exp.t.mountain': 'Mountain Weddings', 'exp.t.city': 'City Weddings',
      'exp.t.farm': 'Farm Weddings', 'exp.t.chateau': 'French Château Weddings',
      'exp.t.fusion': 'Indian–French Fusion',

      'band.title': "Let's Plan Your Dream Wedding",
      'band.text': "Tell us your vision, and let's create a celebration that feels uniquely yours.",
      'band.cta': 'Get in Touch',

      'form.eyebrow': 'Enquiries',
      'form.title': 'Tell Us About Your Celebration',
      'form.sub': 'Share a few details and Paula will come back to you personally. There are no automated quotes here — every enquiry is read by a person.',
      'form.name': 'Full name *', 'form.email': 'Email *', 'form.phone': 'Phone',
      'form.dest': 'Preferred destination', 'form.date': 'Wedding date or timeframe',
      'form.datePh': 'e.g. May 2027', 'form.guests': 'Number of guests',
      'form.style': 'Wedding style', 'form.message': 'Message *',
      'form.consent': 'I agree that Eclesare by Paula may contact me about this enquiry. *',
      'form.send': 'Send Enquiry', 'form.wa': 'Send on WhatsApp',
      'form.choose': 'Please choose',
      'form.note': 'No server is connected yet: sending opens your own email app with the message prepared, so you can see exactly what is sent.',
      'form.noteWa': 'No server and no email address are configured yet, so the form hands your message to WhatsApp instead.',
      'err.name': 'Please enter your name.',
      'err.email': 'Please enter a valid email address.',
      'err.message': 'Please tell us a little about your wedding (at least 10 characters).',
      'err.consent': 'Please tick the box so we may reply.',
      'form.mailto': 'Your email app is opening with the enquiry prepared. Nothing has been sent to a server.',
      'form.waSent': 'WhatsApp is opening with your enquiry prepared.',
      'form.sent': 'Thank you — your enquiry has been sent. Paula will reply personally.',
      'form.failed': 'That did not go through. Please try again, or write to us directly.',
      'form.sending': 'Sending…',

      'foot.blurb': 'Bespoke wedding planning and design for couples marrying across cultures — in India, France, Spain and wherever your story takes you.',
      'foot.quick': 'Quick Links', 'foot.dest': 'Destinations', 'foot.contact': 'Contact',
      'foot.wa': 'WhatsApp', 'foot.love': 'Love Travels Everywhere',
      'foot.rights': 'All rights reserved.', 'foot.by': 'Design by',

      'bot.bubble': 'Hi! How can I help you plan your perfect wedding?',
      'bot.launch': 'Wedding Assistant', 'bot.title': 'Wedding Assistant',
      'bot.sub': 'Guided enquiry — not a live agent',
      'bot.ph': 'Type your answer…',
      'bot.greet': "Hello! I'm the Eclesare enquiry assistant. I'm not a live agent — I'll just collect a few details so Paula can reply properly. Where would you like to marry?",
      'bot.q.date': 'Lovely. Roughly when are you thinking?',
      'bot.q.guests': 'And about how many guests?',
      'bot.q.name': 'Last one — your name and the best email or phone for Paula to reach you?',
      'bot.done': "Thank you. Here's what I have:",
      'bot.hand': 'Send this to Paula now:',
      'bot.wa': 'Send on WhatsApp', 'bot.mail': 'Send by email', 'bot.form': 'Use the full form',
      'bot.restart': 'Start again',
      'bot.a.dest': ['India', 'France', 'Spain', 'Beach / coastal', 'Mountains', 'Not decided'],
      'bot.a.date': ['2027', '2028', 'Within a year', 'Not decided'],
      'bot.a.guests': ['Under 50', '50–150', '150–300', '300+'],
      'bot.l.dest': 'Destination', 'bot.l.date': 'Date', 'bot.l.guests': 'Guests', 'bot.l.contact': 'Contact'
    },

    fr: {
      'skip': 'Aller au contenu',
      'nav.home': 'Accueil', 'nav.about': 'À propos', 'nav.weddings': 'Mariages',
      'nav.destinations': 'Destinations', 'nav.gallery': 'Galerie',
      'nav.services': 'Services', 'nav.contact': 'Contact', 'nav.menu': 'Menu',
      'dd.w1': 'Mariages en palais', 'dd.w2': 'Mariages en château',
      'dd.w3': 'Mariages à la plage', 'dd.w4': 'Mariages en montagne',
      'dd.w5': 'Mariages en ville', 'dd.w6': 'Mariages à la ferme', 'dd.w7': 'Fusion indo-française',
      'dd.d1': 'Inde', 'dd.d2': 'France', 'dd.d3': 'Espagne', 'dd.d4': 'Italie',
      'dd.d5': 'Suisse', 'dd.d6': 'Grèce', 'dd.d7': 'Partout dans le monde',
      'cta.plan': 'Organiser votre mariage',
      'common.explore': 'Découvrir',

      'hero.1.eyebrow': 'Mariages royaux indiens',
      'hero.1.title': 'Une célébration sans frontières',
      'hero.1.text': 'Inde • France • Espagne • Partout dans le monde',
      'hero.1.cta': 'Organisons votre mariage',
      'hero.2.eyebrow': 'Mariages de luxe en France',
      'hero.2.title': 'La romance du château, discrètement parfaite',
      'hero.2.text': 'Domaines historiques, jardins à la française et longues soirées dorées.',
      'hero.2.cta': 'Découvrir les mariages français',
      'hero.3.eyebrow': 'Mariages de destination et de plage',
      'hero.3.title': 'Des vœux face à la mer',
      'hero.3.text': 'Lumière méditerranéenne, horizons ouverts et cérémonies sans hâte.',
      'hero.3.cta': 'Découvrir nos destinations',

      'about.eyebrow': 'À propos d’Eclesare',
      'about.title': 'Des mariages d’exception, au croisement des cultures',
      'about.p1': 'Chez Eclesare by Paula, nous croyons que chaque mariage raconte une histoire unique — un mélange d’émotions, de traditions et de rêves personnels. Passionnés par les célébrations indiennes et européennes, nous créons des mariages sur mesure en France, en Espagne, en Inde et partout dans le monde.',
      'about.p2': 'Des palais royaux aux châteaux français en passant par les célébrations du littoral méditerranéen, nous rapprochons les cultures par une organisation attentive, un design élégant et une attention personnelle.',
      'about.p3': 'Du choix du lieu et de la décoration aux voyages des invités, à l’hospitalité, aux cérémonies et à la coordination du jour J, nous gérons les détails pour que chaque couple profite pleinement de sa célébration.',
      'about.cta': 'Notre histoire',

      'dest.eyebrow': 'Destinations',
      'dest.title': 'Votre mariage, partout dans le monde.',
      'dest.sub': 'Des célébrations royales indiennes aux escapades romantiques en Europe, nous concevons des mariages dans des lieux extraordinaires.',
      'dest.1.t': 'Inde', 'dest.1.d': 'Traditions royales, histoires modernes.',
      'dest.2.t': 'France', 'dest.2.d': 'Châteaux et célébrations romantiques.',
      'dest.3.t': 'Espagne', 'dest.3.d': 'Soleil, âme et fêtes vibrantes.',
      'dest.4.t': 'Mariages en montagne', 'dest.4.d': 'Célébrations intimes et panoramiques.',

      'beach.eyebrow': 'Mariages à la plage',
      'beach.title': 'Soleil, sable et vœux inoubliables',
      'beach.text': 'Échangez vos vœux au bord de la mer, avec des vues à couper le souffle, une décoration élégante et une organisation sans faille. De la cérémonie intime au coucher du soleil aux célébrations côtières les plus raffinées, nous créons des mariages de plage détendus, personnels et inoubliables.',
      'beach.l1': 'Repérage des lieux et autorisations',
      'beach.l2': 'Plan B météo et marées',
      'beach.l3': 'Voyages, hébergements et transferts des invités',
      'beach.cta': 'Découvrir les mariages à la plage',

      'gal.eyebrow': 'Vrais mariages',
      'gal.title': 'De vrais mariages, de vraies émotions',
      'gal.sub': 'Un aperçu des belles célébrations que nous avons eu l’honneur de créer.',
      'gal.c1': 'Cérémonie indienne', 'gal.c2': 'Château français', 'gal.c3': 'Cérémonie de plage',
      'gal.c4': 'Célébration espagnole', 'gal.c5': 'Mariage en montagne',
      'gal.cta': 'Voir toute la galerie',

      'svc.eyebrow': 'Services',
      'svc.title': 'De la vision à la célébration',
      'svc.sub': 'Organisation, design et gestion de mariage de bout en bout, avec une attention portée à chaque détail.',
      'svc.1': 'Organisation complète', 'svc.2': 'Mariages de destination',
      'svc.3': 'Design et décoration', 'svc.4': 'Gestion des prestataires',
      'svc.5': 'Expérience des invités', 'svc.6': 'Mariages multiculturels',
      'svc.7': 'Événements avant et après',

      'exp.eyebrow': 'Expérience indienne',
      'exp.title': 'Traditions indiennes, élégance internationale',
      'exp.sub': 'Des célébrations qui rapprochent les cultures, pensées dans le moindre détail autour de votre histoire.',
      'exp.cta': 'Demander ce style',
      'exp.t.palace': 'Mariages en palais', 'exp.t.beach': 'Mariages à la plage',
      'exp.t.mountain': 'Mariages en montagne', 'exp.t.city': 'Mariages en ville',
      'exp.t.farm': 'Mariages à la ferme', 'exp.t.chateau': 'Mariages en château',
      'exp.t.fusion': 'Fusion indo-française',

      'band.title': 'Organisons le mariage dont vous rêvez',
      'band.text': 'Racontez-nous votre vision, et créons une célébration qui vous ressemble.',
      'band.cta': 'Nous contacter',

      'form.eyebrow': 'Demandes',
      'form.title': 'Parlez-nous de votre célébration',
      'form.sub': 'Donnez-nous quelques détails et Paula vous répondra personnellement. Aucun devis automatique ici — chaque demande est lue par une personne.',
      'form.name': 'Nom complet *', 'form.email': 'E-mail *', 'form.phone': 'Téléphone',
      'form.dest': 'Destination souhaitée', 'form.date': 'Date ou période du mariage',
      'form.datePh': 'ex. mai 2027', 'form.guests': 'Nombre d’invités',
      'form.style': 'Style de mariage', 'form.message': 'Message *',
      'form.consent': 'J’accepte qu’Eclesare by Paula me contacte au sujet de cette demande. *',
      'form.send': 'Envoyer la demande', 'form.wa': 'Envoyer sur WhatsApp',
      'form.choose': 'Veuillez choisir',
      'form.note': 'Aucun serveur n’est encore connecté : l’envoi ouvre votre application e-mail avec le message préparé, pour que vous voyiez exactement ce qui part.',
      'form.noteWa': 'Aucun serveur ni adresse e-mail n’est encore configuré : le formulaire transmet donc votre message via WhatsApp.',
      'err.name': 'Merci d’indiquer votre nom.',
      'err.email': 'Merci d’indiquer une adresse e-mail valide.',
      'err.message': 'Dites-nous quelques mots sur votre mariage (au moins 10 caractères).',
      'err.consent': 'Merci de cocher la case pour que nous puissions répondre.',
      'form.mailto': 'Votre application e-mail s’ouvre avec la demande préparée. Rien n’a été envoyé à un serveur.',
      'form.waSent': 'WhatsApp s’ouvre avec votre demande préparée.',
      'form.sent': 'Merci — votre demande a bien été envoyée. Paula vous répondra personnellement.',
      'form.failed': 'L’envoi a échoué. Merci de réessayer ou de nous écrire directement.',
      'form.sending': 'Envoi…',

      'foot.blurb': 'Organisation et design de mariages sur mesure pour les couples qui se marient entre les cultures — en Inde, en France, en Espagne et partout où votre histoire vous mène.',
      'foot.quick': 'Liens rapides', 'foot.dest': 'Destinations', 'foot.contact': 'Contact',
      'foot.wa': 'WhatsApp', 'foot.love': 'L’amour voyage partout',
      'foot.rights': 'Tous droits réservés.', 'foot.by': 'Conception par',

      'bot.bubble': 'Bonjour ! Comment puis-je vous aider à organiser votre mariage ?',
      'bot.launch': 'Assistant mariage', 'bot.title': 'Assistant mariage',
      'bot.sub': 'Demande guidée — pas un agent en direct',
      'bot.ph': 'Écrivez votre réponse…',
      'bot.greet': 'Bonjour ! Je suis l’assistant de demandes d’Eclesare. Je ne suis pas un agent en direct — je recueille simplement quelques détails pour que Paula puisse vous répondre. Où souhaitez-vous vous marier ?',
      'bot.q.date': 'Très bien. À quelle période pensez-vous ?',
      'bot.q.guests': 'Et environ combien d’invités ?',
      'bot.q.name': 'Dernière question — votre nom et le meilleur e-mail ou téléphone pour vous joindre ?',
      'bot.done': 'Merci. Voici ce que j’ai noté :',
      'bot.hand': 'Envoyez-le à Paula maintenant :',
      'bot.wa': 'Envoyer sur WhatsApp', 'bot.mail': 'Envoyer par e-mail', 'bot.form': 'Utiliser le formulaire',
      'bot.restart': 'Recommencer',
      'bot.a.dest': ['Inde', 'France', 'Espagne', 'Plage / littoral', 'Montagne', 'Pas encore décidé'],
      'bot.a.date': ['2027', '2028', 'Dans l’année', 'Pas encore décidé'],
      'bot.a.guests': ['Moins de 50', '50–150', '150–300', 'Plus de 300'],
      'bot.l.dest': 'Destination', 'bot.l.date': 'Date', 'bot.l.guests': 'Invités', 'bot.l.contact': 'Contact'
    },

    es: {
      'skip': 'Saltar al contenido',
      'nav.home': 'Inicio', 'nav.about': 'Sobre Paula', 'nav.weddings': 'Bodas',
      'nav.destinations': 'Destinos', 'nav.gallery': 'Galería',
      'nav.services': 'Servicios', 'nav.contact': 'Contacto', 'nav.menu': 'Menú',
      'dd.w1': 'Bodas en palacio', 'dd.w2': 'Bodas en château',
      'dd.w3': 'Bodas en la playa', 'dd.w4': 'Bodas en la montaña',
      'dd.w5': 'Bodas en la ciudad', 'dd.w6': 'Bodas en finca', 'dd.w7': 'Fusión indo-francesa',
      'dd.d1': 'India', 'dd.d2': 'Francia', 'dd.d3': 'España', 'dd.d4': 'Italia',
      'dd.d5': 'Suiza', 'dd.d6': 'Grecia', 'dd.d7': 'Todo el mundo',
      'cta.plan': 'Planifica tu boda',
      'common.explore': 'Descubrir',

      'hero.1.eyebrow': 'Bodas reales indias',
      'hero.1.title': 'Una celebración sin fronteras',
      'hero.1.text': 'India • Francia • España • Todo el mundo',
      'hero.1.cta': 'Planifica la boda de tus sueños',
      'hero.2.eyebrow': 'Bodas de lujo en Francia',
      'hero.2.title': 'El romance del château, en su punto justo',
      'hero.2.text': 'Fincas históricas, jardines clásicos y largas tardes doradas.',
      'hero.2.cta': 'Descubrir las bodas francesas',
      'hero.3.eyebrow': 'Bodas de destino y en la playa',
      'hero.3.title': 'Vuestro sí frente al mar',
      'hero.3.text': 'Luz mediterránea, horizontes abiertos y ceremonias sin prisa.',
      'hero.3.cta': 'Descubrir bodas de destino',

      'about.eyebrow': 'Sobre Eclesare',
      'about.title': 'Bodas extraordinarias entre culturas',
      'about.p1': 'En Eclesare by Paula creemos que cada boda cuenta una historia única: una mezcla preciosa de emociones, tradiciones y sueños personales. Con pasión por las celebraciones indias y europeas, creamos bodas a medida en Francia, España, India y destinos de todo el mundo.',
      'about.p2': 'Desde palacios reales y románticos châteaux franceses hasta celebraciones en la costa mediterránea, unimos culturas con una planificación cuidada, un diseño elegante y atención personal.',
      'about.p3': 'Desde la elección del espacio y la decoración hasta los viajes de los invitados, la hospitalidad, las ceremonias y la coordinación del día, nos ocupamos de los detalles para que cada pareja disfrute de su celebración.',
      'about.cta': 'Nuestra historia',

      'dest.eyebrow': 'Destinos',
      'dest.title': 'Vuestra boda, en cualquier rincón del mundo.',
      'dest.sub': 'De las celebraciones reales indias a las escapadas románticas europeas, diseñamos bodas en lugares extraordinarios.',
      'dest.1.t': 'India', 'dest.1.d': 'Tradiciones reales, historias modernas.',
      'dest.2.t': 'Francia', 'dest.2.d': 'Châteaux y celebraciones románticas.',
      'dest.3.t': 'España', 'dest.3.d': 'Sol, alma y fiesta.',
      'dest.4.t': 'Bodas en la montaña', 'dest.4.d': 'Celebraciones íntimas y con vistas.',

      'beach.eyebrow': 'Bodas en la playa',
      'beach.title': 'Sol, arena y un sí inolvidable',
      'beach.text': 'Daos el sí junto al mar, con vistas impresionantes, decoración elegante y una organización impecable. De la ceremonia íntima al atardecer a las celebraciones costeras más cuidadas, creamos bodas de playa relajadas, personales e inolvidables.',
      'beach.l1': 'Búsqueda de espacios y permisos en la costa',
      'beach.l2': 'Plan alternativo por tiempo y mareas',
      'beach.l3': 'Viajes, alojamiento y traslados de invitados',
      'beach.cta': 'Descubrir las bodas en la playa',

      'gal.eyebrow': 'Bodas reales',
      'gal.title': 'Bodas reales, emociones reales',
      'gal.sub': 'Un vistazo a las celebraciones que hemos tenido el honor de crear.',
      'gal.c1': 'Ceremonia india', 'gal.c2': 'Château francés', 'gal.c3': 'Ceremonia en la playa',
      'gal.c4': 'Celebración española', 'gal.c5': 'Boda en la montaña',
      'gal.cta': 'Ver la galería completa',

      'svc.eyebrow': 'Servicios',
      'svc.title': 'De la idea a la celebración',
      'svc.sub': 'Planificación, diseño y gestión integral de bodas, cuidando cada detalle.',
      'svc.1': 'Planificación integral', 'svc.2': 'Bodas de destino',
      'svc.3': 'Diseño y decoración', 'svc.4': 'Gestión de proveedores',
      'svc.5': 'Experiencia de invitados', 'svc.6': 'Bodas multiculturales',
      'svc.7': 'Eventos pre y post boda',

      'exp.eyebrow': 'Experiencia india',
      'exp.title': 'Tradición india, elegancia internacional',
      'exp.sub': 'Celebraciones que unen culturas, con cada detalle pensado alrededor de vuestra historia.',
      'exp.cta': 'Consultar este estilo',
      'exp.t.palace': 'Bodas en palacio', 'exp.t.beach': 'Bodas en la playa',
      'exp.t.mountain': 'Bodas en la montaña', 'exp.t.city': 'Bodas en la ciudad',
      'exp.t.farm': 'Bodas en finca', 'exp.t.chateau': 'Bodas en château',
      'exp.t.fusion': 'Fusión indo-francesa',

      'band.title': 'Planifiquemos la boda de vuestros sueños',
      'band.text': 'Contadnos vuestra visión y creemos una celebración que sea solo vuestra.',
      'band.cta': 'Hablemos',

      'form.eyebrow': 'Consultas',
      'form.title': 'Contadnos cómo imagináis vuestra boda',
      'form.sub': 'Dadnos algunos detalles y Paula os responderá personalmente. Aquí no hay presupuestos automáticos: cada consulta la lee una persona.',
      'form.name': 'Nombre completo *', 'form.email': 'Email *', 'form.phone': 'Teléfono',
      'form.dest': 'Destino preferido', 'form.date': 'Fecha o época de la boda',
      'form.datePh': 'p. ej. mayo de 2027', 'form.guests': 'Número de invitados',
      'form.style': 'Estilo de boda', 'form.message': 'Mensaje *',
      'form.consent': 'Acepto que Eclesare by Paula me contacte sobre esta consulta. *',
      'form.send': 'Enviar consulta', 'form.wa': 'Enviar por WhatsApp',
      'form.choose': 'Elige una opción',
      'form.note': 'Todavía no hay servidor conectado: al enviar se abre tu aplicación de correo con el mensaje preparado, para que veas exactamente qué se envía.',
      'form.noteWa': 'Todavía no hay servidor ni dirección de correo configurados, así que el formulario entrega tu mensaje por WhatsApp.',
      'err.name': 'Escribe tu nombre, por favor.',
      'err.email': 'Escribe un email válido, por favor.',
      'err.message': 'Cuéntanos algo sobre vuestra boda (al menos 10 caracteres).',
      'err.consent': 'Marca la casilla para que podamos responder.',
      'form.mailto': 'Se está abriendo tu aplicación de correo con la consulta preparada. No se ha enviado nada a ningún servidor.',
      'form.waSent': 'Se está abriendo WhatsApp con tu consulta preparada.',
      'form.sent': 'Gracias: tu consulta se ha enviado. Paula te responderá personalmente.',
      'form.failed': 'No se ha podido enviar. Inténtalo de nuevo o escríbenos directamente.',
      'form.sending': 'Enviando…',

      'foot.blurb': 'Planificación y diseño de bodas a medida para parejas que se casan entre culturas: en India, Francia, España y allí donde os lleve vuestra historia.',
      'foot.quick': 'Enlaces', 'foot.dest': 'Destinos', 'foot.contact': 'Contacto',
      'foot.wa': 'WhatsApp', 'foot.love': 'El amor viaja a todas partes',
      'foot.rights': 'Todos los derechos reservados.', 'foot.by': 'Diseño de',

      'bot.bubble': '¡Hola! ¿Te ayudo a planificar vuestra boda?',
      'bot.launch': 'Asistente de bodas', 'bot.title': 'Asistente de bodas',
      'bot.sub': 'Consulta guiada, no un agente en directo',
      'bot.ph': 'Escribe tu respuesta…',
      'bot.greet': '¡Hola! Soy el asistente de consultas de Eclesare. No soy un agente en directo: solo recojo algunos datos para que Paula pueda responderos bien. ¿Dónde os gustaría casaros?',
      'bot.q.date': 'Perfecto. ¿Para qué fecha, más o menos?',
      'bot.q.guests': '¿Y cuántos invitados, aproximadamente?',
      'bot.q.name': 'Última pregunta: tu nombre y el mejor email o teléfono para que Paula te escriba.',
      'bot.done': 'Gracias. Esto es lo que tengo:',
      'bot.hand': 'Envíaselo a Paula ahora:',
      'bot.wa': 'Enviar por WhatsApp', 'bot.mail': 'Enviar por email', 'bot.form': 'Usar el formulario',
      'bot.restart': 'Empezar de nuevo',
      'bot.a.dest': ['India', 'Francia', 'España', 'Playa / costa', 'Montaña', 'Sin decidir'],
      'bot.a.date': ['2027', '2028', 'Dentro de un año', 'Sin decidir'],
      'bot.a.guests': ['Menos de 50', '50–150', '150–300', 'Más de 300'],
      'bot.l.dest': 'Destino', 'bot.l.date': 'Fecha', 'bot.l.guests': 'Invitados', 'bot.l.contact': 'Contacto'
    }
  };

  /* ═════ EXPERIENCES — the seven wedding styles ══════════════════════ */
  var EXP = {
    palace: {
      img: 'assets/images/exp-palace.jpg',
      alt: 'Indian palace wedding ceremony at golden hour',
      en: { t: 'A royal palace wedding with European floral styling',
        p: 'Courtyards, domes and mirror work, softened with the pale garden palette of a European summer. Ceremonies keep their full ritual while the design stays calm and uncluttered.',
        l: ['Palace and heritage-hotel liaison', 'Baraat, mandap and ritual choreography', 'Three to five days of events, planned as one'] },
      fr: { t: 'Un mariage en palais, avec un art floral européen',
        p: 'Cours intérieures, coupoles et miroiterie, adoucis par la palette claire d’un jardin européen en été. Les cérémonies gardent tout leur rituel, le design reste calme et épuré.',
        l: ['Relations avec les palais et hôtels patrimoniaux', 'Chorégraphie du baraat, du mandap et des rituels', 'Trois à cinq jours d’événements, pensés comme un seul'] },
      es: { t: 'Una boda en palacio con estilismo floral europeo',
        p: 'Patios, cúpulas y espejos, suavizados con la paleta clara de un jardín europeo en verano. Las ceremonias conservan todo su ritual y el diseño se mantiene sereno.',
        l: ['Gestión con palacios y hoteles históricos', 'Coreografía de baraat, mandap y rituales', 'De tres a cinco días de eventos, planificados como uno'] }
    },
    beach: {
      img: 'assets/images/exp-beach.jpg',
      alt: 'Coastal ceremony with a white floral arch at sunset',
      en: { t: 'A Mediterranean beach wedding with Indian rituals',
        p: 'A sunset ceremony on the sand, the haldi the morning before, the sangeet under strung lights. Sea air is hard on flowers and hair — the schedule is built around it, not against it.',
        l: ['Beach permissions and private-cove access', 'Shaded ceremony options and tide timing', 'Barefoot-friendly aisle and seating design'] },
      fr: { t: 'Un mariage de plage méditerranéen aux rituels indiens',
        p: 'Une cérémonie au coucher du soleil sur le sable, le haldi au matin, le sangeet sous les guirlandes. L’air marin est exigeant pour les fleurs et les coiffures : le planning est conçu avec cela en tête.',
        l: ['Autorisations de plage et accès aux criques privées', 'Options ombragées et horaires selon les marées', 'Allée et assises pensées pour les pieds nus'] },
      es: { t: 'Una boda mediterránea en la playa con rituales indios',
        p: 'Ceremonia al atardecer sobre la arena, haldi por la mañana y sangeet bajo las luces. El aire marino castiga flores y peinados: el horario se diseña contando con ello.',
        l: ['Permisos de playa y acceso a calas privadas', 'Opciones con sombra y horarios según la marea', 'Pasillo y asientos pensados para ir descalzos'] }
    },
    mountain: {
      img: 'assets/images/exp-mountain.jpg',
      alt: 'Lakeside mountain ceremony beneath a floral arch',
      en: { t: 'A mountain wedding with intimate traditional ceremonies',
        p: 'Smaller numbers, bigger views. Lakeside or alpine ceremonies where the setting does most of the work and the florals stay restrained.',
        l: ['Altitude, access and transfer planning', 'Indoor alternative held in reserve', 'Guest comfort: blankets, heaters, timing'] },
      fr: { t: 'Un mariage en montagne, cérémonies intimes et traditionnelles',
        p: 'Moins d’invités, plus de panorama. Des cérémonies au bord du lac ou en altitude, où le décor fait l’essentiel et les fleurs restent sobres.',
        l: ['Altitude, accès et transferts', 'Solution intérieure tenue en réserve', 'Confort des invités : plaids, chauffage, horaires'] },
      es: { t: 'Una boda en la montaña con ceremonias íntimas',
        p: 'Menos invitados, más paisaje. Ceremonias junto al lago o en altura, donde el entorno hace casi todo y las flores se mantienen sobrias.',
        l: ['Altitud, accesos y traslados', 'Alternativa de interior siempre reservada', 'Confort del invitado: mantas, estufas, horarios'] }
    },
    city: {
      img: 'assets/images/exp-city.jpg',
      alt: 'Wedding stationery and design details — photograph by Paula',
      en: { t: 'A modern city wedding in Paris or Barcelona',
        p: 'A townhouse, a rooftop, a restaurant taken over for the night. City weddings reward precise timing and a guest list that moves easily between venues.',
        l: ['Venue takeover and licensing', 'Guest transport across the city', 'Late-night reception planning'] },
      fr: { t: 'Un mariage urbain moderne à Paris ou à Barcelone',
        p: 'Un hôtel particulier, un rooftop, un restaurant privatisé pour la soirée. Le mariage en ville récompense une minutie d’horaires et des invités faciles à déplacer.',
        l: ['Privatisation des lieux et autorisations', 'Transport des invités dans la ville', 'Organisation de la soirée tardive'] },
      es: { t: 'Una boda urbana moderna en París o Barcelona',
        p: 'Una casa señorial, una azotea, un restaurante reservado entero para la noche. La boda en ciudad premia la precisión horaria y la facilidad de mover a los invitados.',
        l: ['Privatización de espacios y licencias', 'Transporte de invitados por la ciudad', 'Planificación de la fiesta hasta tarde'] }
    },
    farm: {
      img: 'assets/images/exp-farm.jpg',
      alt: 'Long wedding table laid outdoors — photograph by Paula',
      en: { t: 'A countryside farm wedding with elegant outdoor dining',
        p: 'Long tables under trees, local produce, and a looseness that takes more planning than it looks. Rustic settings still need power, shade, and a wet-weather plan.',
        l: ['Marquee, power and catering infrastructure', 'Local producers and seasonal menus', 'Wet-weather plan drawn up from day one'] },
      fr: { t: 'Un mariage à la ferme, avec un dîner en plein air élégant',
        p: 'De longues tables sous les arbres, des produits locaux et une simplicité qui demande plus d’organisation qu’il n’y paraît. Le rustique exige quand même électricité, ombre et plan B.',
        l: ['Chapiteau, électricité et logistique traiteur', 'Producteurs locaux et menus de saison', 'Plan B météo établi dès le premier jour'] },
      es: { t: 'Una boda en finca con una cena al aire libre elegante',
        p: 'Mesas largas bajo los árboles, producto local y una naturalidad que exige más planificación de la que parece. Lo rústico también necesita luz, sombra y plan B.',
        l: ['Carpa, electricidad e infraestructura de catering', 'Productores locales y menús de temporada', 'Plan B por lluvia desde el primer día'] }
    },
    chateau: {
      img: 'assets/images/exp-chateau.jpg',
      alt: 'French château at sunset',
      en: { t: 'A traditional varmala ceremony in a French château garden',
        p: 'The mandap set against formal hedging, the baraat down a gravel drive, dinner in the orangery. French estates are generous hosts once the choreography is agreed in advance.',
        l: ['Château hire, curfews and noise limits', 'Indian catering brought into a French kitchen', 'Accommodation on the estate for close family'] },
      fr: { t: 'Une cérémonie varmala traditionnelle dans un jardin de château',
        p: 'Le mandap adossé aux buis taillés, le baraat sur l’allée de gravier, le dîner à l’orangerie. Les domaines français sont généreux dès que la chorégraphie est convenue à l’avance.',
        l: ['Location, couvre-feu et limites sonores', 'Traiteur indien dans une cuisine française', 'Hébergement sur le domaine pour les proches'] },
      es: { t: 'Una ceremonia varmala tradicional en el jardín de un château',
        p: 'El mandap frente a los setos recortados, el baraat por el camino de grava, la cena en el invernadero. Las fincas francesas son anfitrionas generosas si la coreografía se acuerda con tiempo.',
        l: ['Alquiler, horarios y límites de ruido', 'Catering indio en una cocina francesa', 'Alojamiento en la finca para la familia cercana'] }
    },
    fusion: {
      img: 'assets/images/exp-fusion.jpg',
      alt: 'Indian wedding ceremony with garlands and marigolds',
      en: { t: 'A French-inspired ceremony followed by an Indian sangeet',
        p: 'Two cultures given equal weight, in the right order. A quiet European ceremony in the afternoon, then the evening belongs to the dhol, the dancing and the food.',
        l: ['Two ceremonies, one coherent design language', 'Bilingual or trilingual running order', 'Briefing notes so every guest knows what happens next'] },
      fr: { t: 'Une cérémonie à la française suivie d’un sangeet indien',
        p: 'Deux cultures à parts égales, dans le bon ordre. Une cérémonie européenne paisible l’après-midi, puis la soirée appartient au dhol, à la danse et à la table.',
        l: ['Deux cérémonies, un seul langage de design', 'Déroulé bilingue ou trilingue', 'Notes aux invités pour que chacun suive'] },
      es: { t: 'Una ceremonia de inspiración francesa y después un sangeet indio',
        p: 'Dos culturas con el mismo peso y en el orden correcto. Ceremonia europea tranquila por la tarde y, por la noche, el dhol, el baile y la comida.',
        l: ['Dos ceremonias, un mismo lenguaje de diseño', 'Programa bilingüe o trilingüe', 'Notas para que cada invitado sepa qué viene'] }
    }
  };

  /* ═════ runtime ═════════════════════════════════════════════════════ */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HTML_LANG = { en: 'en', fr: 'fr', es: 'es' };
  var lang = 'en';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function t(key) {
    var d = I18N[lang] || I18N.en;
    return (key in d) ? d[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  }

  /* localStorage throws in a few browser modes; the site must not care. */
  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { /* private window, blocked site data — ignore */ }
    return null;
  }

  /* ── contact details, written in from CONFIG ──────────────────────── */
  function applyConfig() {
    var tel = CONFIG.phone.replace(/[^\d+]/g, '');

    $$('[data-contact-phone]').forEach(function (el) {
      if (!tel) { el.remove(); return; }
      el.href = 'tel:' + tel;
      if (!el.querySelector('svg')) el.textContent = CONFIG.phoneDisplay || tel;
    });

    $$('[data-contact-email]').forEach(function (el) {
      if (!CONFIG.email) { var li = el.closest('li'); (li || el).remove(); return; }
      el.href = 'mailto:' + CONFIG.email;
      el.textContent = CONFIG.email;
    });

    $$('[data-contact-wa]').forEach(function (el) {
      if (!CONFIG.whatsapp) { el.remove(); return; }
      el.href = waLink('');
    });

    $$('[data-contact-place]').forEach(function (el) {
      if (!CONFIG.address) { var li = el.closest('li'); (li || el).remove(); return; }
      if (CONFIG.mapsUrl) {
        var a = document.createElement('a');
        a.href = CONFIG.mapsUrl; a.target = '_blank'; a.rel = 'noopener';
        a.textContent = CONFIG.address;
        el.replaceWith(a);
      } else {
        el.textContent = CONFIG.address;
      }
    });

    $$('[data-social]').forEach(function (el) {
      var url = CONFIG[el.getAttribute('data-social')];
      if (!url) { el.remove(); return; }
      el.href = url; el.target = '_blank'; el.rel = 'noopener';
    });

    var y = $('[data-year]');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function waLink(body) {
    var base = 'https://wa.me/' + CONFIG.whatsapp;
    var text = body || 'Hello Eclesare, I would like to enquire about planning our wedding.';
    return base + '?text=' + encodeURIComponent(text);
  }

  /* ── language ─────────────────────────────────────────────────────── */
  function setLang(code, save) {
    if (!I18N[code]) code = 'en';
    lang = code;
    document.documentElement.lang = HTML_LANG[code];

    $$('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    $$('[data-i18n-ph]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });

    var label = $('[data-lang-label]');
    if (label) label.textContent = code.toUpperCase();
    $$('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-current', b.getAttribute('data-set-lang') === code ? 'true' : 'false');
    });

    var note = $('.form-note');
    if (note) note.textContent = CONFIG.email ? t('form.note') : t('form.noteWa');

    showExp(currentExp, true);
    resetChat();
    if (save !== false) store('eclesare-lang', code);
  }

  /* ── hero slider ──────────────────────────────────────────────────── */
  var slides = $$('[data-slide]');
  var dots = $$('[data-dot]');
  var index = 0, timer = null, paused = false;

  function show(n) {
    if (!slides.length) return;
    index = ((n % slides.length) + slides.length) % slides.length;
    slides.forEach(function (s, i) {
      var on = i === index;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', on ? 'false' : 'true');
      $$('a', s).forEach(function (a) {
        if (on) a.removeAttribute('tabindex'); else a.setAttribute('tabindex', '-1');
      });
    });
    dots.forEach(function (d, i) { d.setAttribute('aria-selected', i === index ? 'true' : 'false'); });
  }

  function play() {
    stop();
    if (reduce || paused) return;
    timer = window.setInterval(function () { show(index + 1); }, CONFIG.slideMs);
  }
  function stop() { if (timer) { window.clearInterval(timer); timer = null; } }

  function setPaused(value) {
    paused = value;
    var btn = $('[data-pause]');
    if (btn) {
      btn.setAttribute('aria-label', value ? 'Play slideshow' : 'Pause slideshow');
      var p = $('.i-pause', btn), q = $('.i-play', btn);
      if (p) p.hidden = value;
      if (q) q.hidden = !value;
    }
    if (value) stop(); else play();
  }

  function initSlider() {
    var hero = $('.hero');
    if (!hero) return;
    show(0);
    play();

    /* user interaction pauses autoplay, as asked */
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', function () { if (!paused) play(); });
    hero.addEventListener('focusin', stop);
    hero.addEventListener('focusout', function () { if (!paused) play(); });

    var x0 = null;
    hero.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; stop(); }, { passive: true });
    hero.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 48) show(index + (dx < 0 ? 1 : -1));
      if (!paused) play();
      x0 = null;
    }, { passive: true });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else if (!paused) play();
    });
  }

  /* ── scroll reveal ────────────────────────────────────────────────── */
  function initReveal() {
    var nodes = $$('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ── header state + back to top ───────────────────────────────────── */
  function syncScroll() {
    var y = window.scrollY;
    var head = $('#siteHead');
    if (head) head.classList.toggle('is-stuck', y > 12);
    var top = $('[data-to-top]');
    if (top) top.classList.toggle('is-off', y <= 600);

    var ids = ['top', 'about', 'destinations', 'beach', 'gallery', 'services', 'experience', 'contact'];
    var active = 'top';
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) active = id;
    });
    $$('.nav-link').forEach(function (a) {
      var href = a.getAttribute('href');
      a.classList.toggle('is-current', href === '#' + active);
    });
  }

  /* ── menus ────────────────────────────────────────────────────────── */
  function closeMenus(except) {
    $$('[data-dd-menu]').forEach(function (m) {
      if (m === except) return;
      m.classList.remove('is-open');
      var btn = $('[data-dd="' + m.getAttribute('data-dd-menu') + '"]');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  function openDrawer(open) {
    var drawer = $('#drawer'), scrim = $('.scrim'), burger = $('.burger');
    if (!drawer) return;
    if (open) { drawer.hidden = false; if (scrim) scrim.hidden = false; }
    window.requestAnimationFrame(function () {
      document.body.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open) {
      window.setTimeout(function () {
        if (document.body.classList.contains('menu-open')) return;
        drawer.hidden = true;
        if (scrim) scrim.hidden = true;
      }, 400);
    }
  }

  /* ── Indian Experience ────────────────────────────────────────────── */
  var currentExp = 'palace';

  function showExp(key, silent) {
    if (!EXP[key]) key = 'palace';
    currentExp = key;
    var data = EXP[key];
    var copy = data[lang] || data.en;
    var panel = $('#expPanel');
    if (!panel) return;

    var img = $('[data-exp-img]', panel);
    var title = $('[data-exp-title]', panel);
    var text = $('[data-exp-text]', panel);
    var list = $('[data-exp-list]', panel);

    var paint = function () {
      if (img) { img.src = data.img; img.alt = data.alt; }
      if (title) title.textContent = copy.t;
      if (text) text.textContent = copy.p;
      if (list) {
        list.innerHTML = '';
        copy.l.forEach(function (item) {
          var li = document.createElement('li');
          li.textContent = item;
          list.appendChild(li);
        });
      }
      panel.classList.remove('exp-fade');
    };

    if (silent || reduce) { paint(); } else {
      panel.classList.add('exp-fade');
      window.setTimeout(paint, 160);
    }

    $$('[data-exp]').forEach(function (b) {
      var on = b.getAttribute('data-exp') === key;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
  }

  /* ── gallery lightbox ─────────────────────────────────────────────── */
  var lbIndex = 0;
  function tiles() { return $$('[data-tile]'); }

  function openLb(i) {
    var all = tiles();
    if (!all.length) return;
    lbIndex = ((i % all.length) + all.length) % all.length;
    var src = $('img', all[lbIndex]);
    var box = $('#lightbox');
    var img = $('img', box);
    img.src = src.src;
    img.alt = src.alt;
    $('[data-lb-count]', box).textContent = (lbIndex + 1) + ' / ' + all.length;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    $('[data-lb-close]', box).focus();
  }
  function closeLb() {
    $('#lightbox').hidden = true;
    if (!document.body.classList.contains('menu-open')) document.body.style.overflow = '';
  }

  /* ── guided enquiry assistant ─────────────────────────────────────── */
  var STEPS = ['dest', 'date', 'guests', 'contact'];
  var answers = {};
  var step = 0;

  function log() { return $('[data-chat-log]'); }
  function quickBox() { return $('[data-chat-quick]'); }

  function say(from, text) {
    var box = log();
    if (!box) return;
    var p = document.createElement('p');
    p.className = 'msg msg--' + from;
    p.textContent = text;
    box.appendChild(p);
    box.scrollTop = box.scrollHeight;
  }

  function thinking(then) {
    var box = log();
    if (!box) { then(); return; }
    var d = document.createElement('div');
    d.className = 'msg msg--bot dots3';
    d.innerHTML = '<i></i><i></i><i></i>';
    box.appendChild(d);
    box.scrollTop = box.scrollHeight;
    window.setTimeout(function () {
      if (d.parentNode) d.parentNode.removeChild(d);
      then();
    }, reduce ? 0 : 520);
  }

  function quick(options, handler) {
    var box = quickBox();
    if (!box) return;
    box.innerHTML = '';
    (options || []).forEach(function (label) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.addEventListener('click', function () { handler(label); });
      box.appendChild(b);
    });
  }

  function askStep() {
    var key = STEPS[step];
    if (key === 'dest') { say('bot', t('bot.greet')); quick(t('bot.a.dest'), answer); }
    if (key === 'date') { say('bot', t('bot.q.date')); quick(t('bot.a.date'), answer); }
    if (key === 'guests') { say('bot', t('bot.q.guests')); quick(t('bot.a.guests'), answer); }
    if (key === 'contact') { say('bot', t('bot.q.name')); quick([], answer); }
  }

  function summary() {
    return [
      t('bot.l.dest') + ': ' + (answers.dest || '—'),
      t('bot.l.date') + ': ' + (answers.date || '—'),
      t('bot.l.guests') + ': ' + (answers.guests || '—'),
      t('bot.l.contact') + ': ' + (answers.contact || '—')
    ].join('\n');
  }

  function finish() {
    say('bot', t('bot.done'));
    say('bot', summary());
    say('bot', t('bot.hand'));

    var box = quickBox();
    box.innerHTML = '';

    if (CONFIG.whatsapp) {
      var w = document.createElement('button');
      w.type = 'button';
      w.textContent = t('bot.wa');
      w.addEventListener('click', function () {
        window.open(waLink('Eclesare enquiry\n' + summary()), '_blank', 'noopener');
      });
      box.appendChild(w);
    }
    if (CONFIG.email) {
      var m = document.createElement('button');
      m.type = 'button';
      m.textContent = t('bot.mail');
      m.addEventListener('click', function () {
        window.location.href = 'mailto:' + CONFIG.email +
          '?subject=' + encodeURIComponent('Eclesare enquiry') +
          '&body=' + encodeURIComponent(summary());
      });
      box.appendChild(m);
    }
    var f = document.createElement('button');
    f.type = 'button';
    f.textContent = t('bot.form');
    f.addEventListener('click', function () {
      prefillForm();
      toggleChat(false);
      var c = document.getElementById('contact');
      if (c) c.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
    box.appendChild(f);

    var r = document.createElement('button');
    r.type = 'button';
    r.textContent = t('bot.restart');
    r.addEventListener('click', resetChat);
    box.appendChild(r);
  }

  function answer(value) {
    var text = String(value).trim();
    if (!text) return;
    say('me', text);
    answers[STEPS[step]] = text;
    step += 1;
    if (step < STEPS.length) thinking(askStep); else thinking(finish);
  }

  function resetChat() {
    answers = {}; step = 0;
    var box = log();
    if (box) box.innerHTML = '';
    quick([], answer);
    askStep();
  }

  function prefillForm() {
    var set = function (sel, val) { var el = $(sel); if (el && val) el.value = val; };
    set('#f-date', answers.date);
    var dest = $('#f-dest');
    if (dest && answers.dest) {
      $$('option', dest).forEach(function (o) {
        if (o.textContent.trim().toLowerCase() === answers.dest.toLowerCase()) dest.value = o.value;
      });
    }
    var g = (answers.guests || '').match(/\d+/);
    if (g) set('#f-guests', g[0]);
    var msg = $('#f-msg');
    if (msg && !msg.value) msg.value = summary();
    if (answers.contact) {
      var email = answers.contact.match(/[^\s@]+@[^\s@]+\.[^\s@]+/);
      if (email) set('#f-email', email[0]);
      var name = answers.contact.replace(/[^\s@]+@[^\s@]+\.[^\s@]+/, '').replace(/[\d+()\-]{6,}/, '').trim();
      if (name) set('#f-name', name.replace(/[,;]+$/, ''));
      var phone = answers.contact.match(/[\d+][\d\s()\-]{6,}/);
      if (phone) set('#f-phone', phone[0].trim());
    }
  }

  function toggleChat(open) {
    var panel = $('#chat'), launcher = $('[data-chat-open]'), bubble = $('[data-bubble]');
    if (!panel || !launcher) return;
    panel.hidden = !open;
    launcher.classList.toggle('is-off', open);
    launcher.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (bubble) bubble.hidden = true;
    if (open) {
      var input = $('input', panel);
      if (input) window.setTimeout(function () { input.focus(); }, 180);
    } else {
      launcher.focus();
    }
  }

  /* ── enquiry form ─────────────────────────────────────────────────── */
  var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  function fieldError(input, message) {
    var wrap = input.closest('.field');
    if (!wrap) return;
    var old = $('.field-error', wrap);
    if (old) old.remove();
    input.removeAttribute('aria-describedby');
    if (!message) { input.removeAttribute('aria-invalid'); return; }
    input.setAttribute('aria-invalid', 'true');
    var p = document.createElement('p');
    p.className = 'field-error';
    p.id = input.id + '-err';
    p.textContent = message;
    input.setAttribute('aria-describedby', p.id);
    wrap.appendChild(p);
  }

  function collect(form) {
    var out = [];
    var map = {
      name: t('form.name'), email: t('form.email'), phone: t('form.phone'),
      destination: t('form.dest'), date: t('form.date'), guests: t('form.guests'),
      style: t('form.style')
    };
    Object.keys(map).forEach(function (n) {
      var el = form.querySelector('[name="' + n + '"]');
      if (el && el.value) out.push(map[n].replace(' *', '') + ': ' + el.value);
    });
    out.push('', form.querySelector('[name="message"]').value);
    return out.join('\n');
  }

  function submitForm(form) {
    if (form.querySelector('[name="company"]').value) return;   // honeypot

    var name = $('#f-name'), email = $('#f-email'), msg = $('#f-msg'), consent = $('#f-consent');
    var first = null;

    fieldError(name, name.value.trim().length < 2 ? ((first = first || name), t('err.name')) : '');
    fieldError(email, !EMAIL_RE.test(email.value.trim()) ? ((first = first || email), t('err.email')) : '');
    fieldError(msg, msg.value.trim().length < 10 ? ((first = first || msg), t('err.message')) : '');
    fieldError(consent, !consent.checked ? ((first = first || consent), t('err.consent')) : '');

    var status = $('[data-form-status]', form);
    if (first) { first.focus(); status.className = 'form-status'; status.textContent = ''; return; }

    var body = collect(form);

    if (CONFIG.formEndpoint) {
      status.className = 'form-status pending';
      status.textContent = t('form.sending');
      fetch(CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: name.value, email: email.value, message: body })
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        status.className = 'form-status ok';
        status.textContent = t('form.sent');
        form.reset();
      }).catch(function () {
        status.className = 'form-status';
        status.textContent = t('form.failed');
      });
      return;
    }

    /* No endpoint: hand off honestly rather than pretend an enquiry was sent. */
    status.className = 'form-status pending';
    if (CONFIG.email) {
      status.textContent = t('form.mailto');
      window.location.href = 'mailto:' + CONFIG.email +
        '?subject=' + encodeURIComponent('Eclesare — ' + name.value) +
        '&body=' + encodeURIComponent(body);
    } else if (CONFIG.whatsapp) {
      status.textContent = t('form.waSent');
      window.open(waLink('Eclesare enquiry\n' + body), '_blank', 'noopener');
    }
  }

  /* ── delegated events ─────────────────────────────────────────────── */
  document.addEventListener('click', function (e) {
    var el;

    if ((el = e.target.closest('[data-set-lang]'))) {
      setLang(el.getAttribute('data-set-lang'));
      closeMenus();
      if (document.body.classList.contains('menu-open')) openDrawer(false);
      return;
    }

    if ((el = e.target.closest('[data-dd]'))) {
      e.stopPropagation();
      var menu = $('[data-dd-menu="' + el.getAttribute('data-dd') + '"]');
      if (menu) {
        var open = !menu.classList.contains('is-open');
        closeMenus(menu);
        menu.classList.toggle('is-open', open);
        el.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
      return;
    }

    if (e.target.closest('[data-menu-open]')) { openDrawer(true); return; }
    if (e.target.closest('[data-menu-close]')) { openDrawer(false); return; }

    if ((el = e.target.closest('[data-dot]'))) { show(+el.getAttribute('data-dot')); if (!paused) play(); return; }
    if (e.target.closest('[data-prev]')) { show(index - 1); if (!paused) play(); return; }
    if (e.target.closest('[data-next]')) { show(index + 1); if (!paused) play(); return; }
    if (e.target.closest('[data-pause]')) { setPaused(!paused); return; }

    if ((el = e.target.closest('[data-exp]'))) { showExp(el.getAttribute('data-exp')); return; }
    if ((el = e.target.closest('[data-exp-jump]'))) { showExp(el.getAttribute('data-exp-jump')); /* fall through to the anchor */ }

    if ((el = e.target.closest('.tile-btn'))) { openLb(tiles().indexOf(el.closest('[data-tile]'))); return; }
    if (e.target.closest('[data-lb-close]')) { closeLb(); return; }
    if (e.target.closest('[data-lb-prev]')) { openLb(lbIndex - 1); return; }
    if (e.target.closest('[data-lb-next]')) { openLb(lbIndex + 1); return; }
    if (e.target.id === 'lightbox') { closeLb(); return; }

    if (e.target.closest('[data-chat-open]')) { toggleChat(true); return; }
    if (e.target.closest('[data-chat-close]')) { toggleChat(false); return; }
    if ((el = e.target.closest('[data-bubble-close]'))) { el.closest('[data-bubble]').hidden = true; return; }

    if (e.target.closest('[data-to-top]')) {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      return;
    }

    if (!e.target.closest('.has-menu')) closeMenus();

    var a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href').length > 1) {
      var dest = document.querySelector(a.getAttribute('href'));
      if (dest) {
        e.preventDefault();
        if (document.body.classList.contains('menu-open')) openDrawer(false);
        closeMenus();
        var head = $('#siteHead');
        var off = head ? head.offsetHeight - 1 : 0;
        window.scrollTo({
          top: dest.getBoundingClientRect().top + window.scrollY - off,
          behavior: reduce ? 'auto' : 'smooth'
        });
      }
    }
  });

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (form.id === 'enquiry') { e.preventDefault(); submitForm(form); return; }
    if (form.hasAttribute('data-chat-form')) {
      e.preventDefault();
      var input = $('input', form);
      var v = input.value.trim();
      if (!v) return;
      input.value = '';
      answer(v);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var box = $('#lightbox');
      if (box && !box.hidden) { closeLb(); return; }
      if (document.body.classList.contains('menu-open')) { openDrawer(false); return; }
      var chat = $('#chat');
      if (chat && !chat.hidden) { toggleChat(false); return; }
      closeMenus();
      return;
    }
    var lb = $('#lightbox');
    if (lb && !lb.hidden) {
      if (e.key === 'ArrowRight') openLb(lbIndex + 1);
      if (e.key === 'ArrowLeft') openLb(lbIndex - 1);
    }
  });

  window.addEventListener('scroll', syncScroll, { passive: true });

  /* ── boot ─────────────────────────────────────────────────────────── */
  /* The welcome bubble says hello once, then gets out of the way rather than
     sitting permanently on top of the page. */
  window.setTimeout(function () {
    var b = $('[data-bubble]');
    if (b) b.hidden = true;
  }, 9000);

  applyConfig();
  var saved = store('eclesare-lang');
  var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
  setLang(I18N[saved] ? saved : (I18N[nav] ? nav : 'en'), false);
  showExp('palace', true);
  initSlider();
  initReveal();
  syncScroll();
})();
