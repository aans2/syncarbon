/** @jsxImportSource @emotion/react */

import { SerializedStyles } from "@emotion/react";
import { Avatar } from "@mui/material";
import { useTurquesaAvatarStyle } from "./Style";

function TurquesaAvatar({
  size,
  initials,
  src,
  ccss,
  id,
}: {
  size: number;
  initials: string;
  src?: string;
  ccss?: SerializedStyles | (SerializedStyles | undefined)[];
  id?: string;
}) {
  const style = useTurquesaAvatarStyle(size);

  return (
    <Avatar id={id} src={src} css={[style.avatar, ccss]}>
      {initials}
    </Avatar>
  );
}

export default TurquesaAvatar;
