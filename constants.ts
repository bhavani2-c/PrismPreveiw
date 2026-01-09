import { ColorTheme, PreviewSettings } from "./types";

export const DEFAULT_THEME: ColorTheme = {
  primary: "#f15bb5", // Neon Pink
  secondary: "#9b5de5", // Vibrant Purple
  accent: "#fb5607", // Deep Neon Orange
  background: "#09090b", // Deep Matte Black
  surface: "#121214", // Dark Zinc Surface
  text: "#ffffff",
  muted: "#71717a",
  glow: "#f15bb544", // Pink Glow
};

export const DEFAULT_SETTINGS: PreviewSettings = {
  isDarkMode: true,
  motionIntensity: 0.8,
  glassOpacity: 0.1,
  borderRadius: "1.5rem",
  fontFamily: "Bricolage Grotesque",
};

export const GRADIENTS = [
  {
    name: "Neon Sunset (Default)",
    colors: ["#9b5de5", "#f15bb5", "#fb5607", "#ffbe0b"],
  },
  { name: "AI Deep Purple", colors: ["#a855f7", "#6366f1", "#4338ca"] },
  { name: "Oceanic", colors: ["#06b6d4", "#3b82f6", "#1e40af"] },
  { name: "Cyberpunk", colors: ["#f472b6", "#8b5cf6", "#3b82f6"] },
  { name: "Aurora", colors: ["#10b981", "#3b82f6", "#8b5cf6"] },
];
