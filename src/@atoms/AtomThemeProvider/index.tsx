import { ThemeContext } from "@Src/hooks/useTheme";
import { handleGetTheme, handleSetTheme, handleToggleTheme } from "@Src/utils";
import { ReactNode } from "react";
import AtomThemeScript from "../AtomThemeScript";
import { Themes } from "./assets/themes";

type AtomThemeProviderProps = {
  children: ReactNode;
};

const AtomThemeProvider = ({ children }: AtomThemeProviderProps) => {
  return (
    <ThemeContext.Provider
      value={{
        theme: handleGetTheme(),
        toggle: () => handleToggleTheme(),
        setTheme: (theme: Themes) => handleSetTheme(theme),
      }}
    >
      <AtomThemeScript />
      {children}
    </ThemeContext.Provider>
  );
};
export default AtomThemeProvider;
