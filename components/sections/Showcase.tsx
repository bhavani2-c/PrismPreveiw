
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const Showcase: React.FC<SectionProps> = ({ theme, settings }) => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video opacity-20 blur-[120px] rounded-full"
        style={{ background: `radial-gradient(circle, ${theme.primary}, ${theme.secondary}, transparent 70%)` }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div 
          className="rounded-2xl md:rounded-[3rem] border border-white/5 backdrop-blur-3xl p-6 md:p-20 flex flex-col items-center justify-center min-h-[400px] md:min-h-[600px] relative overflow-hidden group"
          style={{ 
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            backgroundColor: `${theme.surface}66`
          }}
        >
          {/* Internal Mesh Glows */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 md:w-80 h-40 md:h-80 opacity-20 blur-[80px] rounded-full" style={{ backgroundColor: theme.primary }} />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 md:w-80 h-40 md:h-80 opacity-20 blur-[80px] rounded-full" style={{ backgroundColor: theme.secondary }} />

          {/* Floating Icons - Left Side - Hidden on mobile */}
          <div className="hidden md:block absolute left-10 md:left-24 top-1/3 -translate-y-1/2 animate-bounce transition-all duration-1000" style={{ animationDuration: '4s' }}>
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center shadow-xl" style={{ backgroundColor: `${theme.surface}cc`, boxShadow: `0 0 20px ${theme.primary}44` }}>
              <svg className="w-8 h-8" style={{ color: theme.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
          </div>

          {/* Mobile Phone Mock-up */}
          <div 
            className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[9/18.5] rounded-[2rem] md:rounded-[3rem] border-[6px] md:border-[8px] shadow-2xl overflow-hidden animate-fade-in flex flex-col items-center justify-center p-6 md:p-8 transition-transform group-hover:scale-105 duration-700"
            style={{ 
              backgroundColor: theme.surface, 
              borderColor: `${theme.text}11`
            }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-3 md:top-4 w-12 md:w-16 h-4 md:h-5 bg-black/40 rounded-full" />
            
            <div className="text-center space-y-3 md:space-y-4" style={{ color: theme.text }}>
              <div className="text-4xl md:text-6xl font-black tracking-tighter">UI+</div>
              <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-80 leading-tight">
                Production-Ready<br />Components
              </div>
              <div className="pt-4 md:pt-8">
                <div 
                  className="px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-transform hover:scale-105"
                  style={{ 
                    background: `linear-gradient(to right, ${theme.primary}, ${theme.accent})`,
                    color: theme.background
                  }}
                >
                  Live Preview
                </div>
              </div>
            </div>

            {/* Glossy Overlay for screen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>

          {/* Floating Icons - Right Side - Hidden on mobile */}
          <div className="hidden md:block absolute right-10 md:right-24 top-1/4 animate-bounce transition-all duration-1000" style={{ animationDuration: '4.8s' }}>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center shadow-lg" style={{ backgroundColor: `${theme.surface}cc`, boxShadow: `0 0 18px ${theme.accent}44` }}>
              <svg className="w-7 h-7" style={{ color: theme.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
