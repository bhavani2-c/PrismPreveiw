
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';
import CursorButton from '../common/CursorButton';
import RainbowButton from '../common/RainbowButton';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const InteractiveCTA: React.FC<SectionProps> = ({ theme, settings }) => {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6 relative flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle, ${theme.primary} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="text-center mb-10 md:mb-16 relative z-10 px-2">
        <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 opacity-40" style={{ color: theme.text }}>
          Magic Interactions
        </h2>
        <p className="text-base md:text-2xl font-medium max-w-xl mx-auto opacity-60" style={{ color: theme.text }}>
          Buttons that feel alive. High-contrast triggers with dynamic theme-aware glows.
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 md:gap-20">
        {/* Golden Hour Button */}
        <div className="group">
          <div className="absolute -inset-20 bg-gradient-to-r from-purple-500/20 to-orange-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <CursorButton theme={theme} />
        </div>

        {/* Rainbow Button */}
        <div className="mt-12">
          <RainbowButton theme={theme} />
        </div>
      </div>
    </section>
  );
};

export default InteractiveCTA;
