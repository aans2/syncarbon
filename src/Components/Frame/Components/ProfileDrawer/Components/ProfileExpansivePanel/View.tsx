/** @jsxImportSource @emotion/react */
import ClickAwayListener from "react-advanced-click-away";
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import useContentExpansion from "../../../../../../Hooks/ContentExpansion";
import { useProfileExpansivePanelStyle } from "./Style";

function ProfileExpansivePanel({
  title,
  children,
  height,
  onClosePanel,
  onOpenPanel,
  profileEditPanel,
}: {
  title: string;
  height: string;
  children: React.ReactChild;
  onClosePanel?: () => void;
  onOpenPanel?: () => void;
  profileEditPanel?: boolean;
}) {
  const style = useProfileExpansivePanelStyle();

  const [showContent, expanded, setExpanded] = useContentExpansion();

  const onClose = () => {
    setExpanded(false);
    onClosePanel?.apply([]);
  };

  return (
    <ClickAwayListener
      onClickAway={(e) => {
        if (profileEditPanel) {
          var fatherId = "";
          const id = (e.target as any)["id"];
          if (
            e.target !== null &&
            (e.target as any)["farthestViewportElement"] !== undefined &&
            (e.target as any)["farthestViewportElement"] !== null
          ) {
            // Não foi possível colocar um ID no ícone da câmera.
            // Método alternativo para identificar este elemento.
            fatherId = (e.target as any)["farthestViewportElement"]["id"];
          }
          if (
            id !== "ProfileAvatarEditButton" &&
            id !== "ProfileAvatar" &&
            id !== "ProfileAvatarEditIcon" &&
            fatherId !== "ProfileAvatarEditIcon"
          ) {
            onClose();
          }
        } else {
          onClose();
        }
      }}
    >
      <div
        css={[style.panel, showContent ? undefined : style.panelHover]}
        onClick={() => {
          if (!expanded) {
            setExpanded(true);
            onOpenPanel?.apply([]);
          }
        }}
      >
        <div css={[style.titleRow, expanded ? style.titleExpanded : undefined]}>
          <span css={[style.title]}>{title}</span>
          <IconButton
            onClick={() => {
              if (expanded) {
                setExpanded(false);
                onClosePanel?.apply([]);
              }
            }}
            css={style.button}
          >
            <MoreVert
              css={[
                style.rotateTransition,
                expanded ? undefined : style.rotate,
              ]}
            />
          </IconButton>
        </div>
        <div
          css={[
            style.content,
            expanded ? style.contentExpanded(height) : undefined,
          ]}
        >
          <div css={style.spacer} />
          {children}
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default ProfileExpansivePanel;
