import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useProfileTextEntryStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("profileTextEntryCSS");
  return {
    textEntry: css({
      label: label("textEntry"),
      borderRadius: theme.extras.borderRadius,
      transition: theme.extras.transition.fast("background-color"),
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(1.5),
      "& .MuiInputBase-root": {
        transition: theme.extras.transition.fast("padding-left"),
        paddindLeft: theme.spacing(0),
      },
      "& .MuiInputBase-input": {
        transition: theme.extras.transition.fast("color"),
        paddingLeft: theme.spacing(0),
        color: "white",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiOutlinedInput-input.Mui-disabled": {
        WebkitTextFillColor: "unset",
      },
    }),
    subtitle: css({
      label: label("subtitle"),
      fontSize: "14px",
      fontWeight: "bold",
      color: theme.palette.secondary.white(50),
      transition: theme.extras.transition.fast("color"),
    }),
    subtitleError: css({
      label: label("subtitleError"),
      color: theme.palette.error.main,
    }),
    editPadding: css({
      label: label("editPadding"),
      "& .MuiInputBase-root": {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    }),
    editBackground: css({
      label: label("editBackground"),
      backgroundColor: theme.palette.background.main,
    }),
  };
}
