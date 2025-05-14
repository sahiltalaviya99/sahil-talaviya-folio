
import * as React from "react";
import { cn } from "../utils";

// Split text animation - splits text into individual characters for animation
export const SplitText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => (
        <span 
          key={`${char}-${index}`}
          className={cn(
            "inline-block transition-all duration-300",
            "hover:text-primary hover:translate-y-[-5px]",
            className
          )}
          style={{ 
            transitionDelay: `${index * 30}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// Gradient text animation
export const GradientText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span 
      className={cn(
        "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient",
        className
      )}
    >
      {text}
    </span>
  );
};

// Typewriter text effect
export const TypewriterText = ({ 
  text, 
  speed = 100,
  delay = 0,
  className
}: { 
  text: string; 
  speed?: number;
  delay?: number;
  className?: string;
}) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(false);
  
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (delay > 0 && !isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
    
    if (currentIndex < text.length && isTyping) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, delay, isTyping]);
  
  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Shiny text effect
export const ShinyText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span 
      className={cn(
        "relative inline-block",
        "after:absolute after:content-[''] after:w-full after:h-full",
        "after:top-0 after:left-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent",
        "after:translate-x-[-100%] hover:after:translate-x-[100%] after:transition-transform after:duration-1000",
        className
      )}
    >
      {children}
    </span>
  );
};

// Blur text animation
export const BlurText = ({ 
  text, 
  duration = 1500,
  className 
}: { 
  text: string; 
  duration?: number;
  className?: string;
}) => {
  const [isBlurred, setIsBlurred] = React.useState(true);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <span 
      className={cn(
        "inline-block transition-all duration-700",
        { "blur-[5px]": isBlurred, "blur-none": !isBlurred },
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {text}
    </span>
  );
};

// Glitch text effect
export const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span 
      className={cn(
        "relative inline-block",
        "before:content-[attr(data-text)] before:absolute before:top-0 before:left-0 before:text-primary before:clip-path-glitch-1 before:animate-glitch-1",
        "after:content-[attr(data-text)] after:absolute after:top-0 after:left-0 after:text-accent after:clip-path-glitch-2 after:animate-glitch-2",
        className
      )}
      data-text={text}
    >
      {text}
    </span>
  );
};
