import { Theme, useTheme } from "@mui/material";
import { Palette } from "@mui/material/styles/createPalette";

export interface CustomPalette extends Palette {
  transparency: {
    white: (value: number) => string;
    black: (value: number) => string;
  };
  background: Palette["background"] & {
    main: string;
    white: (value: number) => string;
    black: (value: number) => string;
  };
  primary: Palette["primary"] & {
    white: (value: number) => string;
  };
  secondary: Palette["secondary"] & {
    white: (value: number) => string;
    black: (value: number) => string;
  };
  success: Palette["success"] & {
    white: (value: number) => string;
  };
  warning: Palette["warning"] & {
    white: (value: number) => string;
  };
  type: String;
}

interface extras {
  borderRadius: string;
  spacingNumber: (units: number) => number;
  transition: {
    fast: (component: string[] | string) => string;
    faster: (component: string[] | string) => string;
    slow: (component: string[] | string) => string;
  };
  transitionTime: {
    fast: number;
    faster: number;
    slow: number;
  };
  label: (page: string) => (name: string) => string | undefined;
}

export interface CustomTheme extends Theme {
  palette: CustomPalette;
  extras: extras;
}

function useCustomTheme() {
  return useTheme<CustomTheme>();
}

export default useCustomTheme;
