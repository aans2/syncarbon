/** @jsxImportSource @emotion/react */
import { HelpOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useRef } from "react";
import ButtonSquared from "../ButtonSquared/View";
import TurquesaAvatar from "../TurquesaAvatar/View";
import ProfileDrawer from "./Components/ProfileDrawer/View";
import { useFrameStyle } from "./Style";
import Logomarca from "../../Assets/logomarca.svg";

function Frame({ children }: { children: React.ReactChild }) {
  const style = useFrameStyle();

  const profileRef = useRef<() => void>(() => null);

  return (
    <>
      <div css={style.title}>
        <img css={style.logo} src={Logomarca} alt="logomarca" />
        <div>
          <ButtonSquared
            ccss={style.marginRight}
            transparentIcon
            color="backgroundWhiteHover"
          >
            <HelpOutline />
          </ButtonSquared>
          <Button onClick={() => profileRef.current!()} css={style.textButton}>
            <span>Izabella Gaspar</span>
            <TurquesaAvatar
              initials="IG"
              size={4}
              ccss={style.operatorAvatar}
            />
          </Button>
        </div>
      </div>
      <div css={style.content}>{children}</div>
      <ProfileDrawer profileRef={profileRef} />
    </>
  );
}

export default Frame;
