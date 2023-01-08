import { SerializedStyles } from "@emotion/react";
import { FormikCustom } from "@Src/types/formik";
import { ChangeEvent } from "react";
import { AtomTextTypes } from "../AtomText/types";

type AtomInputTypes = {
  type: "text" | "date" | "color" | "radio";
  label?: string;
  labelFontWeight?: AtomTextTypes["fontWeight"];
  labelFontSize?: string;
  labelFontFamily?: string;
  labelColor?: string;
  labelBackground?: string;
  formik?: FormikCustom<any>;
  value?: string | boolean | number;
  id?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  customCSS?: SerializedStyles;
  accentColor?: string;
  onIsChecked?: (formik?: FormikCustom<any>) => void;
  isChecked?: (formik?: FormikCustom<any>) => boolean;
  disabled?: boolean;
};
export default AtomInputTypes;
