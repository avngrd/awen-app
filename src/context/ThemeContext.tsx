'use client';

import { createContext, useState } from 'react';

type ThemeContextType = 'light' | 'dark' | any;

export const ThemeContext = createContext<ThemeContextType>('');

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeContextType>('dark');

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
