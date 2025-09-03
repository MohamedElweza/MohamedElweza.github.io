import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Global animated background */}
      <AnimatedBackground />
      
      {/* Page content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
