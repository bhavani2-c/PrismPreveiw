
import React from 'react';
import { ColorTheme } from '../../types';

interface RainbowButtonProps {
  theme: ColorTheme;
  text?: string;
}

const RainbowButton: React.FC<RainbowButtonProps> = ({ theme, text = "Get Unlimited Access" }) => {
  return (
    <div className="relative group">
      {/* Animated Rainbow Background / Glow */}
      <div 
        className="absolute -inset-[2px] rounded-xl md:rounded-2xl opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-rainbow-slow"
        style={{
          background: `linear-gradient(90deg, ${theme.secondary}, ${theme.primary}, ${theme.accent}, ${theme.primary}, ${theme.secondary})`,
          backgroundSize: '200% 100%',
        }}
      />
      
      {/* Main Button Body */}
      <button
        className="relative px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl text-base md:text-2xl font-bold bg-white transition-transform active:scale-95 flex items-center justify-center overflow-hidden"
        style={{ color: '#18181b' }}
      >
        <span className="relative z-10">{text}</span>
        
        {/* Subtle inner sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/60 pointer-events-none" />
      </button>

      {/* Bottom Focused Glow */}
      <div 
        className="absolute -bottom-2 left-4 right-4 h-3 md:h-4 opacity-50 blur-xl animate-rainbow-slow pointer-events-none"
        style={{
          background: `linear-gradient(90deg, ${theme.secondary}, ${theme.primary}, ${theme.accent}, ${theme.primary})`,
          backgroundSize: '200% 100%',
        }}
      />

      <style>{`
        @keyframes rainbow-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-rainbow-slow {
          animation: rainbow-move 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RainbowButton;
