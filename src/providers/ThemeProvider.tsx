import { createContext, useContext, useEffect, useState } from 'react';

// ---------- Theme ----------
enum Platform {
  Corporate = 'corporate',
  Twilight = 'twilight',
  Velvet = 'velvet',
}

enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

interface Theme {
  platform: Platform;
  colorMode: ColorMode;
}

const themeClasses = Object.values(Platform).flatMap((platform) =>
  Object.values(ColorMode).flatMap((colorMode) => `${platform}-${colorMode}`),
);

function themeToClass(theme: Theme) {
  return `${theme.platform}-${theme.colorMode}`;
}

// ---------- ThemeContext ----------
type ThemeSetter = (theme: Theme) => void;

const ThemeContext = createContext<
  { theme: Theme; setTheme: ThemeSetter } | undefined
>(undefined);

// ---------- ThemeProvider ----------
export interface ThemeProviderProps {
  platform?: Platform;
  colorMode?: ColorMode;
  children?: React.ReactNode;
}

export function ThemeProvider({
  platform = Platform.Corporate,
  colorMode = ColorMode.Dark,
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>({ platform, colorMode });

  useEffect(() => {
    const newThemeClass = themeToClass(theme);
    themeClasses.forEach((themeClass) => {
      if (newThemeClass === themeClass) {
        document.documentElement.classList.add(themeClass);
      } else {
        document.documentElement.classList.remove(themeClass);
      }
    });
  }, [theme]);

  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// ---------- useTheme ----------
export function useThemeContext() {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error('Theme is not provided');
  }

  return themeContext;
}
