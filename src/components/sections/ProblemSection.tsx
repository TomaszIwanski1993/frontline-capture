import { Users, Clock, AlertTriangle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";
import cardKnowledge from "@/assets/card-problem-1-knowledge.jpg";
import cardTraining from "@/assets/card-problem-2-training.jpg";
import cardImpact from "@/assets/card-problem-3-impact.jpg";

const icons = [Users, Clock, AlertTriangle];
const cardImages = [cardKnowledge, cardTraining, cardImpact];

const ProblemSection = () => {
  const t = useT();
  const { count: stat1, ref: stat1Ref } = useCountUp(80, 2000);
  const { count: stat2, ref: stat2Ref } = useCountUp(12, 2000);

  return (
    <section id="problem" className="relative section-padding">
      <KnowledgeFlow mode="disperse" intensity={0.5} density={1.2} />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
              {t.problem.eyebrow}
            </p>
            <h2 className="mt-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]">
              {t.problem.title}
            </h2>
            <p className="mt-6 text-foreground/65 text-base lg:text-lg leading-relaxed">
              {t.problem.sub}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-20 grid md:grid-cols-3 gap-8 lg:gap-10">
          {t.problem.cards.map((p, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={p.title} delay={0.08 * i}>
                <div className="glass-card overflow-hidden h-full flex flex-col">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={cardImages[i]}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="card-padding flex-1">
                    <Icon className="h-6 w-6 text-primary mb-6" strokeWidth={1.5} />
                    <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                    <p className="text-foreground/65 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-20 grid sm:grid-cols-2 gap-6 lg:gap-8">
          <ScrollReveal delay={0}>
            <div className="rounded-lg border border-border/60 bg-card p-10 lg:p-12 text-center">
              <p
                className="text-5xl lg:text-7xl font-extrabold text-foreground tracking-tight"
                ref={stat1Ref as React.Ref<HTMLParagraphElement>}
              >
                50-{stat1}%
                <sup className="text-base lg:text-lg text-primary ml-1 align-super">*</sup>
              </p>
              <p className="text-sm text-foreground/65 mt-5 leading-relaxed">
                {t.problem.stat1}{" "}
                <span className="text-foreground font-semibold">{t.problem.stat1Bold}</span>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-border/60 bg-card p-10 lg:p-12 text-center">
              <p
                className="text-5xl lg:text-7xl font-extrabold text-foreground tracking-tight"
                ref={stat2Ref as React.Ref<HTMLParagraphElement>}
              >
                6-{stat2}mo
                <sup className="text-base lg:text-lg text-primary ml-1 align-super">*</sup>
              </p>
              <p className="text-sm text-foreground/65 mt-5 leading-relaxed">
                {t.problem.stat2}{" "}
                <span className="text-foreground font-semibold">{t.problem.stat2Bold}</span>
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 max-w-3xl text-xs text-muted-foreground/70 leading-relaxed space-y-1">
            <p>{t.sources.stat1}</p>
            <p>{t.sources.stat2}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
