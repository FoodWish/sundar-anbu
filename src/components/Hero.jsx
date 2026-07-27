import React from "react";
import { profile, stats } from "../data/profile";
import { ArrowIcon, Button, Reveal } from "./ui";

const Hero = () => (
  <section
    id="top"
    aria-label="Introduction"
    className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
  >
    <div className="hero-glow" aria-hidden="true" />
    <div className="absolute inset-0 grid-lines" aria-hidden="true" />

    <div className="relative mx-auto grid w-full max-w-content grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
      <div>
        <Reveal>
          <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent-edge bg-accent-soft px-4 py-1.5 font-mono text-xs text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.status}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="font-mono text-sm text-ink-mute">{profile.name}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-3 text-[clamp(2.75rem,7vw,5.25rem)] font-bold leading-[0.95] tracking-tightest text-ink">
            Forward Deployed
            <br />
            Engineer<span className="text-accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#contact">
              Get in touch
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button href="#work" variant="secondary">
              View work
            </Button>
            <Button
              href={profile.resumeUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16">
            <div className="rule-fade mb-7" />
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-3xl font-bold tracking-tight text-ink">
                      {s.value}
                    </span>
                    <span className="mt-1 block font-mono text-xs uppercase tracking-wider text-ink-mute">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="order-first lg:order-last">
        <div className="portrait-ring mx-auto aspect-square w-52 sm:w-64 lg:w-full lg:max-w-sm">
          <img
            src={profile.portraitUrl}
            alt={`${profile.name}, ${profile.role}`}
            width="400"
            height="400"
            fetchpriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      </Reveal>
    </div>
  </section>
);

export default Hero;
