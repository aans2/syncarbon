import { css } from "@emotion/react";
import useCustomTheme from "../../../../Theme/CustomTheme";

export function useDrawerSharedStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("drawerSharedCSS");
  return {
    item: css({
      label: label("item"),
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(2),
    }),
    title: css({
      label: label("title"),
      marginBottom: theme.spacing(1),
      lineHeight: "24px",
    }),
    switch: css({
      label: label("switch"),
      marginLeft: "-" + theme.spacing(1),
    }),
    avatar: css({
      label: label("avatar"),
      marginRight: theme.spacing(3),
    }),
    status: css({
      label: label("status"),
      height: theme.spacing(2),
      minWidth: theme.spacing(2),
      borderRadius: theme.spacing(1),
      marginLeft: theme.spacing(3),
      transition: theme.extras.transition.faster("background-color"),
    }),
    activated: css({
      label: label("activated"),
      backgroundColor: theme.palette.success.main,
    }),
    deactivated: css({
      label: label("deactivated"),
      backgroundColor: theme.palette.secondary.white(20),
    }),
  };
}
