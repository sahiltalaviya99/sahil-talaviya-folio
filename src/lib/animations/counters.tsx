
import * as React from "react";
import { cn } from "../utils";

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

// Decimal Counter - counts up with decimal precision
export const DecimalCounter = ({ 
  from = 0, 
  to = 100, 
  duration = 2000,
  decimals = 1,
  className 
}: { 
  from?: number; 
  to: number; 
  duration?: number;
  decimals?: number;
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
      setCount(from + (to - from) * percentage);
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);
  
  return <span className={className}>{count.toFixed(decimals)}</span>;
};

// Percentage Counter with circle progress
export const CircleCounter = ({ 
  value = 0,
  max = 100,
  size = 80,
  strokeWidth = 6,
  duration = 2000,
  className 
}: { 
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  duration?: number;
  className?: string;
}) => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const percentage = Math.min(elapsed / duration, 1);
      setProgress(percentage * value);
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / max) * circumference;
  
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          className="text-muted stroke-current"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-primary stroke-current transition-all duration-500 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <span className="absolute text-sm font-medium">
        {Math.round(progress)}%
      </span>
    </div>
  );
};
