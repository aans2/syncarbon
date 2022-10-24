/** @jsxImportSource @emotion/react */
import { ArrowBack } from "@mui/icons-material";
import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import { useFrameStyle } from "../../Components/Frame/Style";
import Frame from "../../Components/Frame/View";
import TextEntry from "../../Components/TextEntry/View";
import { Layout2DrawerOptions } from "./Components/Layout2Drawer/Model";
import Layout2Drawer from "./Components/Layout2Drawer/View";
import ChangeLayout2Panel from "./Components/ChangeLayout2Panel/View";
import FrameSelect from "../../Components/FrameSelect/View";
import { useDieselStyle } from "./Style";
import SideBar from "./Components/SideBar/View";
import TurquesaAvatar from "../../Components/TurquesaAvatar/View";
import ButtonSquared from "../../Components/ButtonSquared/View";
import { useNavigate } from "react-router-dom";
import ShowMonthsBlocks from "../Diesel/Components/ShowMonthsBlocks/View";
import Tabelas from "../Tabelas/View";

function Diesel() {
  const history = useNavigate();

  const style = useDieselStyle();
  const frameStyle = useFrameStyle();

  const [testeDialog, setTesteDialog] = useState(false);
  const [removeDialog, setRemoveDialog] = useState(false);
  const [showLayout2s, setShowLayout2s] = useState(true);
  const [showMonths, setshowMonths] = useState(true);

  const choosedDrawerRef = useRef<(choice: Layout2DrawerOptions) => void>(
    () => null
  );
  const changeLayout2PanelRef = useRef<() => void>(() => null);

  const chooseDrawer = (choose: Layout2DrawerOptions) =>
    choosedDrawerRef.current(choose);

  const [openDetails, setOpenDetails] = useState(false);

  return (
    <Frame>
      <>
        <div css={frameStyle.panel}>
          <div css={frameStyle.panelHead}>
            <div css={frameStyle.panelHeadRow}>
              <div css={style.panelOptions}>
                <ButtonSquared
                  onClick={() => history(-1)}
                  ccss={style.backButton}
                >
                  <ArrowBack />
                </ButtonSquared>
                {/* <TurquesaAvatar initials="HT" size={7} /> */}
                <Button
                  onClick={() => setTesteDialog(true)}
                  css={style.clientTextButton}
                >
                  <span css={frameStyle.panelHeadTitle}>Diesel</span>
                </Button>
              </div>
            </div>
            <div css={frameStyle.panelSeparator} />
          </div>
          <div css={frameStyle.panelShower}>
            <div css={frameStyle.panelContent}>
              <ShowMonthsBlocks showMonths={showMonths} />
              <button onClick={() => setOpenDetails(true)}>
                Visualizar Planilha
              </button>
            </div>
          </div>
        </div>

        <SideBar
          chooseDrawer={chooseDrawer}
          showLayout2s={showLayout2s}
          changeLayout2PanelRef={changeLayout2PanelRef}
          setRemoveDialog={() => setRemoveDialog(true)}
        />
        <ChangeLayout2Panel
          showLayout2s={showLayout2s}
          setShowLayout2s={setShowLayout2s}
          changeLayout2PanelRef={changeLayout2PanelRef}
        />
        <Layout2Drawer choosedDrawerRef={choosedDrawerRef} />
        <Dialog
          css={style.paper}
          open={openDetails}
          onClose={() => setOpenDetails(false)}
        >
          <Tabelas />
        </Dialog>
      </>
    </Frame>
  );
}

export default Diesel;
