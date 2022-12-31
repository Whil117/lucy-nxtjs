import { AtomThemeProvider } from "@Src/@atoms/AtomThemeProvider";
import "@Src/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AtomThemeProvider themes={["light", "dark"]}>
      <Component {...pageProps} />
    </AtomThemeProvider>
  );
}
