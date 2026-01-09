
import React from 'react';
import { ColorTheme } from '../../types';

interface AnimatedGradientTextProps {
  theme: ColorTheme;
  text: string;
  className?: string;
  speed?: string;
  reverse?: boolean;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ 
  theme, 
  text, 
  className = "", 
  speed = "8s",
  reverse = false 
}) => {
  return (
    <span 
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${theme.secondary}, ${theme.primary}, ${theme.accent}, ${theme.primary}, ${theme.secondary})`,
        backgroundSize: '400% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: `gradient-shift ${speed} linear infinite ${reverse ? 'reverse' : 'normal'}`
      }}
    >
      {text}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
      `}</style>
    </span>
  );
};

export default AnimatedGradientText;
