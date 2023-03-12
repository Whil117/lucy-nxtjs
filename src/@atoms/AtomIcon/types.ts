import type { SerializedStyles } from "@emotion/react";
import { MotionProps } from "framer-motion";
import type { PointerEventHandler } from "react";
import WithCSS from "../../types/Emotion/WithCSS";

export interface AtomIconTypes extends MotionProps {
  src?: string;
  color?: string;
  width?: string;
  height?: string;
  customCSS?: (css: WithCSS) => SerializedStyles;
  className?: string;
  onPointerDown?: PointerEventHandler<HTMLDivElement>;
}
