/** @jsxImportSource @emotion/react */
import Frame from "../../Components/Frame/View";
import TextEntry from "../../Components/TextEntry/View";
import { useLayout1Style } from "./Style";
import { useFrameStyle } from "../../Components/Frame/Style";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { createList } from "../../App";
import { useNavigate } from "react-router-dom";

function Layout1() {
  const history = useNavigate();

  const style = useLayout1Style();
  const frameStyle = useFrameStyle();

  const [searchText, setSearchTest] = useState("");

  const searchRef =
    useRef<React.Dispatch<React.SetStateAction<string>>>(setSearchTest);

  const list = createList(32);

  return (
    <Frame>
      <div css={frameStyle.panel}>
        <div css={frameStyle.panelHead}>
          <div css={frameStyle.panelHeadRow}>
            <span css={frameStyle.panelHeadTitle}>Anos</span>
            <div css={frameStyle.panelHeadItem}>
              <TextEntry
                notifyRef={searchRef}
                placeholder="Buscar Ano"
                ccss={frameStyle.textEntry}
                searchIcon
              />
              <div css={frameStyle.panelHeadSpacer} />
            </div>
          </div>
          <div css={frameStyle.panelSeparator} />
        </div>
        <div css={frameStyle.panelShower}>
          <div css={[frameStyle.panelContent, style.grid]}>
            {list.map((_, index) => (
              <Button
                onClick={() => history("Layout1/rota")}
                key={"anoCard-" + index.toString()}
                css={[
                  style.card,
                  index % 2 === (searchText.length === 0 ? 0 : 1)
                    ? style.cardActive
                    : style.cardInactive,
                ]}
              >
                <div css={style.anoName}>2021</div>
                <div css={style.cardDate}>
                  Modificado em <span css={style.cardDateBold}>04/10/2022</span>{" "}
                  às <span css={style.cardDateBold}>09:42</span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export default Layout1;
