/** @jsxImportSource @emotion/react */
import { ClassNames } from "@emotion/react";
import { ExpandMore } from "@mui/icons-material";
import { Autocomplete } from "@mui/material";
import TextEntry from "../../../../../TextEntry/View";
import { useViewBlockAutocompleteStyle } from "./Style";

function ViewBlockAutocomplete() {
  const style = useViewBlockAutocompleteStyle();

  return (
    <ClassNames>
      {({ css }) => (
        <Autocomplete
          noOptionsText="Sem Opções"
          clearText="Limpar"
          openText="Abrir"
          closeText="Fechar"
          options={[
            "aa",
            "ab",
            "cc",
            "dc",
            "ad",
            "da",
            "dd",
            "de",
            "fe",
            "fa",
            "fg",
          ]}
          popupIcon={<ExpandMore />}
          classes={{
            paper: css(style.papper),
            noOptions: css(style.noOptions),
          }}
          renderInput={(params) => {
            return (
              <TextEntry
                ccss={style.autocomplete}
                hiddenClear
                params={params}
                placeholder="Selecionar conta"
              />
            );
          }}
        />
      )}
    </ClassNames>
  );
}

export default ViewBlockAutocomplete;
