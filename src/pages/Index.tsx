import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import PositioningSection from "@/components/sections/PositioningSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ValueSection from "@/components/sections/ValueSection";
import TrustSection from "@/components/sections/TrustSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PilotSection from "@/components/sections/PilotSection";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";

import ResourcesSection from "@/components/sections/ResourcesSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />

        <PositioningSection />
        <div className="section-transition-down" />
        <div className="section-tinted">
          <ProblemSection />
        </div>
        <div className="section-transition-up" />

        {/* Pull quote */}
        <div className="py-14 lg:py-18">
          <div className="section-container max-w-3xl text-center">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground/80 leading-snug">
              "Your operation is only as strong as what your best operator remembers."
            </p>
          </div>
        </div>

        <HowItWorksSection />

        <div className="section-transition-down" />
        <div className="section-tinted">
          <ValueSection />
        </div>
        <div className="section-transition-up" />

        <TrustSection />

        <div className="section-transition-down" />
        <div className="section-tinted">
          <AboutSection />
        </div>
        <div className="section-transition-up" />

        <IndustriesSection />

        <div className="section-transition-down" />
        <div className="section-tinted">
          <PilotSection />
        </div>
        <div className="section-transition-up" />

        <FAQSection />

        <ResourcesSection />
        <ContactSection />
      </main>
      <FooterSection />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
};

export default Index;
