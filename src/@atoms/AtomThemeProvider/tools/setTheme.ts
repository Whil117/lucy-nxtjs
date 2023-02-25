import Cookies from "js-cookie";

const isServer = typeof window === "undefined";

const handleSetTheme = <T>(theme: T): T => {
  if (!isServer) {
    document.documentElement.setAttribute("data-theme", theme as string);
    Cookies.set("theme_lucy", theme as string);
    return theme;
  }
};

export default handleSetTheme;
