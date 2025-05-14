
import * as React from "react";
import { cn } from "./utils";

// Split text animation - splits text into individual characters for animation
export const splitText = (text: string, className?: string) => {
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
export const gradientText = (text: string, className?: string) => {
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

// Count up animation component
export const CountUp = ({ 
  from = 0, 
  to = 100, 
  duration = 2000, 
  className 
}: { 
  from?: number; 
  to: number; 
  duration?: number; 
  className?: string;
}) => {
  const [count, setCount] = React.useState(from);
  
  React.useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(from + (to - from) * percentage));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);
  
  return <span className={className}>{count}</span>;
};

// Text that reveals on scroll
export const ScrollRevealText = ({ 
  children, 
  className,
  threshold = 0.1,
  direction = "up"
}: { 
  children: React.ReactNode; 
  className?: string;
  threshold?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  const getTransform = () => {
    switch (direction) {
      case "up": return "translateY(20px)";
      case "down": return "translateY(-20px)";
      case "left": return "translateX(20px)";
      case "right": return "translateX(-20px)";
      default: return "translateY(20px)";
    }
  };
  
  return (
    <div 
      ref={ref} 
      className={cn("transition-all duration-700", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getTransform(),
      }}
    >
      {children}
    </div>
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

