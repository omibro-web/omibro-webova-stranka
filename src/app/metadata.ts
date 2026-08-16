import type { Metadata } from 'next';
import { company } from '@/content/company';
import { dictionaries } from '@/content';
import type { Locale } from '@/content/types';

const paths: Record<Locale, string> = { cs: '/', de: '/de' };

export function buildMetadata(locale: Locale): Metadata {
  const t = dictionaries[locale];
  const path = paths[locale];

  return {
    metadataBase: new URL(company.siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: path,
      languages: {
        cs: '/',
        de: '/de',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'de' ? 'de_DE' : 'cs_CZ',
      alternateLocale: locale === 'de' ? 'cs_CZ' : 'de_DE',
      url: `${company.siteUrl}${path === '/' ? '' : path}`,
      siteName: company.name,
      title: t.meta.title,
      description: t.meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

/** schema.org Organization — registry-backed values only. */
export function organizationSchema(locale: Locale) {
  const t = dictionaries[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.name,
    url: company.siteUrl,
    logo: `${company.siteUrl}/logo.svg`,
    description: t.meta.description,
    identifier: company.ico,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      addressLocality: company.city,
      postalCode: company.postalCode,
      addressCountry: company.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: company.phone,
      email: company.email,
      availableLanguage: ['cs', 'de'],
    },
  };
}
