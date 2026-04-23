import { Users, Clock, AlertTriangle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import bgProblem from "@/assets/bg-problem-worker.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardKnowledge from "@/assets/card-knowledge.jpg";
import cardOnboarding from "@/assets/card-onboarding.jpg";
import cardRisk from "@/assets/card-risk.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";

const icons = [Users, Clock, AlertTriangle];
const images = [cardKnowledge, cardOnboarding, cardRisk];

const ProblemSection = () => {
  const t = useT();
  const { count: stat1, ref: stat1Ref } = useCountUp(80, 2000);
  const { count: stat2, ref: stat2Ref } = useCountUp(12, 2000);

  return (
    <section id="problem" className="relative section-padding">
      <SectionBgImage src={bgProblem} alt="Worker at controls" opacity={0.18} />
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
                  {t.problem.eyebrow}
                </p>
                <h2 className="mt-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]">
                  {t.problem.title}
                </h2>
                <p className="mt-6 text-foreground/65 text-base lg:text-lg leading-relaxed max-w-2xl">
                  {t.problem.sub}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {t.problem.cards.map((p, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={p.title} delay={0.08 * i}>
                <div className="glass-card overflow-hidden h-full">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={images[i]}
                      alt={p.title}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Icon className="h-5 w-5 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          <ScrollReveal delay={0}>
            <div className="rounded-md border border-border bg-card p-8 lg:p-10 text-center">
              <p
                className="text-5xl lg:text-7xl font-black text-foreground tracking-tight"
                ref={stat1Ref as React.Ref<HTMLParagraphElement>}
              >
                50-{stat1}%
                <sup className="text-base lg:text-lg text-primary ml-1 align-super">*</sup>
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {t.problem.stat1}{" "}
                <span className="text-foreground font-semibold">{t.problem.stat1Bold}</span>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-md border border-border bg-card p-8 lg:p-10 text-center">
              <p
                className="text-5xl lg:text-7xl font-black text-foreground tracking-tight"
                ref={stat2Ref as React.Ref<HTMLParagraphElement>}
              >
                6-{stat2}mo
                <sup className="text-base lg:text-lg text-primary ml-1 align-super">*</sup>
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {t.problem.stat2}{" "}
                <span className="text-foreground font-semibold">{t.problem.stat2Bold}</span>
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 max-w-3xl text-xs text-muted-foreground/70 leading-relaxed space-y-1">
            <p>{t.sources.stat1}</p>
            <p>{t.sources.stat2}</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ProblemSection;
