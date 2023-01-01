enum InvertThemes {
  light = "dark",
  dark = "light",
}

export type Themes = ReturnType<() => keyof typeof InvertThemes>;

export default InvertThemes;
