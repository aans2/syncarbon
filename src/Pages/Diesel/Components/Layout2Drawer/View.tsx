import React, { useEffect, useRef, useState } from "react";
import FrameDrawer from "../../../../Components/Frame/Components/FrameDrawer/View";
import useContentExpansion from "../../../../Hooks/ContentExpansion";
import DrawerShared from "../DrawerShared/View";
import { Layout2DrawerOptions } from "./Model";

function Layout2Drawer({
  choosedDrawerRef,
}: {
  choosedDrawerRef: React.MutableRefObject<
    (choice: Layout2DrawerOptions) => void
  >;
}) {
  const [choosed, setChoosed] = useState<Layout2DrawerOptions>("none");
  const [showDrawer, expanded, setExpanded] = useContentExpansion();
  const [searchTitle, setSearchTitle] = useState("");
  const [drawerBigSize, setDrawerBigSize] = useState(false);

  const searchRef = useRef("");
  const setDisabledSearchRef = useRef<
    React.Dispatch<React.SetStateAction<boolean>>
  >(() => null);

  useEffect(() => {
    choosedDrawerRef.current = (choice: Layout2DrawerOptions) =>
      setChoosed(choice);
  }, [choosedDrawerRef]);

  useEffect(() => {
    if (!showDrawer) {
      setChoosed("none");
    }
  }, [showDrawer]);

  useEffect(() => {
    switch (choosed) {
      case "shared":
        setSearchTitle("Buscar");
        setDrawerBigSize(false);
        break;
      default:
        break;
    }

    if (choosed !== "none") {
      setExpanded(true);
    }
  }, [choosed, setExpanded]);

  return (
    <FrameDrawer
      drawerOpened={expanded}
      onClose={() => setExpanded(false)}
      searchRef={searchRef}
      searchTitle={searchTitle}
      setDisabledRef={setDisabledSearchRef}
      big={drawerBigSize}
    >
      {showDrawer ? (
        choosed === "shared" ? (
          <DrawerShared />
        ) : choosed === "none" ? (
          <DrawerShared />
        ) : (
          <div />
        )
      ) : (
        <div />
      )}
    </FrameDrawer>
  );
}

export default Layout2Drawer;
