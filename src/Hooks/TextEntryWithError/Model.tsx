export type TextEntryWithErrorState = {
  state: {
    text: React.MutableRefObject<string> | undefined;
    error: React.MutableRefObject<boolean> | undefined;
  };
  setState: ({ text, error }: { text?: string; error?: boolean }) => void;
};

export const initTextEntryWithErrorState = {
  state: {
    text: undefined,
    error: undefined,
  },
  setState: ({ text, error }) => null,
} as TextEntryWithErrorState;
