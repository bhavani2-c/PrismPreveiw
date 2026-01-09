
import { GoogleGenAI, Type } from "@google/genai";
import { ColorTheme } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Extracts dominant colors from an image using Canvas
 */
export async function extractColorsFromImage(file: File): Promise<string[]> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve([]);

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Sample 10 points to get a distribution
        const colors: string[] = [];
        const samples = 10;
        for (let i = 0; i < samples; i++) {
          const x = Math.floor(Math.random() * img.width);
          const y = Math.floor(Math.random() * img.height);
          const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
          colors.push(`#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`);
        }
        resolve(Array.from(new Set(colors)).slice(0, 5));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Uses Gemini to intelligently categorize colors into UI roles
 */
export async function generateIntelligentTheme(colors: string[], isDark: boolean): Promise<ColorTheme> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Categorize these colors into a professional UI theme: ${colors.join(", ")}. 
    Return JSON format for a ${isDark ? "dark" : "light"} mode modern SaaS website. 
    Ensure high contrast and visual appeal.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          primary: { type: Type.STRING },
          secondary: { type: Type.STRING },
          accent: { type: Type.STRING },
          background: { type: Type.STRING },
          surface: { type: Type.STRING },
          text: { type: Type.STRING },
          muted: { type: Type.STRING },
          glow: { type: Type.STRING },
        },
        required: ["primary", "secondary", "accent", "background", "surface", "text", "muted", "glow"],
      },
    },
  });

  try {
    return JSON.parse(response.text.trim()) as ColorTheme;
  } catch (e) {
    console.error("Failed to parse theme from Gemini", e);
    // Fallback to basic mapping if JSON fails
    return {
      primary: colors[0],
      secondary: colors[1] || colors[0],
      accent: colors[2] || colors[0],
      background: isDark ? "#09090b" : "#ffffff",
      surface: isDark ? "#18181b" : "#f4f4f5",
      text: isDark ? "#fafafa" : "#18181b",
      muted: "#71717a",
      glow: colors[0] + "44",
    };
  }
}
