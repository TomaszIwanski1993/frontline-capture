import { motion } from "framer-motion";

const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const wordChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

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

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-[20%] right-[12%] w-32 h-32 rounded-full blur-[60px] opacity-[0.15] pointer-events-none"
        style={{ background: "hsl(265 60% 70%)" }}
        animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[8%] w-24 h-24 rounded-full blur-[50px] opacity-[0.12] pointer-events-none"
        style={{ background: "hsl(280 55% 72%)" }}
        animate={{ y: [0, 15, 0], x: [0, -8, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="section-container w-full relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={wordReveal}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
              {["Your", "best", "operators"].map((word) => (
                <motion.span key={word} variants={wordChild} className="inline-block mr-[0.3em]">
                  {word}
                </motion.span>
              ))}
              <br />
              {["won't", "be", "here", "forever."].map((word) => (
                <motion.span key={word} variants={wordChild} className="inline-block mr-[0.3em] gradient-text">
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Quantum uses AI to capture frontline operational knowledge — the hands-on
            expertise that keeps your factory running — and turns it into structured
            guidance for every operator, every shift.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#pilot"
              className="cta-button text-base lg:text-lg px-12 py-5 text-center"
              whileHover={{ scale: 1.04, boxShadow: "0 12px 40px hsl(265 55% 50% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Book a Demo
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="px-8 py-5 rounded-lg text-base font-medium text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground transition-colors duration-300 text-center"
              whileHover={{ scale: 1.03, borderColor: "hsl(265 55% 50% / 0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              See How It Works
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 subtle-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
      />
    </section>
  );
};

export default HeroSection;
