import { css } from "@emotion/react";
import useCustomTheme from "../../../../Theme/CustomTheme";

export function useViewBlockPanelStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("viewBlockPanelCSS");
  return {
    panel: css({
      label: label("panel"),
      width: theme.spacing(56),
      padding: theme.spacing(2, 4, 4, 4),
      borderRadius: theme.extras.borderRadius,
      backgroundColor: theme.palette.secondary.main,
      flexShrink: 0,
    }),
    dipslayIcon: css({
      label: label("dipslayIcon"),
      display: "flex",
    }),
    iconMirror: css({
      label: label("iconMirror"),
      transform: "scaleX(-1)",
      color: "white",
    }),
    iconWarning: css({
      label: label("iconWarning"),
      color: theme.palette.warning.main,
    }),
    iconLayout2: css({
      label: label("iconLayout2"),
      color: "white",
    }),
    Layout2Name: css({
      label: label("Layout2Name"),
      color: "white",
      fontSize: "14px",
      marginRight: theme.spacing(1),
    }),
    headRow: css({
      label: label("headRow"),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }),
    separator: css({
      label: label("separator"),
      backgroundColor: theme.palette.secondary.black(10),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      minHeight: "1px",
      width: "100%",
    }),
    button: css({
      label: label("button"),
      marginTop: theme.spacing(6),
    }),
  };
}
