/** @jsxImportSource @emotion/react */
import ViewBlockPanel from "./Components/ViewBlockPanel/View";
import { CategorizationArgs, EditArgs, PendencyArgs } from "./Model";
import { useFrameViewBlockStyle } from "./Style";

function FrameViewBlock({
  onBack,
  pendencyArgs,
  editArgs,
  categorizationArgs,
}: {
  onBack: () => void;
  pendencyArgs?: PendencyArgs;
  editArgs?: EditArgs;
  categorizationArgs?: CategorizationArgs;
}) {
  const style = useFrameViewBlockStyle(
    pendencyArgs !== undefined || editArgs !== undefined
  );

  return (
    <div css={style.screen}>
      <ViewBlockPanel
        onBack={onBack}
        pendencyArgs={pendencyArgs}
        editArgs={editArgs}
        categorizationArgs={categorizationArgs}
      />
    </div>
  );
}

export default FrameViewBlock;
