import { css } from "@emotion/react";
import useCustomTheme from "../../../../Theme/CustomTheme";

export function useChangeLayout2PanelStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("changeLayout2PanelCSS");
  return {
    changeLayout2Panel: css({
      label: label("changeLayout2Panel"),
      display: "flex",
      flexDirection: "column",
      color: "white",
      position: "absolute",
      alignItems: "center",
      zIndex: "2",
      top: theme.spacing(14),
      right: theme.spacing(10),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.extras.borderRadius,
    }),
    item: css({
      label: label("item"),
      display: "flex",
      transition: theme.extras.transition.faster("background-color"),
      width: theme.spacing(24),
    }),
    notSelected: css({
      label: label("notSelected"),
      ":hover": {
        backgroundColor: theme.palette.primary.white(10),
      },
    }),
    selected: css({
      label: label("selected"),
      backgroundColor: theme.palette.primary.white(20),
      cursor: "default",
      ":hover": {
        backgroundColor: theme.palette.primary.white(20),
      },
    }),
    icon: css({
      label: label("icon"),
      marginLeft: theme.spacing(2),
    }),
    bold: css({
      label: label("bold"),
      fontWeight: "bold",
    }),
    separator: css({
      label: label("separator"),
      height: theme.spacing(1),
    }),
  };
}
