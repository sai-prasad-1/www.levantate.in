"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Interactive dot that changes color on hover proximity
export const InteractiveDot = ({ 
  mousePos, 
  dotRef,
  radius = 50,
  activeColor = "#38385B",
  inactiveColor = "#CDCDDE",
  size = "md",
}: { 
  mousePos: { x: number; y: number } | null;
  dotRef?: React.RefObject<HTMLDivElement | null>;
  radius?: number;
  activeColor?: string;
  inactiveColor?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const localRef = useRef<HTMLDivElement>(null);
  const ref = dotRef || localRef;
  const [isNear, setIsNear] = useState(false);

  const sizeClasses = {
    sm: "w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px]",
    md: "w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[14px] md:h-[14px]",
    lg: "w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[16px] md:h-[16px]",
  };

  useEffect(() => {
    if (!mousePos || !ref.current) {
      setIsNear(false);
      return;
    }

    const dot = ref.current;
    const rect = dot.getBoundingClientRect();
    const dotCenterX = rect.left + rect.width / 2;
    const dotCenterY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePos.x - dotCenterX, 2) + 
      Math.pow(mousePos.y - dotCenterY, 2)
    );
    
    setIsNear(distance < radius);
  }, [mousePos, ref, radius]);

  return (
    <motion.div
      ref={ref}
      className={`${sizeClasses[size]} rounded-full`}
      animate={{
        backgroundColor: isNear ? activeColor : inactiveColor,
        scale: isNear ? 1.2 : 1,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    />
  );
};

// Hook for mouse tracking
export const useMouseTracking = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return { mousePos, handleMouseMove, handleMouseLeave };
};

// Cross pattern dot grid (horizontal + vertical + diamond)
export const InteractiveDotGridCross = ({
  className = "",
}: {
  className?: string;
}) => {
  const { mousePos, handleMouseMove, handleMouseLeave } = useMouseTracking();

  return (
    <div 
      className={`flex items-center justify-center h-32 sm:h-40 md:h-1/2 w-full ${className} hidden lg:flex`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center">
        {/* Horizontal dots */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          {Array.from({ length: 17 }).map((_, i) => (
            <InteractiveDot key={`h-${i}`} mousePos={mousePos} />
          ))}
        </div>

        {/* Vertical dots */}
        <div className="absolute flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <InteractiveDot key={`v-${i}`} mousePos={mousePos} />
          ))}
        </div>

        {/* Diamond/cluster dots */}
        <div className="absolute flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex gap-3 sm:gap-4 md:gap-6">
            <InteractiveDot mousePos={mousePos} />
            <InteractiveDot mousePos={mousePos} />
          </div>
          <div className="flex gap-3 sm:gap-4 md:gap-6">
            <InteractiveDot mousePos={mousePos} />
            <InteractiveDot mousePos={mousePos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Rectangular grid of dots
export const InteractiveDotGridRect = ({
  rows = 18,
  cols = 7,
  gap = "gap-4",
  className = "",
}: {
  rows?: number;
  cols?: number;
  gap?: string;
  className?: string;
}) => {
  const { mousePos, handleMouseMove, handleMouseLeave } = useMouseTracking();
  const totalDots = rows * cols;

  return (
    <div 
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`grid grid-cols-${cols} ${gap}`}>
        {Array.from({ length: totalDots }).map((_, i) => (
          <InteractiveDot key={i} mousePos={mousePos} />
        ))}
      </div>
    </div>
  );
};

// Flexible grid with custom column count
export const InteractiveDotGrid = ({
  count = 126,
  cols = 7,
  gap = "gap-4",
  containerClassName = "",
  gridClassName = "",
}: {
  count?: number;
  cols?: number;
  gap?: string;
  containerClassName?: string;
  gridClassName?: string;
}) => {
  const { mousePos, handleMouseMove, handleMouseLeave } = useMouseTracking();

  return (
    <div 
      className={containerClassName}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`grid ${gap} ${gridClassName}`}
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: count }).map((_, i) => (
          <InteractiveDot key={i} mousePos={mousePos} />
        ))}
      </div>
    </div>
  );
};

export default InteractiveDotGridCross;

