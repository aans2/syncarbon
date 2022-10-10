import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useOpacityTwoTimesTransitionStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("OpacityTwoTimesTransitionCSS");
  return {
    fade: css({
      label: label("fade"),
      transition: theme.extras.transition.fast("opacity"),
      height: "100%",
    }),
    hide: css({
      label: label("hide"),
      opacity: 0,
    }),
    noInteractions: css({
      label: label("noInteractions"),
      pointerEvents: "none",
    }),
    time: theme.extras.transitionTime.fast,
  };
}
