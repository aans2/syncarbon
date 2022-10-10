import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useViewBlockAutocompleteStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("viewBlockAutocompleteCSS");
  return {
    autocomplete: css({
      label: label("autocomplete"),
      marginBottom: theme.spacing(4),
      " > div > .MuiAutocomplete-endAdornment": {
        marginRight: `calc(${theme.spacing(1)} - 1px)`,
      },
      " > div > .MuiAutocomplete-endAdornment > .MuiButtonBase-root": {
        color: theme.palette.background.white(30),
      },
    }),
    noOptions: css({
      label: label("noOptions"),
      color: "white",
      padding: theme.spacing(1, 3),
    }),
    papper: css({
      label: label("papper"),
      borderRadius: theme.extras.borderRadius,
      color: "white",
      boxShadow: "none",
      "> .MuiAutocomplete-listbox > .MuiAutocomplete-option": {
        backgroundColor: theme.palette.background.white(10),
        padding: theme.spacing(1, 3),
        "&.Mui-focused": {
          backgroundColor: theme.palette.background.white(20),
        },
      },
      '> .MuiAutocomplete-listbox > .MuiAutocomplete-option[aria-selected="true"]':
        {
          backgroundColor: theme.palette.primary.main,
          "&.Mui-focused": {
            backgroundColor: theme.palette.primary.main,
          },
        },
      "> .MuiAutocomplete-listbox": {
        padding: "0px",
        scrollbarWidth: "thin",
        //Configurações do Chrome
        "&::-webkit-scrollbar": {
          display: "block",
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.palette.secondary.white(10),
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.secondary.white(40),
          outline: "0px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.secondary.white(30),
          outline: "0px",
        },
        "&::-webkit-scrollbar-thumb:active": {
          background: theme.palette.secondary.white(20),
          outline: "0px",
        },
      },
    }),
  };
}
