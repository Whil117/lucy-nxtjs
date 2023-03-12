import {
  ComponentSelector,
  CSSObject,
  Keyframes,
  SerializedStyles,
} from "@emotion/react";

export type InterpolationPrimitive =
  | null
  | undefined
  | boolean
  | number
  | string
  | ComponentSelector
  | Keyframes
  | SerializedStyles
  | CSSObject
  | TemplateStringsArray;

export interface ArrayCSSInterpolation extends Array<CSSInterpolation> {}

export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;

type WithCSS = (...args: Array<CSSInterpolation>) => SerializedStyles;
export default WithCSS;
