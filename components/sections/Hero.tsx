
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const Hero: React.FC<SectionProps> = ({ theme, settings }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Layering */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Particle Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, ${theme.text} 1px, transparent 1px)`, 
            backgroundSize: '48px 48px' 
          }} 
        />
        
        {/* Focal Radial Glow - concentrated behind text */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-30 blur-[120px] rounded-full transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${theme.primary}, ${theme.secondary}, transparent 70%)` }}
        />
        
        {/* Secondary Lower Ambient Glows - using theme colors */}
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] opacity-10 blur-[120px] rounded-full"
             style={{ background: `radial-gradient(circle, ${theme.accent}, transparent)` }} />
             
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] opacity-10 blur-[100px] rounded-full"
             style={{ background: `radial-gradient(circle, ${theme.primary}, transparent)` }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* 3D Orb Mascot */}
        <div className="relative mb-8 md:mb-14 group">
          <div 
            className="w-20 h-20 md:w-32 md:h-32 rounded-full relative overflow-hidden shadow-2xl transition-all duration-1000 animate-bounce group-hover:scale-110"
            style={{ 
              animationDuration: '6s',
              background: `radial-gradient(circle at 30% 30%, ${theme.accent}, ${theme.primary} 70%)`,
              boxShadow: `0 0 80px -10px ${theme.primary}aa`
            }}
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            <div className="absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-white/30 rounded-full blur-[2px]" />
            
            {/* Eyes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3 md:gap-5 opacity-90">
              <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-white rounded-full shadow-[0_0_12px_white]" />
              <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-white rounded-full shadow-[0_0_12px_white]" />
            </div>
          </div>
          {/* Subtle Outer Ring */}
          <div className="absolute -inset-3 md:-inset-4 rounded-full border border-white/5 animate-pulse opacity-50" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-[900] tracking-tighter mb-6 md:mb-8 leading-[0.95] drop-shadow-2xl" style={{ color: theme.text }}>
          Prism: Your <br />
          <span 
            className="bg-gradient-to-r bg-clip-text text-transparent opacity-95" 
            style={{ backgroundImage: `linear-gradient(to right, ${theme.secondary}, ${theme.primary}, ${theme.accent})` }}
          >
            Design Intelligence
          </span>
        </h1>

        <p className="text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-14 opacity-60 font-medium leading-relaxed px-2" style={{ color: theme.text }}>
          The only genuine design accelerator - Instant Themes, Intelligent Color Mapping, Automated Previews, and accessible UI logic. Our system adapts to your brand vision effortlessly!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 mb-12 md:mb-24 w-full px-2">
          <button 
            className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm font-bold shadow-2xl transition-all hover:scale-105 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 md:gap-3"
            style={{ backgroundColor: theme.text, color: theme.background, boxShadow: `0 20px 40px -10px ${theme.primary}44` }}
          >
            Try Prism Free <span className="text-base md:text-lg">→</span>
          </button>
          <button 
            className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm font-bold border transition-all hover:bg-white/10 active:scale-95 flex items-center justify-center"
            style={{ borderColor: `${theme.text}22`, color: theme.text, backgroundColor: 'rgba(255,255,255,0.02)' }}
          >
            View Live Sandbox
          </button>
        </div>

        {/* Floating Stats Bar */}
        <div 
          className="w-full max-w-2xl rounded-2xl md:rounded-[2.5rem] p-4 md:p-9 border backdrop-blur-3xl flex flex-row justify-between gap-2 md:gap-4 transition-all hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
          style={{ 
            backgroundColor: settings.isDarkMode ? 'rgba(15, 23, 42, 0.4)' : 'rgba(255, 255, 255, 0.8)',
            borderColor: `${theme.text}11`,
            boxShadow: `0 30px 60px -15px rgba(0,0,0,0.6)`
          }}
        >
          <div className="flex-1 text-center border-r last:border-0 border-white/5 px-1 md:px-2">
            <div className="text-xl sm:text-2xl md:text-4xl font-black mb-0.5 md:mb-1.5" style={{ color: theme.text }}>14k+</div>
            <div className="text-[8px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-extrabold opacity-40">Shipped</div>
          </div>
          <div className="flex-1 text-center border-r last:border-0 border-white/5 px-1 md:px-2">
            <div className="text-xl sm:text-2xl md:text-4xl font-black mb-0.5 md:mb-1.5" style={{ color: theme.text }}>100%</div>
            <div className="text-[8px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-extrabold opacity-40">A11y</div>
          </div>
          <div className="flex-1 text-center px-1 md:px-2">
            <div className="text-xl sm:text-2xl md:text-4xl font-black mb-0.5 md:mb-1.5" style={{ color: theme.text }}>24+</div>
            <div className="text-[8px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-extrabold opacity-40">Modules</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
