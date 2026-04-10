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
      <SectionBgImage src={bgValue} alt="Warehouse operations" opacity={0.18} />
      <div className="section-container relative z-10">
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Outcomes</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Measurable impact on operations
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Proven results from real industrial environments. Not projections.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {outcomes.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6, boxShadow: "0 12px 40px hsl(265 30% 50% / 0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card overflow-hidden"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
              </div>
              <div className="p-8 flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text mb-1">{item.metric}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ValueSection;
