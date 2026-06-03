export type Category =
  | 'dental-implants'
  | 'all-on-x'
  | 'costs'
  | 'dental-tourism'
  | 'treatments'
  | 'patient-guide';

export const categoryMeta: Record<Category, {
  label: string;
  shortDescription: string;
  description: string;
}> = {
  'dental-implants': {
    label: 'Dental Implants',
    shortDescription: 'Implants in Poland',
    description: 'Dental implants in Poland — Straumann and Nobel Biocare, single implants, immediate placement, bone grafting. Premium quality at Polish prices.',
  },
  'all-on-x': {
    label: 'All-on-4 / All-on-6',
    shortDescription: 'Fixed teeth in a day',
    description: 'Fixed full-arch restoration on implants — All-on-4, All-on-6, immediate loading. For patients with missing or non-restorable teeth.',
  },
  'costs': {
    label: 'Costs & Prices',
    shortDescription: 'Prices & savings',
    description: 'How much does dental treatment in Poland cost? Price comparison vs. UK/Western Europe, cost examples for implants, All-on-4, crowns. Save up to 60%.',
  },
  'dental-tourism': {
    label: 'Dental Tourism',
    shortDescription: 'Travel & process',
    description: 'How to organise dental treatment abroad — travel to Opole, the process, appointments, guarantee, aftercare at home. Practical guide for international patients.',
  },
  'treatments': {
    label: 'Treatments',
    shortDescription: 'Clinic services',
    description: 'Treatments at Mikrostomart Opole — microscopic root canal, prosthetics, aesthetics, bone grafting, sinus lift.',
  },
  'patient-guide': {
    label: 'Patient Guide',
    shortDescription: 'Knowledge for patients',
    description: 'Patient knowledge about dental work abroad — pros and cons, common questions, what to look for when choosing a clinic.',
  },
};

export const allCategories = Object.keys(categoryMeta) as Category[];

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}
