/** @jsxImportSource @emotion/react */

import { ErrorOutline } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import ButtonMain from "../ButtonMain/View";
import { useFrameDialogStyle } from "./Style";

function FrameDialog({
  open,
  onClose,
  content,
  title = "Atenção",
  color = "warning",
}: {
  open: boolean;
  onClose: () => void;
  content: React.ReactChild;
  title?: string;
  color?: "primary" | "secondary" | "warning";
}) {
  const style = useFrameDialogStyle();

  const colorStyle =
    color === "primary"
      ? style.primaryColor
      : color === "secondary"
      ? style.secondaryColor
      : style.warningColor;

  const colorButtonStyle =
    color === "primary"
      ? "primaryWhite10"
      : color === "secondary"
      ? "secondaryWhite10"
      : "warningWhite10";

  return (
    <Dialog css={[style.wrapper, colorStyle]} onClose={onClose} open={open}>
      <div css={style.head}>
        <span css={style.emphasis}>{title}</span>
        <ErrorOutline />
      </div>
      <div css={style.separator} />
      {content}
      <div css={style.buttonRow}>
        <ButtonMain color={colorButtonStyle}>Cancelar</ButtonMain>
        <div css={style.buttonSeparator} />
        <ButtonMain color={colorButtonStyle}>Continuar</ButtonMain>
      </div>
    </Dialog>
  );
}

export default FrameDialog;
