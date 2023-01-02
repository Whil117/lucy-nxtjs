import Cookies from "js-cookie";
import { Themes } from "../../assets/themes";

const isServer = typeof window === "undefined";

const handleGetTheme = () => {
  return isServer ? "light " : Cookies.get("theme_lucy") ?? ("light" as Themes);
};
export default handleGetTheme;
