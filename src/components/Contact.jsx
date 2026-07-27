import React, { useState } from "react";
import { profile, socials } from "../data/profile";
import { ArrowIcon, Reveal, Section, SectionHeading } from "./ui";

const field =
  "w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink placeholder-ink-mute transition-colors duration-200 focus:border-accent-edge focus:outline-none";

const Contact = () => {
  const [sent, setSent] = useState(false);

  // Hands the message to the visitor's own mail client, prefilled. No backend,
  // and — unlike the previous version — no success message unless something
  // actually happened.
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const from = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const body = `${message}\n\n—\nReply to: ${from}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading
        id="contact-heading"
        eyebrow="04 — Contact"
        title="Let's build something."
        lead={`${profile.status}. My inbox is always open — whether you have a question or just want to say hi, I'll do my best to get back to you.`}
      />

      <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <Reveal>
          <dl className="space-y-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-1.5 text-lg text-ink transition-colors hover:text-accent"
                >
                  {profile.email}
                  <ArrowIcon className="text-ink-mute transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                Based in
              </dt>
              <dd className="mt-2 text-lg text-ink">{profile.location}</dd>
            </div>

            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                Elsewhere
              </dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-hairline px-4 py-2 text-sm text-ink-soft transition-colors duration-200 hover:border-accent-edge hover:text-accent"
                  >
                    {s.name}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-ink-mute"
              >
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={field}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-ink-mute"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Forward Deployed Engineer role"
                className={field}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-ink-mute"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about the problem you're trying to solve…"
                className={`${field} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-canvas transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_8px_30px_-8px_rgba(255,176,32,0.6)] sm:w-auto"
            >
              Open in mail app
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {sent && (
              <p
                role="status"
                className="rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-ink-soft"
              >
                Your mail app should have opened with the message ready to send.
                If nothing happened, email{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent underline underline-offset-4"
                >
                  {profile.email}
                </a>{" "}
                directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
