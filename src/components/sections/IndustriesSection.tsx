import { Factory, Package, Truck, HardHat, Wrench } from "lucide-react";
import bgIndustries from "@/assets/bg-industries-aerial.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardManufacturing from "@/assets/card-manufacturing.jpg";
import cardFmcg from "@/assets/card-fmcg.jpg";
import cardLogistics from "@/assets/card-logistics.jpg";
import cardConstruction from "@/assets/card-construction.jpg";
import cardFieldservice from "@/assets/card-fieldservice.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";

const icons = [Factory, Package, Truck, HardHat, Wrench];
const images = [cardManufacturing, cardFmcg, cardLogistics, cardConstruction, cardFieldservice];

const IndustriesSection = () => {
  const t = useT();
  return (
    <section id="industries" className="relative section-padding">
      <SectionBgImage src={bgIndustries} alt="Industrial complex" opacity={0.12} />
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
                  {t.industries.eyebrow}
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                  {t.industries.title}
                </h2>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.industries.items.map((ind, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={ind.title} delay={0.07 * i}>
                <div className="glass-card overflow-hidden h-full shimmer-overlay">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={images[i]}
                      alt={ind.title}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover animate-card-drift"
                      style={{ animationDelay: `${i * 2.5}s` }}
                    />
                  </div>
                  <div className="p-6">
                    <Icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.5} />
                    <h3 className="text-base font-semibold text-foreground mb-1.5">{ind.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ind.example}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default IndustriesSection;
