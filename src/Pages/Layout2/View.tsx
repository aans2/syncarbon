/** @jsxImportSource @emotion/react */
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import { useFrameStyle } from "../../Components/Frame/Style";
import Frame from "../../Components/Frame/View";
import TextEntry from "../../Components/TextEntry/View";
import { Layout2DrawerOptions } from "./Components/Layout2Drawer/Model";
import Layout2Drawer from "./Components/Layout2Drawer/View";
import ChangeLayout2Panel from "./Components/ChangeLayout2Panel/View";
import FrameSelect from "../../Components/FrameSelect/View";
import { useLayout2Style } from "./Style";
import SideBar from "./Components/SideBar/View";
import TurquesaAvatar from "../../Components/TurquesaAvatar/View";
import ButtonSquared from "../../Components/ButtonSquared/View";
import { useNavigate } from "react-router-dom";

function Layout2() {
  const history = useNavigate();

  const style = useLayout2Style();
  const frameStyle = useFrameStyle();

  const [testeDialog, setTesteDialog] = useState(false);
  const [removeDialog, setRemoveDialog] = useState(false);
  const [showLayout2s, setShowLayout2s] = useState(true);

  const choosedDrawerRef = useRef<(choice: Layout2DrawerOptions) => void>(
    () => null
  );
  const changeLayout2PanelRef = useRef<() => void>(() => null);

  const chooseDrawer = (choose: Layout2DrawerOptions) =>
    choosedDrawerRef.current(choose);

  return (
    <Frame>
      <>
        <div css={frameStyle.panel}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div css={frameStyle.panelHead}>
              <div css={frameStyle.panelHeadRow}>
                <div css={style.panelOptions}>
                  <ButtonSquared
                    onClick={() => history(-1)}
                    ccss={style.backButton}
                  >
                    <ArrowBack />
                  </ButtonSquared>
                  <TurquesaAvatar initials="HT" size={7} />
                  <Button
                    onClick={() => setTesteDialog(true)}
                    css={style.clientTextButton}
                  >
                    <span css={frameStyle.panelHeadTitle}>SynCarbon</span>
                  </Button>
                </div>
                <div css={style.panelOptions}>
                  <FrameSelect
                    ccss={style.selectMonth}
                    initialValue={"Julho"}
                    heightOfFixContent={112}
                    options={[
                      "Dezembro",
                      "Novembro",
                      "Outubro",
                      "Setembro",
                      "Agosto",
                      "Julho",
                      "Junho",
                      "Maio",
                      "Abril",
                      "Março",
                      "Fevereiro",
                      "Janeiro",
                    ]}
                  />
                  <div css={frameStyle.panelHeadSpacer} />
                  <FrameSelect
                    ccss={style.selectYear}
                    initialValue={"2022"}
                    heightOfFixContent={112}
                    options={["2022", "2021", "2020"]}
                  />
                  <div css={frameStyle.panelHeadSpacer} />
                  <TextEntry
                    placeholder={showLayout2s ? "Buscar Ano" : "Buscar Mês"}
                    ccss={frameStyle.textEntry}
                    searchIcon
                  />
                </div>
              </div>
              <div css={frameStyle.panelSeparator} />
            </div>
            <SideBar
              chooseDrawer={chooseDrawer}
              showLayout2s={showLayout2s}
              changeLayout2PanelRef={changeLayout2PanelRef}
              setRemoveDialog={() => setRemoveDialog(true)}
            />
          </div>
        </div>
        <ChangeLayout2Panel
          showLayout2s={showLayout2s}
          setShowLayout2s={setShowLayout2s}
          changeLayout2PanelRef={changeLayout2PanelRef}
        />
        <Layout2Drawer choosedDrawerRef={choosedDrawerRef} />
      </>
    </Frame>
  );
}

export default Layout2;
