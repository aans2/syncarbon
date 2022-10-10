/** @jsxImportSource @emotion/react */
import { GridView, ViewStreamOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import OverlapPanel from "../../../../Components/OverlapPanel/View";
import { useChangeLayout2PanelStyle } from "./Style";

function ChangeLayout2Panel({
  showLayout2s,
  setShowLayout2s,
  changeLayout2PanelRef,
}: {
  showLayout2s: boolean;
  setShowLayout2s: React.Dispatch<React.SetStateAction<boolean>>;
  changeLayout2PanelRef: React.MutableRefObject<() => void>;
}) {
  const style = useChangeLayout2PanelStyle();

  return (
    <OverlapPanel showPanelRef={changeLayout2PanelRef}>
      {(openedShowContent, setOpenedShowContent) => (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          css={[style.changeLayout2Panel]}
        >
          <Button
            disableRipple={showLayout2s}
            onClick={() => {
              if (!showLayout2s && openedShowContent) {
                setShowLayout2s(true);
                setOpenedShowContent(false);
              }
            }}
            css={[
              style.item,
              showLayout2s ? style.selected : style.notSelected,
            ]}
          >
            <span>
              Visualizar
              <span css={style.bold}> Contas</span>
            </span>
            <ViewStreamOutlined css={style.icon} />
          </Button>
          <div css={style.separator} />
          <Button
            disableRipple={!showLayout2s}
            onClick={() => {
              if (showLayout2s && openedShowContent) {
                setShowLayout2s(false);
                setOpenedShowContent(false);
              }
            }}
            css={[
              style.item,
              !showLayout2s ? style.selected : style.notSelected,
            ]}
          >
            <span>
              Visualizar
              <span css={style.bold}> Blocos</span>
            </span>
            <GridView css={style.icon} />
          </Button>
        </div>
      )}
    </OverlapPanel>
  );
}

export default ChangeLayout2Panel;
