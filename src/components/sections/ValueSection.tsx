import { TrendingDown, CheckCircle, Shield, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import bgValue from "@/assets/bg-value-logistics.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardProficiency from "@/assets/card-proficiency.jpg";
import cardConsistency from "@/assets/card-consistency.jpg";
import cardResilience from "@/assets/card-resilience.jpg";
import cardContinuity from "@/assets/card-continuity.jpg";

const outcomes = [
  {
    icon: TrendingDown,
    metric: "30-40%",
    title: "Faster time-to-proficiency",
    description: "Quantum cuts onboarding time by 30-40%. New operators reach competence in weeks, guided by structured knowledge from your best performers.",
    image: cardProficiency,
  },
  {
    icon: CheckCircle,
    metric: "Measurably",
    title: "Reduce variability across shifts and sites",
    description: "Every operator works from the same proven knowledge base. Execution becomes predictable. Quality stops depending on who's on shift.",
    image: cardConsistency,
  },
  {
    icon: Shield,
    metric: "Eliminated",
    title: "Single points of failure",
    description: "Critical knowledge no longer lives in a few experts' heads. Retirements and turnover stop disrupting operations.",
    image: cardResilience,
  },
  {
    icon: RefreshCw,
    metric: "Reduced",
    title: "Dependency on top-performing operators",
    description: "Quantum scales the expertise of your best people across every team and location. Their knowledge works even when they don't.",
    image: cardContinuity,
  },
];

const ValueSection = () => {
  return (
    <section id="outcomes" className="relative section-padding">
      <SectionBgImage src={bgValue} alt="Warehouse operations" opacity={0.12} />
      <div className="section-container relative z-10">
        <div>
          <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">Outcomes</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
            Measurable impact on operations
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-2xl">
            Proven results from real industrial deployments.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="glass-card overflow-hidden"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
              </div>
              <div className="p-6 flex gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <item.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xl font-bold gradient-text mb-1">{item.metric}</p>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ValueSection;
