import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/40 py-12 border-t">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Name and Role */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary">Sahil Talaviya</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Frontend Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-6 md:mt-0">
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/sahiltalaviya99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-talaviya-9909657018/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sahiltalaviya9922@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sahil Talaviya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
