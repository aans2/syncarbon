import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useOverlapPanelStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("overlapPanelCSS");
  return {
    background: css({
      label: label("background"),
      display: "flex",
      position: "absolute",
      zIndex: "2",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }),
    transitionOpacity: css({
      label: label("transitionOpacity"),
      transition: theme.extras.transition.fast("opacity"),
    }),
    visible: css({
      label: label("visible"),
      opacity: 1,
    }),
    notVisible: css({
      label: label("notVisible"),
      opacity: 0,
    }),
  };
}
