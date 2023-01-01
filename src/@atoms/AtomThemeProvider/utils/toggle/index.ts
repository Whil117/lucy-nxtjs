import Cookies from "js-cookie";
import InvertThemes, { Themes } from "../../assets/themes";
import getTheme from "../getTheme";

const isServer = typeof window === "undefined";

const handleToggle = () => {
  if (!isServer) {
    const theme = getTheme() as Themes;
    const setNewTheme = InvertThemes[theme];
    document.documentElement.setAttribute("data-theme", setNewTheme);
    Cookies.set("theme_lucy", setNewTheme);
    return setNewTheme;
  }
};
export default handleToggle;
