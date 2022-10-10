import { css } from "@emotion/react";
import useCustomTheme from "../../../../Theme/CustomTheme";

export function useFrameDrawerStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("frameDrawerCSS");
  return {
    frameDrawer: (drawerWidth: number) =>
      css({
        label: label("frameDrawer"),
        height: "calc(100% - 48px)",
        minHeight: theme.spacing(86),
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(3, 4),
        borderRadius: theme.extras.borderRadius,
        width: theme.spacing(drawerWidth),
        flexShrink: 0,
      }),
    head: css({
      label: label("head"),
      margin: theme.spacing(2, 4),
      display: "flex",
      justifyContent: "space-between",
    }),
    textEntrySmall: css({
      label: label("textEntrySmall"),
      width: theme.spacing(40),
    }),
    textEntryBig: css({
      label: label("textEntryBig"),
      width: theme.spacing(48),
    }),
    separator: css({
      label: label("separator"),
      backgroundColor: theme.palette.secondary.black(10),
      minHeight: "1px",
      margin: theme.spacing(0, 4),
    }),
    content: css({
      label: label("content"),
      padding: theme.spacing(2, 4),
      height: "calc(100% - 89px)",
      flexShrink: 0,
    }),
    scrollContent: css({
      label: label("scrollContent"),
      paddingTop: 0,
    }),
    title: css({
      label: label("title"),
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "24px",
    }),
    subtitle: css({
      label: label("subtitle"),
      marginBottom: theme.spacing(2),
      color: theme.palette.background.white(40),
      fontSize: "14px",
      fontWeight: "bold",
    }),
    name: css({
      label: label("name"),
      color: "white",
      width: "100%",
    }),
    darkModeRow: css({
      label: label("darkModeRow"),
      color: "white",
      display: "flex",
      alignItems: "center",
    }),
    darkModeText: css({
      label: label("darkModeText"),
      fontSize: "14px",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1),
    }),
    time: theme.extras.transitionTime.fast,
  };
}
