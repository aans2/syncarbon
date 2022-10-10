/** @jsxImportSource @emotion/react */
import React from "react";
import { Badge, Button } from "@mui/material";
import { useButtonSquaredStyle } from "../../../../../Components/ButtonSquared/Style";
import { useSideBarIconStyle } from "./Style";

function SideBarIcon({
  text,
  icon,
  onClick,
  isExpanded,
  badgeNumber,
}: {
  text: string;
  icon: React.ReactChild;
  badgeNumber?: number;
  onClick: () => void;
  isExpanded: boolean;
  iconMirror?: boolean;
}) {
  const style = useSideBarIconStyle();
  const squaredButtonStyle = useButtonSquaredStyle();

  return (
    <Button
      onClick={onClick}
      css={[squaredButtonStyle.iconSettings, style.item, style.noPadding]}
    >
      <div
        css={[
          style.textItem,
          isExpanded ? style.textItemExpanded : style.textItemNotExpanded,
        ]}
      >
        <span css={style.text}>{text}</span>
      </div>
      {badgeNumber ? (
        <Badge
          css={style.badge}
          badgeContent={badgeNumber}
          onClick={(e) => {
            onClick();
            e.stopPropagation();
          }}
          overlap="circular"
          color="warning"
          showZero
        >
          {icon}
        </Badge>
      ) : (
        icon
      )}
    </Button>
  );
}

export default SideBarIcon;
