import type { SerializedStyles } from "@emotion/react";
import WithCSS from "@Src/types/Emotion/WithCSS";

type AtomImageTypes = {
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  objectFit?: `fill` | `contain` | `cover` | `none` | `scale-down`;
  margin?: string;
  position?:
    | `absolute`
    | `relative`
    | `static`
    | `sticky`
    | `fixed`
    | `initial`;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  objectPosition?: string;
  zIndex?: string;
  customCSS?: (css?: WithCSS) => SerializedStyles;
  borderRadius?: string;
  src: string;
  alt?: string;
};
export default AtomImageTypes;
