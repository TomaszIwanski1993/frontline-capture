import { motion } from "framer-motion";
import { Factory, Package, Truck, HardHat, Wrench } from "lucide-react";
import bgIndustries from "@/assets/bg-industries-aerial.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardManufacturing from "@/assets/card-manufacturing.jpg";
import cardFmcg from "@/assets/card-fmcg.jpg";
import cardLogistics from "@/assets/card-logistics.jpg";
import cardConstruction from "@/assets/card-construction.jpg";
import cardFieldservice from "@/assets/card-fieldservice.jpg";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    example: "Machine setup procedures, quality checks, changeover routines — captured from operators who've done it for decades.",
    image: cardManufacturing,
  },
  {
    icon: Package,
    title: "FMCG",
    example: "Line operations, batch adjustments, packaging specifications — consistent across shifts and sites.",
    image: cardFmcg,
  },
  {
    icon: Truck,
    title: "Logistics & Warehousing",
    example: "Picking sequences, equipment handling, safety protocols — documented once, used everywhere.",
    image: cardLogistics,
  },
  {
    icon: HardHat,
    title: "Construction",
    example: "Site setup procedures, material handling, safety compliance — preserved from experienced site managers.",
    image: cardConstruction,
  },
  {
    icon: Wrench,
    title: "Field Service",
    example: "Troubleshooting guides, maintenance routines, client-specific configurations — always accessible in the field.",
    image: cardFieldservice,
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
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const IndustriesSection = () => {
  return (
    <section id="industries" className="relative section-padding">
      <SectionBgImage src={bgIndustries} alt="Industrial complex" opacity={0.18} />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Industries</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Built for frontline operations
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 12px 40px hsl(265 30% 50% / 0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <ind.icon className="h-6 w-6 text-primary mb-4" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{ind.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ind.example}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default IndustriesSection;
