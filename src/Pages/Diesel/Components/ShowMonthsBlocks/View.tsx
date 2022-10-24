/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { createList } from "../../../../App";
import { useDieselStyle } from "../../Style";
import AccountingRow from "../AccountingRow/View";
import BlockGrid from "../BlockGrid/View";

function ShowMonthsBlocks({ showMonths }: { showMonths: boolean }) {
  const list = createList(12);
  const blist = createList(12);

  const options = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const monthStyle = useDieselStyle();
  return (
    <>
      {showMonths ? (
        options.length > 0 ? (
          options.map((item, index) => (
            <AccountingRow
              key={"AccountingRow-" + index.toString()}
              number={index}
              name={item}
              // photosNumber={12}
            />
          ))
        ) : (
          <div css={monthStyle.noItemMessage}>Nenhuma conta adicionada</div>
        )
      ) : blist.length > 0 ? (
        <BlockGrid list={blist} />
      ) : (
        <div css={monthStyle.noItemMessage}>Nenhum bloco categorizado</div>
      )}
    </>
  );
}

export default ShowMonthsBlocks;
