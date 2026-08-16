'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';

const media = [
  {
    img: '/assets/real optimised imaginery/Copy of shutterstock_697194019.webp',
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 3.5v3.2M12 17.3v3.2M3.5 12h3.2M17.3 12h3.2" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    img: '/assets/real optimised imaginery/Copy of shutterstock_2216877165.webp',
    icon: (
      <>
        <path d="M7 3.5h10l-1 6.5a4.2 4.2 0 0 1-8 0z" />
        <path d="M12 13.5v7M8.5 20.5h7" />
      </>
    ),
  },
  {
    img: '/assets/real optimised imaginery/Copy of PUR 1.webp',
    icon: (
      <>
        <path d="M5 8.5h6.5l5-3.5v14l-5-3.5H5z" />
        <path d="M19.5 8.5c1 1 1 5.2 0 7" />
      </>
    ),
  },
  {
    img: '/assets/real optimised imaginery/Copy of shutterstock_2003114246.webp',
    icon: (
      <>
        <path d="M20 12a8 8 0 1 1-2.5-5.8" />
        <path d="M20.5 3.5V9h-5.4" />
      </>
    ),
  },
];

export default function ServicesSection({ t }: { t: Content['services'] }) {
  return (
    <section id="services" className="py-24 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-orange block chamfer-xs" />
                {t.eyebrow}
              </p>
              <h2 className="text-3xl md:text-[2.6rem] font-bold text-brand-dark leading-[1.12]">
                {t.titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm md:text-right">{t.note}</p>
          </div>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.items.map((s, i) => (
            <StaggerItem key={s.title} className="h-full">
              <article className="group chamfer h-full flex flex-col bg-brand-light border border-gray-200 hover:border-brand-orange transition-colors duration-300 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={media[i].img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/70 via-brand-darker/10 to-transparent" />
                  <span className="chamfer-xs absolute bottom-4 left-4 w-11 h-11 bg-brand-orange text-brand-dark flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {media[i].icon}
                    </svg>
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[17px] font-bold text-brand-dark mb-2.5 leading-snug">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
