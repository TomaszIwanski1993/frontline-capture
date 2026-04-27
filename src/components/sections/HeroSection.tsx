import { motion } from "framer-motion";
import bgHero from "@/assets/bg-hero-factory.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import NewBadge from "@/components/NewBadge";
import BookDemoButton from "@/components/BookDemoButton";
import { useT } from "@/hooks/useT";

// Highlight standalone uppercase "NEW" tokens in the eyebrow with a styled badge.
const renderEyebrowWithBadge = (text: string) => {
  const parts = text.split(/(\bNEW\b)/g);
  return parts.map((part, i) =>
    part === "NEW" ? <NewBadge key={i} /> : <span key={i}>{part}</span>,
  );
};

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
              {renderEyebrowWithBadge(t.hero.eyebrow)}
            </p>
            <h1 className="mt-12 lg:mt-16 mb-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.3] text-foreground">
              {t.hero.titleA}
              {t.hero.titleB ? (
                <span key="titleB" className="gradient-text mt-4 block">{t.hero.titleB}</span>
              ) : null}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-12 lg:mt-14 text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-16 lg:mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <BookDemoButton className="text-base px-8 py-4 text-center">
              {t.hero.cta1}
            </BookDemoButton>
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
