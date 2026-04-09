import { motion } from "framer-motion";
import { Users, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Knowledge lives in people, not systems",
    description:
      "Critical operational know-how — the workarounds, adjustments, and judgment calls — exists only in the heads of experienced operators. When they leave, that knowledge goes with them.",
  },
  {
    icon: Clock,
    title: "Onboarding is slow and inconsistent",
    description:
      "New operators learn through shadowing and trial-and-error. The result: months of ramp-up time, variable quality, and repeated mistakes that could have been avoided.",
  },
  {
    icon: AlertTriangle,
    title: "Loss of experience creates operational risk",
    description:
      "Every retirement, resignation, or shift change is a potential disruption. Organizations become dependent on a small number of key individuals — a fragile operating model.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Operational knowledge is disappearing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            In the next decade, an estimated 30% of the industrial workforce will retire.
            Most of what they know has never been documented.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8"
            >
              <p.icon className="h-6 w-6 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card p-6 flex flex-col sm:flex-row gap-8 sm:gap-16 items-start sm:items-center"
        >
          <div>
            <p className="text-3xl font-bold gradient-text">70%</p>
            <p className="text-sm text-muted-foreground mt-1">of operational knowledge is tacit and undocumented</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">6–12 months</p>
            <p className="text-sm text-muted-foreground mt-1">average ramp-up time for a new industrial operator</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ProblemSection;
