import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ScrollReveal from "@/components/ScrollReveal";
import PositioningSection from "@/components/sections/PositioningSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ValueSection from "@/components/sections/ValueSection";
import TrustSection from "@/components/sections/TrustSection";
import PilotSection from "@/components/sections/PilotSection";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";


import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import { useT } from "@/hooks/useT";

const Index = () => {
  const t = useT();
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        {/* Hero — light */}
        <HeroSection />

        {/* Problem — tinted */}
        <div className="section-tinted">
          <ProblemSection />
        </div>

        {/* Pull quote — light, tighter to flow into next tinted block */}
        <div className="py-14 lg:py-20">
          <div className="section-container max-w-3xl text-center">
            <ScrollReveal>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground/80 leading-snug">
                {t.pullQuote}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Positioning — tinted */}
        <div className="section-tinted">
          <PositioningSection />
        </div>

        {/* How it works — light */}
        <HowItWorksSection />

        {/* Value — tinted */}
        <div className="section-tinted">
          <ValueSection />
        </div>

        {/* Trust logos — light, quiet */}
        <TrustSection />

        {/* About — tinted */}
        <div className="section-tinted">
          <AboutSection />
        </div>

        {/* Pilot CTA — light */}
        <PilotSection />

        {/* FAQ — tinted */}
        <div className="section-tinted">
          <FAQSection />
        </div>


        {/* Contact — tinted */}
        <div className="section-tinted">
          <ContactSection />
        </div>
      </main>
      <FooterSection />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
};

export default Index;
