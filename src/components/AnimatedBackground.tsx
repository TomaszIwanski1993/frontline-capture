const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(260 20% 97% / 0.7) 40%, hsl(260 16% 97% / 0.5) 65%, hsl(var(--background)) 90%, hsl(var(--background)) 100%)",
        }}
      />

      <div
        className="wave-bg absolute top-[4%] left-[-16%] w-[92%] h-[28%] rotate-[8deg] rounded-[999px] blur-[80px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(265 50% 72% / 0.18) 0%, hsl(270 40% 72% / 0.08) 42%, transparent 72%)",
        }}
      />
      <div
        className="wave-bg-2 absolute top-[26%] right-[-14%] w-[86%] h-[26%] -rotate-[10deg] rounded-[999px] blur-[70px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(270 45% 74% / 0.14) 0%, hsl(260 38% 70% / 0.06) 44%, transparent 72%)",
        }}
      />
      <div
        className="wave-bg-3 absolute bottom-[22%] left-[4%] w-[72%] h-[20%] rotate-[5deg] rounded-[999px] blur-[68px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(258 42% 72% / 0.12) 0%, hsl(265 36% 70% / 0.05) 46%, transparent 72%)",
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(250 20% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(250 20% 60%) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
