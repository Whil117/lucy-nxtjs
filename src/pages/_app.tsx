import { AtomThemeScript } from "@Src/@atoms";
import "@Src/styles/fonts.css";
import "@Src/styles/globals.css";
import "@Src/styles/normalize.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AtomThemeScript>
      <Component {...pageProps} />
    </AtomThemeScript>
  );
}
