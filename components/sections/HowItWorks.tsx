
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const HowItWorks: React.FC<SectionProps> = ({ theme, settings }) => {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight" style={{ color: theme.text }}>
          How it works
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
        {/* Card 1: Extraction */}
        <div 
          className="rounded-3xl md:rounded-[2.5rem] pt-8 md:pt-12 px-0 flex flex-col h-[500px] md:h-[650px] border relative overflow-hidden transition-all duration-700 hover:shadow-2xl group"
          style={{ 
            backgroundColor: settings.isDarkMode ? `${theme.surface}33` : '#fcfcfc',
            borderColor: `${theme.text}08`,
            borderRadius: settings.borderRadius
          }}
        >
          <div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{ background: `linear-gradient(to top, ${theme.primary}33, transparent 50%)` }}
          />

          <div className="relative z-20 px-6 md:px-10 mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight" style={{ color: theme.text }}>
              Prism analyzes 
              <span 
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full mx-1.5 text-xs md:text-xl align-middle font-bold whitespace-nowrap"
                style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
              >
                branding
              </span> 
              to sync your UI
            </h3>
          </div>

          <div 
            className="flex-1 mx-6 md:mx-10 rounded-t-2xl border-t border-x shadow-2xl relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-700"
            style={{ 
              backgroundColor: settings.isDarkMode ? '#0c0c0e' : '#ffffff', 
              borderColor: `${theme.text}08` 
            }}
          >
            <div className="flex gap-1.5 p-4 md:p-5 border-b" style={{ borderColor: `${theme.text}03` }}>
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-400" />
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-amber-400" />
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="p-6 md:p-10 space-y-4 md:space-y-6 font-medium text-xs md:text-lg opacity-70" style={{ color: theme.text }}>
              <p>Analyzing brand_guide.pdf...</p>
              <p>Extracting 12 primary swatches...</p>
              <p>Generating design tokens...</p>
              <div className="flex items-center gap-1 mt-4">
                <span className="text-emerald-500">Ready for Preview</span>
                <div className="w-1 h-5 bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Enhancement */}
        <div 
          className="rounded-3xl md:rounded-[2.5rem] pt-8 md:pt-12 px-0 flex flex-col h-[500px] md:h-[650px] border relative overflow-hidden transition-all duration-700 hover:shadow-2xl group"
          style={{ 
            backgroundColor: settings.isDarkMode ? `${theme.surface}33` : '#fcfcfc',
            borderColor: `${theme.text}08`,
            borderRadius: settings.borderRadius
          }}
        >
          <div 
            className="absolute inset-0 pointer-events-none z-0"
            style={{ background: `linear-gradient(to top, ${theme.accent}33, transparent 50%)` }}
          />

          <div className="relative z-20 px-6 md:px-10 mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight" style={{ color: theme.text }}>
              Experience is 
              <span 
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full mx-1.5 text-xs md:text-xl align-middle font-bold whitespace-nowrap"
                style={{ backgroundColor: `${theme.accent}15`, color: theme.accent }}
              >
                enhanced
              </span> 
              with logic
            </h3>
          </div>

          <div 
            className="flex-1 mx-6 md:mx-10 rounded-t-2xl border-t border-x shadow-2xl relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-700 overflow-hidden"
            style={{ 
              backgroundColor: settings.isDarkMode ? '#0c0c0e' : '#ffffff', 
              borderColor: `${theme.text}08` 
            }}
          >
             <div className="flex gap-1.5 p-4 md:p-5 border-b" style={{ borderColor: `${theme.text}03` }}>
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-400" />
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-amber-400" />
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="p-6 md:p-10 space-y-6 md:space-y-10 h-full">
              <div className="space-y-4 md:space-y-6 text-[10px] md:text-base opacity-75" style={{ color: theme.text }}>
                <div>
                  <div className="font-bold text-sm md:text-lg mb-1 md:mb-2 opacity-90">Design Orchestration</div>
                  <ul className="space-y-1 md:space-y-2 pl-2 opacity-60">
                    <li>• Contrast-safe mappings</li>
                    <li>• Context-aware shadows</li>
                    <li>• Fluid typography scaling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
