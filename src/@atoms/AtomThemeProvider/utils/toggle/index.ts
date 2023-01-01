import Cookies from "js-cookie";
import InvertThemes, { Themes } from "../../assets/themes";
import handleGetTheme from "../getTheme";

const isServer = typeof window === "undefined";

const handleToggleTheme = () => {
  if (!isServer) {
    const theme = handleGetTheme() as Themes;
    const setNewTheme = InvertThemes[theme];
    document.documentElement.setAttribute("data-theme", setNewTheme);
    Cookies.set("theme_lucy", setNewTheme);
    return setNewTheme;
  }
};
export default handleToggleTheme;
