
import React, { useState, useRef } from 'react';
import { ColorTheme } from '../../types';

interface CursorButtonProps {
  theme: ColorTheme;
  text?: string;
}

const CursorButton: React.FC<CursorButtonProps> = ({ theme, text = "Neon Pulse" }) => {
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate angle in degrees
    const angle = (Math.atan2(y, x) * 180) / Math.PI;
    setRotation(angle + 90); // Offset to match the visual starting point
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative px-6 md:px-12 py-3 md:py-5 rounded-xl md:rounded-[2rem] text-lg md:text-4xl font-medium transition-all active:scale-95 group overflow-hidden border"
      style={{
        backgroundColor: theme.surface,
        borderColor: `${theme.text}11`,
        color: theme.text,
      }}
    >
      {/* Background Rotating Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: opacity * 0.4,
          background: `conic-gradient(from ${rotation}deg at 50% 50%, transparent, ${theme.primary} 40%, ${theme.accent} 50%, ${theme.primary} 60%, transparent)`,
          filter: 'blur(20px)',
        }}
      />

      {/* Surface Shine / Highlight */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: opacity * 0.2,
          background: `radial-gradient(circle at center, ${theme.text}22, transparent 70%)`,
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3 md:gap-6">
        {text}
        <svg 
          className="w-6 h-6 md:w-10 md:h-10 transition-transform duration-300 group-hover:translate-x-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>

      {/* Inner Glow Border */}
      <div 
        className="absolute inset-0 rounded-xl md:rounded-[2rem] pointer-events-none border-2 opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ borderColor: theme.accent }}
      />
    </button>
  );
};

export default CursorButton;
