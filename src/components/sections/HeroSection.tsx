import { motion, useReducedMotion } from "framer-motion";
import bgHero from "@/assets/bg-hero-factory.jpg";
import SectionBgImage from "@/components/SectionBgImage";
import NewBadge from "@/components/NewBadge";
import BookDemoButton from "@/components/BookDemoButton";
import { useT } from "@/hooks/useT";

// Highlight standalone uppercase badge tokens (e.g. "NEW", "NOWEGO") in the
// eyebrow with a styled badge — keeps EN/PL visually consistent.
const BADGE_SPLIT = /(\bNEW\b|\bNOWEGO\b)/g;
const BADGE_MATCH = /^(NEW|NOWEGO)$/;
const renderEyebrowWithBadge = (text: string) => {
  const parts = text.split(BADGE_SPLIT);
  return parts.map((part, i) =>
    BADGE_MATCH.test(part) ? <NewBadge key={i}>{part}</NewBadge> : <span key={i} className="text-sm">{part}</span>,
  );
};

const HeroSection = () => {
  const t = useT();
  const prefersReducedMotion = useReducedMotion();

  // Subtle slide-up; respects prefers-reduced-motion by collapsing to a fade.
  const slideUp = (delay = 0) => ({
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0.3 : 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

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
          <motion.div {...slideUp(0)}>
            <p className="text-xs lg:text-sm text-muted-foreground/70 font-semibold tracking-[0.2em] uppercase">
              {renderEyebrowWithBadge(t.hero.eyebrow)}
            </p>
            <h1 className="mt-12 lg:mt-16 mb-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.3] text-foreground">
              <motion.span {...slideUp(0.1)} className="block">
                {t.hero.titleA}
              </motion.span>
              {t.hero.titleB ? (
                <motion.span
                  key="titleB"
                  {...slideUp(0.22)}
                  className="gradient-text mt-4 block pb-2 leading-[1.25]"
                >
                  {t.hero.titleB}
                </motion.span>
              ) : null}
            </h1>
          </motion.div>


          <motion.div
            {...slideUp(0.46)}
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
