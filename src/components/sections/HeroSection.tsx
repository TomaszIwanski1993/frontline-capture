import { motion } from "framer-motion";
import bgHero from "@/assets/bg-hero-factory.jpg";
import SectionBgImage from "@/components/SectionBgImage";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Base industrial background */}
      <SectionBgImage src={bgHero} alt="Factory floor" opacity={0.20} />

      {/* Fade-out dissolve overlay: edges and figures gradually disappear */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 30%, hsl(var(--background) / 0.55) 65%, hsl(var(--background) / 0.92) 100%)",
        }}
      />
      {/* Directional fade: bottom and right edges dissolve more */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.3) 20%, transparent 45%, hsl(var(--background) / 0.6) 78%, hsl(var(--background) / 0.95) 100%), linear-gradient(90deg, hsl(var(--background) / 0.7) 0%, transparent 25%, transparent 70%, hsl(var(--background) / 0.7) 100%)",
        }}
      />
      {/* Subtle animated "fading" pulse — knowledge disappearing */}
      <div
        className="absolute inset-0 pointer-events-none animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 55% 50%, hsl(var(--background) / 0.18) 0%, transparent 70%)",
        }}
      />

      {/* Colour tint overlays */}
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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
              Turn frontline expertise into
              <br />
              <span className="gradient-text">scalable, AI-powered operations</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Capture how your best operators work, and instantly turn it into
            structured, real-time guidance for every shift.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="mt-3 text-base text-muted-foreground/80 italic"
          >
            Your best operators won't be here forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="mt-5 text-sm text-muted-foreground/70"
          >
            Pilot in 2–4 weeks. No IT overhaul required.
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 subtle-divider" />
    </section>
  );
};

export default HeroSection;
