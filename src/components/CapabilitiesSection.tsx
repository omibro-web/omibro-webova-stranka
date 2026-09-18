'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';
import { cleanAttribute } from '@/sanity/lib/stega';

export default function CapabilitiesSection({ t }: { t: Content['capabilities'] }) {
  return (
    <section id="technologie" className="py-24 md:py-28 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-40" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="chamfer relative aspect-[16/10] overflow-hidden">
                <img
                  src={cleanAttribute(t.imageMain)}
                  alt={cleanAttribute(t.imgAltMain)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-darker/25" />
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="chamfer-sm relative -mt-16 ml-auto mr-6 w-48 sm:w-60 aspect-[4/3] overflow-hidden border border-white/10 hidden sm:block">
                <img
                  src={cleanAttribute(t.imageInset)}
                  alt={cleanAttribute(t.imgAltInset)}
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <p className="text-brand-orange text-[11px] font-bold uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-orange block chamfer-xs" />
                {t.eyebrow}
              </p>
              <h2 className="text-3xl md:text-[2.4rem] font-bold leading-[1.14] mb-6">
                {t.titleLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">{t.body}</p>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                  {t.materialsHeading}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.materials.map((m) => (
                    <span
                      key={m}
                      className="chamfer-xs bg-brand-surface border border-white/10 px-4 py-2 text-[13px] font-semibold"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {t.stats.map((s) => (
            <StaggerItem key={s.label}>
              <p className="text-4xl md:text-5xl font-bold text-brand-orange mb-2 tabular-nums">{s.value}</p>
              <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.16em] leading-relaxed">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
