import { AtomThemeProvider } from "@Src/@atoms";
import "@Src/styles/fonts.css";
import "@Src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AtomThemeProvider>
      <Component {...pageProps} />
    </AtomThemeProvider>
  );
}
