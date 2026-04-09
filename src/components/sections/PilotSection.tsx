import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bgPilot from "@/assets/bg-pilot-machinery.jpg";
import SectionBgImage from "@/components/SectionBgImage";

const pilotPoints = [
  "2–4 week pilot on a single line or process",
  "Works within your existing workflows — no IT overhaul",
  "Clear metrics so you can evaluate results objectively",
];

const PilotSection = () => {
  return (
    <section id="pilot" className="relative section-padding">
      <SectionBgImage src={bgPilot} alt="Industrial machinery" opacity={0.18} />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="glass-card p-10 lg:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Animated accent glow */}
          <motion.div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] opacity-[0.08] pointer-events-none"
            style={{ background: "hsl(265 60% 65%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Get Started</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Start with a pilot. No commitment required.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            We run a short, focused pilot in your real environment — minimal disruption,
            real results. See the value before making any decisions.
          </p>

          <div className="mt-6 space-y-3 text-sm text-muted-foreground max-w-md mx-auto text-left">
            {pilotPoints.map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              >
                <ArrowRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.a
              href="#contact"
              className="cta-button text-base px-10 py-4 inline-block"
              whileHover={{ scale: 1.04, boxShadow: "0 12px 40px hsl(265 55% 50% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Book a Demo
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default PilotSection;
