const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="section-container max-w-3xl">
        <div>
          <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">About</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
            Built from the factory floor
          </h2>
        </div>

        <div className="mt-8 space-y-5 text-muted-foreground text-base leading-relaxed">
          <p>
            We've worked inside real operations and watched critical knowledge
            disappear when experienced operators left.
          </p>
          <p>
            Quantum makes that knowledge permanent, scalable,
            and usable in real time.
          </p>
          <p className="text-foreground font-medium">
            We don't replace human expertise. We make it accessible
            to every operator, on every shift.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default AboutSection;
