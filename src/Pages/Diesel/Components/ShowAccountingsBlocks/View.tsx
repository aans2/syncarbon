/** @jsxImportSource @emotion/react */
import { createList } from "../../../../App";
import { useDieselStyle } from "../../Style";
import Layout2Row from "../Layout2Row/View";
import BlockGrid from "../BlockGrid/View";

function ShowLayout2sBlocks({ showLayout2s }: { showLayout2s: boolean }) {
  const list = createList(7);
  const blist = createList(32);

  const Layout2Style = useDieselStyle();
  return (
    <>
      {showLayout2s ? (
        list.length > 0 ? (
          list.map((_, index) => (
            <Layout2Row
              key={"Layout2Row-" + index.toString()}
              name="Ano"
              photosNumber={12}
            />
          ))
        ) : (
          <div css={Layout2Style.noItemMessage}>Nenhuma conta</div>
        )
      ) : blist.length > 0 ? (
        <BlockGrid list={blist} />
      ) : (
        <div css={Layout2Style.noItemMessage}>Nenhum bloco</div>
      )}
    </>
  );
}

export default ShowLayout2sBlocks;
