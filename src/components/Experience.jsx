import React from "react";
import { experience } from "../data/profile";
import { Chip, Reveal, Section, SectionHeading } from "./ui";

const Experience = () => (
  <Section id="experience" labelledBy="experience-heading">
    <SectionHeading
      id="experience-heading"
      eyebrow="02 — Experience"
      title="Six roles, one throughline: own it end-to-end."
      lead="From internship trainee to senior engineer across healthcare, edtech and AI startups — consistently the person who takes an ambiguous brief through to something running in production."
    />

    <ol className="relative border-l border-hairline">
      {experience.map((job, i) => (
        <Reveal
          as="li"
          key={`${job.company}-${job.period}`}
          delay={i * 0.05}
          className="relative pb-14 pl-8 last:pb-0 md:pl-12"
        >
          <span
            aria-hidden="true"
            className={`absolute -left-[4.5px] top-2 h-2 w-2 rounded-full ${
              job.current ? "bg-accent" : "bg-ink-mute"
            }`}
          />
          {job.current && (
            <span
              aria-hidden="true"
              className="absolute -left-[9px] top-[3px] h-3 w-3 animate-pulse-ring rounded-full bg-accent/30"
            />
          )}

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
            {job.current && (
              <span className="rounded-full border border-accent-edge bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                Current
              </span>
            )}
          </div>

          <p className="mt-1 text-accent">{job.company}</p>

          <p className="mt-1.5 font-mono text-xs text-ink-mute">
            {job.period} · {job.location} · {job.mode}
          </p>

          <ul className="mt-5 space-y-2.5">
            {job.highlights.map((h, idx) => (
              <li
                key={idx}
                className="relative pl-5 text-[0.95rem] leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-ink-mute"
              >
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {job.skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export default Experience;
