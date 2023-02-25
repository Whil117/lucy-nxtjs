import Cookies from "js-cookie";

const isServer = typeof window === "undefined";

type Theme<THEMING> = {
  defaultTheme: () => THEMING;
};

const handleValueTheme = <T>({ defaultTheme }: Theme<T>) => {
  const initalDefault = defaultTheme?.();
  return isServer ? initalDefault : Cookies.get("theme_lucy") ?? initalDefault;
};
export default handleValueTheme;
