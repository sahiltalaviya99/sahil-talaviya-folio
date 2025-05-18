import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Debounced scroll handler
  const debounce = (func: () => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  };

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 10;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }

    const sections = document.querySelectorAll("section[id]");
    let currentSection = "home";

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id") || "home";
      }
    });

    setActiveSection(currentSection);
  }, [scrolled]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [handleScroll]);

  // Focus management for mobile menu
  useEffect(() => {
    if (isMenuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const targetId = href.replace("#", "");
    setActiveSection(targetId);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Simulate download delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 border-b border-border shadow-sm backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      )}
      ref={navRef}
    >
      <div className="container-section flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={cn(
            "text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent",
            "hover:scale-105 transition-transform duration-200",
            "font-logo"
          )}
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          onClick={() => handleNavClick("#home")}
        >
          Sahil Talaviya
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <ul className="flex space-x-2">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  ref={index === 0 ? firstLinkRef : null}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "px-4 py-2 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200",
                    activeSection === link.href.replace("#", "") &&
                      "text-primary bg-primary/10 font-medium"
                  )}
                  aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant="default"
            size="sm"
            className="ml-4 flex items-center gap-2"
            disabled={isDownloading}
            onClick={handleDownload}
          >
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              {isDownloading ? "Downloading..." : "Resume"}
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden bg-background z-40 transition-transform duration-300 ease-in-out border-t",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
          "fixed inset-0 top-[60px] sm:top-[68px]"
        )}
        role="dialog"
        aria-modal="true"
      >
        <nav className="container-section py-5 px-4 sm:px-6">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  ref={index === 0 ? firstLinkRef : null}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "block px-4 py-3 text-lg hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-md",
                    activeSection === link.href.replace("#", "") &&
                      "text-primary bg-primary/10 font-medium"
                  )}
                  aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="w-full mt-4 flex justify-center items-center gap-2"
                disabled={isDownloading}
                onClick={handleDownload}
              >
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  {isDownloading ? "Downloading..." : "Download Resume"}
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}