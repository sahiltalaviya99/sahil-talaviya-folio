
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="pt-28 pb-20 min-h-screen flex items-center">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20 mb-4">
              Open to Work
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm Sahil – <span className="text-primary">Frontend Developer</span> & Web Tester
            </h1>
            
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
              Building responsive and interactive web experiences with a focus on clean code and intuitive user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="flex items-center gap-2">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2" asChild>
                <a href="/resume.pdf" download>View Resume</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Sahil Talaviya" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-card shadow-lg rounded-full p-3">
                <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center text-white text-sm font-medium">
                  Web Dev
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-card shadow-lg rounded-full p-3">
                <div className="bg-accent rounded-full w-14 h-14 flex items-center justify-center text-white text-sm font-medium">
                  Tester
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-20">
          <a 
            href="#about" 
            className={cn(
              "p-3 rounded-full bg-secondary/50 hover:bg-secondary text-primary",
              "transition-all duration-300 animate-bounce"
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
