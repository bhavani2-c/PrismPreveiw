import React, { useState } from "react";
import { ColorTheme, PreviewSettings, TemplateType } from "../types";
import { GRADIENTS, DEFAULT_THEME } from "../constants";
import {
  extractColorsFromImage,
  generateIntelligentTheme,
} from "../services/colorService";

interface SidebarProps {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  settings: PreviewSettings;
  setSettings: (settings: PreviewSettings) => void;
  template: TemplateType;
  setTemplate: (t: TemplateType) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const FONTS = [
  { name: "Inter (Modern)", value: "Inter" },
  { name: "Space Grotesk (Tech)", value: "Space Grotesk" },
  { name: "Outfit (Friendly)", value: "Outfit" },
  { name: "Syne (Bold Art)", value: "Syne" },
  { name: "Bricolage (Expressive)", value: "Bricolage Grotesque" },
  { name: "Playfair (Elegant)", value: "Playfair Display" },
];

const Sidebar: React.FC<SidebarProps> = ({
  theme,
  setTheme,
  settings,
  setSettings,
  template,
  setTemplate,
  isOpen,
  onToggle,
}) => {
  const [activeTab, setActiveTab] = useState<"manual" | "image" | "presets">(
    "manual",
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    try {
      const colors = await extractColorsFromImage(file);
      const newTheme = await generateIntelligentTheme(
        colors,
        settings.isDarkMode,
      );
      setTheme(newTheme);
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleColorChange = (key: keyof ColorTheme, val: string) => {
    setTheme({ ...theme, [key]: val });
  };

  const applyPreset = (colors: string[]) => {
    const isDark = settings.isDarkMode;
    const newTheme: ColorTheme = {
      secondary: colors[0] || theme.secondary,
      primary: colors[1] || colors[0] || theme.primary,
      accent: colors[2] || colors[1] || theme.accent,
      background: isDark ? "#09090b" : "#ffffff",
      surface: isDark ? "#121214" : "#f4f4f5",
      text: isDark ? "#ffffff" : "#09090b",
      muted: "#71717a",
      glow: (colors[1] || colors[0]) + "44",
    };
    setTheme(newTheme);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[140] md:hidden"
          onClick={onToggle}
        />
      )}
      <div
        className={`fixed inset-y-0 left-0 z-[150] w-[85vw] max-w-[320px] md:w-80 bg-zinc-950 border-r border-zinc-800 shadow-[20px_0_60px_-15px_rgba(0,0,0,0.7)] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        <div className="w-full h-full flex flex-col p-4 md:p-6 gap-6 md:gap-8 overflow-y-auto hide-scrollbar">
          <div className="flex items-start justify-between">
            <div className="group cursor-default">
              <h1
                className="text-xl md:text-2xl font-black tracking-tighter bg-clip-text text-transparent transition-all group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(to right, ${theme.secondary}, ${theme.primary}, ${theme.accent})`,
                }}
              >
                PrismPreview
              </h1>
              <p className="text-zinc-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mt-1 opacity-60">
                Color-Driven Intelligence
              </p>
            </div>
            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-white transition-colors"
              title="Hide Sidebar"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <div className="flex bg-zinc-900 rounded-xl p-1 border border-white/5">
            {(["manual", "image", "presets"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-[11px] font-bold uppercase tracking-wider py-2 rounded-lg transition-all ${
                  activeTab === tab
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {activeTab === "manual" && (
              <div className="space-y-4">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600">
                  Color Palette
                </h3>
                {(
                  Object.entries(theme) as Array<[keyof ColorTheme, string]>
                ).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between">
                    <label className="text-xs text-zinc-500 capitalize">
                      {key}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={val.length === 9 ? val.slice(0, 7) : val}
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        className="w-6 h-6 rounded-full overflow-hidden bg-transparent border-none cursor-pointer"
                      />
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => handleColorChange(key, e.target.value)}
                        className="bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-[10px] w-20 font-mono text-zinc-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "image" && (
              <div className="space-y-4">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600">
                  Image Extraction
                </h3>
                <div className="border-2 border-dashed border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-colors group cursor-pointer bg-black/20">
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="img-upload"
                    accept="image/*"
                  />
                  <label htmlFor="img-upload" className="cursor-pointer">
                    <div className="text-zinc-600 mb-2 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-zinc-500 font-bold block">
                      Upload Ref Image
                    </span>
                    <span className="text-[10px] text-zinc-600">
                      AI will auto-map tones
                    </span>
                  </label>
                </div>
                {isProcessing && (
                  <div className="flex items-center gap-2 justify-center text-zinc-400 text-[10px] font-black uppercase tracking-widest animate-pulse py-2">
                    <span>Processing Spectrum...</span>
                  </div>
                )}
              </div>
            )}

            {activeTab === "presets" && (
              <div className="space-y-4">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600">
                  Style Presets
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {GRADIENTS.map((g) => (
                    <button
                      key={g.name}
                      onClick={() => applyPreset(g.colors)}
                      className="w-full h-14 rounded-xl flex items-center px-4 transition-transform active:scale-95 group overflow-hidden relative border border-white/5 bg-zinc-900/50"
                    >
                      <div
                        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                        style={{
                          background: `linear-gradient(to right, ${g.colors.join(", ")})`,
                        }}
                      />
                      <div className="relative flex items-center gap-3 w-full">
                        <div className="flex -space-x-1.5">
                          {g.colors.map((c, i) => (
                            <div
                              key={i}
                              className="w-4 h-4 rounded-full border border-zinc-950"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-zinc-300 ml-1">
                          {g.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-auto space-y-6 pt-6 border-t border-zinc-900">
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-4">
                Typography
              </h3>
              <select
                value={settings.fontFamily}
                onChange={(e) =>
                  setSettings({ ...settings, fontFamily: e.target.value })
                }
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-zinc-400 font-bold focus:outline-none"
              >
                {FONTS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-4">
                Configurations
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-xs text-zinc-500 font-bold">
                      Motion
                    </label>
                    <span className="text-[10px] text-zinc-600 font-black">
                      {Math.round(settings.motionIntensity * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={settings.motionIntensity}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        motionIntensity: parseFloat(e.target.value),
                      })
                    }
                    className="w-full accent-zinc-200 h-1 rounded-full bg-zinc-900 appearance-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-4">
                Active Template
              </h3>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value as TemplateType)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-zinc-400 font-bold focus:outline-none"
              >
                <option value="saas">SaaS Platform</option>
                <option value="ai">AI Product</option>
                <option value="startup">Startup Growth</option>
                <option value="portfolio">Modern Portfolio</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
