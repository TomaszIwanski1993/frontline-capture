const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary flowing wave — top left */}
      <div
        className="wave-bg absolute -top-[30%] -left-[20%] w-[80%] h-[80%] opacity-[0.035] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(ellipse at center, hsl(265 55% 65%), transparent 70%)" }}
      />
      {/* Secondary wave — bottom right */}
      <div
        className="wave-bg-2 absolute -bottom-[25%] -right-[15%] w-[70%] h-[70%] opacity-[0.025] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(ellipse at center, hsl(280 50% 60%), transparent 70%)" }}
      />
      {/* Tertiary accent — middle */}
      <div
        className="wave-bg-3 absolute top-[40%] left-[30%] w-[50%] h-[50%] opacity-[0.02] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(ellipse at center, hsl(260 45% 58%), transparent 65%)" }}
      />
    </div>
  );
};

export default AnimatedBackground;
