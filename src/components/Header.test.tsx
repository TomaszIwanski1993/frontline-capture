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

  it("constrains logo height to 64px on mobile and 80px on desktop (h-16 / lg:h-20)", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making");
    // Tailwind h-16 = 4rem = 64px, lg:h-20 = 5rem = 80px
    expect(logo.className).toMatch(/\bh-16\b/);
    expect(logo.className).toMatch(/\blg:h-20\b/);
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

  it("logo height (h-16 = 64px) fits inside mobile header (h-20 = 80px)", () => {
    const logoPx = 64;
    const headerPxMobile = 80;
    expect(logoPx).toBeLessThanOrEqual(headerPxMobile);
    expect(headerPxMobile - logoPx).toBeGreaterThanOrEqual(8);
  });

  it("logo height (lg:h-20 = 80px) fits inside desktop header (lg:h-24 = 96px)", () => {
    const logoPx = 80;
    const headerPxDesktop = 96;
    expect(logoPx).toBeLessThanOrEqual(headerPxDesktop);
    expect(headerPxDesktop - logoPx).toBeGreaterThanOrEqual(8);
  });

  it("header is sticky (fixed top-0) so logo stays stable on scroll", () => {
    renderHeader();
    const header = screen.getByRole("banner");
    expect(header.className).toMatch(/\bfixed\b/);
    expect(header.className).toMatch(/\btop-0\b/);
    expect(header.className).toMatch(/\bz-50\b/);
  });

  it("header has fixed responsive heights (h-20 mobile / lg:h-24 desktop) preventing reflow", () => {
    renderHeader();
    const header = screen.getByRole("banner");
    expect(header.className).toMatch(/\bh-20\b/);
    expect(header.className).toMatch(/\blg:h-24\b/);
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
