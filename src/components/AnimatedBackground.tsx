const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(265 45% 97% / 0.9) 35%, hsl(275 45% 96% / 0.8) 60%, hsl(var(--background)) 85%, hsl(var(--background)) 100%)",
        }}
      />

      <div
        className="wave-bg absolute top-[4%] left-[-16%] w-[92%] h-[28%] rotate-[8deg] rounded-[999px] blur-[70px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(265 70% 72% / 0.40) 0%, hsl(278 60% 72% / 0.20) 42%, transparent 72%)",
        }}
      />
      <div
        className="wave-bg-2 absolute top-[26%] right-[-14%] w-[86%] h-[26%] -rotate-[10deg] rounded-[999px] blur-[66px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(280 65% 74% / 0.34) 0%, hsl(265 55% 70% / 0.16) 44%, transparent 72%)",
        }}
      />
      <div
        className="wave-bg-3 absolute bottom-[22%] left-[4%] w-[72%] h-[20%] rotate-[5deg] rounded-[999px] blur-[62px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(258 60% 72% / 0.24) 0%, hsl(270 55% 70% / 0.12) 46%, transparent 72%)",
        }}
      />
      <div
        className="wave-bg-4 absolute top-[18%] left-[18%] w-[40%] h-[40%] rounded-full blur-[90px]"
        style={{
          background: "radial-gradient(circle at center, hsl(268 65% 76% / 0.26), transparent 68%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(265 35% 58%) 0.8px, transparent 0.8px), radial-gradient(circle, hsl(280 35% 62%) 0.6px, transparent 0.6px)",
          backgroundSize: "42px 42px, 28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
