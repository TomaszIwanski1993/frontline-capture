import ScrollReveal from "@/components/ScrollReveal";
import badge from "@/assets/nvidia-inception-badge.png.asset.json";
import { useT } from "@/hooks/useT";

const PartnerSection = () => {
  const t = useT();
  return (
    <section className="relative section-padding">
      <div className="section-container max-w-4xl">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
              {t.partner.title}
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground leading-relaxed">
              {t.partner.description}
            </p>
            <a
              href="https://www.nvidia.com/en-us/startups/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NVIDIA Inception Program"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-6 border border-border/60 opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-[1.03]"
            >
              <img
                src={badge.url}
                alt="NVIDIA Inception Program member badge"
                loading="lazy"
                className="h-14 sm:h-16 w-auto"
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default PartnerSection;
