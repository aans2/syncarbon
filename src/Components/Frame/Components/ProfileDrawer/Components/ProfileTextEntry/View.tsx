/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import TextEntry from "../../../../../TextEntry/View";
import { useProfileTextEntryStyle } from "./Style";

/// Imitar técnica do LoginTextEntry com o useTextEntryWithError
function ProfileTextEntry({
  subtitle,
  initialValue,
  password,
  editMode,
  padding,
  backgroundColor,
  error,
}: {
  subtitle: string;
  initialValue?: string;
  password?: boolean;
  editMode: boolean;
  padding?: boolean;
  backgroundColor?: boolean;
  error?: boolean;
}) {
  const style = useProfileTextEntryStyle();
  const setDisabledRef = useRef<React.Dispatch<React.SetStateAction<boolean>>>(
    () => null
  );

  useEffect(() => {
    setDisabledRef.current(!editMode);
  }, [editMode]);

  return (
    <>
      <div css={[style.subtitle, error ? style.subtitleError : undefined]}>
        {subtitle}
      </div>
      <TextEntry
        ccss={[
          style.textEntry,
          padding ? style.editPadding : undefined,
          backgroundColor ? style.editBackground : undefined,
        ]}
        initialValue={initialValue}
        setDisableRef={setDisabledRef}
        placeholder={"Digite aqui"}
        password={password}
        profileTextEntry
      />
    </>
  );
}

export default ProfileTextEntry;
