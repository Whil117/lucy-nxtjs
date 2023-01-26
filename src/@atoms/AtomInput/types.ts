import { SerializedStyles } from "@emotion/react";
import { FormikCustom } from "@Src/types/formik";
import { MotionProps } from "framer-motion";
import {
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  KeyboardEventHandler,
} from "react";
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
  value?: any;
  multiple?: boolean; //FILES MULTIPLES
  id?: string;
  step?: number;
  placeholder?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  onClick?: () => void;
  customCSS?: SerializedStyles;
  accentColor?: string;
  onKeyDown?: KeyboardEventHandler<any>;
  onKeyDownCapture?: KeyboardEventHandler<any>;
  onKeyUp?: KeyboardEventHandler<any>;
  onKeyUpCapture?: KeyboardEventHandler<any>;
  onKeyPress?: KeyboardEventHandler<any>;
  onKeyPressCapture?: KeyboardEventHandler<any>;
  onBlur?: (event: FocusEvent<any>) => void;
  onIsChecked?: (formik?: FormikCustom<any>) => void;

  isChecked?: (formik?: FormikCustom<any>) => boolean;

  isFocus?: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
};
export default AtomInputTypes;
