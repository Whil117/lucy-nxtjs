import { SerializedStyles } from "@emotion/react";

type WithCSS = (
  template: TemplateStringsArray,
  ...args: Array<SerializedStyles>
) => SerializedStyles;

export default WithCSS;
