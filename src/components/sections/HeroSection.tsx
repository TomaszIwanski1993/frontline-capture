import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background) / 0.9) 0%, hsl(265 60% 98% / 0.72) 34%, hsl(276 46% 97% / 0.42) 66%, hsl(var(--background) / 0.94) 100%)",
        }}
      />
      <div
        className="wave-bg-3 absolute top-[8%] left-[6%] w-[72%] h-[42%] pointer-events-none rounded-[999px] rotate-[6deg] blur-[82px] opacity-[0.22]"
        style={{
          background:
            "radial-gradient(ellipse at 40% 50%, hsl(265 62% 72%), hsl(280 56% 76% / 0.48) 42%, transparent 74%)",
        }}
      />
      <div
        className="wave-bg-4 absolute top-[10%] right-[2%] w-[38%] h-[28%] pointer-events-none rounded-[999px] -rotate-[10deg] blur-[74px] opacity-[0.18]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(280 54% 78%), transparent 72%)",
        }}
      />

      <div className="section-container w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
            Your best operators
            <br />
            <span className="gradient-text">won't be here forever.</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Quantum uses AI to capture frontline operational knowledge — the hands-on
            expertise that keeps your factory running — and turns it into structured
            guidance for every operator, every shift.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
              className="px-8 py-5 rounded-lg text-base font-medium text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground hover:shadow-sm transition-all duration-300 text-center"
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
