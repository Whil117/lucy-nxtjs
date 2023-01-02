import { Themes } from "@Src/@atoms/AtomThemeProvider/assets/themes";
import Cookies from "js-cookie";

const isServer = typeof window === "undefined";

const handleSetTheme = (theme: Themes) => {
  if (!isServer) {
    document.documentElement.setAttribute("data-theme", theme);
    Cookies.set("theme_lucy", theme);
    return theme;
  }
};

export default handleSetTheme;
