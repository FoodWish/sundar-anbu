import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks, profile } from "../data/profile";

// Tracks which section is currently in the reading position so the nav can
// mark it. Rootmargin pins the trigger line near the top of the viewport.
const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navLinks.map((l) => l.path.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return active;
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 16);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-hairline bg-canvas/80 backdrop-blur-xl" : ""
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-px origin-left bg-accent transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />

      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10"
      >
        <a
          href="#top"
          className="flex items-center gap-3 text-sm font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-edge bg-accent-soft font-mono text-xs text-accent">
            SA
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.path.slice(1);
            return (
              <li key={link.path}>
                <a
                  href={link.path}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm transition-colors duration-200 ${
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.title}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-divider px-4 py-2 text-sm text-ink transition-colors duration-200 hover:border-accent-edge hover:text-accent"
            >
              Résumé
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-divider text-ink md:hidden"
        >
          {open ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-canvas/95 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="block border-b border-hairline py-4 text-lg text-ink-soft transition-colors hover:text-accent"
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-accent"
              >
                Résumé ↓
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
