/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { createContext, ReactNode, useContext } from "react";

const isServer = typeof window === "undefined";

const defaultContext = {
  toggle: () => {},
  setTheme: (args: string) => {},
  theme: "light",
};
const ThemeContext = createContext<typeof defaultContext>(defaultContext);

export const useTheme = () => useContext(ThemeContext) ?? defaultContext;

const getTheme = () => {
  return isServer ? "light" : localStorage.getItem("theme_lucy") ?? "light";
};

type AtomThemeProviderProps = {
  children: ReactNode;
};

export const AtomThemeProvider = ({ children }: AtomThemeProviderProps) => {
  const handleToggle = (theme: string) => {
    if (!isServer) {
      const setNewTheme = theme === "light" ? "dark" : "light";

      document.documentElement.setAttribute("data-theme", setNewTheme);
      localStorage.setItem("theme_lucy", setNewTheme);
    }
  };

  const handleSetTheme = (theme: string) => {
    if (!isServer) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme_lucy", theme);
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: getTheme(),
        toggle: () => handleToggle(getTheme()),
        setTheme: (theme: string) => handleSetTheme(theme),
      }}
    >
      <ThemeScript />
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeScript = () => {
  const scriptSrc = (() => {
    return `
    const DOM =  document.documentElement
    const theme = localStorage.getItem("theme_lucy") ?? "light"

    DOM.setAttribute("data-theme", theme);
    `;
  })();

  return <script dangerouslySetInnerHTML={{ __html: scriptSrc }} />;
};
