'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 sm:w-16 sm:h-8 rounded-full bg-[#1A1A1A] border border-white/10" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 sm:w-16 sm:h-8 rounded-full bg-[#1A1A1A] dark:bg-[#1A1A1A] light:bg-gray-200 border border-white/10 transition-all duration-300 hover:border-[#00FF88]/50 group"
      aria-label="Toggle theme"
    >
      {/* Track background */}
      <div className={`absolute inset-0.5 rounded-full transition-colors duration-300 ${
        theme === 'light' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-[#111111]'
      }`} />

      {/* Toggle ball */}
      <div
        className={`absolute top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          theme === 'light'
            ? 'left-[calc(100%-1.625rem)] sm:left-[calc(100%-1.875rem)] bg-white'
            : 'left-0.5 bg-[#0A0A0A] border border-[#00FF88]/30'
        }`}
      >
        {/* Sun icon */}
        <svg
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 ${
            theme === 'light' ? 'text-yellow-500 rotate-0 scale-100' : 'text-gray-600 -rotate-90 scale-0'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>

        {/* Moon icon */}
        <svg
          className={`absolute w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 ${
            theme === 'dark' ? 'text-[#00FF88] rotate-0 scale-100' : 'text-gray-400 rotate-90 scale-0'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>

      {/* Glow effect on dark mode */}
      {theme === 'dark' && (
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(0,255,136,0.3)]" />
      )}
    </button>
  );
}
