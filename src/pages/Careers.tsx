import { motion } from "framer-motion";
import { Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import FooterSection from "@/components/sections/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";
import { useT } from "@/hooks/useT";

const Careers = () => {
  const t = useT();
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 pt-24 lg:pt-32 pb-20">
        <div className="section-container max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.careers.back}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              {t.careers.eyebrow}
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              {t.careers.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center text-center py-12 px-6 rounded-2xl border border-border/50 bg-card/50"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-3">{t.careers.empty}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t.careers.bodyA}{" "}
              <a href="mailto:info@quantummaking.com" className="text-primary hover:underline">
                info@quantummaking.com
              </a>
              .
            </p>
          </motion.div>
        </div>
      </main>
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Careers;
