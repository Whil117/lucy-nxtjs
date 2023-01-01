import { createContext, ReactNode, useContext } from "react";
import { Themes } from "./assets/themes";
import { AtomThemeScript } from "./script/theme";
import handleGetTheme from "./utils/getTheme";
import handleSetTheme from "./utils/setTheme";
import handleToggleTheme from "./utils/toggle";

const defaultContext = {
  toggle: () => {},
  setTheme: (_: Themes) => {},
  theme: "light",
};

const ThemeContext = createContext<typeof defaultContext>(defaultContext);

export const useTheme = () => useContext(ThemeContext) ?? defaultContext;

type AtomThemeProviderProps = {
  children: ReactNode;
};

export const AtomThemeProvider = ({ children }: AtomThemeProviderProps) => {
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
