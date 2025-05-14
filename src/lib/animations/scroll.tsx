
import * as React from "react";
import { cn } from "../utils";

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

// Scroll Float Animation
export const ScrollFloat = ({ 
  children, 
  className,
  threshold = 0.1,
  amount = 50
}: { 
  children: React.ReactNode; 
  className?: string;
  threshold?: number;
  amount?: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = React.useState(0);
  const [elementTop, setElementTop] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      if (ref.current) {
        setElementTop(ref.current.getBoundingClientRect().top + window.scrollY);
      }
      setWindowHeight(window.innerHeight);
    };
    
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const calculateTransform = () => {
    if (elementTop === 0 || windowHeight === 0) return 0;
    
    const relativeScroll = scrollY + windowHeight - elementTop;
    const visibilityPercentage = Math.max(0, Math.min(1, relativeScroll / windowHeight));
    
    return visibilityPercentage * amount;
  };
  
  return (
    <div 
      ref={ref} 
      className={cn("transition-transform duration-100", className)}
      style={{
        transform: `translateY(-${calculateTransform()}px)`,
      }}
    >
      {children}
    </div>
  );
};

// Scroll Velocity Animation
export const ScrollVelocity = ({ 
  children, 
  className,
  factor = 0.1
}: { 
  children: React.ReactNode; 
  className?: string;
  factor?: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = React.useState(0);
  const prevScrollY = React.useRef(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - prevScrollY.current;
      prevScrollY.current = currentScrollY;
      
      setRotation(prev => {
        const newRotation = prev + scrollDiff * factor;
        return Math.min(15, Math.max(-15, newRotation * 0.9)); // Add some damping
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [factor]);
  
  return (
    <div 
      ref={ref} 
      className={cn("transition-transform", className)}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {children}
    </div>
  );
};
