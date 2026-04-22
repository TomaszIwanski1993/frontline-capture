import ScrollReveal from "@/components/ScrollReveal";
import logoPatio from "@/assets/logo-patio.png";
import { useT } from "@/hooks/useT";

const TrustSection = () => {
  const t = useT();
  return (
    <section className="relative py-12 lg:py-16">
      <div className="section-container relative z-10 max-w-4xl">
        <ScrollReveal>
          <div className="border-t border-b border-border py-10 flex flex-col items-center justify-center gap-6 text-center">
            <p className="text-sm font-semibold text-foreground tracking-wide uppercase max-w-2xl">
              {t.trust.label}
            </p>
            <div className="flex items-center justify-center">
              <img
                src={logoPatio}
                alt="Patio"
                loading="lazy"
                width={200}
                height={64}
                className="h-12 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustSection;
