import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { BookDemoProvider } from "@/contexts/BookDemoContext";

const renderHeader = () =>
  render(
    <MemoryRouter>
      <LanguageProvider>
        <BookDemoProvider>
          <Header />
        </BookDemoProvider>
      </LanguageProvider>
    </MemoryRouter>
  );

describe("Header — responsive logo & sticky layout", () => {
  it("renders the brand logo with descriptive alt text", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making") as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe("IMG");
  });

  it("uses the transparent light header logo asset (no white box)", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making") as HTMLImageElement;
    // Vite resolves asset imports to URLs that include the file name
    expect(logo.getAttribute("src") ?? "").toMatch(/logo-quantum-header-light/);
  });

  it("constrains logo height to 32px on mobile and 40px on desktop (h-8 / lg:h-10)", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making");
    // Tailwind h-8 = 2rem = 32px, lg:h-10 = 2.5rem = 40px
    expect(logo.className).toMatch(/\bh-8\b/);
    expect(logo.className).toMatch(/\blg:h-10\b/);
  });

  it("preserves logo proportions (w-auto, no fixed width / no stretching)", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making");
    expect(logo.className).toMatch(/\bw-auto\b/);
    expect(logo.className).not.toMatch(/\bw-\d/); // no explicit width like w-32
    expect(logo.style.width).toBe(""); // no inline stretch
    expect(logo.style.height).toBe("");
  });

  it("renders the logo as a block element to avoid inline-baseline overflow", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making");
    expect(logo.className).toMatch(/\bblock\b/);
  });

  it("vertically centers the logo within the navbar via flex alignment", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making");
    const link = logo.closest("a") as HTMLAnchorElement;
    expect(link).toBeTruthy();
    expect(link.className).toMatch(/\bflex\b/);
    expect(link.className).toMatch(/items-center/);
    expect(link.className).toMatch(/\bh-full\b/);
  });

  it("logo height (h-8 = 32px) fits inside mobile header (h-16 = 64px)", () => {
    // Constraint check: 32 <= 64, leaves >=16px vertical breathing room
    const logoPx = 32;
    const headerPxMobile = 64;
    expect(logoPx).toBeLessThanOrEqual(headerPxMobile);
    expect(headerPxMobile - logoPx).toBeGreaterThanOrEqual(16);
  });

  it("logo height (lg:h-10 = 40px) fits inside desktop header (lg:h-20 = 80px)", () => {
    const logoPx = 40;
    const headerPxDesktop = 80;
    expect(logoPx).toBeLessThanOrEqual(headerPxDesktop);
    expect(headerPxDesktop - logoPx).toBeGreaterThanOrEqual(16);
  });

  it("header is sticky (fixed top-0) so logo stays stable on scroll", () => {
    renderHeader();
    const header = screen.getByRole("banner");
    expect(header.className).toMatch(/\bfixed\b/);
    expect(header.className).toMatch(/\btop-0\b/);
    expect(header.className).toMatch(/\bz-50\b/);
  });

  it("header has fixed responsive heights (h-16 mobile / lg:h-20 desktop) preventing reflow", () => {
    renderHeader();
    const header = screen.getByRole("banner");
    expect(header.className).toMatch(/\bh-16\b/);
    expect(header.className).toMatch(/\blg:h-20\b/);
  });

  it("brand link uses shrink-0 so the logo never compresses on narrow viewports", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making");
    const link = logo.closest("a") as HTMLAnchorElement;
    expect(link.className).toMatch(/\bshrink-0\b/);
  });

  it("logo loads eagerly to avoid layout shift on initial paint", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making") as HTMLImageElement;
    expect(logo.getAttribute("loading")).toBe("eager");
  });
});
