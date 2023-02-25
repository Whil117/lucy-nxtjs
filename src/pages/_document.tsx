import { AtomThemeScript } from "@Src/@atoms";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <AtomThemeScript>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </AtomThemeScript>
    </Html>
  );
}
