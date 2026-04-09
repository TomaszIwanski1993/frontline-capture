import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PilotSection = () => {
  return (
    <section id="pilot" className="relative section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 lg:p-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Get Started</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Start with a pilot. No commitment required.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            We run a short, focused pilot in your real environment — minimal disruption,
            real results. See the value before making any decisions.
          </p>

          <div className="mt-6 space-y-3 text-sm text-muted-foreground max-w-md mx-auto text-left">
            <div className="flex items-start gap-3">
              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>2–4 week pilot on a single line or process</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>Works within your existing workflows — no IT overhaul</span>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span>Clear metrics so you can evaluate results objectively</span>
            </div>
          </div>

          <div className="mt-10">
            <a href="#contact" className="cta-button text-base px-10 py-4 inline-block">
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default PilotSection;
