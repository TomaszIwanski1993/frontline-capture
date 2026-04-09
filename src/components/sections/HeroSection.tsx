import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Hero gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="section-container w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
            Your best operators
            <br />
            <span className="gradient-text">won't be here forever.</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Quantum uses AI to capture frontline operational knowledge — the hands-on
            expertise that keeps your factory running — and turns it into structured
            guidance for every operator, every shift.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#pilot"
              className="cta-button text-base lg:text-lg px-12 py-5 text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Demo
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="px-8 py-5 rounded-lg text-base font-medium text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground transition-all duration-300 text-center"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              See How It Works
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HeroSection;
