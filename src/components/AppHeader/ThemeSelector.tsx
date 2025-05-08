import {
  useThemeContext,
  Platform,
  ColorMode,
} from '../../providers/ThemeProvider';

export function ThemeSelector() {
  const { theme, setTheme } = useThemeContext();

  const platforms = [
    { value: Platform.Corporate, label: 'Corporate' },
    { value: Platform.Twilight, label: 'Twilight' },
    { value: Platform.Velvet, label: 'Velvet' },
  ];

  const colorModes = [
    { value: ColorMode.Light, label: 'Light' },
    { value: ColorMode.Dark, label: 'Dark' },
  ];

  return (
    <div className="theme-selector">
      <div className="theme-selector__group">
        <label htmlFor="platform">Platform:</label>
        <select
          id="platform"
          onChange={(e) => {
            setTheme({ ...theme, platform: e.target.value as Platform });
          }}
          value={theme.platform}
        >
          {platforms.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.label}
            </option>
          ))}
        </select>
      </div>

      <div className="theme-selector__group">
        <label htmlFor="colorMode">Color Mode:</label>
        <select
          id="colorMode"
          onChange={(e) => {
            setTheme({ ...theme, colorMode: e.target.value as ColorMode });
          }}
          value={theme.colorMode}
        >
          {colorModes.map((mode) => (
            <option key={mode.value} value={mode.value}>
              {mode.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
