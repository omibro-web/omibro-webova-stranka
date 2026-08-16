'use client';

import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';

const icons = [
  (
    <>
      <polygon points="12,2.5 20,7 20,17 12,21.5 4,17 4,7" />
      <circle cx="12" cy="12" r="3.4" />
    </>
  ),
  (
    <>
      <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" />
      <rect x="2.5" y="13" width="19" height="4.5" rx="1" />
      <circle cx="7" cy="18.2" r="1.5" />
      <circle cx="17" cy="18.2" r="1.5" />
    </>
  ),
  <path key="a" d="M21 3L3 10.5l7 2.5m11-10L13 21l-3-8m11-10L10 13" />,
  (
    <>
      <path d="M7 2.5v6M9.8 2.5v6M12.6 2.5v6M9.8 8.5V21.5" />
      <path d="M18 2.5c-1.3 1.1-2.1 2.8-2.1 5.3s.8 4.2 2.1 5.3v8.4" />
    </>
  ),
  <path key="b" d="M4 21.5V3.5M4 6l15 5M19 11v3.2M13.5 21.5L19 14.2" />,
];

export default function PartnersSection({ t }: { t: Content['industries'] }) {
  return (
    <section className="py-20 bg-brand-light border-b border-gray-200">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
            <span className="w-2 h-2 bg-brand-orange block chamfer-xs" />
            {t.eyebrow}
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {t.items.map((name, idx) => (
            <StaggerItem key={name}>
              <div className="group chamfer-sm relative h-full bg-white border border-gray-200 p-6 pb-5 flex flex-col justify-between gap-8 hover:bg-brand-dark hover:border-brand-dark transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <svg
                    className="w-7 h-7 text-brand-dark group-hover:text-brand-orange transition-colors duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[idx]}
                  </svg>
                  <span className="text-[10px] tracking-widest text-gray-300 group-hover:text-gray-500 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="font-bold text-[13px] tracking-wide text-brand-dark group-hover:text-white uppercase transition-colors leading-snug">
                  {name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
