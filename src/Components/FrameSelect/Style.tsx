import { css } from "@emotion/react";
import useCustomTheme from "../../Theme/CustomTheme";

export function useFrameSelectStyle(
  itemNumber: number,
  brighter: boolean,
  darker: boolean,
  heightOfFixContent: number,
  showLenghtOptions?: number
) {
  const separatorHeight = "2px";
  const theme = useCustomTheme();
  const label = theme.extras.label("frameSelectCSS");
  return {
    frameSelect: css({
      label: label("frameSelect"),
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      userSelect: "none",
      zIndex: 1,
      backgroundColor: brighter
        ? theme.palette.secondary.white(20)
        : darker
        ? theme.palette.background.main
        : theme.palette.secondary.white(10),
      borderRadius: theme.extras.borderRadius,
      transition:
        theme.extras.transition.faster("background-color") +
        ", " +
        theme.extras.transition.fast("height"),
      overflow: "hidden",
      minHeight: theme.spacing(7),
    }),
    positionFrame: css({
      label: label("positionFrame"),
      height: theme.spacing(7),
    }),
    frameSelectNotExpanded: css({
      label: label("frameSelectNotExpanded"),
      height: theme.spacing(7),
      cursor: "pointer",
      ":hover": {
        backgroundColor: brighter
          ? theme.palette.secondary.white(30)
          : darker
          ? theme.palette.background.white(10)
          : theme.palette.secondary.white(20),
      },
    }),
    frameSelectExpanded: (currentScreenHeight: number) =>
      css({
        label: label("frameSelectExpanded"),
        backgroundColor: brighter
          ? theme.palette.secondary.white(30)
          : darker
          ? theme.palette.background.white(20)
          : theme.palette.secondary.white(20),
        height: showLenghtOptions
          ? `calc(${theme.spacing(7)} * ${
              showLenghtOptions + 1
            } + ${separatorHeight})`
          : `min(calc(${theme.spacing(7)} * ${
              itemNumber + 1
            } + ${separatorHeight}), calc(${currentScreenHeight}px - ${heightOfFixContent}px - ${theme.spacing(
              3
            )}))`,
      }),
    options: (currentScreenHeight: number) =>
      css({
        label: label("options"),
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: showLenghtOptions
          ? showLenghtOptions >= itemNumber
            ? "unset"
            : "auto"
          : theme.extras.spacingNumber(7) * (itemNumber + 1) <
            currentScreenHeight -
              heightOfFixContent -
              theme.extras.spacingNumber(3)
          ? "unset"
          : "auto",
        scrollbarWidth: "thin",
        //Configurações do Chrome
        "&::-webkit-scrollbar": {
          display: "block",
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: theme.palette.secondary.white(10),
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.secondary.white(40),
          outline: "0px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.secondary.white(30),
          outline: "0px",
        },
        "&::-webkit-scrollbar-thumb:active": {
          background: theme.palette.secondary.white(20),
          outline: "0px",
        },
      }),
    separator: css({
      label: label("separator"),
      backgroundColor: theme.palette.transparency.black(10),
      minHeight: separatorHeight,
      display: "flex",
      width: "calc(100% - " + theme.spacing(4) + ")",
      margin: theme.spacing(0, 2),
    }),
    icon: css({
      label: label("icon"),
      color: brighter
        ? theme.palette.secondary.white(40)
        : darker
        ? theme.palette.background.white(30)
        : theme.palette.secondary.white(30),
      transition: theme.extras.transition.fast("transform"),
    }),
    iconRotated: css({
      label: label("iconRotated"),
      transform: "rotate(-0.5turn)",
    }),
    display: css({
      label: label("display"),
      display: "flex",
      justifyContent: "space-between",
    }),
    item: css({
      label: label("item"),
      padding: theme.spacing(2, 2, 2, 3),
      width: "100%",
      cursor: "pointer",
      display: "flex",
      justifyContent: "start",
    }),
    itemSelected: css({
      label: label("itemSelected"),
      backgroundColor: theme.palette.primary.main,
    }),
    itemNotSelected: css({
      label: label("itemNotSelected"),
      ":hover": {
        backgroundColor: brighter
          ? theme.palette.secondary.white(40)
          : darker
          ? theme.palette.background.white(30)
          : theme.palette.secondary.white(30),
      },
    }),
  };
}
