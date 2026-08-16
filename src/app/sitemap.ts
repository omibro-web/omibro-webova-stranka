import type { MetadataRoute } from 'next';
import { company } from '@/content/company';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = { cs: company.siteUrl, de: `${company.siteUrl}/de` };

  return [
    {
      url: company.siteUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${company.siteUrl}/de`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
