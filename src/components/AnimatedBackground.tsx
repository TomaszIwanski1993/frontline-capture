const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary wave — top-left, large slow drift */}
      <div
        className="wave-bg absolute -top-[25%] -left-[20%] w-[100%] h-[100%] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at 35% 35%, hsl(265 60% 72% / 0.18), hsl(280 55% 68% / 0.08) 45%, transparent 70%)",
        }}
      />
      {/* Secondary wave — bottom-right counter-motion */}
      <div
        className="wave-bg-2 absolute -bottom-[20%] -right-[15%] w-[85%] h-[85%] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at 65% 65%, hsl(280 55% 70% / 0.15), hsl(265 50% 65% / 0.06) 45%, transparent 70%)",
        }}
      />
      {/* Tertiary — center, adds midground glow */}
      <div
        className="wave-bg-3 absolute top-[25%] left-[15%] w-[65%] h-[60%] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(260 55% 70% / 0.12), hsl(270 45% 65% / 0.04) 50%, transparent 70%)",
        }}
      />
      {/* Fourth — top-right accent */}
      <div
        className="wave-bg-4 absolute -top-[10%] right-[0%] w-[55%] h-[60%] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(ellipse at 70% 25%, hsl(270 60% 75% / 0.14), hsl(285 50% 70% / 0.05) 50%, transparent 70%)",
        }}
      />
      {/* Fifth — mid-bottom left, extra depth */}
      <div
        className="wave-bg absolute top-[55%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 70%, hsl(258 50% 68% / 0.1), transparent 65%)",
          animationDelay: "-8s",
        }}
      />
      {/* Sixth — far bottom-right, subtle warm accent */}
      <div
        className="wave-bg-2 absolute bottom-[5%] right-[10%] w-[40%] h-[40%] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(275 50% 72% / 0.09), transparent 60%)",
          animationDelay: "-14s",
        }}
      />
      {/* Dot-mesh overlay for fine texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(265 40% 55%) 1px, transparent 1px),
                           radial-gradient(circle, hsl(280 40% 55%) 0.5px, transparent 0.5px)`,
          backgroundSize: "48px 48px, 32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
