import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../../Theme/CustomTheme";

export function useRepositionDialogStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("repositionDialogCSS");
  return {
    dialogHead: css({
      label: label("dialogHead"),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: theme.spacing(32),
    }),
    repositionText: css({
      label: label("repositionText"),
      fontSize: "12px",
      color: "white",
      textAlign: "end",
    }),
    repositionBorder: css({
      label: label("repositionBorder"),
      margin: theme.spacing(2, 0),
      borderRadius: theme.extras.borderRadius,
    }),
    slide: css({
      label: label("slide"),
      color: "white",
      "& .MuiSlider-track": {
        color: theme.palette.transparency.white(50),
        height: theme.spacing(1),
      },
      "& .MuiSlider-rail": {
        height: theme.spacing(1),
      },
    }),
    saveButton: css({
      label: label("saveButton"),
      marginTop: theme.spacing(3),
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.main,
      ":hover": {
        backgroundColor: theme.palette.primary.white(10),
      },
    }),
  };
}
