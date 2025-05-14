
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { ScrollRevealText, ScrollFloat, ScrollVelocity } from "@/lib/animations";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <ScrollRevealText threshold={0.2}>
          <AboutSection />
        </ScrollRevealText>
        
        <ScrollFloat threshold={0.2} amount={30}>
          <SkillsSection />
        </ScrollFloat>
        
        <ScrollVelocity factor={0.05}>
          <ExperienceSection />
        </ScrollVelocity>
        
        <ScrollRevealText threshold={0.2} direction="left">
          <ProjectsSection />
        </ScrollRevealText>
        
        <ScrollRevealText threshold={0.2} direction="up">
          <ContactSection />
        </ScrollRevealText>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
