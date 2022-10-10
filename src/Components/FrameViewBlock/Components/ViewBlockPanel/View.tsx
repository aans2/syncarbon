/** @jsxImportSource @emotion/react */
import {
  AccountCircleOutlined,
  ArrowBack,
  Close,
  ContentCopy,
  WarningAmber,
} from "@mui/icons-material";
import ButtonMain from "../../../ButtonMain/View";
import ButtonSquared from "../../../ButtonSquared/View";
import { CategorizationArgs, EditArgs, PendencyArgs } from "../../Model";
import CategorizationInfos from "./Components/CategorizationInfos/View";
import EditBlockEntries from "./Components/EditBlockEntries/View";
import ShowBlockReport from "./Components/ShowBlockReport/View";
import { useViewBlockPanelStyle } from "./Style";

function ViewBlockPanel({
  onBack,
  pendencyArgs,
  editArgs,
  categorizationArgs,
}: {
  onBack: () => void;
  pendencyArgs?: PendencyArgs;
  editArgs?: EditArgs;
  categorizationArgs?: CategorizationArgs;
}) {
  const frameType = pendencyArgs
    ? "pendency"
    : editArgs
    ? "edit"
    : "categorization";

  const style = useViewBlockPanelStyle();

  return (
    <div css={style.panel}>
      <div css={style.headRow}>
        <ButtonSquared onClick={onBack}>
          {frameType === "pendency" || frameType === "edit" ? (
            <Close />
          ) : (
            <ArrowBack />
          )}
        </ButtonSquared>
        <div css={style.dipslayIcon}>
          {categorizationArgs ? (
            <div css={style.Layout2Name}>{categorizationArgs.Layout2Name}</div>
          ) : undefined}
          {frameType === "pendency" ? (
            <WarningAmber css={style.iconWarning} />
          ) : frameType === "edit" ? (
            <ContentCopy css={style.iconMirror} />
          ) : (
            <AccountCircleOutlined css={style.iconLayout2} />
          )}
        </div>
      </div>
      <div css={style.separator} />
      {frameType === "pendency" ? (
        <ShowBlockReport issue={0} />
      ) : (
        <>
          {frameType === "categorization" ? <CategorizationInfos /> : undefined}
          <EditBlockEntries modal={frameType === "edit"} />
          <ButtonMain ccss={style.button}>
            {frameType === "edit" ? "Editar bloco" : "Salvar bloco"}
          </ButtonMain>
        </>
      )}
    </div>
  );
}

export default ViewBlockPanel;
