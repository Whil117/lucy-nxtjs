import { Themes } from "@Src/@atoms/AtomThemeProvider/assets/themes";
import Cookies from "js-cookie";

const isServer = typeof window === "undefined";

const handleGetTheme = () => {
  return isServer ? "light " : Cookies.get("theme_lucy") ?? ("light" as Themes);
};
export default handleGetTheme;
