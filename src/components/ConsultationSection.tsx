'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal';
import type { Content } from '@/content/types';

const EASE = [0.2, 0, 0, 1] as const;

/* Hub-and-spoke geometry. Six spokes at 60° steps, first one at the top. */
const CX = 280;
const CY = 200;
const R = 118;
const ANGLES = [-90, -30, 30, 90, 150, 210];

const nodePoint = (deg: number) => ({
  x: CX + R * Math.cos((deg * Math.PI) / 180),
  y: CY + R * Math.sin((deg * Math.PI) / 180),
});

/** Animated diagram: everything Omibro does, spoked off a single consultation. */
function ConsultDiagram({ t }: { t: Content['consult']['diagram'] }) {
  const reduce = useReducedMotion();
  const nodes = t.nodes.slice(0, ANGLES.length);

  return (
    <svg
      viewBox="0 0 560 400"
      className="w-full h-auto"
      role="img"
      aria-label={`${t.center}: ${nodes.join(', ')}`}
    >
      {/* Slow counter-rotating guide rings */}
      {[
        { r: 152, dash: '2 10', dur: 60, dir: 360 },
        { r: 88, dash: '2 7', dur: 44, dir: -360 },
      ].map((ring) => (
        <motion.circle
          key={ring.r}
          cx={CX}
          cy={CY}
          r={ring.r}
          fill="none"
          stroke="#FC9301"
          strokeOpacity={0.35}
          strokeWidth={1}
          strokeDasharray={ring.dash}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
          animate={reduce ? undefined : { rotate: ring.dir }}
          transition={{ duration: ring.dur, ease: 'linear', repeat: Infinity }}
        />
      ))}

      {/* Ring the spokes sit on */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#ffffff" strokeOpacity={0.1} strokeWidth={1} />

      {/* Pulse leaving the hub */}
      {!reduce && (
        <motion.circle
          cx={CX}
          cy={CY}
          fill="none"
          stroke="#FC9301"
          strokeWidth={1}
          initial={{ r: 34, opacity: 0 }}
          animate={{ r: [34, R], opacity: [0, 0.5, 0] }}
          transition={{ duration: 3.2, ease: EASE, repeat: Infinity, repeatDelay: 1.1 }}
        />
      )}

      {/* Spokes */}
      {nodes.map((label, i) => {
        const p = nodePoint(ANGLES[i]);
        return (
          <motion.path
            key={`line-${label}`}
            d={`M ${CX} ${CY} L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`}
            stroke="#ffffff"
            strokeOpacity={0.22}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.7, delay: 0.35 + i * 0.09, ease: EASE }}
          />
        );
      })}

      {/* Spoke markers and labels */}
      {nodes.map((label, i) => {
        const deg = ANGLES[i];
        const p = nodePoint(deg);
        const isTop = deg === -90;
        const isBottom = deg === 90;
        const right = Math.cos((deg * Math.PI) / 180) > 0.01;

        const anchor = isTop || isBottom ? 'middle' : right ? 'start' : 'end';
        const lx = isTop || isBottom ? p.x : right ? p.x + 18 : p.x - 18;
        const ly = isTop ? p.y - 24 : isBottom ? p.y + 30 : p.y + 5;

        return (
          <motion.g
            key={`node-${label}`}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.5, delay: 0.75 + i * 0.09, ease: EASE }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <circle cx={p.x} cy={p.y} r={13} fill="#141D33" stroke="#ffffff" strokeOpacity={0.15} />
            <rect x={p.x - 5} y={p.y - 5} width={10} height={10} fill="#FC9301" />
            <text
              x={lx}
              y={ly}
              textAnchor={anchor}
              fill="#ffffff"
              fontSize={15}
              fontWeight={700}
              letterSpacing="0.02em"
            >
              {label}
            </text>
          </motion.g>
        );
      })}

      {/* Hub */}
      <motion.g
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      >
        {/* Chamfered lower-left corner, matching the site's signature shape */}
        <polygon
          points={`${CX - 66},${CY - 31} ${CX + 66},${CY - 31} ${CX + 66},${CY + 31} ${CX - 52},${CY + 31} ${CX - 66},${CY + 17}`}
          fill="#FC9301"
        />
        <text
          x={CX}
          y={CY + 6}
          textAnchor="middle"
          fill="#0A1020"
          fontSize={19}
          fontWeight={700}
          letterSpacing="-0.01em"
        >
          {t.center}
        </text>
      </motion.g>
    </svg>
  );
}

export default function ConsultationSection({ t }: { t: Content['consult'] }) {
  return (
    <section
      id="konzultace"
      className="py-24 md:py-28 bg-brand-dark text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-texture opacity-40" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Intro + diagram */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6">
            <Reveal>
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
              <p className="text-gray-400 leading-relaxed mb-8">{t.lead}</p>

              <a
                href="#contact"
                className="chamfer-sm inline-block bg-brand-orange text-brand-dark px-7 py-4 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-brand-orange-deep transition-colors"
              >
                {t.cta}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <ConsultDiagram t={t.diagram} />
          </div>
        </div>

        {/* Consultation topics */}
        <Reveal>
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
            {t.topicsHeading}
          </h3>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-20">
          {t.topics.map((topic, i) => (
            <StaggerItem key={topic.title} className="h-full">
              <div className="group h-full bg-brand-dark hover:bg-brand-surface transition-colors duration-300 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="chamfer-xs w-8 h-8 shrink-0 bg-brand-orange text-brand-dark flex items-center justify-center text-[12px] font-bold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-white/10 group-hover:bg-brand-orange/40 transition-colors" />
                </div>
                <h4 className="text-[15px] font-bold mb-2 leading-snug group-hover:text-brand-orange transition-colors">
                  {topic.title}
                </h4>
                <p className="text-[13px] text-gray-400 leading-relaxed">{topic.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Format + what to prepare */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                {t.formatHeading}
              </h3>
              <dl className="border-t border-white/10">
                {t.format.map((f) => (
                  <div key={f.title} className="grid sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-b border-white/10">
                    <dt className="sm:col-span-5 text-[15px] font-bold leading-snug">{f.title}</dt>
                    <dd className="sm:col-span-7 text-[13px] text-gray-400 leading-relaxed">{f.desc}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <aside className="chamfer bg-brand-surface border border-white/10 p-7">
                <span className="block w-8 h-1 bg-brand-orange mb-5" />
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">
                  {t.prepareHeading}
                </h3>
                <ul className="space-y-3">
                  {t.prepare.map((item) => (
                    <li key={item} className="flex gap-3 text-[13px] text-gray-300 leading-relaxed">
                      <span className="chamfer-xs mt-[6px] w-1.5 h-1.5 shrink-0 bg-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>

        {/* Closing CTA band */}
        <Reveal>
          <div className="chamfer bg-brand-orange text-brand-dark p-8 md:p-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="lg:flex-1">
              <p className="text-xl md:text-2xl font-bold leading-snug mb-2">{t.ctaTitle}</p>
              <p className="text-[14px] text-brand-dark/75 leading-relaxed">{t.ctaBody}</p>
            </div>
            <div className="lg:shrink-0">
              <a
                href="#contact"
                className="chamfer-sm inline-block bg-brand-dark text-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-brand-darker transition-colors"
              >
                {t.cta}
              </a>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-dark/65">
                {t.ctaNote}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
