import ScrollReveal from "@/components/ScrollReveal";
import layersTrust from "@/assets/layers-trust.jpg";

const TrustSection = () => {
  return (
    <section className="relative py-12 lg:py-16">
      <div className="section-container relative z-10 max-w-4xl">
        <ScrollReveal>
          <div className="border-t border-b border-border py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={layersTrust}
                alt="Layered shield of trust"
                loading="lazy"
                width={800}
                height={800}
                className="w-14 h-14 rounded-md animate-float"
              />
              <p className="text-sm font-semibold text-foreground tracking-wide uppercase">
                Trusted by industrial teams
              </p>
            </div>
            <div className="flex items-center gap-8 text-muted-foreground/30">
              {["Manufacturing", "Logistics", "FMCG", "Field Service"].map((label) => (
                <span key={label} className="text-sm font-medium tracking-wide border border-border/60 rounded-md px-4 py-2">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustSection;
