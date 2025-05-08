import { createContext, useContext, useEffect, useState } from 'react';

// ---------- Theme ----------
export enum Platform {
  Corporate = 'corporate',
  Twilight = 'twilight',
  Velvet = 'velvet',
}

export enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

interface Theme {
  platform: Platform;
  colorMode: ColorMode;
}

function getThemeFileName(theme: Theme) {
  return `${theme.platform}.${theme.colorMode}.css`;
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
    // Create a link element for the theme CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.id = 'theme-stylesheet';

    // Set the href to the theme file
    linkElement.href = `/styles/${getThemeFileName(theme)}`;

    // Add the link element to the document head
    document.head.appendChild(linkElement);

    // Cleanup function to remove the theme stylesheet when theme changes
    return () => {
      const existingLink = document.getElementById('theme-stylesheet');
      if (existingLink) {
        existingLink.remove();
      }
    };
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
