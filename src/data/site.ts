// Brand configuration — mikrostomart.com
// FILAR EN: Dentist in Poland / Opole for international patients

export const site = {
  url: 'https://mikrostomart.com',
  title: 'Dentist in Poland — Dental Implants & Treatment | Mikrostomart Opole',
  shortTitle: 'Mikrostomart — Dentist Poland',
  description:
    'English-speaking dentist in Poland (Opole) — dental implants, All-on-4, full-mouth restoration at Polish prices, Western quality. Treatment by Marcin Nowosielski, M.Sc. RWTH Aachen. Save up to 60%.',
  ogImage: '/og-default.png',
  locale: 'en-GB',
  author: {
    name: 'Marcin Nowosielski',
    honorificPrefix: '',
    honorificSuffix: 'M.Sc.',
    canonicalUrl: 'https://nowosielski.pl',
    canonicalId: 'https://nowosielski.pl/#person',
    jobTitle: 'Dentist, Implantologist, M.Sc. RWTH Aachen',
    image: '/dr-marcin.webp',
    email: 'gabinet@mikrostomart.pl',
  },
  clinic: {
    name: 'Mikrostomart',
    legalName: 'Mikrostomart — Premium Dental Clinic Opole',
    url: 'https://mikrostomart.pl',
    bookingUrl: 'https://mikrostomart.pl/rezerwacja',
    contactUrl: 'https://mikrostomart.pl/kontakt',
    phone: '+48 570 270 470',
    phoneAlt: '+48 570 810 800',
    phoneHref: 'tel:+48570270470',
    email: 'gabinet@mikrostomart.pl',
    address: {
      street: 'ul. Centralna 33a',
      city: 'Opole',
      region: 'Opole Voivodeship',
      postalCode: '45-940',
      country: 'PL',
    },
    geo: { latitude: 50.6751, longitude: 17.9213 },
    openingHours: [
      { day: 'Monday', opens: '09:00', closes: '20:00' },
      { day: 'Tuesday', opens: '09:00', closes: '20:00' },
      { day: 'Wednesday', opens: '09:00', closes: '20:00' },
      { day: 'Thursday', opens: '09:00', closes: '20:00' },
      { day: 'Friday', opens: '09:00', closes: '16:00' },
    ],
    gbpUrl: 'https://share.google/uqFxAL4vtBaH3ATbg',
    gbpMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mikrostomart+Opole+Centralna+33a',
    sameAs: [
      'https://share.google/uqFxAL4vtBaH3ATbg',
      'https://www.znanylekarz.pl/placowki/gabinet-mikrostomart-2',
      'https://www.facebook.com/mikrostomart',
      'https://www.instagram.com/mikrostomart_opole/',
    ],
  },
  keywords: [
    'dentist in Poland',
    'dental implants Poland',
    'dental treatment Poland cost',
    'All-on-4 Poland',
    'dental treatment abroad',
    'dental tourism Poland',
    'affordable dental implants Europe',
    'dentist Opole',
  ],
  // hreflang — per-URL language counterparts (only pages with a real counterpart).
  // pl-hub (mikrostomart.pl) omitted: external, no guaranteed reciprocity.
  i18n: {
    self: 'en',
    otherLang: 'de',
    otherBase: 'https://mikrostomart.de',
    // path on this domain -> counterpart on mikrostomart.de
    pairs: {
      '/': '/',
      '/dental-implants-poland': '/zahnimplantate-polen',
      '/all-on-4-poland': '/all-on-4-polen',
      '/dental-treatment-cost-poland': '/zahnersatz-kosten-polen',
      '/dental-tourism-poland': '/zahntourismus-opole',
      '/about-us': '/ueber-uns',
      '/blog': '/blog',
    },
  },
  lang: 'en',
};

export const nav = [
  { label: 'Dental Implants', href: '/dental-implants-poland' },
  { label: 'All-on-4', href: '/all-on-4-poland' },
  { label: 'Costs', href: '/dental-treatment-cost-poland' },
  { label: 'How it works', href: '/dental-tourism-poland' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about-us' },
];
