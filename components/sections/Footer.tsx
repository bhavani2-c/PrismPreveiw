
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const Footer: React.FC<SectionProps> = ({ theme, settings }) => {
  return (
    <footer className="py-12 md:py-20 px-4 md:px-6 border-t" style={{ borderColor: `${theme.text}08`, backgroundColor: theme.background }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(to bottom right, ${theme.primary}, ${theme.accent})` }} />
              <span className="font-bold text-base md:text-lg tracking-tight" style={{ color: theme.text }}>PrismPreview</span>
            </div>
            <p className="opacity-40 text-xs md:text-sm leading-relaxed max-w-xs" style={{ color: theme.text }}>
              Empowering designers and founders to visualize the future through the magic of color science and automated UI systems.
            </p>
          </div>
          
          {['Product', 'Company', 'Resources'].map(cat => (
            <div key={cat}>
              <h4 className="font-bold text-xs md:text-sm mb-4 md:mb-6" style={{ color: theme.text }}>{cat}</h4>
              <ul className="space-y-2 md:space-y-4 opacity-40 text-xs md:text-sm" style={{ color: theme.text }}>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Design Engine</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Templates</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Components</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Pricing</a></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 md:pt-12 border-t gap-4" style={{ borderColor: `${theme.text}08` }}>
          <p className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-30 text-center md:text-left" style={{ color: theme.text }}>
            © 2025 PrismPreview Engine. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6 opacity-40 text-xs md:text-sm" style={{ color: theme.text }}>
            <a href="#" className="hover:opacity-100 transition-opacity">X / Twitter</a>
            <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
