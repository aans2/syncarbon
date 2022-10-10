/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { useRef, useState, useEffect } from "react";
import { useDisplayListStyle } from "./Style";

function DisplayList({
  itens,
  heightOfFixContent,
  paddingHeight,
  resize = false,
  ccss,
}: {
  itens: any[];
  heightOfFixContent: string;
  paddingHeight: number;
  ccss?: SerializedStyles;
  resize?: boolean;
}) {
  const style = useDisplayListStyle(heightOfFixContent, paddingHeight);

  const [isTopDisplay, setIsTopDisplay] = useState(true);
  const [isBottomDisplay, setIsBottomDisplay] = useState(false);
  const [lastSize, setLastSize] = useState(heightOfFixContent);

  const displayRef = useRef<HTMLDivElement>(null);

  const event = () => {
    setIsTopDisplay(displayRef.current!.scrollTop === 0);
    setIsBottomDisplay(
      displayRef.current!.scrollTop ===
        displayRef.current!.scrollHeight - displayRef.current!.clientHeight
    );
  };

  useEffect(() => {
    if (resize) {
      if (heightOfFixContent !== lastSize) {
        setLastSize(heightOfFixContent);
        if (isBottomDisplay) {
          setIsBottomDisplay(false);
        } else {
          setTimeout(event, style.time);
        }
      }
    }
    // eslint-disable-next-line
  }, [heightOfFixContent, lastSize, isBottomDisplay]);

  useEffect(() => {
    event();
    displayRef.current!.addEventListener("scroll", event);
  }, [displayRef]);

  return (
    <div
      ref={displayRef}
      css={[style.display(isTopDisplay, isBottomDisplay), ccss]}
    >
      {itens.length > 0 ? (
        <>
          <div css={style.fadeSpacer} />
          {itens}
          <div css={style.fadeSpacerBottom} />
        </>
      ) : (
        <div css={style.noItemMessage}>Sem itens nesta lista</div>
      )}
    </div>
  );
}

export default DisplayList;
