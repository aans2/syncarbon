/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { TextEntryWithErrorState } from "./Model";

function useTextEntryWithError(
  stateRef: React.MutableRefObject<TextEntryWithErrorState>
) {
  const [error, setError] = useState(false);

  const textRef = useRef<string>("");
  const errorRef = useRef<boolean>(false);
  const setTextRef = useRef<React.Dispatch<React.SetStateAction<string>>>(
    () => {}
  );

  useEffect(() => {
    stateRef.current = {
      state: { text: textRef, error: errorRef },
      setState: ({ text, error }) => {
        if (error !== undefined) {
          setError(error);
        }
        if (text) {
          setTextRef.current(text);
        }
      },
    };
  }, [stateRef]);

  useEffect(() => {
    errorRef.current = error;
  }, [error]);

  return [error, textRef, setTextRef] as [
    boolean,
    React.MutableRefObject<string>,
    React.MutableRefObject<React.Dispatch<React.SetStateAction<string>>>
  ];
}

export default useTextEntryWithError;
