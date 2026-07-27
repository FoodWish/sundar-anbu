import React, { useMemo, useState } from "react";
import { apps, projects } from "../data/profile";
import { ArrowIcon, Chip, Reveal, Section, SectionHeading } from "./ui";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
    <path d="M17.05 12.54c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.62-1.7-3.18-1.72-1.35-.14-2.64.8-3.33.8-.69 0-1.75-.78-2.87-.76-1.48.02-2.84.86-3.6 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.25 2.75 2.2 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.08 2.67-2.14.84-1.23 1.19-2.42 1.2-2.48-.03-.01-2.3-.88-2.34-3.51zM14.88 5.6c.6-.74 1.01-1.76.9-2.78-.87.04-1.93.58-2.56 1.31-.56.65-1.06 1.7-.93 2.7.97.08 1.97-.49 2.59-1.23z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
    <path d="M3.6 2.3a1 1 0 00-.35.77v17.86a1 1 0 00.35.77l.1.06 10-10v-.24l-10-10-.1.05zm13.44 6.6l-2.72-1.57-2.3 2.3 2.3 2.3 2.75-1.58a1 1 0 000-1.74l-.03-.01zM4.6 21.6l8.44-8.44 2.3 2.3-10.1 5.83a1 1 0 01-.64.31zm8.44-10.87L4.6 2.3a1 1 0 01.64.3l10.1 5.84-2.3 2.3z" />
  </svg>
);

const StoreLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-divider px-3 py-2 text-xs text-ink-soft transition-colors duration-200 hover:border-accent-edge hover:text-accent"
  >
    {icon}
    {label}
  </a>
);

const ProjectCard = ({ project }) => {
  const Wrapper = project.href ? "a" : "div";
  const linkProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-divider hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]"
    >
      {/* Monogram band replaces the screenshots this site used to 404 on. */}
      <div
        className="relative flex h-32 items-center justify-between overflow-hidden px-6"
        style={{
          background: `linear-gradient(135deg, ${project.accent}1F 0%, ${project.accent}08 50%, transparent 100%)`,
        }}
      >
        <span
          className="font-mono text-5xl font-bold opacity-70 transition-transform duration-500 group-hover:scale-105"
          style={{ color: project.accent }}
        >
          {project.title.charAt(0)}
        </span>
        <div className="text-right">
          <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">
            {project.category}
          </span>
          <span className="mt-1 block font-mono text-xs text-ink-soft">
            {project.year}
          </span>
        </div>
        <span
          className="absolute inset-x-0 bottom-0 h-px"
          style={{ background: `linear-gradient(90deg, ${project.accent}66, transparent)` }}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug text-ink">{project.title}</h3>
          {project.href && (
            <ArrowIcon className="mt-0.5 shrink-0 text-ink-mute transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </div>

        <p className="mt-1 font-mono text-xs text-ink-mute">{project.org}</p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Work = () => {
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="work" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow="03 — Work"
        title="Products I've taken to production."
        lead="Platforms serving real users in healthcare, edtech, investment and food delivery — plus three apps live on the App Store and Google Play."
      />

      <Reveal>
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mb-10 flex flex-wrap gap-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-200 ${
                filter === c
                  ? "border-accent-edge bg-accent-soft text-accent"
                  : "border-hairline text-ink-soft hover:border-divider hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05} className="flex">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24">
        <div className="rule-fade mb-14" />
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-ink">
          On the App Store & Google Play
        </h3>
        <p className="mb-10 max-w-2xl text-ink-soft">
          Cross-platform clients built with Flutter, shipped and maintained
          through review on both stores.
        </p>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {apps.map((app) => (
            <div key={app.name} className="flex flex-col bg-surface p-6">
              <h4 className="font-semibold text-ink">{app.name}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {app.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {app.ios && (
                  <StoreLink
                    href={app.ios}
                    icon={<AppleIcon />}
                    label="App Store"
                  />
                )}
                {app.android && (
                  <StoreLink
                    href={app.android}
                    icon={<PlayIcon />}
                    label="Google Play"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default Work;
