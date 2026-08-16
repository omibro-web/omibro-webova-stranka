import { cs } from './cs';
import { de } from './de';
import type { Content, Locale } from './types';

export const dictionaries: Record<Locale, Content> = { cs, de };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export { company, addressLine } from './company';
export type { Content, Locale, NavItem, TitledItem } from './types';
