import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";

const ResourcesSection = () => {
  const t = useT();
  return (
    <section id="resources" className="relative section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              {t.resources.eyebrow}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              {t.resources.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {t.resources.items.map((article, i) => (
            <ScrollReveal key={article.title} delay={0.08 * i}>
              <div className="glass-card p-7 group cursor-pointer hover:border-primary/30 transition-colors duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">{article.category}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">{article.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{article.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">{t.resources.more}</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default ResourcesSection;
