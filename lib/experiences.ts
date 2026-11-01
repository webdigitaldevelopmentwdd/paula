import type { Lang } from './i18n';

export type ExpKey = 'palace' | 'beach' | 'mountain' | 'city' | 'farm' | 'chateau' | 'fusion';
export type ExpCopy = { t: string; p: string; l: string[] };
export type ExpEntry = { img: string; alt: string } & Record<Lang, ExpCopy>;

/* The seven wedding styles. */
export const EXP: Record<ExpKey, ExpEntry> = {
  palace: {
    img: '/images/exp-palace.jpg',
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
    img: '/images/exp-beach.jpg',
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
    img: '/images/exp-mountain.jpg',
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
    img: '/images/exp-city.jpg',
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
    img: '/images/exp-farm.jpg',
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
    img: '/images/exp-chateau.jpg',
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
    img: '/images/exp-fusion.jpg',
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
