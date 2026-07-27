import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { experience, profile, projects } from "./data/profile";

// jsdom has no IntersectionObserver; the nav's scroll-spy needs one.
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("renders the hero with name and role", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /forward deployed/i })
  ).toBeInTheDocument();
  expect(screen.getByText(profile.name, { selector: "p" })).toBeInTheDocument();
});

test("renders every role from the profile data", () => {
  render(<App />);
  const timeline = document.getElementById("experience");
  const headings = within(timeline)
    .getAllByRole("heading", { level: 3 })
    .map((h) => h.textContent);

  // Two roles share the title "Full-stack Developer", so compare as a multiset.
  expect(headings.sort()).toEqual(experience.map((j) => j.role).sort());
});

test("marks the current role and shows it first", () => {
  render(<App />);
  const badges = screen.getAllByText(/^current$/i);
  expect(badges).toHaveLength(1);
  expect(experience[0].current).toBe(true);
});

test("renders all projects with no image tags to 404", () => {
  render(<App />);
  const work = document.getElementById("work");

  // "Equios" is both a project and a published app, so allow repeats.
  projects.forEach((p) => {
    expect(within(work).getAllByText(p.title).length).toBeGreaterThan(0);
  });

  // The old cards pointed at /images/projects/*.png, which never existed.
  expect(within(work).queryAllByRole("img")).toHaveLength(0);
});

test("contact section points at the real email address", () => {
  render(<App />);
  const mailtos = screen
    .getAllByRole("link")
    .filter((a) => a.getAttribute("href")?.startsWith("mailto:"));
  expect(mailtos.length).toBeGreaterThan(0);
  mailtos.forEach((a) =>
    expect(a.getAttribute("href")).toContain(profile.email)
  );
});
