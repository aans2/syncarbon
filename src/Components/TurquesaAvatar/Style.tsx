import useCustomTheme from "../../Theme/CustomTheme";
import { css } from "@emotion/react";

export function useTurquesaAvatarStyle(size: number) {
  const theme = useCustomTheme();
  const label = theme.extras.label("turquesaAvatarCSS");
  return {
    avatar: css({
      label: label("avatar"),
      width: theme.spacing(size),
      height: theme.spacing(size),
      color: "white",
      fontSize: `calc(${theme.spacing(size)} * 0.4)`,
      backgroundColor: theme.palette.info.main,
      transition: theme.extras.transition.fast([
        "width",
        "height",
        "font-size",
      ]),
    }),
  };
}
