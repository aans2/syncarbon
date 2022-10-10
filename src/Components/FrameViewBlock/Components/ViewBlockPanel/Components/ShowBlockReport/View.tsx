/** @jsxImportSource @emotion/react */
import { IssueToString } from "../../../../../../Utils/Utils";
import { useFrameDrawerStyle } from "../../../../../Frame/Components/FrameDrawer/Style";
import { useShowBlockReportStyle } from "./Style";

function ShowBlockReport({
  issue,
  observations,
}: {
  issue: number;
  observations?: string;
}) {
  const style = useShowBlockReportStyle();
  const frameDrawerStyle = useFrameDrawerStyle();

  return (
    <>
      <div css={[frameDrawerStyle.subtitle, style.subtitle]}>Problema</div>
      <div css={style.issueView}>{IssueToString(issue)}</div>
      <div css={[frameDrawerStyle.subtitle, style.subtitle]}>Observação</div>
      <div
        css={[
          style.observation,
          observations ? style.withObservation : style.noObservation,
        ]}
      >
        {observations ?? "Nenhuma observação"}
      </div>
    </>
  );
}

export default ShowBlockReport;
