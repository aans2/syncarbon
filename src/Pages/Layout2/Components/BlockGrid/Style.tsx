import { css } from "@emotion/react";
import useCustomTheme from "../../../../Theme/CustomTheme";

export function useBlockGridStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("blockGridCSS");
  return {
    block: css({
      label: label("block"),
      display: "flex",
      userSelect: "none",
      transition:
        theme.extras.transition.faster("background-color") +
        ", " +
        theme.extras.transition.fast("color"),
      padding: theme.spacing(2),
      borderRadius: theme.extras.borderRadius,
    }),
    activated: css({
      label: label("activated"),
      cursor: "pointer",
      ":hover": {
        backgroundColor: theme.palette.primary.main,
      },
      color: "white",
    }),
    deactivated: css({
      label: label("deactivated"),
      color: theme.palette.secondary.white(20),
    }),
    icon: css({
      label: label("icon"),
      margin: theme.spacing(1, 2, 1, 0),
      transform: "scaleX(-1)",
    }),
    column: css({
      label: label("column"),
      display: "flex",
      flexDirection: "column",
    }),
    date: css({
      label: label("date"),
      fontSize: "12px",
      transition: theme.extras.transition.fast("color"),
    }),
    dateActivated: css({
      label: label("dateActivated"),
      color: theme.palette.secondary.white(50),
    }),
    dateDeactivated: css({
      label: label("dateDeactivated"),
      color: theme.palette.secondary.white(20),
    }),
    value: css({
      label: label("value"),
      fontWeight: "bold",
      lineHeight: "22px",
    }),
  };
}
