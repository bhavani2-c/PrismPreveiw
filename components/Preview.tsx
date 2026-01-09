import React, { useRef, useEffect } from "react";
import { ColorTheme, PreviewSettings, TemplateType } from "../types";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import BentoGrid from "./sections/BentoGrid";
import Showcase from "./sections/Showcase";
import InteractiveCTA from "./sections/InteractiveCTA";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
import BottomBigText from "./sections/BottomBigText";
import HowItWorks from "./sections/HowItWorks";

interface PreviewProps {
  theme: ColorTheme;
  settings: PreviewSettings;
  template: TemplateType;
}

const Preview: React.FC<PreviewProps> = ({ theme, settings, template }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex-1 h-screen overflow-y-auto relative"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        fontFamily: settings.fontFamily
          ? `'${settings.fontFamily}', sans-serif`
          : "Inter, sans-serif",
        transition:
          "background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1), font-family 0.3s ease",
      }}
    >
      <Navbar theme={theme} settings={settings} />
      <main>
        <Hero theme={theme} settings={settings} />

        <BentoGrid theme={theme} settings={settings} />

        <HowItWorks theme={theme} settings={settings} />

        <Showcase theme={theme} settings={settings} />

        <InteractiveCTA theme={theme} settings={settings} />

        <div className="py-12 md:py-24 text-center px-4 md:px-6">
          <h2
            className="text-2xl md:text-4xl font-bold mb-4 md:mb-8"
            style={{ color: theme.text }}
          >
            Built for High Performance
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-30">
            {["Vercel", "Stripe", "Framer", "Prisma", "Linear"].map((logo) => (
              <span
                key={logo}
                className="text-sm md:text-xl font-bold italic tracking-tighter"
                style={{ color: theme.text }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        <Pricing theme={theme} settings={settings} />

        <BottomBigText theme={theme} settings={settings} />

        <section className="py-16 md:py-32 px-4 md:px-6">
          <div
            className="max-w-5xl mx-auto rounded-2xl md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden group"
            style={{
              backgroundColor: theme.surface,
              borderRadius: settings.borderRadius,
            }}
          >
            <div
              className="absolute inset-0 opacity-10 blur-3xl transition-opacity group-hover:opacity-20"
              style={{
                background: `radial-gradient(circle at center, ${theme.primary}, ${theme.accent}, transparent)`,
              }}
            />
            <div className="relative z-10">
              <h2
                className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 md:mb-8"
                style={{ color: theme.text }}
              >
                Ready to paint your product?
              </h2>
              <button
                className="px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: theme.primary,
                  color: theme.background,
                  borderRadius: settings.borderRadius,
                }}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer theme={theme} settings={settings} />
    </div>
  );
};

export default Preview;
