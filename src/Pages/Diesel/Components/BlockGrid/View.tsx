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
  const Layout2Style = useDieselStyle();
  const Layout2RowStyle = useLayout2RowStyle();

  const id = useId();

  const inputRef = useRef(null as any);

  const handleClick = () => {
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
    console.log("Teste",);
    
  }

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    event.target.value = null;

    console.log(event.target.files);

    console.log(fileObj);
    console.log(fileObj.name);

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
            <button onClick={handleClick}>
              Adicionar Relatorio Entrada Diesel
            </button>
            <button onClick={handleClick}>
              Adicionar Relatorio Entrada Arla
            </button>
            <button onClick={handleClick}>
              Adicionar Relatorio Consumo Aberto
            </button>
            <button onClick={handleClick}>
              Adicionar Relatorio Consumo Fechado
            </button>
            <button onClick={handleClick}>
              Adicionar Entrada Estoque Remanescente
            </button>
            <button onClick={() => setOpenDetails(true)}>
              Visualizar Planilha
            </button>
          </div>
        )}
      </div>
      <Dialog
        css={Layout2Style.paper}
        open={openDetails}
        onClose={() => setOpenDetails(false)}
      >
        <Tabelas />
      </Dialog>
    </div>
  );
}

export default BlockGrid;
