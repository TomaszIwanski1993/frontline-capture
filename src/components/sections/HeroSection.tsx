import { motion } from "framer-motion";
import bgHero from "@/assets/bg-hero-factory.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import DataFlowCanvas from "@/components/DataFlowCanvas";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <SectionBgImage src={bgHero} alt="Factory floor" opacity={0.14} />
      <DataFlowCanvas />

      {/* Clean fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, transparent 20%, hsl(var(--background) / 0.7) 60%, hsl(var(--background) / 0.96) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background) / 0.9) 0%, hsl(var(--background) / 0.2) 25%, transparent 50%, hsl(var(--background) / 0.7) 80%, hsl(var(--background) / 0.98) 100%)",
        }}
      />

      <div className="section-container w-full relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm text-muted-foreground/60 font-medium tracking-wide uppercase">
              Your best operators won't be here forever.
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-foreground">
              The operating system for
              <br />
              <span className="gradient-text">frontline knowledge</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Quantum captures how your best operators work and transforms it into
            structured, real-time guidance for every shift.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="#pilot"
              className="cta-button text-base lg:text-lg px-10 py-4 text-center"
            >
              Book a Demo
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-md text-base font-medium text-muted-foreground border border-border hover:border-foreground/20 hover:text-foreground transition-colors duration-150 text-center"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HeroSection;
