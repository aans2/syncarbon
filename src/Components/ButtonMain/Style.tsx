import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useButtonMainStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("buttonMainCSS");
  return {
    bold: css({
      label: label("bold"),
      fontWeight: "bold",
    }),
    disabled: css({
      label: label("disabled"),
      "&.Mui-disabled": {
        backgroundColor: theme.palette.secondary.white(10),
        color: "white",
      },
    }),
  };
}
