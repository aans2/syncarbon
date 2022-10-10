import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkThemeState, lightThemeState } from "./ThemeStates";

const ThemeUpdateContext = createContext<() => void>(() => null);

export function useThemeUpdateContext() {
  return useContext(ThemeUpdateContext)!;
}

const ThemeContextProdiver = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkThemeState : lightThemeState;

  const changeDark = () => setIsDark(!isDark);

  return (
    <ThemeUpdateContext.Provider value={changeDark}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeUpdateContext.Provider>
  );
};

export default ThemeContextProdiver;
