import useCustomTheme from "../../Theme/CustomTheme";
import { css } from "@emotion/react";

export function useTextEntryStyle(white: boolean) {
  const theme = useCustomTheme();
  const label = theme.extras.label("textEntryCSS");
  return {
    textEntry: css({
      label: label("textEntry"),
      transition: theme.extras.transition.fast("background-color"),
      borderRadius: theme.extras.borderRadius,
      "& .MuiInputBase-root": {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(2),
      },
      "& .MuiInputBase-input": {
        transition: theme.extras.transition.fast("color"),
        paddingLeft: theme.spacing(0),
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiOutlinedInput-input.Mui-disabled": {
        WebkitTextFillColor: "unset",
      },
    }),
    enabled: css({
      label: label("enabled"),
      backgroundColor: white
        ? theme.palette.secondary.main + "1A"
        : theme.palette.background.main,
      "& .MuiInputBase-input": {
        color: white ? "black" : "white",
      },
      "& .MuiInputBase-input::placeholder": {
        color: white
          ? theme.palette.transparency.black(30)
          : theme.palette.background.white(30),
        opacity: 1,
      },
    }),
    disabled: css({
      label: label("disabled"),
      backgroundColor: theme.palette.secondary.black(10),
      "& .MuiInputBase-input": {
        color: theme.palette.secondary.white(30),
      },
      "& .MuiInputBase-input::placeholder": {
        color: theme.palette.secondary.white(10),
        opacity: 1,
      },
    }),
    error: css({
      label: label("error"),
      backgroundColor: theme.palette.warning.main + "1A",
    }),
    opacityTransition: css({
      label: label("opacityTransition"),
      transition: theme.extras.transition.fast("opacity"),
    }),
    hidden: css({
      label: label("hidden"),
      opacity: 0,
    }),
    iconRow: css({
      label: label("iconRow"),
      display: "flex",
      alignItems: "center",
    }),
    separator: css({
      label: label("separator"),
      width: theme.spacing(1),
    }),
    searchIcon: css({
      label: label("searchIcon"),
      transition: theme.extras.transition.fast("color"),
    }),
    enabledIcon: css({
      label: label("enabledIcon"),
      color: "white",
    }),
    disabledIcon: css({
      label: label("disabledIcon"),
      color: theme.palette.secondary.white(20),
    }),
    clearIcon: css({
      label: label("clearIcon"),
      transition: theme.extras.transition.fast("color"),
      color: white
        ? theme.palette.transparency.black(30)
        : theme.palette.background.white(30),
    }),
    disabledClearIcon: css({
      label: label("disabledClearIcon"),
      color: theme.palette.background.white(10),
    }),
    visibilityIcon: css({
      label: label("visibilityIcon"),
      width: theme.spacing(5),
      height: theme.spacing(5),
    }),
    time: theme.extras.transitionTime.fast,
  };
}
