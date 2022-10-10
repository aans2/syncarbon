import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useProfileExpansivePanelStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("profileExpansivePanelCSS");
  return {
    panel: css({
      label: label("panel"),
      transition: theme.extras.transition.faster("background-color"),
      backgroundColor: theme.palette.secondary.white(10),
      borderRadius: theme.extras.borderRadius,
      padding: theme.spacing(1, 1, 1, 4),
      marginBottom: theme.spacing(2),
      color: "white",
    }),
    panelHover: css({
      label: label("panelHover"),
      ":hover": {
        backgroundColor: theme.palette.secondary.white(20),
        cursor: "pointer",
      },
    }),
    titleRow: css({
      label: label("titleRow"),
      color: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: theme.extras.transition.fast("padding-top"),
    }),
    title: css({
      label: label("title"),
      fontSize: "16px",
      fontWeight: "bold",
      paddingTop: "0px",
      color: "inherit",
    }),
    titleExpanded: css({
      label: label("titleExpanded"),
      paddingTop: theme.spacing(2),
    }),
    button: css({
      label: label("button"),
      color: "inherit",
      height: theme.spacing(5),
      width: theme.spacing(5),
    }),
    spacer: css({
      label: label("spacer"),
      height: theme.spacing(2),
    }),
    content: css({
      label: label("content"),
      overflow: "clip",
      transition: theme.extras.transition.fast("height"),
      height: "0px",
      marginRight: theme.spacing(3),
    }),
    contentExpanded: (height: string) =>
      css({
        label: label("contentExpanded"),
        height: height,
      }),
    rotateTransition: css({
      label: label("rotateTransition"),
      transition: theme.extras.transition.fast("transform"),
      transform: "rotate(-0.25turn)",
    }),
    rotate: css({
      label: label("label"),
      transform: "rotate(0turn)",
    }),
  };
}
