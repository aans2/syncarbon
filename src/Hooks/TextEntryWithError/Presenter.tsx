import { TextEntryWithErrorState } from "./Model";

export class Validations {
  static passwordError = "A senha deve ter no mínimo 6 caracteres";
  static loginError = "Usuário ou senha incorretos";
  static emailError = "Este e-mail não é válido";
}

export const emailValidation = (
  state: React.MutableRefObject<TextEntryWithErrorState>
) => {
  let regexp = new RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const validEmail = regexp.test(state.current.state.text!.current);
  if (!validEmail) {
    state.current.setState({ error: true });
    return Validations.emailError;
  }
  return undefined;
};

export const passwordValidation = (
  state: React.MutableRefObject<TextEntryWithErrorState>
) => {
  if ((state.current.state.text!.current.length ?? 0) < 6) {
    state.current.setState({ error: true });
    return Validations.passwordError;
  }
  return undefined;
};
