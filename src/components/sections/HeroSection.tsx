
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  SplitText, 
  GradientText, 
  TypewriterText, 
  ShinyText, 
  SpotlightEffect,
  MagnetEffect,
  BlurText
} from "@/lib/animations";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 min-h-[100vh] flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 mb-4 border-none">
              <SplitText text="Open to Work" />
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <ShinyText>Sahil Talaviya &nbsp;&nbsp;&nbsp;<br /> </ShinyText> 
               {/* <span className="text-primary">
                <GradientText text="Frontend Developer" />
              </span> & {" "} */}
              <br />
              <TypewriterText 
                text="Frontend Developer" 
                speed={150}
                delay={1000}
                className="text-accent"
              />
            </h1>
            
            <BlurText 
              text="Building responsive and interactive web experiences with a focus on clean code and intuitive user interfaces."
              className="text-xl text-muted-foreground mt-6 max-w-2xl"
              duration={1800}
            />
            
            <div className="flex flex-wrap gap-4 mt-10">
              <MagnetEffect strength={15}>
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105">
                  <a href="#contact" className="flex items-center gap-2">Contact Me</a>
                </Button>
              </MagnetEffect>
              
              <SpotlightEffect>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full relative overflow-hidden group" 
                  asChild
                >
                  <a 
                    href="/resume.pdf" 
                    download 
                    className="flex items-center gap-2 z-10"
                  >
                    <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
                    <span className="relative z-10">View Resume</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  </a>
                </Button>
              </SpotlightEffect>
            </div>
            
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="https://github.com/sahiltalaviya99/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sahil-talaviya-99o9657o18/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-xl animate-[spin_20s_linear_infinite]">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden animate-[spin_20s_linear_infinite_reverse]">
                  <img 
                    src="/hero-img.jpg"  // IN PUBLIC FOLDER 
                    alt="Sahil Talaviya" 
                    className="w-64px h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card shadow-lg rounded-full p-3 animate-bounce">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-primary-foreground text-sm font-medium">
                  <SplitText text="React" />
                </div>
              </div>

              {/* <div className="absolute -bottom-4 -left-1 bg-card shadow-lg rounded-full p-3 animate-bounce">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-primary-foreground text-sm font-medium">
                  <SplitText text="React" />
                </div>
              </div> */}

              <div className="absolute -top-4 -left-4 bg-card shadow-lg rounded-full p-3 animate-pulse">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center text-accent-foreground text-sm font-medium">
                  <SplitText text="Devloper" />
                </div>
              </div> 
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-20">
          <a 
            href="#about" 
            className={cn(
              "p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary",
              "transition-all duration-5000 animate-bounce"
            )}
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
