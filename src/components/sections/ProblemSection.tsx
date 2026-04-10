import { Users, Clock, AlertTriangle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import bgProblem from "@/assets/bg-problem-worker.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardKnowledge from "@/assets/card-knowledge.jpg";
import cardOnboarding from "@/assets/card-onboarding.jpg";
import cardRisk from "@/assets/card-risk.jpg";
import layersProblem from "@/assets/layers-problem.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const problems = [
  {
    icon: Users,
    title: "Knowledge lives in people, not systems",
    description:
      "Critical operational know-how exists only in the heads of experienced operators. When they leave, that knowledge disappears. No workaround fixes this.",
    image: cardKnowledge,
  },
  {
    icon: Clock,
    title: "Onboarding is slow and inconsistent",
    description:
      "New operators learn through shadowing and trial-and-error. The result: months of wasted ramp-up time, inconsistent quality, and repeated mistakes.",
    image: cardOnboarding,
  },
  {
    icon: AlertTriangle,
    title: "Loss of experience creates operational risk",
    description:
      "Every retirement, resignation, or shift change disrupts output. Dependence on a small number of key individuals weakens the entire operation.",
    image: cardRisk,
  },
];

const ProblemSection = () => {
  const { count: stat1, ref: stat1Ref } = useCountUp(70, 2000);
  const { count: stat2, ref: stat2Ref } = useCountUp(12, 2000);

  return (
    <section id="problem" className="relative section-padding">
      <SectionBgImage src={bgProblem} alt="Worker at controls" opacity={0.18} />
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">The Problem</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                  Operational knowledge is disappearing — and it's costing you
                </h2>
                <p className="mt-3 text-muted-foreground text-base max-w-2xl">
                  When experienced operators leave, performance drops, errors increase,
                  and onboarding slows down. Most of what they know has never been documented.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15} className="flex-shrink-0">
            <img
              src={layersProblem}
              alt="Knowledge layers fragmenting"
              loading="lazy"
              width={800}
              height={800}
              className="w-48 lg:w-64 rounded-lg"
            />
          </ScrollReveal>
        </div>

        {/* Cost of inaction strip */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { label: "Slower operations", detail: "Every departure removes the knowledge that keeps lines running at peak efficiency." },
            { label: "Inconsistent execution", detail: "Without shared expertise, output quality varies shift to shift, site to site." },
            { label: "More errors and downtime", detail: "Undocumented workarounds disappear. Problems that were solved years ago resurface." },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={0.08 * i}>
              <div className="border-l-2 border-primary/40 pl-4 py-2">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <ScrollReveal key={p.title} delay={0.08 * i}>
              <div className="glass-card overflow-hidden h-full">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
                </div>
                <div className="p-6">
                  <p.icon className="h-5 w-5 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          <ScrollReveal delay={0}>
            <div className="rounded-md border border-border bg-card p-8 lg:p-10 text-center">
              <p
                className="text-5xl lg:text-7xl font-black text-foreground tracking-tight"
                ref={stat1Ref as React.Ref<HTMLParagraphElement>}
              >
                {stat1}%
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                of operational knowledge is <span className="text-foreground font-semibold">undocumented</span>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-md border border-border bg-card p-8 lg:p-10 text-center">
              <p
                className="text-5xl lg:text-7xl font-black text-foreground tracking-tight"
                ref={stat2Ref as React.Ref<HTMLParagraphElement>}
              >
                6–{stat2}mo
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                to <span className="text-foreground font-semibold">replace one experienced operator</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ProblemSection;
