/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import FrameDrawer from "../FrameDrawer/View";
import ProfileEditPanel from "./Components/ProfileEditPanel/View";
import ProfileOfficeDialog from "./Components/ProfileOfficeDialog/View";
import ProfilePasswordPanel from "./Components/ProfilePasswordPanel/View";
import { useProfileDrawerStyle } from "./Style";

function ProfileDrawer({
  profileRef,
}: {
  profileRef: React.MutableRefObject<() => void>;
}) {
  const style = useProfileDrawerStyle();

  const [expanded, setExpanded] = useState(false);

  const profileDialogRef = useRef<() => void>(() => null);

  useEffect(() => {
    profileRef.current = () => setExpanded(true);
  }, [profileRef]);

  return (
    <>
      <FrameDrawer
        drawerOpened={expanded}
        onClose={() => setExpanded(false)}
        scrollContent
      >
        <div css={style.wrapper}>
          <ProfileEditPanel />
          <ProfilePasswordPanel />
        </div>
      </FrameDrawer>
      <ProfileOfficeDialog profileDialogRef={profileDialogRef} />
    </>
  );
}

export default ProfileDrawer;
