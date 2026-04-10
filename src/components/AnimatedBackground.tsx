const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Subtle structural grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(220 12% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 12% 50%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient gradient orb — top right, drifts slowly */}
      <div
        className="absolute -top-[30%] -right-[20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(258 40% 50% / 0.07) 0%, hsl(258 30% 50% / 0.03) 40%, transparent 70%)",
          animation: "ambientDrift1 25s ease-in-out infinite alternate",
        }}
      />

      {/* Ambient gradient orb — bottom left, counter-drifts */}
      <div
        className="absolute -bottom-[25%] -left-[15%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(272 35% 45% / 0.06) 0%, hsl(258 25% 40% / 0.02) 45%, transparent 70%)",
          animation: "ambientDrift2 30s ease-in-out infinite alternate",
        }}
      />

      {/* Faint center glow — breathes slowly */}
      <div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(258 35% 55% / 0.04) 0%, transparent 60%)",
          animation: "ambientBreathe 20s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
