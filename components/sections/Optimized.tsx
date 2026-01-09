
import React, { useState, useEffect, useRef } from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const Optimized: React.FC<SectionProps> = ({ theme, settings }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const labels = [
    { text: 'Responsive Grid', x: '10%', y: '10%', delay: '0s', hideOnMobile: false },
    { text: 'Glassmorphism', x: '25%', y: '30%', delay: '0.5s', hideOnMobile: true },
    { text: 'Tailwind Sync', x: '70%', y: '15%', delay: '1s', hideOnMobile: false },
    { text: 'Design Tokens', x: '85%', y: '25%', delay: '1.5s', hideOnMobile: true },
    { text: 'Dark Theme', x: '75%', y: '40%', delay: '2s', hideOnMobile: true },
    { text: 'Component Library', x: '80%', y: '60%', delay: '0.2s', hideOnMobile: true },
    { text: 'Motion Logic', x: '85%', y: '85%', delay: '1.2s', hideOnMobile: false },
    { text: 'Auto Layout', x: '65%', y: '75%', delay: '0.8s', hideOnMobile: true },
    { text: 'Font Pairing', x: '60%', y: '55%', delay: '1.8s', hideOnMobile: true },
    { text: 'Visual Hierarchy', x: '15%', y: '75%', delay: '2.5s', hideOnMobile: false },
  ];

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden min-h-[500px] md:min-h-[700px] flex items-center transition-colors duration-500"
      style={{ backgroundColor: theme.background }}
    >
      {/* Dynamic Cursor Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300 opacity-40 blur-[150px]"
        style={{ 
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${theme.primary}aa, ${theme.secondary}66, transparent 60%)` 
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 md:mb-8 leading-tight" style={{ color: theme.text }}>
            Optimized for <br className="hidden sm:block" />
            <span style={{ color: theme.accent }}>Every Interface</span>
          </h2>
          <p className="text-sm md:text-lg opacity-60 leading-relaxed font-medium" style={{ color: theme.text }}>
            Whether it's a SaaS dashboard, a landing page, or a minimal portfolio, Prism's engine ensures your design tokens remain consistent and accessible.
          </p>
        </div>

        {/* Right Side: Interactive Diagram */}
        <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
          
          {/* Decorative Connecting Lines Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[1px]" style={{ backgroundColor: theme.text }} />
            <div className="absolute top-0 left-1/2 w-[1px] h-full" style={{ backgroundColor: theme.text }} />
            <div className="absolute top-1/4 left-0 w-full h-[1px] rotate-12" style={{ backgroundColor: theme.text }} />
            <div className="absolute top-0 left-1/3 w-[1px] h-full -rotate-12" style={{ backgroundColor: theme.text }} />
          </div>

          {/* Floating Labels */}
          {labels.map((label, idx) => (
            <div 
              key={idx}
              className={`absolute px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl border text-[9px] md:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap backdrop-blur-xl animate-float pointer-events-none transition-all duration-700 ${label.hideOnMobile ? 'hidden md:block' : ''}`}
              style={{ 
                left: label.x, 
                top: label.y, 
                animationDelay: label.delay,
                backgroundColor: `${theme.surface}bb`,
                borderColor: `${theme.primary}33`,
                color: theme.text,
                boxShadow: `0 10px 30px -10px ${theme.glow}`
              }}
            >
              {label.text}
            </div>
          ))}

          {/* Central Design Hub */}
          <div className="relative group">
            <div 
              className="absolute -inset-10 opacity-20 blur-3xl rounded-full transition-all group-hover:scale-150 group-hover:opacity-40"
              style={{ background: `radial-gradient(circle, ${theme.accent}, ${theme.primary}, transparent 70%)` }}
            />
            <div 
              className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl border-2 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 duration-500"
              style={{ 
                backgroundColor: theme.surface, 
                borderColor: `${theme.primary}66`,
                boxShadow: `0 0 50px -5px ${theme.primary}55`
              }}
            >
              <svg className="w-12 h-12" style={{ color: theme.text }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              {/* Internal glow text */}
              <div className="absolute -bottom-1 font-black text-[10px] tracking-widest uppercase opacity-40" style={{ color: theme.text }}>UI</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(8px) translateX(8px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Optimized;
