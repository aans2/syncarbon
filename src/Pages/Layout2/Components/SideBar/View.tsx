/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSideBarStyle } from "./Style";
import SideBarIcon from "./SideBarIcon/View";
import {
  KeyboardDoubleArrowRight,
  Share,
  DeleteOutlined,
} from "@mui/icons-material";
import { useButtonSquaredStyle } from "../../../../Components/ButtonSquared/Style";
import { useFrameStyle } from "../../../../Components/Frame/Style";
import { Layout2DrawerOptions } from "../Layout2Drawer/Model";
import { useNavigate } from "react-router-dom";
import { useButtonColorsPick } from "../../../../Hooks/ButtonColorsPick/View";

function SideBar({
  chooseDrawer,
  setRemoveDialog,
}: {
  chooseDrawer: (choose: Layout2DrawerOptions) => void;
  showLayout2s: boolean;
  changeLayout2PanelRef: React.MutableRefObject<() => void>;
  setRemoveDialog: () => void;
}) {
  const history = useNavigate();

  const style = useSideBarStyle();
  const squaredButtonStyle = useButtonSquaredStyle();
  const backgroundWhite10Color = useButtonColorsPick("backgroundWhite10");
  const frameStyle = useFrameStyle();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div css={style.sidebarColumn}>
      <div css={style.sidebar}>
        <SideBarIcon
          text="Algum texto"
          icon={<Share css={style.marginIcon} />}
          onClick={() => chooseDrawer("none")}
          isExpanded={isExpanded}
        />
        <div css={frameStyle.sidebarSeparator} />
        <SideBarIcon
          text="Excluir"
          icon={<DeleteOutlined css={style.marginIcon} />}
          onClick={setRemoveDialog}
          isExpanded={isExpanded}
        />
      </div>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        css={[
          squaredButtonStyle.iconSettings,
          backgroundWhite10Color,
          style.expandButton,
        ]}
      >
        <KeyboardDoubleArrowRight
          css={[
            style.arrowRotateBase,
            isExpanded ? style.arrowRotate : undefined,
          ]}
        />
      </Button>
    </div>
  );
}

export default SideBar;
