import { createTheme, ThemeOptions } from "@mui/material/styles";
import { CustomPalette, CustomTheme } from "./CustomTheme";

const showLabels = true;
const fasterSpeed = "75ms";
const borderRadius = "12px";

const darkPalette = {
  transparency: {
    white: (value) => "rgba(255, 255, 255, " + value / 100 + ")",
    black: (value) => "rgba(0, 0, 0, " + value / 100 + ")",
  },
  background: {
    default: "#21222b",
    main: "#21222b", //Cinza-BG
    white: (value) =>
      value === 10
        ? "#383941"
        : value === 20
        ? "#4d4e55"
        : value === 30
        ? "#64646b"
        : value === 40
        ? "#7a7a80"
        : "white",
    black: (value) => (value === 10 ? "#1e1f27" : "black"),
  },
  primary: {
    main: "#6063d2", //Roxo
    white: (value) =>
      value === 10 ? "#7073d7" : value === 20 ? "#8082db" : "#6063d2",
  },
  secondary: {
    main: "#2f313a", //Cinza
    white: (value) =>
      value === 10
        ? "#44464e"
        : value === 20
        ? "#595a61"
        : value === 30
        ? "#6e6f76"
        : value === 40
        ? "#828389"
        : value === 50
        ? "#97989d"
        : value === 60
        ? "#acadb0"
        : "white",
    black: (value) => (value === 10 ? "#2a2c34" : "black"),
  },
  error: {
    main: "#e83b3b", //Vermelho
  },
  warning: {
    main: "#ff6633", //Laranja
    contrastText: "white",
    white: (value) =>
      value === 10 ? "#ff7648" : value === 20 ? "#ff855c" : "#ff6633",
  },
  info: {
    main: "#00A99D", //Turquesa
  },
  success: {
    main: "#71b739", //Verde
    white: (value) => (value === 10 ? "#80be4d" : "#71b739"),
  },
} as CustomPalette;

const lightPalette = {
  background: {
    default: "#21222b",
  },
  primary: {
    main: "#6163CF",
    white: (value) => (value === 10 ? "#7073d7" : "#6063d2"),
  },
  secondary: {
    main: "#E6E6E6",
    white: (value) =>
      value === 10
        ? "red"
        : value === 20
        ? "green"
        : value === 30
        ? "blue"
        : "purple",
    black: (value) => (value === 10 ? "purple" : "black"),
  },
  error: {
    main: "#F15A24",
  },
  warning: {
    main: "#FBB03B",
  },
  info: {
    main: "#00ACE4",
  },
  success: {
    main: "#39B54A",
  },
} as CustomPalette;

const makeCustomPallete = (pallete: CustomPalette, state: string) =>
  createTheme({
    palette: {
      ...pallete,
      type: state,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            transition: `background-color ${fasterSpeed}`,
            borderRadius: borderRadius,
            padding: "16px",
            height: "56px",
            minWidth: "unset",
            textTransform: "none",
            color: "white",
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            backgroundColor: "#21222b",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
          },
        },
      },
    },
    typography: {
      fontFamily: "Mulish",
    },
    extras: {
      borderRadius: borderRadius,
      spacingNumber: (units: number) => units * 8,
      transition: {
        faster: (component: string[] | string) =>
          typeof component === "string"
            ? component + " " + fasterSpeed
            : component.map((e) => e + " " + fasterSpeed).join(", "),
        fast: (component: string[] | string) =>
          typeof component === "string"
            ? component + " 500ms"
            : component.map((e) => e + " 500ms").join(", "),
        slow: (component: string[] | string) =>
          typeof component === "string"
            ? component + " 5000ms"
            : component.map((e) => e + " 5000ms").join(", "),
      },
      transitionTime: {
        faster: Number(fasterSpeed.split("ms")[0]), //fasterSpeed
        fast: 500,
      },
      label: (page: string) => (name: string) =>
        showLabels ? name + "_" + page : "CSS",
    },
  } as ThemeOptions) as CustomTheme;

export const darkThemeState = makeCustomPallete(darkPalette, "dark");
export const lightThemeState = makeCustomPallete(lightPalette, "light");
