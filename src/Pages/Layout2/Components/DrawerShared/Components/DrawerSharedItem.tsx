/** @jsxImportSource @emotion/react */
import { Switch } from "@mui/material";
import { useState } from "react";
import { useFrameDrawerStyle } from "../../../../../Components/Frame/Components/FrameDrawer/Style";
import TurquesaAvatar from "../../../../../Components/TurquesaAvatar/View";
import { useDrawerSharedStyle } from "../Style";

function DrawerSharedItem() {
  const frameDrawerStyle = useFrameDrawerStyle();
  const drawerSharedStyle = useDrawerSharedStyle();

  const [state, setState] = useState(false);
  return (
    <div css={[drawerSharedStyle.item]}>
      <Switch
        value={state}
        onChange={(_) => setState(!state)}
        css={drawerSharedStyle.switch}
        color="success"
      />
      <TurquesaAvatar size={7} initials="NC" ccss={drawerSharedStyle.avatar} />
      <span css={frameDrawerStyle.name}>Nome do Cliente</span>
      <div
        css={[
          drawerSharedStyle.status,
          state ? drawerSharedStyle.activated : drawerSharedStyle.deactivated,
        ]}
      />
    </div>
  );
}

export default DrawerSharedItem;
