const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="section-container max-w-3xl">
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">About</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            We've seen this problem first-hand
          </h2>
        </div>

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            We've worked inside real operations, and seen critical knowledge
            disappear when experienced operators leave.
          </p>
          <p>
            Quantum was built to make that knowledge permanent, scalable,
            and usable in real time.
          </p>
          <p>
            We're not replacing human expertise. We're making it accessible
            to every operator.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default AboutSection;
