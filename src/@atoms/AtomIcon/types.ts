import type { SerializedStyles } from "@emotion/react";
import { MotionProps } from "framer-motion";
import type { PointerEventHandler } from "react";

export interface AtomIconTypes extends MotionProps {
  src?: string;
  color?: string;
  width?: string;
  height?: string;
  customCSS?: SerializedStyles;
  className?: string;
  onPointerDown?: PointerEventHandler<HTMLDivElement>;
}
