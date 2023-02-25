import { atom, useAtom } from "jotai";
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

const { theme, setTheme } = createTheme<TypesThemes>({
  defaultTheme: () => "light",
});

const ThemeWithAtom = atom(theme());

const useThemeLucy = () => {
  const [state, set] = useAtom(ThemeWithAtom);

  return {
    theme: state,
    setTheme: (args: TypesThemes) => {
      set(args);
      setTheme(args);
    },
  };
};

export default useThemeLucy;
