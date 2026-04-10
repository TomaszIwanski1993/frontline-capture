import { ArrowRight } from "lucide-react";
import bgPilot from "@/assets/bg-pilot-machinery.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import ScrollReveal from "@/components/ScrollReveal";

const pilotPoints = [
  "2–4 week pilot on a single line or process",
  "Integrates with existing workflows — no IT overhaul",
  "Clear metrics to evaluate results objectively",
];

const PilotSection = () => {
  return (
    <section id="pilot" className="relative section-padding">
      <SectionBgImage src={bgPilot} alt="Industrial machinery" opacity={0.12} />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="glass-card p-8 lg:p-14 text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">Get Started</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              Prove value in weeks, not months
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
              We deploy a focused pilot in your real environment. Fast setup, immediate
              results. You evaluate the impact before committing to anything.
            </p>

            <div className="mt-6 space-y-2.5 text-sm text-muted-foreground max-w-md mx-auto text-left">
              {pilotPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="cta-button text-sm px-8 py-3.5 inline-block"
              >
                Book a Demo
              </a>
              <p className="mt-3 text-xs text-muted-foreground/50 tracking-wide">
                See Quantum on your actual operations.
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
