"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure" | "span";
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </M>
  );
}

/** Headline lines that rise from behind a baseline mask — the core entrance. */
export function MaskLines({
  lines,
  className,
  delay = 0,
  stagger = 0.09,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } },
  };
  const child: Variants = {
    hidden: reduce ? { opacity: 1 } : { y: "110%" },
    show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: EASE } },
  };
  return (
    <span className={className}>
      <motion.span className="block" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em]">
            <motion.span className="block" variants={child}>
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}

/** Image enters behind a curtain sliding away. */
export function CurtainImage({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  sizes?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={`relative block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="absolute inset-0 z-10 origin-bottom bg-ivory"
        initial={reduce ? { scaleY: 0 } : { scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName ?? ""}`}
      />
    </span>
  );
}

export { EASE };
