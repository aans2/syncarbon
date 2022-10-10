import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useFrameStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("frameCSS");
  return {
    logo: css({
      label: label("logo"),
      width: theme.spacing(16),
    }),
    title: css({
      label: label("title"),
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(3, 8, 2, 8),
    }),
    marginRight: css({
      label: label("marginRight"),
      marginRight: theme.spacing(2),
      color: "white",
    }),
    textButton: css({
      label: label("textButton"),
      padding: theme.spacing(2, 4),
      "&:hover": {
        backgroundColor: theme.palette.background.white(10),
      },
    }),
    operatorAvatar: css({
      label: label("operatorAvatar"),
      marginLeft: theme.spacing(2),
    }),
    content: css({
      label: label("content"),
      display: "flex",
      margin: theme.spacing(0, 8),
    }),
    drawer: css({
      label: label("drawer"),
      ".MuiPaper-root": {
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    }),
    textEntry: css({
      label: label("textEntry"),
      width: theme.spacing(40),
    }),
    sidebarSeparator: css({
      label: label("sidebarSeparator"),
      height: theme.spacing(1),
    }),
    iconMirror: css({
      label: label("iconMirror"),
      transform: "scaleX(-1)",
    }),
    panel: css({
      label: label("panel"),
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "min-content",
    }),
    panelHead: css({
      label: label("panelHead"),
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.secondary.main,
      borderTopLeftRadius: theme.extras.borderRadius,
      borderTopRightRadius: theme.extras.borderRadius,
      padding: theme.spacing(2, 4, 0, 4),
    }),
    panelHeadRow: css({
      label: label("panelHeadRow"),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }),
    panelHeadItem: css({
      label: label("panelHeadItem"),
      display: "flex",
    }),
    panelHeadSpacer: css({
      label: label("panelHeadSpacer"),
      width: theme.spacing(2),
    }),
    panelHeadTitle: css({
      label: label("panelHeadTitle"),
      fontSize: "18px",
      fontWeight: "bold",
      color: "white",
    }),
    panelSeparator: css({
      label: label("panelSeparator"),
      width: "100%",
      minHeight: "1px",
      backgroundColor: theme.palette.secondary.black(10),
      marginTop: theme.spacing(2),
    }),
    panelShower: css({
      label: label("panelShower"),
      overflow: "scroll",
      height: "calc(100vh - " + theme.spacing(23) + " - 1px)",
      minHeight: `calc(472px + ${theme.spacing(3)})`,
    }),
    panelContent: css({
      label: label("panelContent"),
      backgroundColor: theme.palette.secondary.main,
      borderBottomLeftRadius: theme.extras.borderRadius,
      borderBottomRightRadius: theme.extras.borderRadius,
      padding: theme.spacing(2, 4, 4, 4),
      marginBottom: theme.spacing(3),
      width: "100%",
    }),
    dialog: css({
      label: label("dialog"),
      "& .MuiDialog-paper": {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.extras.borderRadius,
        padding: theme.spacing(2, 4, 4, 4),
        maxWidth: "unset",
      },
    }),
  };
}
