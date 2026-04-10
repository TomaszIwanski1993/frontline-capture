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

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="glass-card overflow-hidden"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-primary/15 mix-blend-multiply" />
              </div>
              <div className="p-6">
                <ind.icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-foreground mb-1.5">{ind.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ind.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default IndustriesSection;
