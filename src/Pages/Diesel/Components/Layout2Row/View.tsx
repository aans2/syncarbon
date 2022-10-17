/** @jsxImportSource @emotion/react */
import { ContentCopy } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { createList } from "../../../../App";
import TextEntry from "../../../../Components/TextEntry/View";
import useContentExpansion from "../../../../Hooks/ContentExpansion";
import ShowLayout2sBlocks from "../BlockGrid/View";
import { useLayout2RowStyle } from "./Style";

function Layout2Row({
  name,
  photosNumber,
  Layout2NotifyRef,
}: {
  name: string;
  photosNumber: number;
  Layout2NotifyRef?: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<string>>
  >;
}) {
  const style = useLayout2RowStyle();
  const [Layout2Search, setLayout2Search] = useState("");
  const [showGrid, expanded, setExpanded] = useContentExpansion();
  const [gridHeight, setGridHeight] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const notifyRef = useRef<React.Dispatch<React.SetStateAction<string>>>(
    () => null
  );
  const list = createList(32);

  useEffect(() => {
    if (Layout2NotifyRef && Layout2NotifyRef.current) {
      Layout2NotifyRef.current = setLayout2Search;
    }
  }, [Layout2NotifyRef]);

  useEffect(() => {
    console.log(Layout2Search);
  }, [Layout2Search]);

  useEffect(() => {
    // O valor da altura do grid é necessário para o efeito de animação.
    // Alturas automáticas não suportam animações.
    const event = () => setGridHeight(gridRef.current?.clientHeight ?? 0);
    event();
    window.addEventListener("resize", event);
    return () => window.removeEventListener("resize", event);
  }, []);

  useEffect(() => {
    if (showGrid) {
      // atualiza a altura do grid sempre que ele é aberto.
      setGridHeight(gridRef.current?.clientHeight ?? 0);
    }
  }, [showGrid]);

  return (
    <ClickAwayListener
      onClickAway={() => (expanded ? setExpanded(false) : null)}
    >
      <div
        css={[style.Layout2Row, showGrid ? undefined : style.notExpanded]}
        onClick={() => setExpanded(!expanded)}
      >
        <div
          css={[
            style.head,
            expanded ? style.headExpanded : style.headNotExpanded,
          ]}
        >
          <div css={style.display}>
            <span css={style.name}>{name}</span>
          </div>
          <div css={style.display}>
            <span css={style.photosNumber}>{photosNumber}</span>
            <ContentCopy
              css={[style.icon, expanded ? style.iconExpanded : undefined]}
            />
            <div
              onClick={(e) => e.stopPropagation()}
              css={[
                style.textEntryDisplay,
                expanded
                  ? style.textEntryDisplayExpanded
                  : style.textEntryDisplayNotExpanded,
              ]}
            >
              {showGrid ? (
                <TextEntry
                  ccss={style.textEntry}
                  placeholder="Buscar valor"
                  notifyRef={notifyRef}
                  searchIcon
                />
              ) : undefined}
            </div>
          </div>
        </div>
        <div
          css={[
            style.content,
            expanded
              ? style.contentExpanded(gridHeight)
              : style.contentNotExpanded,
          ]}
        >
          <div css={style.separator} />
          {showGrid ? (
            list.length > 0 ? (
              <ShowLayout2sBlocks
                list={list}
                gridRef={gridRef}
                notifyRef={notifyRef}
              />
            ) : (
              <div ref={gridRef} css={style.noItemMessage}>
                Sem blocos nesta conta
              </div>
            )
          ) : undefined}
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default Layout2Row;
