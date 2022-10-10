/** @jsxImportSource @emotion/react */
import { ArrowForward, DarkModeOutlined } from "@mui/icons-material";
import { Drawer, Switch } from "@mui/material";
import ButtonSquared from "../../../ButtonSquared/View";
import TextEntry from "../../../TextEntry/View";
import { useFrameStyle } from "../../Style";
import LogoutButton from "../ProfileDrawer/Components/LogoutButton/View";
import { useFrameDrawerStyle } from "./Style";

function FrameDrawer({
  drawerOpened,
  children,
  searchTitle,
  onClose,
  searchRef,
  setDisabledRef,
  big = false,
  scrollContent = false,
}: {
  drawerOpened: boolean;
  children: React.ReactChild;
  searchTitle?: string;
  onClose?: () => void;
  searchRef?: React.MutableRefObject<string>;
  setDisabledRef?: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<boolean>>
  >;
  big?: boolean;
  scrollContent?: boolean;
}) {
  const style = useFrameDrawerStyle();
  const frameStyle = useFrameStyle();

  return (
    <Drawer
      css={frameStyle.drawer}
      open={drawerOpened}
      anchor={"right"}
      onClose={onClose}
      transitionDuration={style.time}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        css={style.frameDrawer(big ? 80 : 60)}
      >
        <div css={style.head}>
          <ButtonSquared onClick={onClose}>
            <ArrowForward />
          </ButtonSquared>
          {searchTitle ? (
            <TextEntry
              textRef={searchRef}
              ccss={big ? style.textEntryBig : style.textEntrySmall}
              placeholder={searchTitle}
              setDisableRef={setDisabledRef}
              searchIcon
            />
          ) : (
            <>
              <div css={style.darkModeRow}>
                <DarkModeOutlined />
                <span css={style.darkModeText}>Modo Escuro</span>
                <Switch defaultChecked color="success" />
              </div>
              <LogoutButton />
            </>
          )}
        </div>
        <div css={style.separator} />
        <div
          css={[style.content, scrollContent ? style.scrollContent : undefined]}
        >
          {children}
        </div>
      </div>
    </Drawer>
  );
}

export default FrameDrawer;
