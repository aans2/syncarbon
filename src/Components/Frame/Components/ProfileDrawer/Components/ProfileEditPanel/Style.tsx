import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useProfileEditPanelStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("profileEditPanelCSS");
  return {
    avatar: css({
      label: label("avatar"),
      position: "absolute",
      zIndex: 1,
      marginRight: theme.spacing(7),
    }),
    editButton: css({
      label: label("editButton"),
      position: "absolute",
      zIndex: 2,
      display: "flex",
      transition: theme.extras.transition.fast([
        "opacity",
        "background-color",
        "width",
        "height",
      ]),
      opacity: 0,
      color: "black",
      pointerEvents: "none",
      width: theme.spacing(11),
      height: theme.spacing(11),
      marginRight: theme.spacing(7),
      backgroundColor: theme.palette.transparency.black(30),
      ":hover": {
        backgroundColor: theme.palette.transparency.black(20),
      },
    }),
    editButtonExpanded: css({
      label: label("editButtonExpanded"),
      width: theme.spacing(16),
      height: theme.spacing(16),
    }),
    avatarDiv: css({
      label: label("avatarDiv"),
      display: "flex",
      justifyContent: "end",
      position: "relative",
      height: theme.spacing(7),
    }),
    showAvatarEditButton: css({
      label: label("showAvatarEditButton"),
      pointerEvents: "unset",
      opacity: 1,
    }),
    hiddenAvatarEditButton: css({
      label: label("hiddenAvatarEditButton"),
      opacity: 0,
      ":hover": {
        opacity: 1,
      },
    }),
    editIcon: css({
      label: label("editIcon"),
      width: theme.spacing(4),
      height: theme.spacing(4),
      color: "white",
      zIndex: 3,
    }),
    title: css({
      label: label("title"),
      fontSize: "16px",
      fontWeight: "bold",
      color: "white",
    }),
    spacer: css({
      label: label("spacer"),
      height: theme.spacing(4),
    }),
    inputImageHidden: css({
      label: label("inputImageHidden"),
      display: "none",
    }),
    time: theme.extras.transitionTime.fast,
  };
}
