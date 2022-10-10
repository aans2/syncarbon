/** @jsxImportSource @emotion/react */
import { Close } from "@mui/icons-material";
import { Button, Dialog, Slider } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import ButtonSquared from "../../../../../../ButtonSquared/View";
import { useFrameStyle } from "../../../../../Style";
import { useFrameDrawerStyle } from "../../../../FrameDrawer/Style";
import { useRepositionDialogStyle } from "./Style";

function RepositionDialog({
  openRepositionDialogRef,
  setPhotoRef,
  setCurrentPhoto,
}: {
  openRepositionDialogRef: React.MutableRefObject<() => void>;
  setPhotoRef: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<string>>
  >;
  setCurrentPhoto: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const style = useRepositionDialogStyle();
  const frameStyle = useFrameStyle();
  const frameDrawerStyle = useFrameDrawerStyle();

  const [open, setOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [photo, setPhoto] = useState("");

  const resizeRef = useRef<AvatarEditor>(null);

  useEffect(() => {
    openRepositionDialogRef.current = () => setOpen(true);
    setPhotoRef.current = setPhoto;
  }, [openRepositionDialogRef, setPhotoRef]);

  const onClose = () => setOpen(false);

  return (
    <Dialog css={frameStyle.dialog} open={open} onClose={onClose}>
      <>
        <div css={style.dialogHead}>
          <ButtonSquared onClick={onClose}>
            <Close />
          </ButtonSquared>
          <div css={style.repositionText}>
            Reposicione a imagem
            <br />
            utilizando o mouse
          </div>
        </div>
        <div css={frameStyle.panelSeparator} />
        <AvatarEditor
          ref={resizeRef}
          css={style.repositionBorder}
          border={16}
          borderRadius={128}
          width={224}
          height={224}
          scale={scale}
          image={photo}
        />
        <span css={frameDrawerStyle.subtitle}>Zoom</span>
        <Slider
          min={1}
          max={5}
          step={0.0001}
          onChange={(_, value) => setScale(value as number)}
          css={style.slide}
        />
        <Button
          onClick={() => {
            setCurrentPhoto(resizeRef.current!.getImage().toDataURL());
            onClose();
          }}
          css={style.saveButton}
        >
          Salvar
        </Button>
      </>
    </Dialog>
  );
}

export default RepositionDialog;
