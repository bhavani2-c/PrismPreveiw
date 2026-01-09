
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const StreamShowcase: React.FC<SectionProps> = ({ theme, settings }) => {
  const chatMessages = [
    { name: 'Alex_Designer', text: 'Should we increase the primary saturation?', icon: 'figma', img: 'https://i.pravatar.cc/100?u=alex', platformColor: '#F24E1E' },
    { name: 'SarahDev', text: 'The new palette looks much cleaner!', icon: 'github', img: 'https://i.pravatar.cc/100?u=sarah', platformColor: '#181717' },
    { name: 'ProductLead', text: "Can we test this on the dashboard layout?", icon: 'slack', img: 'https://i.pravatar.cc/100?u=lead', platformColor: '#4A154B' },
    { name: 'UI_Robot', text: 'Contrast verified: 7.5:1. Ready for export.', icon: 'terminal', img: 'https://i.pravatar.cc/100?u=bot', platformColor: '#00FF00' },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-3 md:mb-4" style={{ color: theme.text }}>Real-time Design Sync</h2>
          <p className="opacity-50 text-sm md:text-base max-w-xl mx-auto px-2" style={{ color: theme.text }}>Collaborate with your team while Prism generates live variations based on shared color libraries.</p>
        </div>
        
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 z-10">
          
          {/* Central Stream Card */}
          <div 
            className="w-full lg:w-[65%] aspect-[16/12] md:aspect-[16/10] rounded-xl md:rounded-[2rem] p-2 md:p-4 relative shadow-2xl overflow-hidden transition-all duration-700"
            style={{ 
              backgroundColor: `${theme.surface}dd`, 
              boxShadow: `0 40px 80px -20px ${theme.glow}` 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative h-full flex flex-col md:flex-row gap-2">
              {/* Layout Preview: Left */}
              <div className="flex-1 rounded-lg md:rounded-xl overflow-hidden shadow-lg border-2 border-white/5 relative bg-zinc-900">
                <div className="p-2 md:p-4 space-y-2 md:space-y-3">
                  <div className="h-3 md:h-4 w-1/3 rounded bg-zinc-800" />
                  <div className="h-16 md:h-32 w-full rounded-lg" style={{ backgroundColor: theme.primary }} />
                  <div className="grid grid-cols-2 gap-1 md:gap-2">
                    <div className="h-8 md:h-16 rounded bg-zinc-800" />
                    <div className="h-8 md:h-16 rounded bg-zinc-800" />
                  </div>
                </div>
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-zinc-800 text-white shadow-xl">
                  <span className="text-[8px] md:text-[10px] font-bold">Draft Layout</span>
                </div>
              </div>

              {/* Variation Preview: Right - Hidden on very small screens */}
              <div className="flex-1 rounded-lg md:rounded-xl overflow-hidden shadow-lg border-2 border-white/5 relative bg-zinc-900 hidden sm:block">
                <div className="p-2 md:p-4 space-y-2 md:space-y-3">
                  <div className="h-3 md:h-4 w-1/4 rounded bg-zinc-800" />
                  <div className="h-16 md:h-32 w-full rounded-lg" style={{ backgroundColor: theme.accent }} />
                  <div className="grid grid-cols-2 gap-1 md:gap-2">
                    <div className="h-8 md:h-16 rounded bg-zinc-800" />
                    <div className="h-8 md:h-16 rounded bg-zinc-800" />
                  </div>
                </div>
              </div>

              {/* Chat Bubble: Large Bottom */}
              <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%]">
                <div 
                  className="bg-zinc-800/95 backdrop-blur-md px-4 md:px-8 py-2 md:py-5 rounded-xl md:rounded-[1.8rem] shadow-2xl flex items-center justify-center text-white font-medium text-xs md:text-base border border-white/10 animate-fade-in-up"
                >
                  New palette variation generated! 🎨
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Chat Interface */}
          <div className="w-full lg:w-[320px] space-y-2 md:space-y-3 grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-0">
             {chatMessages.map((msg, i) => (
               <div 
                 key={i} 
                 className="bg-zinc-900/50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm border border-white/5 flex items-start gap-2 md:gap-3 transition-transform hover:-translate-y-1"
               >
                 <div className="relative flex-shrink-0">
                   <img src={msg.img} alt={msg.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-inner" />
                   <div 
                     className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-zinc-900 shadow-md"
                     style={{ backgroundColor: msg.platformColor }}
                   >
                     <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white opacity-80" />
                   </div>
                 </div>
                 <div className="flex flex-col min-w-0">
                   <span className="text-[10px] md:text-xs font-black text-white truncate">{msg.name}</span>
                   <span className="text-[9px] md:text-[11px] text-zinc-400 leading-tight line-clamp-2">{msg.text}</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default StreamShowcase;
