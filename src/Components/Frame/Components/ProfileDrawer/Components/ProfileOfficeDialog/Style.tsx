import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useProfileOfficeDialogStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("ProfileOfficeDialogCSS");
  return {
    dialogHead: css({
      label: label("dialogHead"),
      display: "flex",
      width: theme.spacing(102),
      justifyContent: "space-between",
      " > div": {
        marginTop: theme.spacing(0),
        width: theme.spacing(32),
      },
    }),
    dialogContent: css({
      label: label("dialogContent"),
      display: "flex",
    }),
    separator: css({
      label: label("separator"),
      marginBottom: theme.spacing(4),
    }),
    formColumn: css({
      label: label("formColumn"),
      marginLeft: theme.spacing(4),
      width: theme.spacing(39),
    }),
    time: theme.extras.transitionTime.faster,
  };
}
