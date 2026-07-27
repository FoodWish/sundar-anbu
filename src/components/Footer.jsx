import React from "react";
import { profile, socials } from "../data/profile";

const Footer = () => (
  <footer className="border-t border-hairline">
    <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
      <div>
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-edge bg-accent-soft font-mono text-xs text-accent">
            SA
          </span>
          <span className="font-semibold tracking-tight">{profile.name}</span>
        </a>
        <p className="mt-3 text-sm text-ink-mute">
          {profile.role} · {profile.location}
        </p>
      </div>

      <nav aria-label="Social links" className="flex flex-wrap gap-x-6 gap-y-2">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft transition-colors duration-200 hover:text-accent"
          >
            {s.name}
          </a>
        ))}
      </nav>
    </div>

    <div className="mx-auto max-w-content px-6 pb-10 md:px-10">
      <div className="rule-fade mb-6" />
      <p className="font-mono text-xs text-ink-mute">
        © {new Date().getFullYear()} {profile.name}. Built with React and
        TailwindCSS.
      </p>
    </div>
  </footer>
);

export default Footer;
