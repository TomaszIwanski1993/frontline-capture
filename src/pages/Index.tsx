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
import ResourcesSection from "@/components/sections/ResourcesSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ValueSection />
        <IndustriesSection />
        <PilotSection />
        <FAQSection />
        <AboutSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
