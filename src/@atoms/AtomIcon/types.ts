import type { SerializedStyles } from "@emotion/react";
import type { PointerEventHandler } from "react";

export type AtomIconTypes = {
  src?: string;
  color?: string;
  width?: string;
  height?: string;
  customCSS?: SerializedStyles;
  className?: string;
  onPointerDown?: PointerEventHandler<HTMLDivElement>;
};
export default AtomIconTypes;
