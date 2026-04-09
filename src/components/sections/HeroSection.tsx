import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
            Operational knowledge
            <br />
            <span className="gradient-text">shouldn't walk out the door.</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Quantum captures, structures, and scales the frontline knowledge that
            keeps your operations running — before it disappears with your people.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#pilot" className="cta-button text-base px-10 py-4 text-center">
              Book a Demo
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-lg text-base font-medium text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground transition-all duration-300 text-center"
            >
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HeroSection;
