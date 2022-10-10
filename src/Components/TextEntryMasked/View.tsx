/** @jsxImportSource @emotion/react */

import { SerializedStyles } from "@emotion/react";
import { useRef } from "react";
import { useIMask } from "use-imask";
import TextEntry from "../TextEntry/View";

function TextEntryMasked({
  ccss,
  placeholder,
  initialValue,
  patternMask,
}: {
  placeholder: string;
  ccss?: SerializedStyles;
  initialValue?: string;
  patternMask?: string;
}) {
  const maskRef = useRef({ mask: patternMask ?? "" });
  const [inputRef] = useIMask(maskRef.current);

  return (
    <TextEntry
      ccss={ccss}
      placeholder={placeholder}
      initialValue={initialValue}
      inputRef={inputRef}
      hiddenClear
    />
  );
}

export default TextEntryMasked;
