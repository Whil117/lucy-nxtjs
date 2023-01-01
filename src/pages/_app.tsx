import { AtomThemeScript } from "@Src/@atoms/AtomThemeProvider/script/theme";
import "@Src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AtomThemeScript>
      <Component {...pageProps} />
    </AtomThemeScript>
  );
}
