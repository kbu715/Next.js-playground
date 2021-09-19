import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../my-theme';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const setMode = (mode: DefaultTheme) => {
    if (mode === lightTheme) {
      window.localStorage.setItem('theme', 'light');
    } else {
      window.localStorage.setItem('theme', 'dark');
    }
    setTheme(mode);
  };

  const setLightTheme: () => void = () => setMode(lightTheme);
  const setDarkTheme: () => void = () => setMode(darkTheme);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme !== null) {
      if (localTheme === 'dark') {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    }
  }, []);

  return { theme, setLightTheme, setDarkTheme };
};
