/** @jsxImportSource @emotion/react */
import { createList } from "../../../../App";
import DisplayList from "../../../../Components/DisplayList/View";
import { useFrameDrawerStyle } from "../../../../Components/Frame/Components/FrameDrawer/Style";
import DrawerSharedItem from "./Components/DrawerSharedItem";
import { useDrawerSharedStyle } from "./Style";

function DrawerShared() {
  const style = useDrawerSharedStyle();
  const frameDrawerStyle = useFrameDrawerStyle();

  const clist = createList(32);

  return (
    <>
      <div css={[frameDrawerStyle.title, style.title]}>
        Compartilhe este cliente com outros operadores
      </div>
      <DisplayList
        paddingHeight={3}
        heightOfFixContent="56px"
        itens={clist.map((_, index) => (
          <DrawerSharedItem key={"DrawerSharedItem-" + index} />
        ))}
      />
    </>
  );
}

export default DrawerShared;
