'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';

const EASE = [0.2, 0, 0, 1] as const;

export default function FAQSection({ t }: { t: Content['faq'] }) {
  const [active, setActive] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-24 md:py-28 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-orange block chamfer-xs" />
                {t.eyebrow}
              </p>
              <h2 className="text-3xl md:text-[2.4rem] font-bold text-brand-dark leading-[1.14]">
                {t.titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {t.items.map((faq, idx) => {
              const isOpen = active === idx;
              return (
                <Reveal key={faq.q} delay={idx * 0.05}>
                  <div
                    className={`mb-2 transition-colors duration-300 chamfer-sm ${
                      isOpen ? 'bg-brand-orange' : 'bg-brand-light hover:bg-gray-100'
                    }`}
                  >
                    <button
                      onClick={() => setActive(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-6 py-5 px-6 text-left cursor-pointer"
                    >
                      <span
                        className={`text-[15px] sm:text-base font-bold ${
                          isOpen ? 'text-brand-dark' : 'text-brand-dark/75'
                        }`}
                      >
                        {faq.q}
                      </span>
                      <span
                        className={`shrink-0 w-7 h-7 flex items-center justify-center chamfer-xs text-sm font-bold transition-colors ${
                          isOpen ? 'bg-brand-dark text-brand-orange' : 'bg-white text-gray-400'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.34, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-sm sm:text-[15px] text-brand-dark/80 leading-relaxed max-w-2xl">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
