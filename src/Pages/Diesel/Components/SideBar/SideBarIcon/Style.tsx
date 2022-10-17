import { css } from "@emotion/react";
import useCustomTheme from "../../../../../Theme/CustomTheme";

export function useSideBarIconStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("sideBarIconCSS");
  return {
    noPadding: css({
      label: label("noPadding"),
      padding: theme.spacing(0),
    }),
    item: css({
      label: label("item"),
      backgroundColor: theme.palette.background.white(20),
      ":hover": {
        backgroundColor: theme.palette.background.white(30),
      },
    }),
    badge: css({
      "& .MuiBadge-badge": {
        label: label("badge"),
        width: theme.spacing(4),
        height: theme.spacing(4),
        borderRadius: theme.spacing(4),
        userSelect: "none",
        cursor: "pointer",
        fontWeight: "bold",
        textShadow: "none",
        transform: "scale(1) translate(60%, -60%)",
      },
    }),
    textItem: css({
      label: label("textItem"),
      margin: "auto 0px",
      transition: theme.extras.transition.fast("width"),
      overflow: "hidden",
      display: "flex",
      justifyContent: "end",
    }),
    textItemNotExpanded: css({
      label: label("textItemNotExpanded"),
      width: "0px",
    }),
    textItemExpanded: css({
      label: label("textItemExpanded"),
      width: theme.spacing(21),
    }),
    text: css({
      label: label("text"),
      color: "white",
      whiteSpace: "nowrap",
      textTransform: "none",
    }),
  };
}
