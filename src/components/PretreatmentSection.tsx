'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';
import { cleanAttribute } from '@/sanity/lib/stega';

export default function PretreatmentSection({ t }: { t: Content['pretreat'] }) {
  return (
    <section id="preduprava" className="py-24 md:py-28 bg-brand-light border-y border-gray-200">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-7">
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
              <p className="text-gray-600 leading-relaxed max-w-2xl">{t.lead}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="chamfer relative aspect-[4/3] overflow-hidden">
                <img
                  src={cleanAttribute(t.image)}
                  alt={cleanAttribute(t.imgAlt)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-darker/15" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Process chain */}
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-300 border border-gray-300 mb-16">
          {t.steps.map((step, i) => (
            <StaggerItem key={step.title} className="h-full">
              <div className="group h-full bg-white hover:bg-brand-dark transition-colors duration-300 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="chamfer-xs w-8 h-8 shrink-0 bg-brand-orange text-brand-dark flex items-center justify-center text-[12px] font-bold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {i < t.steps.length - 1 && (
                    <span className="h-px flex-1 bg-gray-200 group-hover:bg-white/20 transition-colors" />
                  )}
                </div>
                <h3 className="text-[15px] font-bold text-brand-dark group-hover:text-white mb-2 leading-snug transition-colors">
                  {step.title}
                </h3>
                <p className="text-[13px] text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bath parameters */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <Reveal>
              <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">
                {t.tableHeading}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr className="border-b-2 border-brand-dark">
                      {[t.columns.stage, t.columns.agent, t.columns.monitored].map((col) => (
                        <th
                          key={col}
                          scope="col"
                          className="py-3 pr-6 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-dark"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.rows.map((row) => (
                      <tr key={row.stage} className="border-b border-gray-300">
                        <th
                          scope="row"
                          className="py-4 pr-6 text-sm font-bold text-brand-dark align-top whitespace-nowrap"
                        >
                          {row.stage}
                        </th>
                        <td className="py-4 pr-6 text-sm text-gray-600 align-top">{row.agent}</td>
                        <td className="py-4 text-sm text-gray-600 align-top">{row.monitored}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.08}>
              <aside className="chamfer bg-brand-dark text-white p-7">
                <span className="block w-8 h-1 bg-brand-orange mb-5" />
                <p className="text-sm text-gray-300 leading-relaxed">{t.note}</p>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
