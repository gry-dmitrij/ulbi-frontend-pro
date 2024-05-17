import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme && !document.body.classList.contains(theme)) {
      document.body.className = theme;
    }
  }, [theme]);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
    default:
      newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
