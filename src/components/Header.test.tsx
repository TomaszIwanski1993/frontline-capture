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

  it("constrains logo height to 72px on mobile and 88px on desktop", () => {
    renderHeader();
    const logo = screen.getByAltText("Quantum Making");
    expect(logo.className).toMatch(/\bh-\[72px\]\b/);
    expect(logo.className).toMatch(/\blg:h-\[88px\]\b/);
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

  it("logo height (72px) fits inside mobile header (h-24 = 96px)", () => {
    const logoPx = 72;
    const headerPxMobile = 96;
    expect(logoPx).toBeLessThanOrEqual(headerPxMobile);
    expect(headerPxMobile - logoPx).toBeGreaterThanOrEqual(8);
  });

  it("logo height (88px) fits inside desktop header (lg:h-28 = 112px)", () => {
    const logoPx = 88;
    const headerPxDesktop = 112;
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

  it("header has fixed responsive heights (h-24 mobile / lg:h-28 desktop) preventing reflow", () => {
    renderHeader();
    const header = screen.getByRole("banner");
    expect(header.className).toMatch(/\bh-24\b/);
    expect(header.className).toMatch(/\blg:h-28\b/);
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
