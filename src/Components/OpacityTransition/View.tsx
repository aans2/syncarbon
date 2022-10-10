/** @jsxImportSource @emotion/react */

import { SerializedStyles } from "@emotion/react";
import { useOpacityTransitionStyle } from "./Style";

function OpacityTransition({
  value,
  childFalse,
  childTrue,
}: {
  value: boolean;
  childFalse: (
    ccss: SerializedStyles | (SerializedStyles | undefined)[]
  ) => React.ReactChild;
  childTrue: (
    ccss: SerializedStyles | (SerializedStyles | undefined)[]
  ) => React.ReactChild;
}) {
  const style = useOpacityTransitionStyle();
  return (
    <>
      {childFalse([style.transition, value ? style.hidden : undefined])}
      {childTrue([style.transition, value ? undefined : style.hidden])}
    </>
  );
}

export default OpacityTransition;
