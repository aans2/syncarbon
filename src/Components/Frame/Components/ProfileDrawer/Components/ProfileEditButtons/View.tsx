/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import OpacityTransition from "../../../../../OpacityTransition/View";
import { useProfileEditButtonsStyle } from "./Style";

function ProfileEditButtons({
  setEdit,
  onSave,
  resetEditButtonRef,
}: {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: () => void;
  resetEditButtonRef?: React.MutableRefObject<() => void>;
}) {
  const style = useProfileEditButtonsStyle();

  const [showSecondButton, setShowSecondButton] = useState(false);
  const [inEditMode, setInEditMode] = useState(false);

  const [animationTransition, setAnimationTransition] = useState(false);

  const cancelCallback = useCallback<() => void>(() => {
    setAnimationTransition(true);
    setEdit(false);
    setShowSecondButton(false);
    setTimeout(() => {
      setInEditMode(false);
      setTimeout(() => setAnimationTransition(false), style.time);
    }, style.time);
    // eslint-disable-next-line
  }, [setEdit]);

  useEffect(() => {
    if (resetEditButtonRef) {
      resetEditButtonRef!.current = cancelCallback;
    }
  }, [resetEditButtonRef, cancelCallback]);

  return (
    <div css={[style.row, animationTransition ? style.noEvents : undefined]}>
      <Button
        css={[
          style.mainButton,
          animationTransition ? style.animationTransition : undefined,
          inEditMode ? style.editButton : style.saveButton,
        ]}
        onClick={
          !inEditMode
            ? () => {
                setAnimationTransition(true);
                setInEditMode(true);
                setEdit(true);
                setTimeout(() => {
                  setShowSecondButton(true);
                  setTimeout(() => setAnimationTransition(false), style.time);
                }, style.time);
              }
            : onSave
        }
      >
        <OpacityTransition
          value={inEditMode}
          childFalse={(ccss) => <span css={ccss}>Editar</span>}
          childTrue={(ccss) => <span css={ccss}>Salver</span>}
        />
      </Button>
      <Button
        css={[
          style.opacityTransition,
          style.cancelButton,
          inEditMode ? undefined : style.noButton,
          showSecondButton ? undefined : style.hidden,
        ]}
        onClick={cancelCallback}
      >
        Cancelar
      </Button>
    </div>
  );
}

export default ProfileEditButtons;
