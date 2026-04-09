import { motion } from "framer-motion";
import { Factory, Package, Truck, HardHat, Wrench } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    example: "Machine setup procedures, quality checks, changeover routines — captured from operators who've done it for decades.",
  },
  {
    icon: Package,
    title: "FMCG",
    example: "Line operations, batch adjustments, packaging specifications — consistent across shifts and sites.",
  },
  {
    icon: Truck,
    title: "Logistics & Warehousing",
    example: "Picking sequences, equipment handling, safety protocols — documented once, used everywhere.",
  },
  {
    icon: HardHat,
    title: "Construction",
    example: "Site setup procedures, material handling, safety compliance — preserved from experienced site managers.",
  },
  {
    icon: Wrench,
    title: "Field Service",
    example: "Troubleshooting guides, maintenance routines, client-specific configurations — always accessible in the field.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="relative section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-7 group hover:border-primary/30 transition-colors duration-300"
            >
              <ind.icon className="h-6 w-6 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-2">{ind.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{ind.example}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default IndustriesSection;
