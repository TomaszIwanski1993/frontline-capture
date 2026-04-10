const PositioningSection = () => {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="section-container relative z-10 max-w-3xl text-center">
        <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
          The Quantum Layer
        </p>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground tracking-tight leading-[1.2]">
          A new operational layer for frontline work
        </h2>
        <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Most operations depend on undocumented human expertise.
          Quantum captures how work is actually done, structures it with AI in seconds,
          and delivers it to operators in real time.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default PositioningSection;
