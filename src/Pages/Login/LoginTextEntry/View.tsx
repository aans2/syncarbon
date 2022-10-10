/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import TextEntry from "../../../Components/TextEntry/View";
import { TextEntryWithErrorState } from "../../../Hooks/TextEntryWithError/Model";
import useTextEntryWithError from "../../../Hooks/TextEntryWithError/View";

function LoginTextEntry({
  placeholder,
  stateRef,
  password,
  onChangeInputs,
  ccss,
  startIcon,
}: {
  placeholder: string;
  stateRef: React.MutableRefObject<TextEntryWithErrorState>;
  password?: boolean;
  onChangeInputs?: () => void;
  ccss?: SerializedStyles | (SerializedStyles | undefined)[];
  startIcon?: React.ReactChild;
}) {
  const [error, textRef, setTextRef] = useTextEntryWithError(stateRef);

  return (
    <TextEntry
      white
      error={error}
      textRef={textRef}
      setTextRef={setTextRef}
      ccss={ccss}
      onChange={() => {
        onChangeInputs?.apply([]);
        stateRef.current.setState({ error: false });
      }}
      startIcon={startIcon}
      placeholder={placeholder}
      password={password}
    />
  );
}

export default LoginTextEntry;
