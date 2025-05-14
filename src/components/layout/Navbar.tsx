
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id") || "home";
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    setActiveSection(targetId);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 border-b border-border shadow-sm backdrop-blur-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-section flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-bold text-primary">
          Sahil Talaviya
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-2 rounded-md text-foreground/80 hover:text-primary transition-colors",
                    activeSection === link.href.replace("#", "") && "text-primary bg-primary/5 font-medium"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <Button asChild variant="default" size="sm" className="ml-4 flex items-center gap-2">
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[60px] bg-background md:hidden z-40 transition-transform duration-300 ease-in-out border-t",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="container-section py-5">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "block px-4 py-2 text-lg hover:text-primary transition-colors rounded-md",
                    activeSection === link.href.replace("#", "") && "text-primary bg-primary/5 font-medium"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full mt-4 flex justify-center items-center gap-2">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
