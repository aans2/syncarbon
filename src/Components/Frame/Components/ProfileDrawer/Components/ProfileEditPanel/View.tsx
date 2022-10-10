/** @jsxImportSource @emotion/react */
import { CameraAlt } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TurquesaAvatar from "../../../../../TurquesaAvatar/View";
import { useFrameDrawerStyle } from "../../../FrameDrawer/Style";
import ProfileEditButtons from "../ProfileEditButtons/View";
import ProfileTextEntry from "../ProfileTextEntry/View";
import RepositionDialog from "./RepositionDialog/View";
import { useProfileEditPanelStyle } from "./Style";
import { getBase64 } from "./Presenter";
import useEditButtonAnimation from "../../../../../../Hooks/EditButtonAnimation";
import ProfileExpansivePanel from "../ProfileExpansivePanel/View";

function ProfileEditPanel() {
  const style = useProfileEditPanelStyle();
  const frameDrawerStyle = useFrameDrawerStyle();

  const [error, setError] = useState(false);
  const [photo, setPhoto] = useState<string>();
  const [expandedAvatar, setExpandedAvatar] = useState(false);

  const [showAvatarEditButton, setShowAvatarEditButton] = useState(false);

  const openRepositionDialogRef = useRef<() => void>(() => null);
  const setPhotoRef = useRef<React.Dispatch<React.SetStateAction<string>>>(
    () => null
  );
  const resetEditButtonRef = useRef<() => void>(() => null);
  const inputImageRef = useRef<HTMLInputElement>(null);

  const [edit, padding, backgroundColor, setEdit] = useEditButtonAnimation();

  useEffect(() => {
    if (edit) {
      setTimeout(() => {
        setShowAvatarEditButton(true);
      }, style.time);
    } else {
      setShowAvatarEditButton(false);
    }
    // eslint-disable-next-line
  }, [edit]);

  return (
    <>
      <span css={frameDrawerStyle.title}>Conta</span>
      <div css={style.avatarDiv}>
        <IconButton
          //ids importantes para evitar que o ClickAwayLister do ProfileExpansivePanel detecte o avatar
          id="ProfileAvatarEditButton"
          onClick={(e) => inputImageRef.current?.click()}
          css={[
            style.editButton,
            expandedAvatar ? style.editButtonExpanded : undefined,
            showAvatarEditButton ? style.showAvatarEditButton : undefined,
            photo ? style.hiddenAvatarEditButton : undefined,
          ]}
        >
          <CameraAlt id="ProfileAvatarEditIcon" css={style.editIcon} />
        </IconButton>
        <TurquesaAvatar
          id="ProfileAvatar"
          size={expandedAvatar ? 16 : 11}
          src={photo}
          initials={"NC"}
          ccss={style.avatar}
        />
      </div>
      <ProfileExpansivePanel
        profileEditPanel
        title="Perfil"
        height="484px"
        onClosePanel={() => {
          setExpandedAvatar(false);
          if (edit) {
            resetEditButtonRef?.current?.apply([]);
          }
        }}
        onOpenPanel={() => setExpandedAvatar(true)}
      >
        <>
          <ProfileTextEntry
            subtitle="Nome"
            initialValue="Izabella Gaspar"
            editMode={edit}
            error={error}
            backgroundColor={backgroundColor}
            padding={padding}
          />
          <ProfileTextEntry
            subtitle="CPF"
            initialValue="000.000.000-00"
            editMode={edit}
            backgroundColor={backgroundColor}
            padding={padding}
          />
          <ProfileTextEntry
            subtitle="E-mail"
            initialValue="izagaspar@mail.com"
            editMode={edit}
            error={error}
            backgroundColor={backgroundColor}
            padding={padding}
          />
          <ProfileTextEntry
            subtitle="Telefone"
            initialValue="(81) 9 9000-0000"
            editMode={edit}
            error={error}
            backgroundColor={backgroundColor}
            padding={padding}
          />
          <ProfileEditButtons
            setEdit={setEdit}
            onSave={() => setError(!error)}
            resetEditButtonRef={resetEditButtonRef}
          />
          {edit ? (
            <RepositionDialog
              openRepositionDialogRef={openRepositionDialogRef}
              setPhotoRef={setPhotoRef}
              setCurrentPhoto={setPhoto}
            />
          ) : undefined}
          <input
            type="file"
            accept="image/*"
            //garantir que o valor atual sempre será diferente do valor escolhido para chamar a função "onChange"
            value={""}
            onChange={(e) =>
              getBase64(e.target.files![0], (newPhoto) => {
                setPhotoRef.current!(newPhoto);
                openRepositionDialogRef.current!();
              })
            }
            ref={inputImageRef}
            css={style.inputImageHidden}
          />
        </>
      </ProfileExpansivePanel>
    </>
  );
}

export default ProfileEditPanel;
