
export interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  glow: string;
}

export interface PreviewSettings {
  isDarkMode: boolean;
  motionIntensity: number; // 0 to 1
  glassOpacity: number; // 0 to 1
  borderRadius: string; // 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  fontFamily: string;
}

export type TemplateType = 'saas' | 'ai' | 'startup' | 'portfolio';

export interface AppState {
  theme: ColorTheme;
  settings: PreviewSettings;
  template: TemplateType;
}
