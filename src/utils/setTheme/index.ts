import Cookies from "js-cookie";
import { Themes } from "../../assets/themes";

const isServer = typeof window === "undefined";

const handleSetTheme = (theme: Themes) => {
  if (!isServer) {
    document.documentElement.setAttribute("data-theme", theme);
    Cookies.set("theme_lucy", theme);
    return theme;
  }
};

export default handleSetTheme;
