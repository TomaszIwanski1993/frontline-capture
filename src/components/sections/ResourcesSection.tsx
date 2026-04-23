import { ArrowUpRight, FileText, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useT } from "@/hooks/useT";

const featuredIcons = [FileText, BarChart3];

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
            <h2 className="mt-2 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]">
              {t.resources.title}
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured: whitepaper + pilot results placeholders */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {t.resources.featured.map((item, i) => {
            const Icon = featuredIcons[i] ?? FileText;
            return (
              <ScrollReveal key={item.title} delay={0.08 * i}>
                <div className="glass-card p-7 h-full border-primary/20 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                      </span>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-1 rounded-full border border-border text-muted-foreground uppercase tracking-wider">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Articles */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
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
