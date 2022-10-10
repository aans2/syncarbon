/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { Button } from "@mui/material";
import { ButtonColorsType } from "../../Hooks/ButtonColorsPick/Model";
import { useButtonColorsPick } from "../../Hooks/ButtonColorsPick/View";
import { useButtonSquaredStyle } from "./Style";

function ButtonSquared({
  onClick,
  children,
  color = "secondaryWhite10",
  minor = false,
  transparentIcon,
  ccss,
}: {
  onClick?: () => void;
  children: React.ReactChild;
  color?: ButtonColorsType;
  minor?: boolean;
  transparentIcon?: boolean;
  ccss?: SerializedStyles;
}) {
  const style = useButtonSquaredStyle();
  const colorCss = useButtonColorsPick(color);
  const sizeCss = minor ? style.minorSize : style.normalSize;

  return (
    <Button
      onClick={onClick}
      css={[
        style.iconSettings,
        sizeCss,
        colorCss,
        transparentIcon ? style.transparentIcon : undefined,
        ccss,
      ]}
    >
      {children}
    </Button>
  );
}

export default ButtonSquared;
