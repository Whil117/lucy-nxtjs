import type { SerializedStyles } from "@emotion/react";
import WithCSS from "@Src/types/Emotion/WithCSS";
import { MotionProps } from "framer-motion";
import type { PointerEventHandler } from "react";

export interface AtomIconTypes extends MotionProps {
  src?: string;
  color?: string;
  width?: string;
  height?: string;
  customCSS?: (css?: WithCSS) => SerializedStyles;
  className?: string;
  onPointerDown?: PointerEventHandler<HTMLDivElement>;
}
