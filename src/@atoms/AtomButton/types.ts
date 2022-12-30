import type { SerializedStyles } from "@emotion/react";
import type { PointerEventHandler, RefObject } from "react";

type AtomButtonTypes = {
  color?: string;
  width?: string;
  height?: string;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
  onPointerDown?: PointerEventHandler<HTMLButtonElement>;
  onHoverStart?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
  onHoverEnd?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  fontSize?: string;
  font?: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textShadow?: string;
  border?: string;
  borderRadius?: string;
  cursor?:
    | "pointer"
    | "default"
    | "text"
    | "wait"
    | "move"
    | "not-allowed"
    | "help"
    | "zoom-in"
    | "zoom-out"
    | "context-menu"
    | "cell"
    | "crosshair"
    | "vertical-text"
    | "alias"
    | "progress"
    | "no-drop"
    | "copy"
    | "grab"
    | "grabbing"
    | "all-scroll"
    | "col-resize"
    | "row-resize"
    | "n-resize"
    | "e-resize"
    | "s-resize"
    | "w-resize"
    | "ne-resize"
    | "nw-resize"
    | "se-resize"
    | "sw-resize"
    | "ew-resize"
    | "ns-resize"
    | "nesw-resize"
    | "nwse-resize"
    | "zoom-in"
    | "zoom-out"
    | "grab"
    | "grabbing"
    | "custom";
  customCSS?: SerializedStyles;
  refObject?: RefObject<any>;
  flexDirection?: "column" | "row" | "row-reverse" | "column-reverse";
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexWrap?: "nowrap" | "wrap";
  gap?: string;
};

export default AtomButtonTypes;
