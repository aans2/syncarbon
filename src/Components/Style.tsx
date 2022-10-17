import { css } from "@emotion/react";
import useCustomTheme from "../Theme/CustomTheme";

export function useMonthStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("MonthsCSS");
  return {
    sidePanel: css({
      label: label("sidePanel"),
      display: "flex",
      flexDirection: "column",
      height: "min-content",
      padding: theme.spacing(2),
      backgroundColor: theme.palette.secondary.white(10),
      borderRadius: theme.extras.borderRadius,
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    }),
    clientTextButton: css({
      label: label("clientTextButton"),
      marginLeft: theme.spacing(2),
      ":hover": {
        backgroundColor: theme.palette.secondary.white(10),
      },
    }),
    backButton: css({
      label: label("backButton"),
      marginRight: theme.spacing(3),
    }),
    panelOptions: css({
      label: label("panelOptions"),
      display: "flex",
    }),
    selectYear: css({
      label: label("selectYear"),
      width: theme.spacing(16),
      zIndex: "1",
    }),
    selectMonth: css({
      label: label("selectMonth"),
      width: theme.spacing(20),
      zIndex: "1",
    }),
    pendencyRow: css({
      label: label("pendencyRow"),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(3),
      display: "flex",
    }),
    pendencyText: css({
      label: label("pendencyText"),
      color: "white",
      fontWeight: "bold",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
    }),
    bold: css({
      label: label("bold"),
      fontWeight: "bold",
    }),
    pendencyIcon: css({
      label: label("pendencyIcon"),
      color: "white",
      marginRight: theme.spacing(2),
      fontSize: "30px",
    }),
    noItemMessage: css({
      label: label("noItemMessage"),
      color: theme.palette.secondary.white(40),
    }),
    paper: css({
      label: label("paper"),
      " > div > .MuiPaper-root": {
        backgroundColor: theme.palette.background.main,
        borderRadius: theme.extras.borderRadius,
        maxWidth: "unset",
        width: "85vw",
        height: "80vh",
      },
    }),
  };
}
