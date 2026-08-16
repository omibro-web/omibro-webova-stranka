'use client';

import { Reveal } from '@/components/motion/Reveal';
import { company } from '@/content/company';
import type { Content } from '@/content/types';

export default function Footer({ t }: { t: Content }) {
  const f = t.footer;

  return (
    <footer className="bg-brand-darker text-white">
      {/* Closing prompt */}
      <div className="border-b border-white/10 no-print">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <h2 className="text-3xl md:text-[2.6rem] font-bold leading-[1.12] max-w-lg">{f.ctaTitle}</h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="chamfer-sm bg-brand-orange text-brand-dark px-7 py-4 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-brand-orange-deep transition-colors tabular-nums"
                >
                  {company.phone}
                </a>
                <a
                  href="#contact"
                  className="chamfer-sm border border-white/25 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.1em] hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  {f.ctaFormLabel}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Link columns */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <img src="/logo.svg" alt={company.name} className="h-16 w-auto mb-5" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{f.blurb}</p>
          </div>

          {f.columns.map((col) => (
            <div key={col.heading} className="no-print">
              <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.18em] mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.18em] mb-5">
              {f.legalHeading}
            </h3>
            <address className="not-italic text-sm text-gray-300 leading-relaxed space-y-1">
              <p className="font-semibold text-white">{company.name}</p>
              <p>{company.street}</p>
              <p>
                {company.postalCode} {company.city}
              </p>
              <p className="pt-3">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="font-semibold text-white hover:text-brand-orange transition-colors tabular-nums"
                >
                  {company.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${company.email}`} className="hover:text-brand-orange transition-colors">
                  {company.email}
                </a>
              </p>
              <p className="pt-3 text-gray-400">
                {t.contact.labels.ico} {company.ico}
              </p>
              <p className="text-gray-400">
                {t.contact.labels.dataBox} {company.dataBox}
              </p>
              <p className="text-gray-400">{company.fileRef}</p>
            </address>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-gray-500">
          <p>{f.rights}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 no-print">
            <a
              href={company.registryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
            >
              {f.registryLink}
            </a>
            <a href="/sitemap.xml" className="hover:text-brand-orange transition-colors">
              {f.sitemapLink}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
