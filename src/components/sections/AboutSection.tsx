import ScrollReveal from "@/components/ScrollReveal";
import { Zap, Bot, ShieldCheck } from "lucide-react";
import { useT } from "@/hooks/useT";

const icons = [Zap, Bot, ShieldCheck];

const AboutSection = () => {
  const t = useT();
  return (
    <section id="about" className="relative section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
              {t.about.eyebrow}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              {t.about.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {t.about.values.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={i} delay={0.08 * i}>
                <div className="glass-card p-8 h-full text-center shimmer-overlay">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 animate-glow-pulse">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              {t.about.origin}
            </span>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default AboutSection;
