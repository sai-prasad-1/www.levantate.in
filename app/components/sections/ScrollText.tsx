"use client";

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

// Wrap function to keep value within a range
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div 
        className="flex whitespace-nowrap gap-4 sm:gap-8 md:gap-12" 
        style={{ x }}
      >
        <span className="block">{children}</span>
        <span className="block">{children}</span>
        <span className="block">{children}</span>
        <span className="block">{children}</span>
      </motion.div>
    </div>
  );
}

const ScrollText = () => {
  const textItems = [
    "SECURE FUNDING",
    "IMPRESS INVESTORS",
    "EARN CREDIBILITY",
    "STAND OUT IN A CROWDED MARKET",
    "LOOK LIKE A PROPER STARTUP",
  ];

  const textContent = textItems.map((item, index) => (
    <span
      key={index}
      className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-agile text-[#38385B] px-2 sm:px-3 md:px-4"
    >
      {item}
    </span>
  ));

  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 md:py-20 lg:py-[84px] min-h-[120px] sm:min-h-[180px] md:min-h-[260px] lg:min-h-[300px]">
      {/* Top Groove Borders - 3 grooves */}
      {/* Groove 1 - Smallest */}
      <div className="absolute w-[50%] sm:w-[45%] md:w-[40%] left-1/2 -translate-x-1/2 top-2 sm:top-3 md:top-[18px]">
        <div 
          className="w-full h-[1px] sm:h-[2px]"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%] h-[1px]"
          style={{
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
          }}
        ></div>
      </div>

      {/* Groove 2 - Medium */}
      <div className="absolute w-[75%] sm:w-[70%] md:w-[65%] left-1/2 -translate-x-1/2 top-6 sm:top-9 md:top-[58px]">
        <div 
          className="w-full h-[1px] sm:h-[2px]"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%] h-[1px]"
          style={{
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
          }}
        ></div>
      </div>

      {/* Groove 3 - Largest */}
      <div className="absolute w-[95%] sm:w-[92%] md:w-[90%] left-1/2 -translate-x-1/2 top-10 sm:top-14 md:top-[98px]">
        <div 
          className="w-full h-[1px] sm:h-[2px]"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%] h-[1px]"
          style={{
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
          }}
        ></div>
      </div>

      {/* Bottom Groove Borders - 3 grooves */}
      {/* Groove 1 - Largest */}
      <div className="absolute w-[95%] sm:w-[92%] md:w-[90%] left-1/2 -translate-x-1/2 bottom-10 sm:bottom-16 md:bottom-[120px]">
        <div 
          className="w-full h-[1px] sm:h-[2px]"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%] h-[1px]"
          style={{
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 3px 8px rgba(255, 255, 255, 0.7), 0 1px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.6))'
          }}
        ></div>
      </div>

      {/* Groove 2 - Medium */}
      <div className="absolute w-[75%] sm:w-[70%] md:w-[65%] left-1/2 -translate-x-1/2 bottom-6 sm:bottom-10 md:bottom-[80px]">
        <div 
          className="w-full h-[1px] sm:h-[2px]"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%] h-[1px]"
          style={{
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 3px 8px rgba(255, 255, 255, 0.7), 0 1px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.6))'
          }}
        ></div>
      </div>

      {/* Groove 3 - Smallest */}
      <div className="absolute w-[50%] sm:w-[45%] md:w-[40%] left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 md:bottom-[40px]">
        <div 
          className="w-full h-[1px] sm:h-[2px]"
          style={{
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%] h-[1px]"
          style={{
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 3px 8px rgba(255, 255, 255, 0.7), 0 1px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.6))'
          }}
        ></div>
      </div>

      {/* Scrolling Text Container - Centered between largest grooves */}
      <div className="absolute left-0 right-0 top-[48%] -translate-y-1/2">
        <ParallaxText baseVelocity={-3}>
          <span className="flex items-center gap-4 sm:gap-8 md:gap-12">
            {textContent}
          </span>
        </ParallaxText>
      </div>
    </div>
  );
};

export default ScrollText;
