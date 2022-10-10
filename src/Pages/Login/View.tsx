/** @jsxImportSource @emotion/react */
import {
  AccountCircleOutlined,
  AlternateEmailOutlined,
  ArrowBack,
  PasswordOutlined,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useAuthActions, useAuthState } from "use-eazy-auth";
import ButtonMain from "../../Components/ButtonMain/View";
import ButtonSquared from "../../Components/ButtonSquared/View";
import {
  initTextEntryWithErrorState,
  TextEntryWithErrorState,
} from "../../Hooks/TextEntryWithError/Model";
import { Validations } from "../../Hooks/TextEntryWithError/Presenter";
import LoginTextEntry from "./LoginTextEntry/View";
import { loginPresenter } from "./Presenter";

import { useLoginStyle } from "./Style";

function Login() {
  const style = useLoginStyle();

  const { login } = useAuthActions();
  const { loginError } = useAuthState();

  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [recovery, setRecovery] = useState(false);

  const usernameRef = useRef<TextEntryWithErrorState>(
    initTextEntryWithErrorState
  );
  const passwordRef = useRef<TextEntryWithErrorState>(
    initTextEntryWithErrorState
  );
  const emailRef = useRef<TextEntryWithErrorState>(initTextEntryWithErrorState);

  useEffect(() => {
    if (loginError) {
      if (loginError.status < 500) {
        setError(Validations.loginError);
      } else {
        setError("Erro de conexão");
      }
      usernameRef.current.setState({ error: true });
      passwordRef.current.setState({ error: true });
      setShowError(true);
    }
  }, [loginError]);

  const _login = () =>
    loginPresenter(usernameRef, passwordRef, login, setError, setShowError);

  const onChangeInputs = () => {
    setShowError(false);
    setDisabled(
      usernameRef.current.state.text?.current === "" ||
        passwordRef.current.state.text?.current === ""
    );
  };

  return (
    <div css={style.wrapper}>
      <div css={style.panel}>
        <div css={[style.panelWrapper, recovery ? style.translate : undefined]}>
          <div css={[style.panelHead, style.logoMargin]}>
            <ButtonSquared ccss={style.backButton}>
              <ArrowBack />
            </ButtonSquared>
            <img css={style.logo} alt="logomarca" />
            <div css={style.placeholder} />
          </div>
          <LoginTextEntry
            placeholder="Usuário"
            stateRef={usernameRef}
            ccss={style.bottomMargin}
            onChangeInputs={onChangeInputs}
            startIcon={
              <AccountCircleOutlined css={style.icon} fontSize="small" />
            }
          />
          <LoginTextEntry
            placeholder="Senha"
            stateRef={passwordRef}
            ccss={style.bottomMargin}
            onChangeInputs={onChangeInputs}
            startIcon={<PasswordOutlined css={style.icon} fontSize="small" />}
            password
          />
          <div
            css={[style.errorDisplay, showError ? style.showError : undefined]}
          >
            {error}
          </div>
          <div css={style.buttonRow}>
            <ButtonMain
              onClick={() => setRecovery(!recovery)}
              ccss={style.whiteButton}
            >
              Recuperar senha
            </ButtonMain>
            <ButtonMain
              disabled={disabled}
              onClick={_login}
              ccss={style.disabled}
            >
              Entrar
            </ButtonMain>
          </div>
        </div>
        <div
          css={[
            style.panelWrapper,
            style.leftMargin,
            recovery ? style.translate : undefined,
          ]}
        >
          <div css={style.panelHead}>
            <ButtonSquared
              onClick={() => setRecovery(!recovery)}
              ccss={style.backButton}
            >
              <ArrowBack />
            </ButtonSquared>
            <PasswordOutlined css={style.icon} fontSize="small" />
          </div>
          <div css={style.forgetTitle}>Esqueceu a senha?</div>
          <div css={style.forgetDescription}>
            Digite seu e-mail de registro no SynCarbon e te enviaremos uma senha
            de acesso rápido. Depois de acessar, aproveite para escolher uma
            nova senha para manter sua conta ainda mais segura!
          </div>
          <LoginTextEntry
            placeholder="Seu e-mail"
            stateRef={emailRef}
            startIcon={
              <AlternateEmailOutlined css={style.icon} fontSize="small" />
            }
          />
          <ButtonMain
            ccss={style.forgetRecoveryButton}
            onClick={() => setRecovery(!recovery)}
          >
            Recuperar senha
          </ButtonMain>
        </div>
      </div>
      <div css={style.allRights}>
        @ 2022, SynCarbon Tecnologia. Todos os direitos reservados.
      </div>
    </div>
  );
}

export default Login;
