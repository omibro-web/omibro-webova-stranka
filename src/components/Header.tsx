'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { company } from '@/content/company';
import type { Content } from '@/content/types';

const EASE = [0.2, 0, 0, 1] as const;

export default function Header({ t }: { t: Content }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const homeHref = t.locale === 'de' ? '/de' : '/';

  return (
    <header
      className={`no-print fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 ${
        scrolled
          ? 'bg-brand-darker/95 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-gradient-to-b from-brand-darker/70 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        <a href={homeHref} className="shrink-0" aria-label={t.nav.home}>
          <img
            src="/logo.svg"
            alt={company.name}
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-11' : 'h-14 sm:h-16'}`}
          />
        </a>

        <nav className="hidden xl:flex items-center gap-6">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] font-bold uppercase tracking-[0.1em] text-gray-200 hover:text-brand-orange transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${company.phoneHref}`}
            className="hidden lg:block text-[13px] font-semibold text-white hover:text-brand-orange transition-colors whitespace-nowrap tabular-nums"
          >
            {company.phone}
          </a>

          <a
            href={t.langSwitch.href}
            aria-label={t.langSwitch.aria}
            className="chamfer-xs hidden sm:flex items-center justify-center border border-white/25 px-3 py-2 text-[11px] font-bold tracking-[0.1em] hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            {t.langSwitch.label}
          </a>

          <a
            href="#contact"
            className="chamfer-xs hidden sm:inline-block bg-brand-orange text-brand-dark px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-brand-orange-deep transition-colors"
          >
            {t.nav.cta}
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            className="xl:hidden w-10 h-10 flex items-center justify-center border border-white/20 hover:border-brand-orange transition-colors cursor-pointer chamfer-xs"
            aria-label={t.nav.open}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-brand-darker z-50 flex flex-col p-6 xl:hidden overflow-y-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
              <img src="/logo.svg" alt={company.name} className="h-12 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-brand-orange transition-colors cursor-pointer chamfer-xs"
                aria-label={t.nav.close}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col">
              {t.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-bold uppercase tracking-wide py-3 border-b border-white/5 hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 flex flex-col gap-4">
              <a
                href={`tel:${company.phoneHref}`}
                className="text-lg font-bold text-white hover:text-brand-orange transition-colors tabular-nums"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="text-sm text-gray-400 hover:text-brand-orange transition-colors"
              >
                {company.email}
              </a>
              <a
                href={t.langSwitch.href}
                className="text-sm text-gray-400 hover:text-brand-orange transition-colors"
              >
                {t.langSwitch.aria}
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="chamfer-sm w-full text-center bg-brand-orange text-brand-dark py-4 text-[13px] font-bold uppercase tracking-[0.1em]"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
