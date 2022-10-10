import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useEditBlockEntriesStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("editBlockEntriesCSS");
  return {
    dateRow: css({
      label: label("dateRow"),
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(4),
    }),
    dayTextEntry: css({
      label: label("dayTextEntry"),
      width: theme.spacing(9),
    }),
    monthSelect: css({
      label: label("monthSelect"),
      width: theme.spacing(20),
    }),
    yearSelect: css({
      label: label("yearSelect"),
      width: theme.spacing(15),
    }),
  };
}
