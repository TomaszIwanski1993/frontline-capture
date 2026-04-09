const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large primary wave — top-left, slow diagonal drift */}
      <div
        className="wave-bg absolute -top-[20%] -left-[15%] w-[90%] h-[90%] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(ellipse at 40% 40%, hsl(265 55% 70% / 0.08), hsl(280 50% 65% / 0.04) 50%, transparent 75%)",
        }}
      />
      {/* Secondary wave — bottom-right */}
      <div
        className="wave-bg-2 absolute -bottom-[15%] -right-[10%] w-[75%] h-[75%] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(ellipse at 60% 60%, hsl(280 50% 68% / 0.07), hsl(265 45% 60% / 0.03) 50%, transparent 70%)",
        }}
      />
      {/* Tertiary accent — center-left, adds depth */}
      <div
        className="wave-bg-3 absolute top-[30%] left-[20%] w-[55%] h-[55%] rounded-full blur-[160px]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(260 50% 65% / 0.05), transparent 65%)",
        }}
      />
      {/* Fourth layer — top-right, counter-motion */}
      <div
        className="wave-bg-4 absolute -top-[10%] right-[5%] w-[45%] h-[50%] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(ellipse at 70% 30%, hsl(270 55% 72% / 0.06), transparent 65%)",
        }}
      />
      {/* Mesh/grain overlay for texture depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(265 40% 60%) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(280 40% 60%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
