const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Subtle structural grid — fades toward edges */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 12% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 12% 50%) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      {/* Edge dissolve — all four edges fade to background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, hsl(var(--background)) 0%, transparent 12%, transparent 88%, hsl(var(--background)) 100%),
            linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 8%, transparent 92%, hsl(var(--background)) 100%)
          `,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
