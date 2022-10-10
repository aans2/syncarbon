import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useProfilePasswordPanelStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("profilePasswordPanelCSS");
  return {
    description: css({
      label: label("description"),
      color: theme.palette.secondary.white(60),
      lineHeight: "20px",
      marginBottom: theme.spacing(4),
    }),
    marginTop: css({
      label: label("marginTop"),
      marginTop: theme.spacing(2),
    }),
  };
}
