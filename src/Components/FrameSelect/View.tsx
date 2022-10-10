/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { ExpandMore } from "@mui/icons-material";
import ClickAwayListener from "react-advanced-click-away";
import useId from "@mui/material/utils/useId";
import { useEffect, useState } from "react";
import { useFrameSelectStyle } from "./Style";

function FrameSelect({
  initialValue,
  options,
  ccss,
  heightOfFixContent,
  showLenghtOptions,
  brighter = false,
  darker = false,
}: {
  initialValue: string;
  options: string[];
  ccss?: SerializedStyles;
  heightOfFixContent?: number;
  showLenghtOptions?: number;
  brighter?: boolean;
  darker?: boolean;
}) {
  const style = useFrameSelectStyle(
    options.length,
    brighter,
    darker,
    heightOfFixContent!,
    showLenghtOptions
  );
  const [expanded, setExpanded] = useState(false);
  const [currentScreenHeight, setCurrentScreenHeight] = useState(0);
  const id = useId();

  useEffect(() => {
    if (!showLenghtOptions) {
      const event = () => setCurrentScreenHeight(window.innerHeight);
      event();
      window.addEventListener("resize", event);
      return () => window.removeEventListener("resize", event);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ClickAwayListener
      onClickAway={() => (expanded ? setExpanded(false) : null)}
    >
      <div css={[ccss, style.positionFrame]}>
        <div
          onClick={() => setExpanded(!expanded)}
          css={[
            style.frameSelect,
            expanded
              ? style.frameSelectExpanded(currentScreenHeight)
              : style.frameSelectNotExpanded,
          ]}
        >
          <div css={[style.item, style.display]}>
            {initialValue}
            <ExpandMore
              css={[style.icon, expanded ? style.iconRotated : null]}
            />
          </div>
          <div css={style.options(currentScreenHeight)}>
            <div css={style.separator} />
            {options.map((_value, index) => (
              <div
                key={"SelectOptions(" + id + ")-" + index.toString()}
                css={[
                  style.item,
                  initialValue === _value
                    ? style.itemSelected
                    : style.itemNotSelected,
                ]}
              >
                {_value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default FrameSelect;
