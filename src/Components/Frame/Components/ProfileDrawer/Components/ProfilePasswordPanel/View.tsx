/** @jsxImportSource @emotion/react */
import ButtonMain from "../../../../../ButtonMain/View";
import ProfileExpansivePanel from "../ProfileExpansivePanel/View";
import ProfileTextEntry from "../ProfileTextEntry/View";
import { useProfilePasswordPanelStyle } from "./Style";

function ProfilePasswordPanel() {
  const style = useProfilePasswordPanelStyle();

  return (
    <ProfileExpansivePanel title={"Trocar senha"} height="463px">
      <div>
        <div css={style.description}>
          A nova senha deve conter pelo menos uma letra maiúscula e um caractér
          especial.
        </div>
        <ProfileTextEntry
          subtitle="Senha atual"
          editMode={true}
          backgroundColor={true}
          padding={true}
          password
        />
        <ProfileTextEntry
          subtitle="Nova senha"
          editMode={true}
          backgroundColor={true}
          padding={true}
          password
        />
        <ProfileTextEntry
          subtitle="Confirmar nova senha"
          editMode={true}
          backgroundColor={true}
          padding={true}
          password
        />
        <ButtonMain ccss={style.marginTop}>Alterar senha</ButtonMain>
      </div>
    </ProfileExpansivePanel>
  );
}

export default ProfilePasswordPanel;
