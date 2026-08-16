'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { Content } from '@/content/types';

const EASE = [0.2, 0, 0, 1] as const;

export default function HeroSection({ t }: { t: Content['hero'] }) {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  });

  return (
    <section className="relative bg-brand-dark text-white min-h-[92vh] flex items-end hero-clip pt-40 pb-32 md:pb-44 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/real optimised imaginery/Copy of shutterstock_681027133.webp"
          alt={t.imgAlt}
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/85 to-brand-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-brand-darker/70" />
        <div className="absolute inset-0 grid-texture opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <motion.p
              {...rise(0.05)}
              className="text-brand-orange text-[11px] font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
            >
              <span className="w-2.5 h-2.5 bg-brand-orange inline-block chamfer-xs" />
              {t.eyebrow}
            </motion.p>

            <motion.h1
              {...rise(0.14)}
              className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.06] mb-8"
            >
              {t.titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>
          </div>

          <div className="lg:col-span-5 lg:pb-3">
            <motion.p {...rise(0.24)} className="text-gray-300 text-base sm:text-lg leading-relaxed mb-9 max-w-md">
              {t.lead}
            </motion.p>

            <motion.div {...rise(0.32)} className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="chamfer-sm bg-brand-orange text-brand-dark px-7 py-4 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-brand-orange-deep transition-colors flex items-center gap-3"
              >
                {t.ctaPrimary}
                <span className="bg-brand-dark/20 p-1 rounded-sm">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                </span>
              </a>
              <a
                href="#services"
                className="chamfer-sm border border-white/25 text-white px-7 py-4 text-[13px] font-bold uppercase tracking-[0.1em] hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                {t.ctaSecondary}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div {...rise(0.5)} className="absolute bottom-8 right-6 z-10 hidden md:block text-right">
        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">{t.corner}</p>
      </motion.div>
    </section>
  );
}
