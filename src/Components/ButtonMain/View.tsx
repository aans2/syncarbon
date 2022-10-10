/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { Button } from "@mui/material";
import { ButtonColorsType } from "../../Hooks/ButtonColorsPick/Model";
import { useButtonColorsPick } from "../../Hooks/ButtonColorsPick/View";
import { useButtonMainStyle } from "./Style";

function ButtonMain({
  children,
  ccss,
  color = "primary",
  disabled,
  onClick,
}: {
  children: React.ReactChild;
  ccss?: SerializedStyles | (SerializedStyles | undefined)[];
  color?: ButtonColorsType;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const style = useButtonMainStyle();
  const colorCss = useButtonColorsPick(color);

  return (
    <Button
      disabled={disabled}
      fullWidth
      onClick={onClick}
      css={[colorCss, style.disabled, style.bold, ccss]}
    >
      {children}
    </Button>
  );
}

export default ButtonMain;
