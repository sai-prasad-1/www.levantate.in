"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ScrollText = () => {
  const [isHovered, setIsHovered] = useState(false);

  const textItems = [
    "SECURE FUNDING",
    "IMPRESS INVESTORS",
    "EARN CREDIBILITY",
    "STAND OUT IN A CROWDED MARKET",
    "LOOK LIKE A PROPER STARTUP",
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...textItems, ...textItems];
  {/*TODO: Make this section mobile friendly*/}

  return (
    <div className="relative w-full overflow-hidden" style={{ paddingTop: '84px', paddingBottom: '84px', minHeight: '300px' }}>
      {/* Top Groove Borders - 3 grooves with 42px gap */}
      {/* Groove 1 - Smallest */}
      <div className="absolute w-[40%] left-1/2 -translate-x-1/2" style={{ top: '18px' }}>
        <div 
          className="w-full"
          style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%]"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
          }}
        ></div>
      </div>

      {/* Groove 2 - Medium */}
      <div className="absolute w-[65%] left-1/2 -translate-x-1/2" style={{ top: '58px' }}>
        <div 
          className="w-full"
          style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%]"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
          }}
        ></div>
      </div>

      {/* Groove 3 - Largest */}
      <div className="absolute w-[90%] left-1/2 -translate-x-1/2" style={{ top: '98px' }}>
        <div 
          className="w-full"
          style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%]"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 1px 3px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
          }}
        ></div>
      </div>

      {/* Bottom Groove Borders - 3 grooves with 42px gap */}
      {/* Groove 1 - Largest */}
      <div className="absolute w-[90%] left-1/2 -translate-x-1/2" style={{ bottom: '120px' }}>
        <div 
          className="w-full"
          style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%]"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 3px 8px rgba(255, 255, 255, 0.7), 0 1px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.6))'
          }}
        ></div>
      </div>

      {/* Groove 2 - Medium */}
      <div className="absolute w-[65%] left-1/2 -translate-x-1/2" style={{ bottom: '80px' }}>
        <div 
          className="w-full"
          style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%]"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 3px 8px rgba(255, 255, 255, 0.7), 0 1px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.6))'
          }}
        ></div>
      </div>

      {/* Groove 3 - Smallest */}
      <div className="absolute w-[40%] left-1/2 -translate-x-1/2" style={{ bottom: '40px' }}>
        <div 
          className="w-full"
          style={{
            height: '2px',
            background: 'linear-gradient(to right, transparent 0%, rgba(231, 230, 239, 0.3) 10%, rgba(231, 230, 239, 0.6) 30%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 70%, rgba(231, 230, 239, 0.3) 90%, transparent 100%)'
          }}
        ></div>
        <div 
          className="absolute top-0 left-[25%] w-[50%]"
          style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(231, 230, 239, 0.6) 0%, #C3C3D6 50%, rgba(231, 230, 239, 0.6) 100%)',
            boxShadow: '0 3px 8px rgba(255, 255, 255, 0.7), 0 1px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 2px 6px rgba(255, 255, 255, 0.6))'
          }}
        ></div>
      </div>

      {/* Scrolling Text Container */}
      <div
        className="relative overflow-hidden"
        style={{ paddingTop: '42px', paddingBottom: '10px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap"
          animate={{
            x: isHovered ? '-50%' : '0%',
          }}
          transition={{
            x: {
              duration: 20,
              ease: 'linear',
              repeat: isHovered ? Infinity : 0,
              repeatType: 'loop',
            },
          }}
          style={{
            width: 'fit-content',
          }}
        >
          {duplicatedItems.map((item, index) => (
            <span
              key={index}
              className="text-lg font-medium text-[#38385B] px-4"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollText;
