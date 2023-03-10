import { ReactNode } from "react";

type ThemeScript = {
  children?: ReactNode;
};

const AtomThemeScript = ({ children }: ThemeScript) => {
  const scriptSrc = (() => {
    return `
    const executeThemeLucy = async () => {
      const cookies = (await window.cookieStore) ?? "light";
      const result = await cookies.get("theme_lucy");

      const DOM =  document.documentElement
      const theme = result.value ?? "light"

      DOM.setAttribute("data-theme", theme);
    };
    executeThemeLucy();
    `;
  })();

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: scriptSrc }} />
      {children}
    </>
  );
};
export default AtomThemeScript;
