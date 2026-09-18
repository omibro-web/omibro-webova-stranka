import type { Metadata } from 'next';
import { company } from '@/content/company';
import type { Locale } from '@/content/types';
import { getPageMetadata } from '@/sanity/lib/content';

const paths: Record<Locale, string> = { cs: '/', de: '/de' };

export async function buildMetadata(locale: Locale): Promise<Metadata> {
  const meta = await getPageMetadata(locale);
  const path = paths[locale];

  return {
    metadataBase: new URL(company.siteUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
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
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

/** schema.org Organization — registry-backed values only. */
export function organizationSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.name,
    url: company.siteUrl,
    logo: `${company.siteUrl}/logo.svg`,
    description,
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
