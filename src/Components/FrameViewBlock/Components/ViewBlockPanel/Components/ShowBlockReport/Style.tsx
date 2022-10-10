import { css } from "@emotion/react";
import useCustomTheme from "../../../../../../Theme/CustomTheme";

export function useShowBlockReportStyle() {
  const theme = useCustomTheme();
  const label = theme.extras.label("showBlockReportCSS");
  return {
    subtitle: css({
      label: label("issueSubtitle"),
      marginBottom: theme.spacing(2),
    }),
    issueView: css({
      label: label("issueView"),
      backgroundColor: theme.palette.background.main,
      borderRadius: theme.extras.borderRadius,
      padding: theme.spacing(2),
      marginBottom: theme.spacing(4),
      color: "white",
      width: "100%",
    }),
    observation: css({
      label: label("observation"),
      backgroundColor: theme.palette.background.main,
      borderRadius: theme.extras.borderRadius,
      padding: theme.spacing(2),
      width: "100%",
      height: "125px",
    }),
    noObservation: css({
      label: label("noObservation"),
      color: theme.palette.background.white(30),
    }),
    withObservation: css({
      label: label("withObservation"),
      color: "white",
    }),
  };
}
