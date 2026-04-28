import { Video, Layers, PlayCircle } from "lucide-react";
import bgHowIt from "@/assets/bg-howit-collab.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import KnowledgeFlow from "@/components/KnowledgeFlow";
import { flowConfig } from "@/lib/flowConfig";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";

const icons = [Video, Layers, PlayCircle];
const numbers = ["01", "02", "03"];

const HowItWorksSection = () => {
  const t = useT();
  return (
    <section id="how-it-works" className="relative section-padding">
      <SectionBgImage src={bgHowIt} alt="Team collaboration" opacity={0.12} />
      <KnowledgeFlow {...flowConfig.howItWorks} />
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
                  {t.howItWorks.eyebrow}
                </p>
                <h2 className="mt-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]">
                  {t.howItWorks.title}
                </h2>
                <p className="mt-6 text-foreground/65 text-base lg:text-lg leading-relaxed max-w-2xl">
                  {t.howItWorks.sub}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={numbers[i]} delay={0.1 * i}>
                <div className="relative">
                  <span
                    className="text-7xl font-black block select-none leading-none animate-step-glow"
                    style={{
                      animationDelay: `${i * 1.5}s`,
                      color: "hsl(239 96% 47%)",
                    }}
                  >
                    {numbers[i]}
                  </span>
                  <Icon className="h-5 w-5 text-primary mt-3 mb-3" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground mb-3 whitespace-pre-line">{step.title}</h3>
                  <p className="text-foreground/65 text-sm leading-relaxed">{step.description}</p>

                  {i < t.howItWorks.steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 -right-4 w-8 h-px bg-border" />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HowItWorksSection;
