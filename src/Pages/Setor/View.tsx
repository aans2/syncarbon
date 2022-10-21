/** @jsxImportSource @emotion/react */
import Frame from "../../Components/Frame/View";
import TextEntry from "../../Components/TextEntry/View";
import { useSetorStyle } from "./Style";
import { useFrameStyle } from "../../Components/Frame/Style";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { createList } from "../../App";
import { useNavigate } from "react-router-dom";
// import { getSetorInfo } from "./Presenter";
import { SetorModel } from "../../Global/Models/Setor/SetorModel";
import { getSetor } from "./Presenter";


function Setor() {
  
  const [setor, setSetores] = useState<SetorModel>(undefined as any);

  useEffect(() => {
    getSetor().then((data) => setSetores(data));
    
  }, []);

  const history = useNavigate();

  const style = useSetorStyle();
  const frameStyle = useFrameStyle();

  const [searchText, setSearchTest] = useState("");

  // const searchRef =
  //   useRef<React.Dispatch<React.SetStateAction<string>>>(setSearchTest);

  // let user = JSON.parse(sessionStorage.getItem("user") as any);
  // const info = JSON.parse(getSetorInfo(user["id"]));

  return (
    <Frame>
      <div css={frameStyle.panel}>
        <div css={frameStyle.panelHead}>
          <div css={frameStyle.panelHeadRow}>
            {/* <span css={frameStyle.panelHeadTitle}>{info.nome}</span> */}
          </div>
          <div css={frameStyle.panelSeparator} />
        </div>
        <div css={frameStyle.panelShower}>
          <div css={[frameStyle.panelContent, style.grid]}>
            {setor == undefined ? (
              <div>Não Existe setor Cadastrado</div>
            ) : (setor.name.map((item: any, index: any) => (
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
            )) )}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export default Setor;
