/** @jsxImportSource @emotion/react */
import { useFrameDrawerStyle } from "../../../../../Frame/Components/FrameDrawer/Style";
import FrameSelect from "../../../../../FrameSelect/View";
import TextEntry from "../../../../../TextEntry/View";
import TextEntryMasked from "../../../../../TextEntryMasked/View";
import ViewBlockAutocomplete from "../ViewBlockAutocomplete/View";
import { useEditBlockEntriesStyle } from "./Style";

function EditBlockEntries({ modal }: { modal?: boolean }) {
  const style = useEditBlockEntriesStyle();
  const frameDrawerStyle = useFrameDrawerStyle();

  const heightOfFixContent = modal ? undefined : 282;

  return (
    <>
      <div css={frameDrawerStyle.subtitle}>Data</div>
      <div css={style.dateRow}>
        <TextEntryMasked
          ccss={style.dayTextEntry}
          placeholder="DD"
          initialValue="12"
          patternMask="00"
        />
        <FrameSelect
          darker
          ccss={style.monthSelect}
          initialValue="Maio"
          options={[
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
          ]}
          showLenghtOptions={modal ? 7 : undefined}
          heightOfFixContent={heightOfFixContent}
        />
        <FrameSelect
          darker
          ccss={style.yearSelect}
          initialValue="2018"
          options={["2018", "2019"]}
          showLenghtOptions={modal ? 2 : undefined}
          heightOfFixContent={heightOfFixContent}
        />
      </div>
      <div css={frameDrawerStyle.subtitle}>Conta</div>
      <ViewBlockAutocomplete />
      <div css={frameDrawerStyle.subtitle}>Valor</div>
      <TextEntry
        placeholder="R$"
        initialValue="R$ 61,81"
        hiddenClear
        isCurrency
      />
    </>
  );
}

export default EditBlockEntries;
