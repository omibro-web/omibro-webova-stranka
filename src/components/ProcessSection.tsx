'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';

export default function ProcessSection({ t }: { t: Content['process'] }) {
  return (
    <section id="proces" className="py-24 md:py-28 bg-brand-light">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-xl mb-16">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-orange block chamfer-xs" />
              {t.eyebrow}
            </p>
            <h2 className="text-3xl md:text-[2.6rem] font-bold text-brand-dark leading-[1.12]">{t.title}</h2>
          </div>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 border border-gray-300">
          {t.steps.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <div className="group h-full bg-brand-light hover:bg-white transition-colors duration-300 p-8">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[2.6rem] font-bold leading-none text-gray-300 group-hover:text-brand-orange transition-colors duration-300 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-gray-300 group-hover:bg-brand-orange/40 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
