import { Video, Layers, PlayCircle } from "lucide-react";
import bgHowIt from "@/assets/bg-howit-collab.jpg";
import SectionBgImage from "@/components/SectionBgImage";

const steps = [
  {
    icon: Video,
    number: "01",
    title: "Capture",
    description:
      "AI observes how experienced operators perform tasks in real time, recording the tacit knowledge that never makes it into manuals.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Structure",
    description:
      "Raw expertise is instantly transformed into structured, actionable guidance: standardized, searchable, and ready to deploy.",
  },
  {
    icon: PlayCircle,
    number: "03",
    title: "Apply",
    description:
      "Structured knowledge is delivered to operators in seconds during live work: for onboarding, task execution, and shift consistency.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative section-padding">
      <SectionBgImage src={bgHowIt} alt="Team collaboration" opacity={0.18} />
      <div className="section-container relative z-10">
        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Three steps to retained knowledge
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Built on AI that understands real-world workflows, not just documents.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <span
                className="text-8xl font-black block bg-gradient-to-br from-primary/50 via-primary/30 to-transparent bg-clip-text text-transparent select-none"
                style={{ WebkitTextStroke: "1.5px hsl(var(--primary) / 0.3)" }}
              >
                {step.number}
              </span>
              <step.icon className="h-6 w-6 text-primary mt-4 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-primary/20"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HowItWorksSection;
