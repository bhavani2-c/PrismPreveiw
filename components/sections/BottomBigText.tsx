
import React from 'react';
import { ColorTheme, PreviewSettings } from '../../types';
import AnimatedGradientText from '../common/AnimatedGradientText';

interface SectionProps {
  theme: ColorTheme;
  settings: PreviewSettings;
}

const BottomBigText: React.FC<SectionProps> = ({ theme, settings }) => {
  return (
    <section className="py-20 md:py-40 px-4 md:px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-[9rem] font-black tracking-tighter leading-[0.85] text-center mb-4">
          <span className="text-white">Prism: </span>
          <AnimatedGradientText 
            theme={theme} 
            text="visualize" 
            className="inline-block"
          />
          <br />
          <AnimatedGradientText 
            theme={theme} 
            text="The Future" 
            className="inline-block"
            reverse={true}
            speed="10s"
          />
        </h2>
        <p className="mt-6 md:mt-12 text-sm md:text-2xl font-medium opacity-40 max-w-2xl mx-auto px-2" style={{ color: theme.text }}>
          The future of design is instant. Experience the most advanced UI visualization engine ever built.
        </p>
      </div>
    </section>
  );
};

export default BottomBigText;
