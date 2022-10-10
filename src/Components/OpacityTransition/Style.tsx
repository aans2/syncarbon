import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useOpacityTransitionStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("opacityTransitionCSS");
  return {
    transition: css({
      label: label("transition"),
      transition: theme.extras.transition.fast("opacity"),
      position: "absolute",
    }),
    hidden: css({
      label: label("hidden"),
      pointerEvents: "none",
      opacity: 0,
    }),
  };
}
