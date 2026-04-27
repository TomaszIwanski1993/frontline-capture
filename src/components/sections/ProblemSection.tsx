import { Users, TrendingDown, AlertTriangle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";
import cardKnowledge from "@/assets/card-problem-1-knowledge.jpg";
import cardTraining from "@/assets/card-problem-2-training.jpg";
import cardImpact from "@/assets/card-problem-3-impact.jpg";
import KnowledgeFlow from "@/components/KnowledgeFlow";
import { flowConfig } from "@/lib/flowConfig";

const icons = [Users, TrendingDown, AlertTriangle];
const cardImages = [cardKnowledge, cardTraining, cardImpact];

const ProblemSection = () => {
  const t = useT();

  return (
    <section id="problem" className="relative section-padding">
      <KnowledgeFlow {...flowConfig.problem} />
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

      </div>
    </section>
  );
};

export default ProblemSection;
