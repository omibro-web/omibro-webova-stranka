'use client';

import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';

const tabImages = [
  '/assets/real optimised imaginery/Copy of sgYLXz.webp',
  '/assets/real optimised imaginery/Copy of shutterstock_1199738893.webp',
  '/assets/real optimised imaginery/Copy of shutterstock_2728784533.webp',
];

export default function AboutSection({ t }: { t: Content['about'] }) {
  const [active, setActive] = useState(0);
  const view = t.tabs[active];

  return (
    <section id="about" className="py-24 md:py-28 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-orange block chamfer-xs" />
                {t.eyebrow}
              </p>
              <h2 className="text-3xl md:text-[2.6rem] font-bold text-brand-dark leading-[1.12] mb-6">
                {t.titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 max-w-md">{t.lead}</p>
            </Reveal>

            <div className="border-t border-gray-300">
              {t.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.07}>
                  <div className="border-b border-gray-300 py-5 flex items-start gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-brand-orange shrink-0 chamfer-xs" />
                    <div>
                      <h3 className="text-[15px] font-bold text-brand-dark mb-1">{point.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="flex gap-2 mb-5">
                {t.tabs.map((v, i) => (
                  <button
                    key={v.tab}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={`chamfer-xs px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer ${
                      active === i
                        ? 'bg-brand-orange text-brand-dark'
                        : 'bg-white text-gray-500 border border-gray-200 hover:text-brand-dark'
                    }`}
                  >
                    {v.tab}
                  </button>
                ))}
              </div>

              <div className="chamfer relative w-full aspect-[4/3] lg:aspect-[16/12] overflow-hidden bg-brand-dark">
                <img
                  key={tabImages[active]}
                  src={tabImages[active]}
                  alt={view.caption}
                  className="w-full h-full object-cover animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <span className="text-white text-sm font-semibold">{view.caption}</span>
                  <span className="chamfer-xs bg-brand-orange text-brand-dark text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 shrink-0">
                    {t.badge}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
