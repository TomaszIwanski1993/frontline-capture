import iconLogo from "@/assets/logo-quantum-icon-on-light.svg";

/**
 * Persistent left-side brand rail.
 * - Desktop (lg+): ~18% width, fixed, with infinity icon + soft glow + thin accent line
 * - Mobile/tablet: collapses to a slim 4px gradient accent strip with infinity at top
 * Purely decorative, never blocks content (pointer-events-none).
 */
const BrandRail = () => {
  return (
    <>
      {/* Mobile / tablet: thin accent line on the very left edge */}
      <div
        aria-hidden="true"
        className="lg:hidden fixed inset-y-0 left-0 z-0 w-1 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-accent/25 to-transparent" />
        <img
          src={iconLogo}
          alt=""
          className="absolute top-24 left-1/2 -translate-x-1/2 w-6 opacity-70"
        />
      </div>

      {/* Desktop: full vertical brand rail */}
      <aside
        aria-hidden="true"
        className="hidden lg:block fixed inset-y-0 left-0 z-0 w-[18vw] max-w-[260px] min-w-[180px] pointer-events-none"
      >
        {/* Soft tinted background gradient — barely-there */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-accent/[0.03] to-transparent" />

        {/* Thin vertical accent line, flush right of the rail */}
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-70" />

        {/* Sticky inner so the visual stays in view as you scroll */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-32">
          {/* Glow halo behind the icon */}
          <div className="relative w-full flex items-center justify-center">
            <div
              className="absolute w-48 h-48 rounded-full blur-3xl opacity-60 animate-glow-pulse"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, hsl(var(--accent) / 0.15) 45%, transparent 70%)",
              }}
            />
            <img
              src={iconLogo}
              alt=""
              className="relative w-20 xl:w-24 opacity-90 animate-float-slow"
            />
          </div>

          {/* Vertical wordmark — small, rotated, set low */}
          <div className="mt-auto mb-16 flex flex-col items-center gap-3">
            <div className="h-24 w-px bg-gradient-to-b from-transparent to-foreground/30" />
            <span
              className="text-[10px] font-medium tracking-[0.4em] uppercase text-foreground/40"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Quantum
            </span>
            <div className="h-24 w-px bg-gradient-to-b from-foreground/30 to-transparent" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default BrandRail;
