import { ArrowRight } from "lucide-react";
import bgPilot from "@/assets/bg-pilot-machinery.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import layersCapture from "@/assets/layers-capture.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import BookDemoButton from "@/components/BookDemoButton";
import { useT } from "@/hooks/useT";

const PilotSection = () => {
  const t = useT();
  return (
    <section id="pilot" className="relative section-padding">
      <SectionBgImage src={bgPilot} alt="Industrial machinery" opacity={0.12} />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="glass-card p-10 lg:p-16 max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center gap-8">
              <img
                src={layersCapture}
                alt="Data flowing through knowledge layers"
                loading="lazy"
                width={800}
                height={800}
                className="w-32 sm:w-40 rounded-lg flex-shrink-0"
              />
              <div>
                <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
                  {t.pilot.eyebrow}
                </p>
                <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.05]">
                  {t.pilot.title}
                </h2>
                <p className="mt-6 text-foreground/65 text-base lg:text-lg leading-relaxed">
                  {t.pilot.body}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-2.5 text-sm text-muted-foreground max-w-md mx-auto text-left">
              {t.pilot.points.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <BookDemoButton className="text-base px-8 py-4">
                {t.pilot.cta}
              </BookDemoButton>
              <p className="mt-4 text-xs text-muted-foreground/60 tracking-wide">
                {t.pilot.ctaSub}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default PilotSection;
