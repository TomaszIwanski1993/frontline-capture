import ScrollReveal from "@/components/ScrollReveal";
import logoPatio from "@/assets/logo-patio.png";
import { useT } from "@/hooks/useT";

const logos = [{ src: logoPatio, alt: "Patio" }];

const TrustSection = () => {
  const t = useT();
  return (
    <section className="relative py-12 lg:py-16">
      <div className="section-container relative z-10 max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-10 text-center">
            <p className="text-xs font-semibold text-muted-foreground tracking-[0.2em] uppercase">
              {t.trust.label}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 lg:gap-x-24">
              {logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  width={200}
                  height={64}
                  className="h-10 lg:h-12 w-auto grayscale opacity-60 hover:opacity-90 transition-opacity duration-300"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustSection;
