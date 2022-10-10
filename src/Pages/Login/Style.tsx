import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useLoginStyle() {
  const theme = useCustomTheme();
  // const label = "loginCSS";
  const label = theme.extras.label("loginCSS");
  return {
    wrapper: css({
      label: label("wrapper"),
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      width: "100vw",
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      minHeight: theme.spacing(80),
    }),
    panelWrapper: css({
      label: label("panelWrapper"),
      display: "flex",
      flexDirection: "column",
      width: theme.spacing(50),
      flexShrink: 0,
      position: "relative",
      transition: theme.extras.transition.fast("right"),
      right: 0,
    }),
    panel: css({
      label: label("panel"),
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      padding: theme.spacing(8),
      borderRadius: theme.extras.borderRadius,
      width: theme.spacing(66),
      overflow: "clip",
      marginTop: "auto",
      marginBottom: "auto",
    }),
    translate: css({
      label: label("translate"),
      right: theme.spacing(66),
    }),
    leftMargin: css({
      label: label("leftMargin"),
      marginLeft: theme.spacing(16),
    }),
    bottomMargin: css({
      label: label("bottomMargin"),
      marginBottom: theme.spacing(2),
    }),
    panelHead: css({
      label: label("panelHead"),
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    logoMargin: css({
      label: label("logoMargin"),
      marginBottom: theme.spacing(8),
    }),
    forgetTitle: css({
      label: label("forgetTitle"),
      fontWeight: "bolder",
      fontSize: "24px",
      lineHeight: "40px",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(3),
      userSelect: "none",
    }),
    forgetDescription: css({
      label: label("forgetDescription"),
      fontSize: "12px",
      lineHeight: "16px",
      marginBottom: theme.spacing(4),
      userSelect: "none",
    }),
    forgetRecoveryButton: css({
      label: label("forgetRecoveryButton"),
      marginTop: theme.spacing(3),
    }),
    backButton: css({
      label: label("backButton"),
      backgroundColor: theme.palette.secondary.main + "1A",
      color: "black",
      ":hover": {
        backgroundColor: theme.palette.secondary.main + "33",
      },
    }),
    disabled: css({
      label: label("disabled"),
      "&.Mui-disabled": {
        backgroundColor: theme.palette.transparency.black(20),
        color: "white",
      },
    }),
    placeholder: css({
      label: label("placeholder"),
      width: theme.spacing(7),
      height: theme.spacing(7),
    }),
    logo: css({
      label: label("logo"),
      width: theme.spacing(25),
    }),
    icon: css({
      label: label("icon"),
      color: theme.palette.primary.main,
    }),
    whiteButton: css({
      label: label("whiteButton"),
      backgroundColor: "white",
      color: "black",
      fontWeight: "normal",
      ":hover": {
        backgroundColor: theme.palette.transparency.black(10),
      },
    }),
    buttonRow: css({
      label: label("buttonRow"),
      display: "flex",
      flexDirection: "row",
      width: "100%",
      " > .MuiButton-root:first-of-type": {
        marginRight: theme.spacing(2),
      },
    }),
    errorDisplay: css({
      label: label("errorDisplay"),
      textAlign: "center",
      marginBottom: theme.spacing(4),
      height: "16px",
      lineHeight: "16px",
      fontSize: "14px",
      color: theme.palette.warning.main,
      transition: theme.extras.transition.fast("opacity"),
      userSelect: "none",
      opacity: 0,
    }),
    showError: css({
      label: label("showError"),
      opacity: 1,
    }),
    allRights: css({
      label: label("allRights"),
      marginBottom: theme.spacing(4),
      textAlign: "center",
      color: "white",
      fontSize: "12px",
      userSelect: "none",
    }),
  };
}
