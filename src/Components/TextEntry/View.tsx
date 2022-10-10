/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import {
  Close,
  Search,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  AutocompleteRenderInputParams,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { stringToPrice } from "../../Utils/Utils";
import OpacityTransition from "../OpacityTransition/View";
import { useTextEntryStyle } from "./Style";

function TextEntry({
  ccss,
  placeholder,
  initialValue,
  onChange,
  searchIcon,
  endIcon,
  lineNumber,
  hiddenClear,
  isCurrency,
  error,
  params,
  startIcon,
  white = false,
  password = false,
  profileTextEntry = false,
  textRef,
  notifyRef,
  setDisableRef,
  setTextRef,
  inputRef,
}: {
  ccss?: SerializedStyles | (SerializedStyles | undefined)[];
  placeholder: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  searchIcon?: boolean;
  startIcon?: React.ReactChild;
  endIcon?: React.ReactChild;
  lineNumber?: number;
  hiddenClear?: boolean;
  isCurrency?: boolean;
  error?: boolean;
  white?: boolean;
  password?: boolean;
  profileTextEntry?: boolean;
  params?: AutocompleteRenderInputParams;
  textRef?: React.MutableRefObject<string>;
  setDisableRef?: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<boolean>>
  >;
  notifyRef?: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<string>>
  >;
  setTextRef?: React.MutableRefObject<
    React.Dispatch<React.SetStateAction<string>>
  >;
  inputRef?: React.RefObject<HTMLInputElement>;
}) {
  const style = useTextEntryStyle(white);

  const [disabled, setDisabled] = useState(false);
  const [_password, setPassword] = useState(password);
  const [showIcons, setShowIcons] = useState(profileTextEntry);
  const [value, setValue] = useState(() =>
    isCurrency ? stringToPrice(initialValue ?? "") : initialValue ?? ""
  );

  const showClear =
    value.length !== 0 && lineNumber === undefined && !hiddenClear;

  useEffect(() => {
    if (textRef) {
      textRef.current = value;
    }
    if (notifyRef && notifyRef.current) {
      notifyRef.current(value);
    }

    // Garantindo que sempre que onChange for chamando, o valor da referência será igual.
    // Isto prq o useEffect para ser aplicado após o onChange nativo do TextField.
    onChange?.call(null, value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, textRef, notifyRef]);

  useEffect(() => {
    if (setDisableRef) {
      setDisableRef.current = setDisabled;
    }
  }, [setDisableRef]);

  useEffect(() => {
    if (setTextRef) {
      setTextRef.current = setValue;
    }
  }, [setTextRef]);

  useEffect(() => {
    if (profileTextEntry) {
      if (disabled) {
        setShowIcons(disabled);
      } else {
        setTimeout(() => setShowIcons(disabled), style.time);
      }
    }
    // eslint-disable-next-line
  }, [disabled, showIcons, profileTextEntry]);

  return (
    <TextField
      inputRef={inputRef}
      css={
        profileTextEntry
          ? ccss
          : [
              style.textEntry,
              disabled ? style.disabled : style.enabled,
              error ? style.error : undefined,
              ccss,
            ]
      }
      fullWidth
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      type={_password ? "password" : "text"}
      onChange={(e) =>
        setValue(isCurrency ? stringToPrice(e.target.value) : e.target.value)
      }
      multiline={lineNumber !== undefined}
      rows={lineNumber}
      InputProps={{
        startAdornment:
          searchIcon || startIcon ? (
            <InputAdornment position="start">
              {startIcon ?? (
                <Search
                  css={[
                    style.searchIcon,
                    disabled ? style.disabledIcon : style.enabledIcon,
                  ]}
                />
              )}
            </InputAdornment>
          ) : undefined,
        endAdornment: (
          <div css={style.iconRow}>
            {!showClear && !password ? undefined : (
              <InputAdornment
                position="end"
                css={[
                  style.opacityTransition,
                  showIcons ? style.hidden : undefined,
                ]}
              >
                {showClear ? (
                  <IconButton disabled={disabled} onClick={() => setValue("")}>
                    <Close
                      css={[
                        style.clearIcon,
                        disabled ? style.disabledClearIcon : undefined,
                      ]}
                    />
                  </IconButton>
                ) : undefined}
                {password ? (
                  <IconButton
                    css={[style.visibilityIcon, style.clearIcon]}
                    onClick={() => setPassword(!_password)}
                  >
                    <OpacityTransition
                      childFalse={(css) => <VisibilityOutlined css={css} />}
                      childTrue={(css) => <VisibilityOffOutlined css={css} />}
                      value={_password}
                    />
                  </IconButton>
                ) : undefined}
              </InputAdornment>
            )}
            {endIcon ? (
              <>
                <div css={style.separator} />
                {endIcon}
              </>
            ) : undefined}
          </div>
        ),
      }}
      {...params}
    />
  );
}

export default TextEntry;
