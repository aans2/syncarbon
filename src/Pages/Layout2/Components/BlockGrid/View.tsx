/** @jsxImportSource @emotion/react */
import { ContentCopy } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import useId from "@mui/material/utils/useId";
import { useEffect, useState } from "react";
import FrameViewBlock from "../../../../Components/FrameViewBlock/View";
import { useLayout2Style } from "../../Style";
import { useLayout2RowStyle } from "../Layout2Row/Style";
import { useBlockGridStyle } from "./Style";

function BlockGrid({
  list,
  gridRef,
  notifyRef,
}: {
  list: string[];
  gridRef?: React.RefObject<HTMLDivElement>;
  notifyRef?: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<string>>
  >;
}) {
  const [searchText, setSearchText] = useState("");
  const [openDetails, setOpenDetails] = useState(false);

  const style = useBlockGridStyle();
  const Layout2Style = useLayout2Style();
  const Layout2RowStyle = useLayout2RowStyle();

  const id = useId();

  useEffect(() => {
    if (notifyRef) {
      notifyRef.current = setSearchText;
    }
  }, [notifyRef]);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const blockActivated = (index: number) =>
    index % 2 === (searchText.length === 0 ? 0 : 1);

  return (
    <div
      ref={gridRef}
      css={Layout2RowStyle.grid}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {list.map((_, index) => (
        <div
          onClick={() => setOpenDetails(true)}
          key={"BlockCard(" + id + ")-" + index.toString()}
          css={[
            style.block,
            blockActivated(index) ? style.deactivated : style.activated,
          ]}
        >
          {/* Adicionar icone pra indicar se está tudo ok ou não */}
          <div css={style.column}>
            <span
              css={[
                style.date,
                blockActivated(index)
                  ? style.dateDeactivated
                  : style.dateActivated,
              ]}
            >
              MES
            </span>
            <span css={style.value}>JANEIRO</span>
          </div>
        </div>
      ))}
      <Dialog
        css={Layout2Style.paper}
        open={openDetails}
        onClose={() => setOpenDetails(false)}
      >
        <FrameViewBlock
          onBack={() => setOpenDetails(false)}
          editArgs={{ Layout2: "...", date: new Date(), value: "..." }}
        />
      </Dialog>
    </div>
  );
}

export default BlockGrid;
