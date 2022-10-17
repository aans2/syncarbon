/** @jsxImportSource @emotion/react */
import Frame from "../../Components/Frame/View";
import TextEntry from "../../Components/TextEntry/View";
import { useAllSetorStyle } from "./Style";
import { useFrameStyle } from "../../Components/Frame/Style";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { createList } from "../../App";
import { useNavigate } from "react-router-dom";
import { getAllSetorInfo } from "./Presenter";

function AllSetor() {
  const history = useNavigate();

  const style = useAllSetorStyle();
  const frameStyle = useFrameStyle();

  const [searchText, setSearchTest] = useState("");
  // const [info, setInfo] = useState("" as any);

  const searchRef =
    useRef<React.Dispatch<React.SetStateAction<string>>>(setSearchTest);

  // const list = createList(32);

  let user = JSON.parse(sessionStorage.getItem("user") as any);
  const info = JSON.parse(getAllSetorInfo(user["id"]));
  // useEffect(() => {
  //   let user = JSON.parse(sessionStorage.getItem("user") as any);
  //   setInfo(JSON.parse(getAllSetorInfo(user["id"])));
  // }, []);
  console.log("info", info);
  // const list = createList(info.AllSetor.);

  return (
    <Frame>
      <div css={frameStyle.panel}>
        <div css={frameStyle.panelHead}>
          <div css={frameStyle.panelHeadRow}>
            <span css={frameStyle.panelHeadTitle}>Setores Disponiveis</span>
            {/* <div css={frameStyle.panelHeadItem}>
              <TextEntry
                notifyRef={searchRef}
                placeholder="Buscar Ano"
                ccss={frameStyle.textEntry}
                searchIcon
              />
              <div css={frameStyle.panelHeadSpacer} />
            </div> */}
          </div>
          <div css={frameStyle.panelSeparator} />
        </div>
        <div css={frameStyle.panelShower}>
          <div css={[frameStyle.panelContent, style.grid]}>
            {info.setor.map((item: any, index: any) => (
              <Button
                onClick={() => history("/setor/Diesel/")}
                key={"anoCard-" + index.toString()}
                css={[
                  style.card,
                  index % 2 === (searchText.length === 0 ? 0 : 1)
                    ? style.cardActive
                    : style.cardInactive,
                ]}
              >
                <div css={style.anoName}>{item}</div>
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

export default AllSetor;
