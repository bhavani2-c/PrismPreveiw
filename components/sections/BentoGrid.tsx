
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const BentoGrid: React.FC<SectionProps> = ({ theme, settings }) => {
  const cards = [
    { 
      title: 'Palette Intelligence', 
      desc: 'Our proprietary engine extracts and maps brand colors to semantic UI roles automatically.', 
      size: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
      customContent: (
        <div className="mt-8 relative h-48 md:h-64 w-full flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-[260px] flex flex-col gap-3 z-10">
             {[
               { name: 'Surface', color: theme.surface, role: 'Background' },
               { name: 'Primary', color: theme.primary, role: 'Action' },
               { name: 'Accent', color: theme.accent, role: 'Highlight' }
             ].map((item, i) => (
                <div key={i} 
                     className="flex items-center gap-3 p-2.5 pr-4 rounded-xl border backdrop-blur-sm transition-all duration-500 group/item hover:translate-x-1"
                     style={{ 
                       backgroundColor: `${theme.surface}cc`, 
                       borderColor: `${theme.text}11`,
                       transform: `translateX(${i % 2 === 0 ? '-8px' : '8px'})`, 
                       boxShadow: '0 4px 20px -2px rgba(0,0,0,0.1)'
                     }}>
                   <div className="w-10 h-10 rounded-lg shadow-sm border border-black/5 ring-2 ring-white/20" 
                        style={{ backgroundColor: item.color }} />
                   <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold leading-tight mb-0.5" style={{ color: theme.text }}>{item.name}</div>
                      <div className="text-[10px] opacity-60 font-mono flex items-center gap-1.5" style={{ color: theme.text }}>
                         <span className="w-1 h-1 rounded-full bg-current"></span>
                         {item.role}
                      </div>
                   </div>
                   
                   {/* Intelligence Badge */}
                   <div className="h-6 px-2 rounded-full flex items-center justify-center gap-1 animate-scale-in border"
                        style={{ 
                          backgroundColor: `${item.color}15`, 
                          borderColor: `${item.color}30`,
                          color: theme.text,
                          animationDelay: `${i * 0.4 + 0.2}s`
                        }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.color }}></span>
                      <span className="text-[10px] font-bold opacity-80">Sync</span>
                   </div>
                </div>
             ))}
          </div>

          {/* Background Scanner Effect */}
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-white/5 animate-scan-vertical"></div>
          </div>
        </div>
      )
    },
    { 
      title: 'Semantic Sync', 
      desc: 'Auto-maps colors to backgrounds, text, and buttons.', 
      size: 'col-span-1',
      customContent: (
        <div className="h-full w-full flex items-center justify-center pt-4 relative min-h-[140px]">
          {/* Mock UI Container */}
          <div className="w-48 h-32 rounded-xl border relative overflow-hidden bg-opacity-50 backdrop-blur-sm"
               style={{ backgroundColor: `${theme.surface}88`, borderColor: `${theme.text}11` }}>
            
            {/* Mock Header */}
            <div className="h-8 border-b flex items-center px-3 gap-2" style={{ borderColor: `${theme.text}08` }}>
              <div className="w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: theme.text }}></div>
              <div className="w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: theme.text }}></div>
            </div>

            {/* Mock Content */}
            <div className="p-4 space-y-3">
              <div className="h-2 w-3/4 rounded-full opacity-10" style={{ backgroundColor: theme.text }}></div>
              <div className="h-2 w-1/2 rounded-full opacity-10" style={{ backgroundColor: theme.text }}></div>
              
              {/* Interactive Button */}
              <div className="mt-4 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all duration-300 animate-button-glow"
                   style={{ backgroundColor: theme.primary, color: '#fff' }}>
                Auto Sync
              </div>
            </div>

            {/* Simulated Cursor */}
            <div className="absolute top-[60%] left-[60%] w-6 h-6 animate-cursor-float pointer-events-none drop-shadow-xl z-20">
              <svg viewBox="0 0 24 24" fill={theme.text} className="w-full h-full transform drop-shadow-md">
                <path d="M5.5 3.5L18 11.5L10.5 13.5L9.5 21.5L5.5 3.5Z" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      )
    },
    { 
      title: 'Design Orchestrator', 
      desc: 'Syncs themes across all pages instantly.', 
      size: 'col-span-1',
      customContent: (
        <div className="h-full w-full flex items-center justify-center pt-4 min-h-[140px]">
           <div className="relative w-32 h-32 flex items-center justify-center">
             {[0, 1, 2].map((i) => (
               <div
                 key={i}
                 className="absolute inset-0 rounded-full border-2 opacity-20 animate-ripple"
                 style={{ 
                   borderColor: theme.accent,
                   animationDelay: `${i * 1}s` 
                 }}
               />
             ))}
             <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg relative z-10"
                  style={{ backgroundColor: theme.surface, border: `1px solid ${theme.text}11` }}>
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: theme.accent }}></div>
             </div>
           </div>
        </div>
      )
    },
    { 
      title: 'Production Ready', 
      desc: 'Export production-grade CSS and Tailwind configs.', 
      size: 'col-span-1 md:col-span-2',
      customContent: (
        <div className="mt-6 w-full relative flex items-center justify-center px-4 overflow-hidden">
          <div className="w-full max-w-sm rounded-xl border shadow-xl overflow-hidden" 
               style={{ backgroundColor: '#1e1e1e', borderColor: `${theme.text}11` }}>
            <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
              <div className="ml-auto text-[10px] text-white/30 font-mono">tailwind.config.js</div>
            </div>
            <div className="p-4 font-mono text-xs overflow-hidden relative">
              <div className="space-y-1">
                <div className="flex gap-2 text-white/40">
                  <span style={{ color: '#c678dd' }}>export</span>
                  <span style={{ color: '#e5c07b' }}>default</span>
                  <span>{'{'}</span>
                </div>
                <div className="pl-4 flex gap-2">
                  <span style={{ color: '#e06c75' }}>theme:</span>
                  <span>{'{'}</span>
                </div>
                <div className="pl-8 flex gap-2">
                  <span style={{ color: '#d19a66' }}>extend:</span>
                  <span>{'{'}</span>
                </div>
                <div className="pl-12 flex gap-2 animate-typing-reveal overflow-hidden whitespace-nowrap">
                   <span style={{ color: '#98c379' }}>colors:</span>
                   <span style={{ color: theme.primary }}>brandTheme</span>
                </div>
                <div className="pl-8 text-white/40">{'}'},</div>
                <div className="pl-4 text-white/40">{'}'},</div>
                <div className="text-white/40">{'}'}</div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: theme.text }}>Unrivaled Capabilities</h2>
        <p className="opacity-50 text-base md:text-lg" style={{ color: theme.text }}>Everything you need to ship a world-class interface.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className={`${card.size} relative rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border group overflow-hidden transition-all duration-500 hover:shadow-2xl`}
            style={{ 
              backgroundColor: `${theme.surface}44`, 
              borderColor: `${theme.text}08`,
            }}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div 
                className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center mb-4 md:mb-5 shrink-0"
                style={{ backgroundColor: `${idx % 2 === 0 ? theme.primary : theme.accent}15`, color: idx % 2 === 0 ? theme.primary : theme.accent }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1.5 md:mb-2" style={{ color: theme.text }}>{card.title}</h3>
              <p className="text-xs md:text-sm opacity-40 leading-relaxed max-w-[240px]" style={{ color: theme.text }}>{card.desc}</p>
              
              {card.customContent && (
                <div className="flex-1 w-full flex items-center justify-center py-4">
                  {card.customContent}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes scale-in {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
            animation: scale-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            opacity: 0;
            animation-fill-mode: forwards;
        }

        @keyframes scan-vertical {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-scan-vertical {
            animation: scan-vertical 4s infinite linear;
        }

        /* Semantic Sync Animations */
        @keyframes cursor-float {
          0%, 100% { transform: translate(0, 0); }
          40% { transform: translate(-40px, -40px); }
          50% { transform: translate(-40px, -40px) scale(0.9); }
          60% { transform: translate(-40px, -40px) scale(1); }
        }
        .animate-cursor-float {
          animation: cursor-float 4s infinite ease-in-out;
        }
        
        @keyframes button-glow {
          0%, 45%, 55%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(0.95); filter: brightness(1.2); }
        }
        .animate-button-glow {
          animation: button-glow 4s infinite ease-in-out;
        }

        /* Design Orchestrator Ripple */
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 3s infinite linear;
        }
        
        /* Typing for Production Ready */
        @keyframes typing-reveal {
          0%, 30% { max-width: 0; }
          80%, 100% { max-width: 100%; }
        }
        .animate-typing-reveal {
          animation: typing-reveal 4s steps(20, end) infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default BentoGrid;
