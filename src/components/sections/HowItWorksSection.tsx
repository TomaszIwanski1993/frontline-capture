import { motion } from "framer-motion";
import { Video, Layers, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: Video,
    number: "01",
    title: "Capture",
    description:
      "Our AI observes and records how experienced operators perform tasks — capturing the tacit knowledge that traditional documentation misses.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Structure",
    description:
      "Raw demonstrations are transformed into clear, step-by-step task knowledge — standardized, searchable, and easy to follow.",
  },
  {
    icon: PlayCircle,
    number: "03",
    title: "Apply",
    description:
      "Structured knowledge is used directly in operations: for onboarding new operators, guiding task execution, and maintaining consistency across shifts.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Three steps to retained knowledge
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <span className="text-6xl font-bold text-primary/10">{step.number}</span>
              <step.icon className="h-6 w-6 text-primary mt-4 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HowItWorksSection;
