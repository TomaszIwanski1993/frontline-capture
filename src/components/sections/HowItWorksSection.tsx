import { Video, Layers, PlayCircle } from "lucide-react";
import bgHowIt from "@/assets/bg-howit-collab.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    icon: Video,
    number: "01",
    title: "Capture",
    description:
      "Quantum records how experienced operators perform tasks in real time. It extracts the tacit knowledge that manuals and documentation never capture.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Structure",
    description:
      "Raw expertise is instantly transformed into structured, actionable guidance: standardized, searchable, and ready to deploy across teams.",
  },
  {
    icon: PlayCircle,
    number: "03",
    title: "Apply",
    description:
      "Operators receive step-by-step guidance in seconds during live work. Onboarding accelerates. Execution becomes consistent. Knowledge stays.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative section-padding">
      <SectionBgImage src={bgHowIt} alt="Team collaboration" opacity={0.12} />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div>
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">How It Works</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              Three steps to retained knowledge
            </h2>
            <p className="mt-3 text-muted-foreground text-base max-w-2xl">
              Built on AI that understands real-world workflows, not documents.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={0.1 * i}>
              <div className="relative">
                <span
                  className="text-6xl font-black block text-foreground/[0.06] select-none leading-none"
                >
                  {step.number}
                </span>
                <step.icon className="h-5 w-5 text-primary mt-3 mb-3" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 -right-4 w-8 h-px bg-border"
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HowItWorksSection;
