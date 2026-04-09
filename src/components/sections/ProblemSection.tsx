import { motion } from "framer-motion";
import { Users, Clock, AlertTriangle } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import bgProblem from "@/assets/bg-problem-worker.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardKnowledge from "@/assets/card-knowledge.jpg";
import cardOnboarding from "@/assets/card-onboarding.jpg";
import cardRisk from "@/assets/card-risk.jpg";

const problems = [
  {
    icon: Users,
    title: "Knowledge lives in people, not systems",
    description:
      "Critical operational know-how, from workarounds and adjustments to judgment calls, exists only in the heads of experienced operators. When they leave, that knowledge goes with them.",
    image: cardKnowledge,
  },
  {
    icon: Clock,
    title: "Onboarding is slow and inconsistent",
    description:
      "New operators learn through shadowing and trial-and-error. The result: months of ramp-up time, variable quality, and repeated mistakes that could have been avoided.",
    image: cardOnboarding,
  },
  {
    icon: AlertTriangle,
    title: "Loss of experience creates operational risk",
    description:
      "Every retirement, resignation, or shift change is a potential disruption. Organizations end up dependent on a small number of key individuals, and that's a fragile way to operate.",
    image: cardRisk,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const ProblemSection = () => {
  const { count: stat1, ref: stat1Ref } = useCountUp(70, 2000);
  const { count: stat2, ref: stat2Ref } = useCountUp(12, 2000);

  return (
    <section id="problem" className="relative section-padding">
      <SectionBgImage src={bgProblem} alt="Worker at controls" opacity={0.18} />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
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
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 12px 40px hsl(265 30% 50% / 0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card overflow-hidden"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
              </div>
              <div className="p-8">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                >
                  <p.icon className="h-6 w-6 text-primary mb-5" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-12 glass-card p-6 flex flex-col sm:flex-row gap-8 sm:gap-16 items-start sm:items-center"
        >
          <div>
            <p className="text-3xl font-bold gradient-text" ref={stat1Ref as React.Ref<HTMLParagraphElement>}>
              {stat1}%
            </p>
            <p className="text-sm text-muted-foreground mt-1">of operational knowledge is tacit and undocumented</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text" ref={stat2Ref as React.Ref<HTMLParagraphElement>}>
              6-{stat2} months
            </p>
            <p className="text-sm text-muted-foreground mt-1">average ramp-up time for a new industrial operator</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ProblemSection;
