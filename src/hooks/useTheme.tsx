import { Themes } from "@Src/@atoms/AtomThemeProvider/assets/themes";
import { createContext, useContext } from "react";

const defaultContext = {
  toggle: () => {},
  setTheme: (_: Themes) => {},
  theme: "light",
};

export const ThemeContext =
  createContext<typeof defaultContext>(defaultContext);

const useTheme = () => useContext(ThemeContext) ?? defaultContext;
export default useTheme;
