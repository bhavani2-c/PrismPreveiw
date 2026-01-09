
import React, { useState } from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const Navbar: React.FC<SectionProps> = ({ theme, settings }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav 
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 px-3 md:px-5 py-2 rounded-full border flex items-center gap-2 md:gap-6 backdrop-blur-2xl transition-all duration-700 w-[calc(100%-2rem)] max-w-fit"
        style={{
          backgroundColor: '#000000aa',
          borderColor: `${theme.primary}22`,
          boxShadow: `0 4px 24px -6px rgba(0,0,0,0.5)`
        }}
      >
        <div className="flex items-center gap-2 md:gap-3 pr-2 md:pr-4 border-r border-white/10">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden flex items-center justify-center bg-zinc-900 border border-white/5 relative">
             {/* Simple Mascot Placeholder with inner glow */}
             <div 
               className="w-4 h-4 md:w-5 md:h-5 rounded-full" 
               style={{ 
                 background: `radial-gradient(circle at top left, ${theme.accent}, ${theme.primary})`,
                 boxShadow: `0 0 10px ${theme.primary}aa`
               }} 
             />
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider">
          <div className="group relative flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
             Tools <span className="text-[8px] opacity-40">▼</span>
          </div>
          {['Pricing', 'About', 'Blog'].map(item => (
            <a key={item} href="#" className="transition-all hover:opacity-100 opacity-60 hover:text-white" style={{ color: theme.text }}>{item}</a>
          ))}
        </div>

        <div className="pl-1 md:pl-2 flex items-center gap-2">
          <button 
            className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-3 md:px-5 py-2 md:py-2.5 rounded-full transition-all active:scale-95 border border-white/10 flex items-center gap-1 md:gap-2" 
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', color: theme.text }}
          >
            <span className="hidden sm:inline">Get started</span>
            <span className="sm:hidden">Start</span>
            <span className="opacity-50 text-sm">→</span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: theme.text }}>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="fixed top-20 left-4 right-4 z-40 md:hidden rounded-2xl border backdrop-blur-2xl p-4 animate-fade-in"
          style={{
            backgroundColor: '#000000dd',
            borderColor: `${theme.primary}22`,
          }}
        >
          <div className="flex flex-col gap-4 text-sm font-bold">
            {['Tools', 'Pricing', 'About', 'Blog'].map(item => (
              <a 
                key={item} 
                href="#" 
                className="py-2 px-4 rounded-lg hover:bg-white/5 transition-all" 
                style={{ color: theme.text }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
