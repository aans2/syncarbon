import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useFrameViewBlockStyle(modal: boolean) {
  const theme = useCustomTheme();
  const label = theme.extras.label("frameViewBlockCSS");
  return {
    screen: css({
      label: label("screen"),
      padding: modal ? theme.spacing(0) : theme.spacing(2),
      height: "100vh",
      display: "flex",
      minHeight: modal ? theme.spacing(80) : theme.spacing(100),
      minWidth: theme.spacing(130),
    }),
  };
}
