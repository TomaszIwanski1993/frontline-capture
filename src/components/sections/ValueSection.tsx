import { motion } from "framer-motion";
import { TrendingDown, CheckCircle, Shield, RefreshCw } from "lucide-react";
import bgValue from "@/assets/bg-value-logistics.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardProficiency from "@/assets/card-proficiency.jpg";
import cardConsistency from "@/assets/card-consistency.jpg";
import cardResilience from "@/assets/card-resilience.jpg";
import cardContinuity from "@/assets/card-continuity.jpg";

const outcomes = [
  {
    icon: TrendingDown,
    metric: "20–40%",
    title: "Faster time-to-proficiency",
    description: "New operators reach competence significantly faster with structured, real-world task guidance — reducing onboarding from months to weeks.",
    image: cardProficiency,
  },
  {
    icon: CheckCircle,
    metric: "Measurably",
    title: "More consistent execution",
    description: "When every operator works from the same proven knowledge base, task execution variability drops and quality becomes predictable across shifts.",
    image: cardConsistency,
  },
  {
    icon: Shield,
    metric: "Eliminated",
    title: "Single points of failure",
    description: "Critical knowledge is no longer locked in a few experts' heads. Operations continue smoothly through retirements, turnover, and shift changes.",
    image: cardResilience,
  },
  {
    icon: RefreshCw,
    metric: "Continuous",
    title: "Knowledge continuity",
    description: "Institutional know-how persists regardless of personnel changes. Every departure stops being a knowledge emergency.",
    image: cardContinuity,
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
      delay: i * 0.12,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const ValueSection = () => {
  return (
    <section id="outcomes" className="relative section-padding">
      <SectionBgImage src={bgValue} alt="Warehouse operations" opacity={0.18} />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
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
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 12px 40px hsl(265 30% 50% / 0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card overflow-hidden"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex gap-5">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, type: "spring", stiffness: 200 }}
                  className="flex-shrink-0 mt-1"
                >
                  <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <motion.p
                    className="text-2xl font-bold gradient-text mb-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  >
                    {item.metric}
                  </motion.p>
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
