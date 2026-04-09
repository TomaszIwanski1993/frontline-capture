const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(265 45% 99% / 0.92) 35%, hsl(275 45% 98% / 0.82) 60%, hsl(var(--background)) 100%)",
        }}
      />

      <div
        className="wave-bg absolute top-[4%] left-[-16%] w-[92%] h-[28%] rotate-[8deg] rounded-[999px] blur-[88px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(265 70% 74% / 0.24) 0%, hsl(278 60% 74% / 0.12) 42%, transparent 72%)",
        }}
      />
      <div
        className="wave-bg-2 absolute top-[26%] right-[-14%] w-[86%] h-[26%] -rotate-[10deg] rounded-[999px] blur-[84px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(280 65% 76% / 0.2) 0%, hsl(265 55% 72% / 0.1) 44%, transparent 72%)",
        }}
      />
      <div
        className="wave-bg-3 absolute bottom-[12%] left-[4%] w-[82%] h-[24%] rotate-[5deg] rounded-[999px] blur-[78px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(258 60% 74% / 0.16) 0%, hsl(270 55% 72% / 0.08) 46%, transparent 72%)",
        }}
      />
      <div
        className="wave-bg-4 absolute top-[18%] left-[18%] w-[40%] h-[40%] rounded-full blur-[115px]"
        style={{
          background: "radial-gradient(circle at center, hsl(268 65% 78% / 0.16), transparent 68%)",
        }}
      />
      <div
        className="wave-bg absolute bottom-[20%] right-[8%] w-[34%] h-[22%] -rotate-[12deg] rounded-[999px] blur-[74px]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(284 58% 76% / 0.14), transparent 70%)",
          animationDelay: "-10s",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
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
