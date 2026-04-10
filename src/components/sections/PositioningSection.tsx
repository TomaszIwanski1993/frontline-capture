import ScrollReveal from "@/components/ScrollReveal";
import FloatingVisual from "@/components/FloatingVisual";
import layersImg from "@/assets/layers-illustration.jpg";

const PositioningSection = () => {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text — left */}
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal>
              <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
                The Quantum Layer
              </p>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground tracking-tight leading-[1.2]">
                A new operational layer for frontline work
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Most operations depend on undocumented human expertise.
                Quantum captures how work is actually done, structures it with AI in seconds,
                and delivers it to operators in real time.
              </p>
            </ScrollReveal>
          </div>

          {/* Image — right */}
          <ScrollReveal delay={0.15} className="flex-1 flex justify-center">
            <FloatingVisual variant="alt">
              <img
                src={layersImg}
                alt="Stacked operational knowledge layers"
                loading="lazy"
                width={800}
                height={800}
                className="w-full max-w-sm lg:max-w-md rounded-lg"
              />
            </FloatingVisual>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default PositioningSection;
