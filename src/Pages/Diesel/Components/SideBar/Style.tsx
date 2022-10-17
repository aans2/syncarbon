// Third party libs
import { css } from "@emotion/react";
import useCustomTheme from "../../../../Theme/CustomTheme";

export function useSideBarStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("sideBarCSS");
  return {
    sidebar: css({
      label: label("sideBar"),
      height: "min-content",
      padding: theme.spacing(2),
      borderRadius: theme.extras.borderRadius,
      backgroundColor: theme.palette.background.white(20),
      marginLeft: theme.spacing(3),
    }),
    sidebarColumn: css({
      label: label("sidebarColumn"),
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
    }),
    marginIcon: css({
      label: label("marginIcon"),
      margin: theme.spacing(2),
    }),
    arrowRotateBase: css({
      label: label("arrowRotateBase"),
      transition: theme.extras.transition.fast("transform"),
    }),
    arrowRotate: css({
      label: label("arrowRotate"),
      transform: "rotate(0.5turn)",
    }),
    sidePanelSeparator: css({
      label: label("sidePanelSeparator"),
      minHeight: "1px",
      width: "100%",
      backgroundColor: theme.palette.transparency.black(10),
      margin: theme.spacing(2, 0),
    }),
    expandButton: css({
      label: label("expandButton"),
      width: theme.spacing(11),
      height: theme.spacing(6),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(3),
      transform: "scaleX(-1)",
    }),
  };
}
