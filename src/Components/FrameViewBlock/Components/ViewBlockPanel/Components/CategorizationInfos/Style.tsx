import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useCategorizationInfosStyle(avatarSize: number) {
  const theme = useCustomTheme();
  const label = theme.extras.label("CategorizationInfosCSS");
  return {
    title: css({
      label: label("title"),
      marginBottom: theme.spacing(2),
    }),
    row: css({
      label: label("row"),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(4),
    }),
    groupAvatar: css({
      label: label("groupAvatar"),
      " > .MuiAvatarGroup-avatar": {
        width: theme.spacing(avatarSize),
        height: theme.spacing(avatarSize),
      },
    }),
    infoNumber: css({
      label: label("infoNumber"),
      display: "flex",
      fontWeight: "bold",
      color: "white",
      alignItems: "center",
    }),
    icon: css({
      label: label("icon"),
      transform: "scaleX(-1)",
      marginLeft: theme.spacing(1),
    }),
  };
}
