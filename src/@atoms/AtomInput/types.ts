import { SerializedStyles } from "@emotion/react";
import { FormikCustom } from "@Src/types/formik";
import { MotionProps } from "framer-motion";
import { ChangeEvent, FocusEvent, KeyboardEventHandler } from "react";
import WithCSS from "../../types/Emotion/WithCSS";
import { AtomTextTypes } from "../AtomText/types";

type AtomInputTypes<TYPE = any> = MotionProps & {
  type?: TYPE;
  label?: string;
  labelFontWeight?: AtomTextTypes["fontWeight"];
  labelFontSize?: string;
  labelFontFamily?: string;
  height?: string;
  labelColor?: string;
  labelBackground?: string;
  formik?: FormikCustom<any>;
  min?: number;
  max?: number;
  maxLength?: number;
  defaultTextValue?: string;
  value?: any;
  name?: string;
  multiple?: boolean; //FILES MULTIPLES
  id?: string;
  step?: number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  onClick?: () => void;
  customCSS?: (css?: WithCSS) => SerializedStyles;
  accentColor?: string;
  onKeyDown?: KeyboardEventHandler<any>;
  onKeyDownCapture?: KeyboardEventHandler<any>;
  onKeyUp?: KeyboardEventHandler<any>;
  onKeyUpCapture?: KeyboardEventHandler<any>;
  onKeyPress?: KeyboardEventHandler<any>;
  onKeyPressCapture?: KeyboardEventHandler<any>;
  onFocus?: (event: FocusEvent<any>) => void;
  onError?: () => string | null | undefined | boolean;
  onBlur?: (event: FocusEvent<any>) => void;
  onIsChecked?: (formik?: FormikCustom<any>) => void;
  options?: (props: AtomInputTypes) => {
    label: string;
    id: string;
    value: string;
  }[];
  isChecked?: (formik?: FormikCustom<any>) => boolean;

  isFocus?: boolean;
  error?: string;
  disabled?: boolean;
};
export default AtomInputTypes;
