import ScrollReveal from "@/components/ScrollReveal";
import { Zap, Bot, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Built for speed & scale",
    description:
      "Knowledge is captured in minutes and deployed instantly. No lengthy documentation projects - your team moves faster from day one.",
  },
  {
    icon: Bot,
    title: "Let Quantum handle the manual work",
    description:
      "Our AI captures how your best operators work, structures it automatically, and delivers real-time guidance - at unlimited scale, across every shift.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent execution, instantly",
    description:
      "Every operator gets the same expert-level guidance. No guesswork, no variation - just reliable output across all lines and sites.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-4">
              Why Quantum
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
              Quantum is designed for speed&nbsp;&amp;&nbsp;scale
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="glass-card p-8 h-full text-center shimmer-overlay">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5 animate-glow-pulse">
                  <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default AboutSection;
