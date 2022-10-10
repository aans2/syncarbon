import { css } from "@emotion/react";
import useCustomTheme from "../../../../Theme/CustomTheme";

export function useProfileDrawerStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("profileDrawerCSS");
  return {
    wrapper: css({
      label: label("wrapper"),
      overflow: "scroll",
      height: "100%",
      paddingTop: theme.spacing(2),
    }),
    time: theme.extras.transitionTime.fast,
  };
}
