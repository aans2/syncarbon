/** @jsxImportSource @emotion/react */

import { ContentCopy } from "@mui/icons-material";
import { AvatarGroup } from "@mui/material";
import { useFrameDrawerStyle } from "../../../../../Frame/Components/FrameDrawer/Style";
import TurquesaAvatar from "../../../../../TurquesaAvatar/View";
import { useCategorizationInfosStyle } from "./Style";

function CategorizationInfos() {
  const avatarSize = 4;
  const style = useCategorizationInfosStyle(avatarSize);
  const frameDrawerStyle = useFrameDrawerStyle();

  return (
    <>
      <div css={style.row}>
        <AvatarGroup max={7} css={style.groupAvatar}>
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
          <TurquesaAvatar initials="OP" size={avatarSize} />
        </AvatarGroup>
        <div css={style.infoNumber}>
          18
          <ContentCopy css={style.icon} />
        </div>
      </div>
      <div css={[frameDrawerStyle.title, style.title]}>Categorizar blocos</div>
    </>
  );
}

export default CategorizationInfos;
