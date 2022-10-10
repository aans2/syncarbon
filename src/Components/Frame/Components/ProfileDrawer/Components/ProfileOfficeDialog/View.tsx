/** @jsxImportSource @emotion/react */
import { Close } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import useEditButtonAnimation from "../../../../../../Hooks/EditButtonAnimation";
import ButtonSquared from "../../../../../ButtonSquared/View";
import TurquesaAvatar from "../../../../../TurquesaAvatar/View";
import { useFrameStyle } from "../../../../Style";
import ProfileEditButtons from "../ProfileEditButtons/View";
import ProfileTextEntry from "../ProfileTextEntry/View";
import { useProfileOfficeDialogStyle } from "./Style";

function ProfileOfficeDialog({
  profileDialogRef,
}: {
  profileDialogRef: React.MutableRefObject<() => void>;
}) {
  const style = useProfileOfficeDialogStyle();
  const frameStyle = useFrameStyle();

  const [edit, padding, backgroundColor, setEdit] = useEditButtonAnimation();
  const [showDialog, setShowDialog] = useState(false);

  const onClose = () => setShowDialog(false);

  useEffect(() => {
    profileDialogRef.current = () =>
      setTimeout(() => setShowDialog(true), style.time);
    // eslint-disable-next-line
  }, [profileDialogRef]);

  return (
    <Dialog open={showDialog} onClose={onClose} css={frameStyle.dialog}>
      <>
        <div css={style.dialogHead}>
          <ButtonSquared onClick={onClose}>
            <Close />
          </ButtonSquared>
          <ProfileEditButtons setEdit={setEdit} onSave={() => null} />
        </div>
        <div css={[frameStyle.panelSeparator, style.separator]} />
        <div css={style.dialogContent}>
          <TurquesaAvatar initials="TC" size={16} />
          <div css={style.formColumn}>
            <ProfileTextEntry
              subtitle="Nome"
              initialValue="A$B Contabilidade"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
            <ProfileTextEntry
              subtitle="E-mail"
              initialValue="izagaspar@mail.com"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
            <ProfileTextEntry
              subtitle="CEP"
              initialValue="50000-000"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
            <ProfileTextEntry
              subtitle="Número"
              initialValue="000"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
            <ProfileTextEntry
              subtitle="Cidade"
              initialValue="Recife"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
          </div>
          <div css={style.formColumn}>
            <ProfileTextEntry
              subtitle="CNPJ"
              initialValue="00.000.000/0000-0"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
            <ProfileTextEntry
              subtitle="Telefone"
              initialValue="(81) 9 9000.0000"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
            <ProfileTextEntry
              subtitle="Rua"
              initialValue="Rua Fulano de Tal"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
            <ProfileTextEntry
              subtitle="Bairro"
              initialValue="Engenho do Meio"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
            <ProfileTextEntry
              subtitle="Estado"
              initialValue="Pernambuco"
              editMode={edit}
              error={false}
              backgroundColor={backgroundColor}
              padding={padding}
            />
          </div>
        </div>
      </>
    </Dialog>
  );
}

export default ProfileOfficeDialog;
