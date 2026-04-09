import { motion } from "framer-motion";
import { Video, Layers, PlayCircle } from "lucide-react";
import bgHowIt from "@/assets/bg-howit-collab.jpg";
import SectionBgImage from "@/components/SectionBgImage";

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
      <SectionBgImage src={bgHowIt} alt="Team collaboration" opacity={0.18} />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <motion.span
                className="text-7xl font-black text-primary/40 block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.2 }}
              >
                {step.number}
              </motion.span>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
              >
                <step.icon className="h-6 w-6 text-primary mt-4 mb-4" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {/* Connecting line between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-primary/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                  style={{ originX: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HowItWorksSection;
