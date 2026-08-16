/**
 * Company facts. Locale-independent — these are registry values and must match
 * the Obchodní rejstřík entry exactly (sp. zn. C 40110/KSPL, Krajský soud v Plzni).
 *
 * NOTE: DIČ CZ09761101 is deliberately NOT published. The registry lists it as
 * "již neplatné" (deregistered VAT payer), so exposing it would fail a VIES
 * lookup at the exact moment a supplier is checking us.
 */
export const company = {
  name: 'Omibro s.r.o.',
  ico: '09761101',
  dataBox: '4zavsgw',
  fileRef: 'C 40110/KSPL',
  court: 'Krajský soud v Plzni',
  capital: '100 000 Kč',
  director: 'Radek Hodánek',
  street: 'Bolzanova 2659/15',
  district: 'Jižní Předměstí',
  postalCode: '301 00',
  city: 'Plzeň',
  country: 'CZ',
  email: 'info@omibro.cz',
  phone: '+420 774 454 848',
  phoneHref: '+420774454848',
  registryUrl: 'https://or.justice.cz/ias/ui/rejstrik-$firma?ico=09761101',
  aresUrl: 'https://ares.gov.cz/ekonomicke-subjekty?ico=09761101',
  siteUrl: 'https://omibro.cz',
} as const;

export const addressLine = `${company.street}, ${company.district}, ${company.postalCode} ${company.city}`;
