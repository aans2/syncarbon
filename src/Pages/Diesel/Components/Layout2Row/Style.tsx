import { css } from "@emotion/react";
import useCustomTheme from "../../../../Theme/CustomTheme";

export function useLayout2RowStyle() {
  const separatorHeight = "2px";
  const theme = useCustomTheme();
  const label = theme.extras.label("Layout2RowCSS");
  return {
    Layout2Row: css({
      label: label("Layout2Row"),
      backgroundColor: theme.palette.secondary.white(10),
      color: "white",
      padding: theme.spacing(1, 2),
      borderRadius: theme.extras.borderRadius,
      marginBottom: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      userSelect: "none",
      transition: theme.extras.transition.faster("background-color"),
      cursor: "pointer",
    }),
    notExpanded: css({
      label: label("notExpanded"),
      ":hover": {
        backgroundColor: theme.palette.secondary.white(20),
      },
    }),
    head: css({
      label: label("head"),
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      transition: theme.extras.transition.fast("margin"),
    }),
    headExpanded: css({
      label: label("headExpanded"),
      margin: theme.spacing(1, 0, 2, 0),
    }),
    headNotExpanded: css({
      label: label("headNotExpanded"),
      margin: theme.spacing(0),
    }),
    separator: css({
      label: label("separator"),
      backgroundColor: theme.palette.transparency.black(10),
      marginBottom: theme.spacing(2),
      minHeight: separatorHeight,
      width: "100%",
    }),
    name: css({
      label: label("name"),
      fontWeight: "bold",
      fontSize: "16px",
      marginLeft: theme.spacing(2),
    }),
    number: css({
      label: label("number"),
      fontSize: "12px",
      color: theme.palette.secondary.white(50),
    }),
    icon: css({
      label: label("icon"),
      transform: "scaleX(-1)",
      color: theme.palette.secondary.white(40),
      transition: theme.extras.transition.fast("color"),
    }),
    iconExpanded: css({
      label: label("iconExpanded"),
      color: "white",
    }),
    photosNumber: css({
      label: label("photosNumber"),
      fontSize: "14px",
      fontWeight: "bold",
      marginRight: theme.spacing(1),
    }),
    display: css({
      label: label("display"),
      display: "flex",
      alignItems: "center",
    }),
    content: css({
      label: label("content"),
      transition: theme.extras.transition.fast("height"),
      flexDirection: "column",
      display: "flex",
      overflow: "clip",
    }),
    contentExpanded: (gridHeight: number) =>
      css({
        label: label("contentExpanded"),
        height:
          "calc(" +
          gridHeight.toString() +
          "px + " +
          theme.spacing(4) +
          " + " +
          separatorHeight +
          ")",
      }),
    contentNotExpanded: css({
      label: label("contentNotExpanded"),
      height: "0",
    }),
    grid: css({
      label: label("grid"),
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      cursor: "default",
      gridGap: theme.spacing(1),
    }),
    textEntry: css({
      label: label("textEntry"),
      width: theme.spacing(25),
      marginLeft: theme.spacing(2),
      "& .MuiInputBase-root": {
        fontSize: "14px",
        margin: theme.spacing(0),
      },
      "& .MuiInputBase-input": {
        padding: theme.spacing(1),
        paddingLeft: "0px",
        height: "24px",
      },
    }),
    textEntryDisplay: css({
      label: label("textEntryDisplay"),
      display: "flex",
      overflow: "clip",
      transition: theme.extras.transition.fast("width "),
      height: "40px",
    }),
    textEntryDisplayExpanded: css({
      label: label("textEntryDisplayExpanded"),
      width: "216px",
    }),
    textEntryDisplayNotExpanded: css({
      label: label("textEntryDisplayNotExpanded"),
      width: "0px",
    }),
    noItemMessage: css({
      label: label("noItemMessage"),
      color: theme.palette.secondary.white(40),
    }),
  };
}
