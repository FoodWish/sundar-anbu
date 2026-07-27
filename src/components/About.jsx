import React, { useState } from "react";
import { education, impact, profile, skillGroups } from "../data/profile";
import { Chip, Reveal, Section, SectionHeading } from "./ui";

const TABS = [
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "impact", label: "Impact" },
];

const About = () => {
  const [tab, setTab] = useState("skills");

  return (
    <Section id="about" labelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="01 — About"
        title="I ship software that moves real metrics."
        lead={profile.summary}
      />

      <Reveal>
        <div
          role="tablist"
          aria-label="About details"
          className="flex gap-1 border-b border-hairline"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className={`relative px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                tab === t.id ? "text-ink" : "text-ink-mute hover:text-ink-soft"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <span className="absolute inset-x-0 -bottom-px h-px bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="pt-10">
          {tab === "skills" && (
            <div
              role="tabpanel"
              id="panel-skills"
              aria-labelledby="tab-skills"
              className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {skillGroups.map((g) => (
                <div key={g.group}>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                    {g.group}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "education" && (
            <ul
              role="tabpanel"
              id="panel-education"
              aria-labelledby="tab-education"
              className="divide-y divide-hairline"
            >
              {education.map((e) => (
                <li
                  key={e.school}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <div>
                    <h3 className="font-semibold text-ink">{e.school}</h3>
                    <p className="mt-0.5 text-sm text-ink-soft">
                      {e.credential}
                      {e.detail && (
                        <span className="text-ink-mute"> · {e.detail}</span>
                      )}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-ink-mute">
                    {e.period}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {tab === "impact" && (
            <ul
              role="tabpanel"
              id="panel-impact"
              aria-labelledby="tab-impact"
              className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
            >
              {impact.map((i) => (
                <li key={i.headline} className="bg-surface p-6">
                  <span className="block text-3xl font-bold tracking-tight text-accent">
                    {i.metric}
                  </span>
                  <span className="mt-1.5 block font-medium text-ink">
                    {i.headline}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink-mute">
                    {i.detail}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    </Section>
  );
};

export default About;
