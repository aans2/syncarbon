import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useProfileEditButtonsStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("profileEditButtonsCSS");
  return {
    row: css({
      label: label("row"),
      marginTop: theme.spacing(2),
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    }),
    hidden: css({
      label: label("hidden"),
      pointerEvents: "none",
      opacity: 0,
    }),
    expandedButton: css({
      label: label("expandedButton"),
      width: "100%",
    }),
    noButton: css({
      label: label("noWidthButton"),
      width: "0",
      padding: "0",
    }),
    mainButton: css({
      label: label("mainButton"),
      fontWeight: "bold",
      transition: theme.extras.transition.faster("background-color"),
    }),
    animationTransition: css({
      label: label("animationTransition"),
      transition: theme.extras.transition.fast(["width", "background-color"]),
    }),
    noEvents: css({
      label: label("noEvents"),
      pointerEvents: "none",
    }),
    editButton: css({
      label: label("editButton"),
      width: `calc(50% - ${theme.spacing(1)})`,
      backgroundColor: theme.palette.success.main,
      ":hover": {
        backgroundColor: theme.palette.success.white(10),
      },
    }),
    saveButton: css({
      label: label("saveButton"),
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      ":hover": {
        backgroundColor: theme.palette.primary.white(10),
      },
    }),
    opacityTransition: css({
      label: label("opacity"),
      transition: theme.extras.transition.fast("opacity"),
    }),
    cancelButton: css({
      label: label("editButton"),
      backgroundColor: theme.palette.warning.main,
      transition: theme.extras.transition.fast(["width", "padding", "opacity"]),
      fontWeight: "bold",
      width: `calc(50% - ${theme.spacing(1)})`,
      ":hover": {
        backgroundColor: theme.palette.warning.white(10),
      },
    }),
    time: theme.extras.transitionTime.fast,
  };
}
