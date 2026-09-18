'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';
import { company, addressLine } from '@/content/company';
import type { Content } from '@/content/types';
import { cleanAttribute } from '@/sanity/lib/stega';

const EASE = [0.2, 0, 0, 1] as const;

const inputClass =
  'w-full bg-white border border-gray-300 px-4 py-3.5 text-sm text-brand-dark placeholder:text-gray-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors';

export default function ContactFormSection({ t }: { t: Content['contact'] }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const rows: { label: string; value: string; href?: string; mono?: boolean }[] = [
    { label: t.labels.seat, value: addressLine },
    { label: t.labels.phone, value: company.phone, href: `tel:${company.phoneHref}` },
    { label: t.labels.email, value: company.email, href: `mailto:${company.email}` },
    { label: t.labels.hours, value: t.hours },
    { label: t.labels.ico, value: company.ico, mono: true },
    { label: t.labels.dataBox, value: company.dataBox, mono: true },
    { label: t.labels.director, value: company.director },
    { label: t.labels.fileRef, value: `${company.fileRef} · ${company.court}` },
    { label: t.labels.capital, value: company.capital },
  ];

  return (
    <section id="contact" className="py-24 md:py-28 bg-brand-light border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Company details */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-orange block chamfer-xs" />
                {t.eyebrow}
              </p>
              <h2 className="text-3xl md:text-[2.6rem] font-bold text-brand-dark leading-[1.12] mb-6">
                {t.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 max-w-md">{t.lead}</p>
              <p className="text-sm text-gray-500 mb-9">{t.responseNote}</p>
            </Reveal>

            <Reveal delay={0.06}>
              {/* Primary contact, given prominence over the registry data below */}
              <div className="chamfer bg-brand-dark text-white p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 mb-1">
                    {t.labels.phone}
                  </p>
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="text-xl font-bold hover:text-brand-orange transition-colors tabular-nums"
                  >
                    {company.phone}
                  </a>
                </div>
                <div className="sm:text-right">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500 mb-1">
                    {t.labels.email}
                  </p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sm font-semibold hover:text-brand-orange transition-colors break-all"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="border-t border-gray-300">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="border-b border-gray-300 py-3.5 flex items-baseline justify-between gap-6"
                  >
                    <dt className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.14em] shrink-0">
                      {row.label}
                    </dt>
                    <dd
                      className={`text-sm font-semibold text-brand-dark text-right ${
                        row.mono ? 'tabular-nums' : ''
                      }`}
                    >
                      {row.href ? (
                        <a href={cleanAttribute(row.href)} className="hover:text-brand-orange-deep transition-colors">
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="chamfer no-print mt-8 relative w-full h-56 overflow-hidden border border-gray-300">
                <iframe
                  title={cleanAttribute(t.mapTitle)}
                  src="https://www.google.com/maps?q=Bolzanova+2659%2F15%2C+301+00+Plze%C5%88&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 no-print">
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="chamfer bg-white border border-gray-200 p-7 sm:p-10">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-bold text-brand-dark uppercase tracking-[0.14em] mb-2"
                    >
                      {t.form.name} <span className="text-brand-orange-deep">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder={cleanAttribute(t.form.namePlaceholder)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[11px] font-bold text-brand-dark uppercase tracking-[0.14em] mb-2"
                    >
                      {t.form.company}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={cleanAttribute(t.form.companyPlaceholder)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-bold text-brand-dark uppercase tracking-[0.14em] mb-2"
                    >
                      {t.form.email} <span className="text-brand-orange-deep">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={cleanAttribute(t.form.emailPlaceholder)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-bold text-brand-dark uppercase tracking-[0.14em] mb-2"
                    >
                      {t.form.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={cleanAttribute(t.form.phonePlaceholder)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-bold text-brand-dark uppercase tracking-[0.14em] mb-2"
                  >
                    {t.form.message} <span className="text-brand-orange-deep">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder={cleanAttribute(t.form.messagePlaceholder)}
                    className={`${inputClass} h-36 resize-none`}
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <button
                    type="submit"
                    className="chamfer-sm bg-brand-orange text-brand-dark px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-brand-orange-deep transition-colors flex items-center justify-center gap-3 cursor-pointer shrink-0"
                  >
                    {t.form.submit}
                    <span className="bg-brand-dark/20 p-1 rounded-sm">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    </span>
                  </button>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{t.form.privacy}</p>
                </div>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      role="status"
                      aria-live="polite"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="chamfer-xs mt-6 flex items-start gap-3 bg-brand-dark text-white px-5 py-4"
                    >
                      <svg
                        className="w-5 h-5 text-brand-orange shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                      <p className="text-sm">{t.form.success}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
