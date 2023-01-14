import { SerializedStyles } from "@emotion/react";
import { FormikCustom } from "@Src/types/formik";
import { ChangeEvent, FocusEvent } from "react";
import { AtomTextTypes } from "../AtomText/types";

type AtomInputTypes = {
  type?: "text" | "date" | "color" | "radio" | "checkbox" | "textbox";
  label?: string;
  labelFontWeight?: AtomTextTypes["fontWeight"];
  labelFontSize?: string;
  labelFontFamily?: string;
  height?: string;
  labelColor?: string;
  labelBackground?: string;
  formik?: FormikCustom<any>;
  value?: any;
  id?: string;
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
