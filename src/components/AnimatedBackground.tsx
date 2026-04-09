const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="wave-bg absolute -top-1/2 -left-1/4 w-[150%] h-[150%] opacity-[0.04] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, hsl(265 55% 60%), transparent 70%)" }}
      />
      <div
        className="wave-bg-2 absolute -bottom-1/2 -right-1/4 w-[130%] h-[130%] opacity-[0.03] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, hsl(280 50% 55%), transparent 70%)" }}
      />
      <div
        className="wave-bg absolute top-1/4 right-0 w-[60%] h-[60%] opacity-[0.025] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, hsl(260 50% 55%), transparent 70%)" }}
      />
    </div>
  );
};

export default AnimatedBackground;
