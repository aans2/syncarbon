/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useProfileDrawerStyle } from "../Components/Frame/Components/ProfileDrawer/Style";

function useEditButtonAnimation() {
  const profileDrawerStyle = useProfileDrawerStyle();

  const [edit, setEdit] = useState(false);
  const [padding, setPadding] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(false);

  useEffect(() => {
    if (edit) {
      setPadding(true);
      setTimeout(() => setBackgroundColor(true), profileDrawerStyle.time);
    } else {
      setBackgroundColor(false);
      setTimeout(() => setPadding(false), profileDrawerStyle.time);
    }
    // eslint-disable-next-line
  }, [edit, backgroundColor, padding]);

  return [edit, padding, backgroundColor, setEdit] as [
    boolean,
    boolean,
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
}

export default useEditButtonAnimation;
