/** @jsxImportSource @emotion/react */

import { Logout } from "@mui/icons-material";
import { useAuthActions } from "use-eazy-auth";
import ButtonSquared from "../../../../../ButtonSquared/View";

function LogoutButton() {
  const { logout } = useAuthActions();

  return (
    <ButtonSquared onClick={logout}>
      <Logout />
    </ButtonSquared>
  );
}

export default LogoutButton;
