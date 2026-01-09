
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import { ColorTheme, PreviewSettings, TemplateType } from './types';
import { DEFAULT_THEME, DEFAULT_SETTINGS } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ColorTheme>(DEFAULT_THEME);
  const [settings, setSettings] = useState<PreviewSettings>(DEFAULT_SETTINGS);
  const [template, setTemplate] = useState<TemplateType>('saas');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Sidebar - Now absolute/fixed to avoid pushing content */}
      <Sidebar 
        theme={theme} 
        setTheme={setTheme} 
        settings={settings} 
        setSettings={setSettings}
        template={template}
        setTemplate={setTemplate}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Preview - Always full width */}
      <div className="w-full h-full relative overflow-hidden">
        {/* Floating Expand Button (only visible when sidebar is closed) */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed left-4 top-4 md:left-6 md:top-8 z-[100] w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] hover:bg-zinc-800 transition-all active:scale-95 group"
            title="Open Editor"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        )}

        <Preview 
          theme={theme} 
          settings={settings} 
          template={template} 
        />
      </div>
      
      {/* Floating Export Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60]">
        <button 
          onClick={() => {
            const config = { theme, settings, template };
            const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'design-system.json';
            a.click();
          }}
          className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black font-bold text-xs md:text-sm shadow-2xl hover:bg-zinc-200 transition-all active:scale-95 border border-black/5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="hidden sm:inline">Export System</span>
          <span className="sm:hidden">Export</span>
        </button>
      </div>
    </div>
  );
};

export default App;
