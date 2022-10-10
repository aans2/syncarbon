import { TextEntryWithErrorState } from "../../Hooks/TextEntryWithError/Model";
import { passwordValidation } from "../../Hooks/TextEntryWithError/Presenter";

export function loginPresenter(
  usernameRef: React.MutableRefObject<TextEntryWithErrorState>,
  passwordRef: React.MutableRefObject<TextEntryWithErrorState>,
  login: (loginCredentials: any) => void,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setShowError: React.Dispatch<React.SetStateAction<boolean>>
) {
  var error = passwordValidation(passwordRef);
  if (error) {
    setError(error);
    setShowError(true);
  } else {
    login({
      username: usernameRef.current.state.text!.current,
      password: passwordRef.current.state.text!.current,
    });
  }
}
