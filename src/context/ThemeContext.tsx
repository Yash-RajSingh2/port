import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { themes } from '@/globalStyles/themes';

const ThemeContext = createContext<Record<string, string>>({});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const currentTheme = themes[location.pathname as keyof typeof themes] || themes['/'];

  useEffect(() => {
    Object.entries(currentTheme).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 