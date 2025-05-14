
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { ScrollRevealText } from "@/lib/animations";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <ScrollRevealText threshold={0.2}>
          <AboutSection />
        </ScrollRevealText>
        
        <ScrollRevealText threshold={0.2} direction="right">
          <SkillsSection />
        </ScrollRevealText>
        
        <ScrollRevealText threshold={0.2} direction="left">
          <ExperienceSection />
        </ScrollRevealText>
        
        <ScrollRevealText threshold={0.2}>
          <ProjectsSection />
        </ScrollRevealText>
        
        <ScrollRevealText threshold={0.2} direction="up">
          <ContactSection />
        </ScrollRevealText>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
