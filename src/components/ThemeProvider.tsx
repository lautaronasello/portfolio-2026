'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Palette } from '@/types/project';

interface ThemeContextType {
  palette: Palette;
  setPalette: (p: Palette) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  palette: 'indigo',
  setPalette: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [palette, setPalette] = useState<Palette>('indigo');

  useEffect(() => {
    const saved = localStorage.getItem('theme-palette') as Palette;
    if (saved && ['indigo', 'cobalt', 'cyan'].includes(saved)) {
      setPalette(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'indigo');
    }
  }, []);

  const changePalette = (newPalette: Palette) => {
    setPalette(newPalette);
    localStorage.setItem('theme-palette', newPalette);
    document.documentElement.setAttribute('data-theme', newPalette);
  };

  return (
    <ThemeContext.Provider value={{ palette, setPalette: changePalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
