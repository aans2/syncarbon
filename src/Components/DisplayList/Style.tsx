import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useDisplayListStyle(
  heightOfFixContent: string,
  paddingHeight: number
) {
  const theme = useCustomTheme();
  const label = theme.extras.label("displayListCSS");
  const maskHeight = theme.spacing(paddingHeight);
  const maskBearing = theme.spacing(6);
  const calc = `calc(${maskHeight} + ${maskBearing})`;
  return {
    display: (isTopDisplay: boolean, isBottomDisplay: boolean) =>
      css({
        label: label("display"),
        display: "flex",
        flexDirection: "column",
        height: "calc(100% - " + heightOfFixContent + ")",
        overflow: "scroll",
        flexShrink: 0,
        transition: theme.extras.transition.fast([
          "mask-size",
          "mask-position",
          "height",
        ]),
        maskImage: `linear-gradient(to bottom, transparent, black ${calc}, black calc(100% - ${calc}), transparent)`,
        maskSize: `100% ${
          isTopDisplay || isBottomDisplay
            ? `calc(100% + ${maskBearing})`
            : "100%"
        }`,
        maskPosition: `0 ${isTopDisplay ? `-${maskBearing}` : "0"}`,
        maskRepeat: "no-repeat",
        " > div:nth-last-of-type(2)": {
          marginBottom: 0,
        },
      }),
    fadeSpacer: css({
      label: label("fadeSpacer"),
      height: maskHeight,
      flexShrink: 0,
    }),
    fadeSpacerBottom: css({
      label: label("fadeSpacerBottom"),
      height: theme.spacing(3),
      flexShrink: 0,
    }),
    noItemMessage: css({
      label: label("noItemMessage"),
      color: theme.palette.secondary.white(40),
    }),
    time: theme.extras.transitionTime.fast,
  };
}
