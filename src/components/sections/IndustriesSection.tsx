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
    example: "Captures machine setup, changeover, and quality check expertise. Eliminates knowledge loss when veteran operators leave.",
    image: cardManufacturing,
  },
  {
    icon: Package,
    title: "FMCG",
    example: "Standardizes line operations, batch adjustments, and packaging know-how. Ensures consistency across every site and shift.",
    image: cardFmcg,
  },
  {
    icon: Truck,
    title: "Logistics & Warehousing",
    example: "Locks in picking sequences, equipment handling, and safety protocols. Deploys them instantly across all locations.",
    image: cardLogistics,
  },
  {
    icon: HardHat,
    title: "Construction",
    example: "Preserves site setup procedures and safety compliance from experienced managers. Reduces risk from staff turnover.",
    image: cardConstruction,
  },
  {
    icon: Wrench,
    title: "Field Service",
    example: "Delivers troubleshooting guides, maintenance routines, and client configs directly to technicians in the field.",
    image: cardFieldservice,
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="relative section-padding">
      <SectionBgImage src={bgIndustries} alt="Industrial complex" opacity={0.18} />
      <div className="section-container relative z-10">
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Industries</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Wherever operations depend on human expertise
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <motion.div
              key={ind.title}
              whileHover={{ y: -6, boxShadow: "0 12px 40px hsl(265 30% 50% / 0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-110"
                />
                <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
              </div>
              <div className="p-7">
                <ind.icon className="h-6 w-6 text-primary mb-4" strokeWidth={1.5} />
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
