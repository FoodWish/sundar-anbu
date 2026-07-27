import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Scroll-triggered reveal. Collapses to a plain div when the OS asks for
// reduced motion, so content is never gated behind an animation that won't run.
export const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export const Section = ({ id, labelledBy, className = "", children }) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    className={`mx-auto w-full max-w-content px-6 py-24 md:px-10 md:py-32 ${className}`}
  >
    {children}
  </section>
);

export const SectionHeading = ({ id, eyebrow, title, lead }) => (
  <Reveal className="mb-14 md:mb-20">
    <p className="eyebrow mb-4">{eyebrow}</p>
    <h2
      id={id}
      className="max-w-3xl text-4xl font-bold tracking-tightest text-ink md:text-5xl"
    >
      {title}
    </h2>
    {lead && (
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {lead}
      </p>
    )}
  </Reveal>
);

export const Chip = ({ children }) => (
  <span className="rounded-full border border-hairline bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-soft">
    {children}
  </span>
);

export const ArrowIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={`h-4 w-4 ${className}`}
  >
    <path
      d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Primary = solid accent, secondary = hairline outline. Two levels only.
export const Button = ({ href, variant = "primary", children, ...rest }) => {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const styles = {
    primary:
      "bg-accent text-canvas hover:bg-accent-hover hover:shadow-[0_8px_30px_-8px_rgba(255,176,32,0.6)]",
    secondary:
      "border border-divider text-ink hover:border-accent-edge hover:text-accent",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`} {...rest}>
      {children}
    </a>
  );
};
