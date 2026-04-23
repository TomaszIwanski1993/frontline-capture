import { ArrowUpRight, FileText, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { useT } from "@/hooks/useT";

const featuredIcons = [FileText, BarChart3];

const Resources = () => {
  const t = useT();

  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main className="relative z-10 pt-24 lg:pt-32">
        {/* Hero / Header */}
        <section className="section-padding pt-12 lg:pt-16">
          <div className="section-container max-w-4xl">
            <ScrollReveal>
              <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-5">
                {t.resources.eyebrow}
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]">
                {t.resources.title}
              </h1>
              <p className="mt-8 text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                {t.resources.subtitle}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured */}
        <section className="pb-24 lg:pb-32">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {t.resources.featured.map((item, i) => {
                const Icon = featuredIcons[i] ?? FileText;
                return (
                  <ScrollReveal key={item.title} delay={0.08 * i}>
                    <div className="glass-card card-padding h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                          </span>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {item.tag}
                          </span>
                        </div>
                        <span className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-border text-muted-foreground uppercase tracking-wider">
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-foreground/65 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Articles / Insights */}
        <section className="section-tinted section-padding">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-[1.05] mb-12 lg:mb-16">
                Insights
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {t.resources.items.map((article, i) => (
                <ScrollReveal key={article.title} delay={0.08 * i}>
                  <div className="glass-card card-padding group cursor-pointer h-full">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {article.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-foreground/65 text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.2}>
              <p className="mt-16 text-center text-sm text-muted-foreground">
                {t.resources.more}
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <FooterSection />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
};

export default Resources;
