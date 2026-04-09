import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ValueSection from "@/components/sections/ValueSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PilotSection from "@/components/sections/PilotSection";
import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/AboutSection";
import CareersSection from "@/components/sections/CareersSection";
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

        <div className="section-transition-down" />
        <div className="section-tinted">
          <ProblemSection />
        </div>
        <div className="section-transition-up" />

        <HowItWorksSection />

        <div className="section-transition-down" />
        <div className="section-tinted">
          <ValueSection />
        </div>
        <div className="section-transition-up" />

        <IndustriesSection />

        <div className="section-transition-down" />
        <div className="section-tinted">
          <PilotSection />
        </div>
        <div className="section-transition-up" />

        <FAQSection />

        <div className="section-transition-down" />
        <div className="section-tinted">
          <AboutSection />
        </div>
        <div className="section-transition-up" />

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
