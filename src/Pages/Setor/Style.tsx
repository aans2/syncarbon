import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useSetorStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("SetorCSS");
  return {
    grid: css({
      label: label("grid"),
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gridGap: theme.spacing(2),
    }),
    card: css({
      label: label("card"),
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "start",
      height: "unset",
      padding: theme.spacing(3),
      transition: theme.extras.transition.fast("background-color"),
      "> *": {
        transition: theme.extras.transition.fast("opacity"),
      },
    }),
    cardActive: css({
      label: label("cardActive"),
      backgroundColor: theme.palette.secondary.white(10),
      "&:hover": {
        backgroundColor: theme.palette.secondary.white(20),
      },
    }),
    cardInactive: css({
      label: label("cardInactive"),
      backgroundColor: theme.palette.background.main + "4D",
      pointerEvents: "none",
      "> *": {
        opacity: 0.1,
      },
    }),
    addClientButton: css({
      label: label("addClientButton"),
      width: "unset",
    }),
    margin: css({
      label: label("margin"),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    }),
    anoName: css({
      label: label("anoName"),
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      textAlign: "start",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "20px",
    }),
    cardDate: css({
      label: label("cardDate"),
      textAlign: "start",
      fontSize: "12px",
      color: theme.palette.secondary.white(30),
    }),
    cardDateBold: css({
      label: label("cardDateBold"),
      fontWeight: "bold",
    }),
    icon: css({
      label: label("icon"),
      transform: "scaleX(-1)",
    }),
    iconColorGreen: css({
      label: label("iconColorGreen"),
      color: theme.palette.success.main,
    }),
    iconColorPurple: css({
      label: label("iconColorPurple"),
      color: theme.palette.primary.main,
    }),
    iconColorOrange: css({
      label: label("iconColorOrange"),
      color: theme.palette.warning.main,
    }),
    iconMiddle: css({
      label: label("iconMiddle"),
      margin: theme.spacing(0, 1),
    }),
    infoRow: css({
      label: label("infoRow"),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    }),
    centerIcons: css({
      label: label("centerIcons"),
      display: "flex",
      alignItems: "center",
    }),
  };
}
