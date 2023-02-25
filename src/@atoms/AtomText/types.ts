import type { SerializedStyles } from "@emotion/react";
import WithCSS from "@Src/types/Emotion/WithCSS";
import type { Ref } from "react";

type TagsTexts =
  | "htmlFor"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "li"
  | "a"
  | "strong"
  | "em"
  | "i"
  | "b"
  | "u"
  | "s"
  | "small"
  | "big"
  | "code"
  | "pre"
  | "blockquote"
  | "hr"
  | "br"
  | "img"
  | "table"
  | "thead"
  | "tbody"
  | "tr"
  | "td"
  | "th"
  | "ul"
  | "ol"
  | "dl"
  | "dt"
  | "dd"
  | "q"
  | "cite"
  | "abbr"
  | "acronym"
  | "del"
  | "ins"
  | "sub"
  | "sup"
  | "var"
  | "samp"
  | "kbd"
  | "tt"
  | "bdo"
  | "button"
  | "label"
  | "select"
  | "option"
  | "textarea"
  | "form"
  | "fieldset"
  | "legend"
  | "optgroup"
  | "option"
  | "select"
  | "datalist"
  | "keygen"
  | "output"
  | "progress"
  | "meter"
  | "details"
  | "summary"
  | "menu"
  | "menuitem"
  | "canvas"
  | "caption"
  | "col"
  | "colgroup"
  | "table"
  | "tbody"
  | "tfoot"
  | "thead"
  | "tr"
  | "td"
  | "th"
  | "button"
  | "datalist"
  | "fieldset"
  | "form"
  | "input"
  | "label"
  | "legend"
  | "meter"
  | "optgroup"
  | "option"
  | "output"
  | "progress"
  | "select"
  | "textarea"
  | "details"
  | "summary"
  | "menu"
  | "menuitem"
  | "canvas"
  | "caption"
  | "col"
  | "colgroup"
  | "table"
  | "tbody"
  | "tfoot"
  | "thead"
  | "tr"
  | "td"
  | "th"
  | "a"
  | "b"
  | "i"
  | "em"
  | "strong"
  | "u"
  | "s"
  | "small"
  | "big"
  | "code"
  | "pre"
  | "blockquote"
  | "hr"
  | "br"
  | "img"
  | "table";

export type AtomTextTypes = {
  color?: string;
  fontFamily?: string;
  as?: TagsTexts;
  href?: string;
  children?: React.ReactNode | string | number | boolean | null;
  textAlign?: "center" | "left" | "right" | "inherit";
  padding?: string;
  margin?: string;
  width?: string;
  maxWidth?: string;
  fontSize?: string;
  textDecoration?: "underline" | "line-through" | "none" | "inherit";
  ref?: Ref<any>;
  fontWeight?:
    | "bold"
    | "normal"
    | "light"
    | "inherit"
    | "semibold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  cursor?:
    | "pointer"
    | "default"
    | "inherit"
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
  backgroundColor?: string;
  htmlFor?: string;
  customCSS?: (css?: WithCSS) => SerializedStyles;
  dangerouslySetInnerHTML?: { __html: string };
  opacity?: string;
};
