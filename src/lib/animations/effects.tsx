
import * as React from "react";
import { cn } from "../utils";

// Magnet effect for buttons and interactive elements
export const MagnetEffect = ({ 
  children, 
  className,
  strength = 20
}: { 
  children: React.ReactNode; 
  className?: string;
  strength?: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    const moveX = (x - centerX) / centerX * strength;
    const moveY = (y - centerY) / centerY * strength;
    
    ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };
  
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };
  
  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-100", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

// Spotlight effect that follows cursor
export const SpotlightEffect = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setPosition({ x, y });
  };
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute pointer-events-none inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(var(--primary), 0.15) 0%, rgba(var(--primary), 0) 50%)`,
        }}
      />
      {children}
    </div>
  );
};

// Parallax effect for elements
export const ParallaxEffect = ({ 
  children, 
  className,
  speed = 0.1
}: { 
  children: React.ReactNode; 
  className?: string;
  speed?: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top } = ref.current.getBoundingClientRect();
      const offset = window.scrollY * speed;
      setOffset(offset);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div 
      ref={ref}
      className={cn("relative", className)}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};
