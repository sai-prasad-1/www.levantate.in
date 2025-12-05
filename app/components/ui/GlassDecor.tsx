"use client";

import React from 'react';

interface GlassDecorProps {
  position?: 'left' | 'right';
  className?: string;
}

const GlassDecor = ({ position = 'right', className = '' }: GlassDecorProps) => {
  // Calculate position to be at viewport edge with half outside
  // -50vw + 50% moves to viewport edge, then -60px pushes half outside
  const positionStyle = position === 'left' 
    ? { left: 'calc(-50vw + 50% - 60px)' }
    : { right: 'calc(-50vw + 50% - 60px)' };

  return (
    <div 
      className={`absolute top-0 bottom-0 pointer-events-none ${className}`}
      style={{
        width: '120px',
        ...positionStyle,
      }}
    >
      <div 
        className="w-full h-full rounded-[20px]"
        style={{
          background: 'transparent',
          border: '1px solid transparent',
          borderImage: 'linear-gradient(180deg, rgba(231, 230, 239, 0.3) 0%, #C3C3D6 30%, #C3C3D6 70%, rgba(231, 230, 239, 0.3) 100%) 1',
          borderRadius: '20px',
          position: 'relative',
        }}
      >
        {/* Groove border with gradient */}
        <div 
          className="absolute inset-0 rounded-[20px]"
          style={{
            border: '1px solid',
            borderColor: 'rgba(195, 195, 214, 0.5)',
            boxShadow: `
              inset 0 0 20px rgba(255, 255, 255, 0.3),
              inset 2px 0 8px rgba(255, 255, 255, 0.4),
              inset -2px 0 8px rgba(255, 255, 255, 0.2),
              0 0 15px rgba(255, 255, 255, 0.2),
              2px 0 10px rgba(255, 255, 255, 0.3),
              -2px 0 10px rgba(255, 255, 255, 0.15)
            `,
          }}
        />
        {/* Inner highlight line */}
        <div 
          className="absolute rounded-[18px]"
          style={{
            top: '2px',
            bottom: '2px',
            left: '2px',
            right: '2px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.1)',
          }}
        />
      </div>
    </div>
  );
};

export default GlassDecor;

