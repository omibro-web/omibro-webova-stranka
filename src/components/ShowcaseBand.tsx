'use client';

import ParallaxImage from '@/components/motion/ParallaxImage';
import { Reveal } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';

export default function ShowcaseBand({ t }: { t: Content['showcase'] }) {
  return (
    <section className="relative bg-brand-darker text-white band-clip min-h-[74vh] flex items-end overflow-hidden">
      <ParallaxImage
        src={t.image}
        alt={t.imgAlt}
        amount={10}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/65 to-brand-darker/25" />

      <div className="container mx-auto px-6 relative z-10 pt-40 pb-16">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-brand-orange text-[11px] font-bold uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-orange block chamfer-xs" />
              {t.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.9rem] font-bold leading-[1.12] mb-5">
              {t.titleLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-xl">{t.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
