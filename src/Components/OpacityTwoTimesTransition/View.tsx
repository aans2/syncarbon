/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useOpacityTwoTimesTransitionStyle } from "./Style";

function OpacityTwoTimesTransition({
  firstChild,
  secondChild,
  setDisabledSearchRef,
  changeChildRef,
}: {
  firstChild: React.ReactChild;
  secondChild: React.ReactChild;
  setDisabledSearchRef: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<boolean>>
  >;
  changeChildRef: React.MutableRefObject<() => void>;
}) {
  const style = useOpacityTwoTimesTransitionStyle();

  const [removeMode, setRemoveMode] = useState(false);
  const [disableOpacity, setDisableOpacity] = useState(false);
  const [disableInteractions, setDisableInteractions] = useState(false);

  useEffect(() => {
    changeChildRef.current = () => {
      if (!removeMode) {
        setDisabledSearchRef!.current!(!removeMode);
      }
      setDisableOpacity(true);
      setDisableInteractions(true);
      setTimeout(() => {
        if (removeMode) {
          setDisabledSearchRef!.current!(!removeMode);
        }
        setRemoveMode(!removeMode);
        setDisableOpacity(false);
        setTimeout(() => setDisableInteractions(false), style.time);
      }, style.time);
    };
    // eslint-disable-next-line
  }, [changeChildRef, setDisabledSearchRef, removeMode]);

  return (
    <div
      css={[
        style.fade,
        disableOpacity ? style.hide : undefined,
        disableInteractions ? style.noInteractions : undefined,
      ]}
    >
      {removeMode ? firstChild : secondChild}
    </div>
  );
}

export default OpacityTwoTimesTransition;
