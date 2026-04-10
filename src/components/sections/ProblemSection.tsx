import { Users, Clock, AlertTriangle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import bgProblem from "@/assets/bg-problem-worker.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardKnowledge from "@/assets/card-knowledge.jpg";
import cardOnboarding from "@/assets/card-onboarding.jpg";
import cardRisk from "@/assets/card-risk.jpg";
import { motion } from "framer-motion";

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
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Operational knowledge is disappearing, and it's directly impacting performance
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            When experienced operators leave, performance drops, errors increase,
            and onboarding slows down. Most of what they know has never been documented.
          </p>
        </div>

        {/* Cost of inaction strip */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { label: "Slower operations", detail: "Every departure removes the knowledge that keeps lines running at peak efficiency." },
            { label: "Inconsistent execution", detail: "Without shared expertise, output quality varies shift to shift, site to site." },
            { label: "More errors and downtime", detail: "Undocumented workarounds disappear. Problems that were solved years ago resurface." },
          ].map((item) => (
            <div key={item.label} className="border-l-2 border-primary/40 pl-4 py-2">
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="glass-card overflow-hidden"
            >
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
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 lg:p-12 text-center">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <p
              className="lg:text-8xl xl:text-9xl font-black gradient-text tracking-tight text-4xl"
              style={{ filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.3))" }}
              ref={stat1Ref as React.Ref<HTMLParagraphElement>}
            >
              {stat1}%
            </p>
            <p className="text-base lg:text-lg text-muted-foreground mt-5 leading-relaxed">
              Most of your operation runs on <span className="text-foreground font-semibold">undocumented knowledge</span>
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 lg:p-12 text-center">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <p
              className="lg:text-8xl xl:text-9xl font-black gradient-text tracking-tight text-4xl"
              style={{ filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.3))" }}
              ref={stat2Ref as React.Ref<HTMLParagraphElement>}
            >
              6-{stat2} months
            </p>
            <p className="text-base lg:text-lg text-muted-foreground mt-5 leading-relaxed">
              It takes up to 12 months to <span className="text-foreground font-semibold">replace one experienced operator</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ProblemSection;
