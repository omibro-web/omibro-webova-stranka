'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Image that drifts against the scroll direction inside its container.
 * The image is oversized by twice the travel distance so the drift never
 * exposes an edge at either end of the scroll.
 */
export default function ParallaxImage({
  src,
  alt,
  className = '',
  amount = 12,
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={
          reduce
            ? { top: 0, height: '100%' }
            : { y, top: `-${amount}%`, height: `${100 + amount * 2}%` }
        }
        className="absolute left-0 w-full object-cover"
      />
    </div>
  );
}
