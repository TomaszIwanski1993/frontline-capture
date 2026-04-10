const PositioningSection = () => {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="section-container relative z-10 max-w-3xl text-center">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
          The Quantum Layer
        </p>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground tracking-tight leading-[1.15]">
          A new layer for frontline operations
        </h2>
        <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Most operations rely on undocumented human expertise.
        </p>
        <p className="mt-4 text-base lg:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
          Quantum creates a new operational layer — capturing how work is actually done,
          structuring it with AI, and making it accessible in real time.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default PositioningSection;
