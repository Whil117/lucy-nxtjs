import handleSetTheme from "./setTheme";
import handleValueTheme from "./theme";

type TypesThemes = "dark" | "light";

type CreateThemeDefaultValues<S> = {
  defaultTheme: () => S;
};

const createTheme = <T>({ defaultTheme }: CreateThemeDefaultValues<T>) => {
  return {
    theme: (value?: T) =>
      value ??
      handleValueTheme<T>({
        defaultTheme,
      }),
    setTheme: (theme: T) => {
      return handleSetTheme<T>(theme);
    },
  };
};

export default createTheme;
