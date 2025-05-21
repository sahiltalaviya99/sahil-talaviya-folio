import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const firstLinkRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const offsetTop = section.getBoundingClientRect().top + window.scrollY - 100;
          if (scrollPosition >= offsetTop) {
            currentSection = link.href.replace("#", "");
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="container-section flex items-center justify-between py-4 px-4 sm:px-6 md:px-8">
        <a href="/" className="text-2xl font-bold text-primary">
          Sahil
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "text-base hover:text-primary transition-all duration-200",
                activeSection === link.href.replace("#", "") &&
                  "text-primary font-medium"
              )}
            >
              {link.name}
            </a>
          ))}

          <Button
            asChild
            className="ml-4 flex items-center gap-2"
            disabled={isDownloading}
            onClick={handleDownload}
          >
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              {isDownloading ? "Downloading..." : "Download Resume"}
            </a>
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary transition"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden w-full bg-white border-t z-40 transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
      >
        <nav className="container-section px-4 sm:px-6 py-4">
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
                  aria-current={
                    activeSection === link.href.replace("#", "") ? "page" : undefined
                  }
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="w-full mt-2 flex justify-center items-center gap-2"
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
