/** @jsxImportSource @emotion/react */
import { ContentCopy } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { createList } from "../../../../App";
import TextEntry from "../../../../Components/TextEntry/View";
import useContentExpansion from "../../../../Hooks/ContentExpansion";
import ShowAccountingsBlocks from "../BlockGrid/View";
import { useAccountingRowStyle } from "./Style";

function AccountingRow({
  number,
  name,
  // photosNumber,
  accountingNotifyRef,
}: {
  number: string;
  name: string;
  // photosNumber: number;
  accountingNotifyRef?: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<string>>
  >;
}) {
  const style = useAccountingRowStyle();
  const [accountingSearch, setAccountingSearch] = useState("");
  const [showGrid, expanded, setExpanded] = useContentExpansion();
  const [gridHeight, setGridHeight] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const notifyRef = useRef<React.Dispatch<React.SetStateAction<string>>>(
    () => null
  );
  const list = createList(32);

  useEffect(() => {
    if (accountingNotifyRef && accountingNotifyRef.current) {
      accountingNotifyRef.current = setAccountingSearch;
    }
  }, [accountingNotifyRef]);

  useEffect(() => {
    console.log(accountingSearch);
  }, [accountingSearch]);

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
        css={[style.accountingRow, showGrid ? undefined : style.notExpanded]}
        onClick={() => setExpanded(!expanded)}
      >
        <div
          css={[
            style.head,
            expanded ? style.headExpanded : style.headNotExpanded,
          ]}
        >
          <div css={style.display}>
            {/* <span css={style.number}>{number}</span> */}
            <span css={style.name}>{name}</span>
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
              <ShowAccountingsBlocks
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

export default AccountingRow;
