import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageGate from "./LanguageGate";

const STORAGE_KEY = "quantum-language";

const APP_CONTENT = "App page content — should NOT be visible before language choice";

const renderApp = () =>
  render(
    <LanguageProvider>
      <LanguageGate />
      <main>
        <h1>{APP_CONTENT}</h1>
      </main>
    </LanguageProvider>,
  );

describe("LanguageGate — first visit gating & returning visit skip", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the gate on first visit (no stored language)", () => {
    renderApp();
    expect(screen.getByRole("dialog", { name: /language selection/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /english/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /polski/i })).toBeInTheDocument();
  });

  it("blocks the page content visually on first visit (gate is a fixed full-screen overlay above content)", () => {
    renderApp();
    const dialog = screen.getByRole("dialog", { name: /language selection/i });
    // The page content still mounts in the DOM (so SEO/markup is intact),
    // but the gate must overlay it: fixed full-screen, opaque background,
    // and a high z-index so nothing shows through.
    expect(dialog.className).toMatch(/\bfixed\b/);
    expect(dialog.className).toMatch(/\binset-0\b/);
    expect(dialog.className).toMatch(/z-\[1000\]/);
    // Opaque background so underlying content is not perceivable
    expect(dialog.style.backgroundColor.replace(/\s/g, "")).toBe("#ffffff");
    // The gate must NOT expose a dismiss/close affordance — choice is required
    expect(screen.queryByRole("button", { name: /close language selection/i })).toBeNull();
  });

  it("does NOT force a default language before the user chooses", () => {
    renderApp();
    // No language should be persisted yet — only choosing EN/PL writes storage
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });

  it("hides the gate after the user picks a language and persists the choice", () => {
    renderApp();
    fireEvent.click(screen.getByRole("button", { name: /english/i }));
    expect(screen.queryByRole("dialog", { name: /language selection/i })).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY)).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("persists Polish selection correctly", () => {
    renderApp();
    fireEvent.click(screen.getByRole("button", { name: /polski/i }));
    expect(screen.queryByRole("dialog", { name: /language selection/i })).toBeNull();
    expect(localStorage.getItem(STORAGE_KEY)).toBe("pl");
    expect(document.documentElement.lang).toBe("pl");
  });

  it("skips the gate on returning visits when a language is already saved", () => {
    localStorage.setItem(STORAGE_KEY, "pl");
    renderApp();
    expect(screen.queryByRole("dialog", { name: /language selection/i })).toBeNull();
    expect(document.documentElement.lang).toBe("pl");
    // App content is reachable
    expect(screen.getByText(APP_CONTENT)).toBeInTheDocument();
  });

  it("ignores invalid stored values and shows the gate again", () => {
    localStorage.setItem(STORAGE_KEY, "fr");
    renderApp();
    expect(screen.getByRole("dialog", { name: /language selection/i })).toBeInTheDocument();
  });
});
