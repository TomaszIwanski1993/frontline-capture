import ScrollReveal from "@/components/ScrollReveal";
import FloatingVisual from "@/components/FloatingVisual";
import KnowledgeFlow from "@/components/KnowledgeFlow";
import { flowConfig } from "@/lib/flowConfig";
import layersImg from "@/assets/layers-illustration.jpg";
import { useT } from "@/hooks/useT";

const PositioningSection = () => {
  const t = useT();
  return (
    <section className="relative py-14 lg:py-20">
      <KnowledgeFlow {...flowConfig.positioning} />
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal>
              <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
                {t.positioning.eyebrow}
              </p>
              <h2 className="mt-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]">
                {t.positioning.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base lg:text-lg text-foreground/65 leading-relaxed max-w-2xl">
                {t.positioning.body}
              </p>
            </ScrollReveal>
          </div>

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
