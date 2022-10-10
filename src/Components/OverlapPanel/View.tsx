/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import useContentExpansion from "../../Hooks/ContentExpansion";
import { useOverlapPanelStyle } from "./Style";

function OverlapPanel({
  showPanelRef,
  children,
}: {
  showPanelRef: React.MutableRefObject<() => void>;
  children: (
    openedShowPanel: boolean,
    setOpenedShowPanel: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactChild;
}) {
  const style = useOverlapPanelStyle();
  const [showPanel, openedShowPanel, setOpenedShowPanel] =
    useContentExpansion();

  useEffect(() => {
    showPanelRef.current = () => setOpenedShowPanel(!openedShowPanel);
  }, [showPanelRef, openedShowPanel, setOpenedShowPanel]);

  return (
    <div
      css={showPanel ? style.background : undefined}
      onClick={(e) => (showPanel ? setOpenedShowPanel(false) : undefined)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        css={[
          style.transitionOpacity,
          openedShowPanel ? style.visible : style.notVisible,
        ]}
      >
        {showPanel ? children(openedShowPanel, setOpenedShowPanel) : undefined}
      </div>
    </div>
  );
}

export default OverlapPanel;
