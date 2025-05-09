import {
  useThemeContext,
  Platform,
  ColorMode,
} from '../../providers/ThemeProvider';
import { Button, ButtonIntent, ButtonSize, ButtonVariant } from '../Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../DropDownMenu';
import { Icons } from '../Icons';

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          intent={ButtonIntent.Neutral}
          size={ButtonSize.Small}
          variant={ButtonVariant.Minimal}
        >
          <Icons.ellipsisVertical className="rt-size-16" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          onValueChange={(value) => {
            setTheme({ ...theme, platform: value as Platform });
          }}
          value={theme.platform}
        >
          {platforms.map((platform) => (
            <DropdownMenuRadioItem key={platform.value} value={platform.value}>
              {platform.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          onValueChange={(value) => {
            setTheme({ ...theme, colorMode: value as ColorMode });
          }}
          value={theme.colorMode}
        >
          {colorModes.map((mode) => (
            <DropdownMenuRadioItem key={mode.value} value={mode.value}>
              {mode.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
