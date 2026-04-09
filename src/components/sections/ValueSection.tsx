import { motion } from "framer-motion";
import { TrendingDown, CheckCircle, Shield, RefreshCw } from "lucide-react";

const outcomes = [
  {
    icon: TrendingDown,
    title: "Reduced onboarding time",
    description: "New operators reach competence faster with structured, real-world task guidance — cutting weeks off traditional shadowing programs.",
  },
  {
    icon: CheckCircle,
    title: "More consistent execution",
    description: "When everyone works from the same proven knowledge base, quality variance drops and standard operating procedures actually get followed.",
  },
  {
    icon: Shield,
    title: "Lower dependency on key individuals",
    description: "Critical knowledge is no longer locked in a few experts' heads. Teams become more resilient, and shift handovers become smoother.",
  },
  {
    icon: RefreshCw,
    title: "Better knowledge continuity",
    description: "Retirements, turnover, and transfers stop being knowledge emergencies. Institutional know-how persists regardless of personnel changes.",
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
            Our clients see real improvements — not marketing claims. Here's what changes when operational knowledge is properly retained.
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
