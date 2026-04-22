import { TrendingDown, CheckCircle, Shield, RefreshCw } from "lucide-react";
import bgValue from "@/assets/bg-value-logistics.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import cardProficiency from "@/assets/card-proficiency.jpg";
import cardConsistency from "@/assets/card-consistency.jpg";
import cardResilience from "@/assets/card-resilience.jpg";
import cardContinuity from "@/assets/card-continuity.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";

const icons = [TrendingDown, CheckCircle, Shield, RefreshCw];
const images = [cardProficiency, cardConsistency, cardResilience, cardContinuity];

const ValueSection = () => {
  const t = useT();
  return (
    <section id="outcomes" className="relative section-padding">
      <SectionBgImage src={bgValue} alt="Warehouse operations" opacity={0.12} />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div>
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
              {t.value.eyebrow}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              {t.value.title}
            </h2>
            <p className="mt-3 text-muted-foreground text-base max-w-2xl">{t.value.sub}</p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {t.value.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.title} delay={0.08 * i}>
                <div className="glass-card overflow-hidden h-full shimmer-overlay">
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={images[i]}
                      alt={item.title}
                      loading="lazy"
                      width={640}
                      height={512}
                      className="w-full h-full object-cover animate-card-drift"
                      style={{ animationDelay: `${i * 3}s` }}
                    />
                  </div>
                  <div className="p-6 flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xl font-bold gradient-text mb-1">{item.metric}</p>
                      <h3 className="text-base font-semibold text-foreground mb-1.5">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
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

export default ValueSection;
