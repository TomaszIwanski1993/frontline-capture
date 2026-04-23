import { motion } from "framer-motion";
import bgHero from "@/assets/bg-hero-factory.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import { useT } from "@/hooks/useT";

const HeroSection = () => {
  const t = useT();
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 pb-20 overflow-hidden">
      <SectionBgImage src={bgHero} alt="Factory floor" opacity={0.06} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 40%, hsl(var(--background) / 0.85) 60%, hsl(var(--background)) 100%)",
        }}
      />

      <div className="section-container w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs lg:text-sm text-muted-foreground/70 font-semibold tracking-[0.2em] uppercase">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-8 lg:mt-10 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.0] text-foreground">
              {t.hero.titleA}
              <br />
              <span className="gradient-text">{t.hero.titleB}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-10 lg:mt-12 text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-16 lg:mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#pilot" className="cta-button text-base px-8 py-4 text-center">
              {t.hero.cta1}
            </a>
            <a href="#how-it-works" className="btn-outline text-base px-8 py-4 text-center">
              {t.hero.cta2}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
