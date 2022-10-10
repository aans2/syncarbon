import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";
import { ButtonColorsType } from "./Model";

export function useButtonColorsPick(color: ButtonColorsType) {
  const theme = useCustomTheme();
  const label = theme.extras.label("buttonColorsPickCSS");

  switch (color) {
    case "primary":
      return css({
        label: label("primaryColor"),
        color: "white",
        backgroundColor: theme.palette.primary.main,
        ":hover": {
          backgroundColor: theme.palette.primary.white(10),
        },
      });
    case "primaryWhite10":
      return css({
        label: label("primaryWhite10Color"),
        color: "white",
        backgroundColor: theme.palette.primary.white(10),
        ":hover": {
          backgroundColor: theme.palette.primary.white(20),
        },
      });
    case "secondary":
      return css({
        label: label("secondaryColor"),
        color: "white",
        backgroundColor: theme.palette.secondary.main,
        ":hover": {
          backgroundColor: theme.palette.secondary.white(10),
        },
      });
    case "secondaryWhite10":
      return css({
        label: label("secondaryColor"),
        color: "white",
        backgroundColor: theme.palette.secondary.white(10),
        ":hover": {
          backgroundColor: theme.palette.secondary.white(20),
        },
      });
    case "secondaryWhite20":
      return css({
        label: label("secondaryColor"),
        color: "white",
        backgroundColor: theme.palette.secondary.white(20),
        ":hover": {
          backgroundColor: theme.palette.secondary.white(30),
        },
      });
    case "secondaryWhite20SuccessHover":
      return css({
        label: label("secondaryWhite20SuccessHoverColor"),
        color: "white",
        backgroundColor: theme.palette.secondary.white(20),
        ":hover": {
          backgroundColor: theme.palette.success.main,
          color: "white",
        },
      });
    case "secondaryWhite20ErrorHover":
      return css({
        label: label("secondaryWhite20ErrorHoverColor"),
        color: "white",
        backgroundColor: theme.palette.secondary.white(20),
        ":hover": {
          backgroundColor: theme.palette.error.main,
          color: "white",
        },
      });
    case "secondaryWhite20WarningHover":
      return css({
        label: label("secondaryWhite20WarningHoverColor"),
        color: "white",
        backgroundColor: theme.palette.secondary.white(20),
        ":hover": {
          backgroundColor: theme.palette.warning.main,
        },
      });
    case "backgroundWhite10":
      return css({
        label: label("backgroundWhite10Color"),
        color: "white",
        backgroundColor: theme.palette.background.white(10),
        ":hover": {
          backgroundColor: theme.palette.background.white(20),
        },
      });
    case "backgroundWhiteHover":
      return css({
        label: label("backgroundWhiteHoverColor"),
        color: "white",
        backgroundColor: theme.palette.background.main,
        ":hover": {
          backgroundColor: theme.palette.secondary.main,
          color: "white",
        },
      });
    case "warning":
      return css({
        label: label("warningColor"),
        color: "white",
        backgroundColor: theme.palette.warning.main,
        ":hover": {
          backgroundColor: theme.palette.warning.white(10),
        },
      });
    case "warningWhite10":
      return css({
        label: label("warningWhite10Color"),
        color: "white",
        backgroundColor: theme.palette.warning.white(10),
        ":hover": {
          backgroundColor: theme.palette.warning.white(20),
        },
      });
    case "success":
      return css({
        label: label("successColor"),
        color: "white",
        backgroundColor: theme.palette.success.main,
        ":hover": {
          backgroundColor: theme.palette.success.white(10),
        },
      });
  }
  return undefined;
}
