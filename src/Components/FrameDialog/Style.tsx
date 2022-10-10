import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useFrameDialogStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("FrameDialogCSS");
  return {
    wrapper: css({
      label: label("wrapper"),
      lineHeight: "18px",
      "& .MuiDialog-paper": {
        width: theme.spacing(50),
        borderRadius: theme.extras.borderRadius,
        padding: theme.spacing(2, 4, 4, 4),
        color: "white",
      },
    }),
    head: css({
      label: label("head"),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    emphasis: css({
      label: label("emphasis"),
      fontWeight: "bold",
    }),
    separator: css({
      label: label("separator"),
      minHeight: "1px",
      backgroundColor: theme.palette.transparency.black(10),
      margin: theme.spacing(2, 0, 3, 0),
    }),
    buttonRow: css({
      label: label("buttonRow"),
      display: "flex",
      marginTop: theme.spacing(3),
    }),
    buttonSeparator: css({
      label: label("buttonSeparator"),
      minWidth: theme.spacing(1),
    }),
    primaryColor: css({
      label: label("primaryColor"),
      "& .MuiDialog-paper": {
        backgroundColor: theme.palette.primary.main,
      },
    }),
    secondaryColor: css({
      label: label("secondaryColor"),
      "& .MuiDialog-paper": {
        backgroundColor: theme.palette.secondary.main,
      },
    }),
    warningColor: css({
      label: label("warningColor"),
      "& .MuiDialog-paper": {
        backgroundColor: theme.palette.warning.main,
      },
    }),
  };
}
