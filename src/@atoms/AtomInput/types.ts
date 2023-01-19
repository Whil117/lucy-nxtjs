import { SerializedStyles } from "@emotion/react";
import { FormikCustom } from "@Src/types/formik";
import { ChangeEvent, FocusEvent } from "react";
import { AtomTextTypes } from "../AtomText/types";

type AtomInputTypes<TYPE = any> = {
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
  onBlur?: (event: FocusEvent<any>) => void;
  onIsChecked?: (formik?: FormikCustom<any>) => void;
  isChecked?: (formik?: FormikCustom<any>) => boolean;
  disabled?: boolean;
};
export default AtomInputTypes;
