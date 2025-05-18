import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      href: "https://github.com/sahiltalaviya99",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sahil-talaviya-9909657018/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:sahiltalaviya9922@gmail.com",
      icon: Mail,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/40 py-12 border-t border-border">
      <div className="container-section px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Name and Role */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary">Sahil Talaviya</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Frontend Developer
            </p>
          </div>

          {/* Social Icons and Back to Top */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={`Visit ${link.name} profile`}
                  className={cn(
                    "text-muted-foreground hover:text-primary transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sahil Talaviya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}