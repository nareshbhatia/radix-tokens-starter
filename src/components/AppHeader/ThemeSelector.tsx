import {
  useThemeContext,
  Platform,
  ColorMode,
} from '../../providers/ThemeProvider';
import { Button, ButtonIntent, ButtonSize, ButtonVariant } from '../Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
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
        <DropdownMenuGroup>
          <DropdownMenuLabel>Platform</DropdownMenuLabel>
          {platforms.map((platform) => (
            <DropdownMenuItem
              data-selected={theme.platform === platform.value}
              key={platform.value}
              onClick={() => {
                setTheme({ ...theme, platform: platform.value });
              }}
            >
              {platform.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Color Mode</DropdownMenuLabel>
          {colorModes.map((mode) => (
            <DropdownMenuItem
              data-selected={theme.colorMode === mode.value}
              key={mode.value}
              onClick={() => {
                setTheme({ ...theme, colorMode: mode.value });
              }}
            >
              {mode.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
