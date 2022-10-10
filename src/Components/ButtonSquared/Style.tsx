import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useButtonSquaredStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("buttonSquaredCSS");
  return {
    iconSettings: css({
      label: label("iconSettings"),
      transition: theme.extras.transition.faster(["background-color", "color"]),
      flexShrink: 0,
    }),
    normalSize: css({
      label: label("normalSize"),
      width: theme.spacing(7),
    }),
    minorSize: css({
      label: label("minorSize"),
      width: theme.spacing(5),
      height: theme.spacing(5),
    }),
    transparentIcon: css({
      label: label("transparentIcon"),
      color: theme.palette.secondary.white(50),
    }),
  };
}
