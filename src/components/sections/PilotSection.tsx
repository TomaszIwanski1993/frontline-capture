import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bgPilot from "@/assets/bg-pilot-machinery.jpg";
import SectionBgImage from "@/components/SectionBgImage";

const pilotPoints = [
  "2–4 week pilot on a single line or process",
  "Works within your existing workflows, no IT overhaul needed",
  "Clear metrics so you can evaluate results objectively",
];

const PilotSection = () => {
  return (
    <section id="pilot" className="relative section-padding">
      <SectionBgImage src={bgPilot} alt="Industrial machinery" opacity={0.18} />
      <div className="section-container relative z-10">
        <div className="glass-card p-10 lg:p-16 text-center max-w-3xl mx-auto relative overflow-hidden">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Get Started</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Prove value in weeks, not months
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            We run a focused pilot in your real environment. Fast setup, immediate
            insights, measurable results. See the impact before making any decisions.
          </p>

          <div className="mt-6 space-y-3 text-sm text-muted-foreground max-w-md mx-auto text-left">
            {pilotPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <motion.a
              href="#contact"
              className="cta-button text-base px-10 py-4 inline-block"
              whileHover={{ scale: 1.04, boxShadow: "0 12px 40px hsl(265 55% 50% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Book a Demo
            </motion.a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default PilotSection;
