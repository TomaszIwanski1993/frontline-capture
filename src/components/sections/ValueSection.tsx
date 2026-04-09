import { motion } from "framer-motion";
import { TrendingDown, CheckCircle, Shield, RefreshCw } from "lucide-react";

const outcomes = [
  {
    icon: TrendingDown,
    metric: "20–40%",
    title: "Faster time-to-proficiency",
    description: "New operators reach competence significantly faster with structured, real-world task guidance — reducing onboarding from months to weeks.",
  },
  {
    icon: CheckCircle,
    metric: "Measurably",
    title: "More consistent execution",
    description: "When every operator works from the same proven knowledge base, task execution variability drops and quality becomes predictable across shifts.",
  },
  {
    icon: Shield,
    metric: "Eliminated",
    title: "Single points of failure",
    description: "Critical knowledge is no longer locked in a few experts' heads. Operations continue smoothly through retirements, turnover, and shift changes.",
  },
  {
    icon: RefreshCw,
    metric: "Continuous",
    title: "Knowledge continuity",
    description: "Institutional know-how persists regardless of personnel changes. Every departure stops being a knowledge emergency.",
  },
];

const ValueSection = () => {
  return (
    <section id="outcomes" className="relative section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Outcomes</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Measurable impact on operations
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Real improvements validated in industrial environments — not marketing claims.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 flex gap-5"
            >
              <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <p className="text-2xl font-bold gradient-text mb-1">{item.metric}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
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
