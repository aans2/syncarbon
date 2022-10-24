/** @jsxImportSource @emotion/react */
import { ContentCopy } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import useId from "@mui/material/utils/useId";
import { useEffect, useRef, useState } from "react";
import FrameViewBlock from "../../../../Components/FrameViewBlock/View";
import Tabelas from "../../../Tabelas/View";
import { useDieselStyle } from "../../Style";
import { useLayout2RowStyle } from "../Layout2Row/Style";
import { useBlockGridStyle } from "./Style";
import { setCombustivel, setCombustivelMES } from "./Presenter";
import { ajax } from "rxjs/ajax";

function BlockGrid({
  number,
  list,
  gridRef,
  notifyRef,
}: {
  number?: number;
  list: string[];
  gridRef?: React.RefObject<HTMLDivElement>;
  notifyRef?: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<string>>
  >;
}) {
  const [searchText, setSearchText] = useState("");
  const [openDetails, setOpenDetails] = useState(false);
  const [mes, setMes] = useState(0);

  const style = useBlockGridStyle();
  const Layout2Style = useDieselStyle();
  const Layout2RowStyle = useLayout2RowStyle();

  const id = useId();

  const inputRef = useRef(null as any);

  const handleClick = (valor: any) => {
    setMes(valor + 1);
    // console.log("event", mes);
    inputRef.current.click();
  };

  //rota downloadPlanilha
  //enviar tokenUsuario, Diesel, aberto/fechado
  // recebe arquivo

  //rota visualizarPlanilha
  //enviar tokenUsuario, Diesel, Aberto/fechado
  //recebe json

  //rota, /arquivoConsumo
  //0 é aberto e 1 é fechado
  //TODO Deve enviar arquivo, mes, ano, 0/1
  const sendFileFechado = () => {
    console.log("Teste");
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    // setCombustivel(fileObj, mes);
    // setCombustivelMES(mes);
    ajax({
      url: "http://localhost:8000/api/combustivel/add",
      method: "POST",
      headers: {
        // Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mes: mes }),
    }).toPromise();
  };

  useEffect(() => {
    if (notifyRef) {
      notifyRef.current = setSearchText;
    }
  }, [notifyRef]);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const [user, setUser] = useState([null as any]);
  let item: any = JSON.parse(sessionStorage.getItem("user") as any);

  const blockActivated = (index: number) =>
    index % 2 === (searchText.length === 0 ? 0 : 1);

  const index = 0;
  return (
    <div
      ref={gridRef}
      // css={Layout2RowStyle.grid}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
        {item["setor"] == 0 ? (
          <div>
            <button onClick={() => setOpenDetails(true)}>
              Visualizar Planilha
            </button>
          </div>
        ) : (
          <div css={Layout2RowStyle.grid}>
            <input
              style={{ display: "none" }}
              ref={inputRef}
              type="file"
              name=""
              id=""
              onChange={handleFileChange}
            />
            {/* <button onClick={handleClick}>
              Adicionar Relatorio Entrada Diesel
            </button>
            <button onClick={handleClick}>
              Adicionar Relatorio Entrada Arla
            </button> */}
            {/* <button onClick={handleClick}>
              Adicionar Relatorio Consumo Aberto
            </button> */}
            <button onClick={(event) => handleClick(number)}>
              Adicionar Relatorio Consumo Fechado
            </button>
            {/* <button onClick={handleClick}>
              Adicionar Entrada Estoque Remanescente
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlockGrid;
