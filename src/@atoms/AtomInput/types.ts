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
  id?: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: ChangeEvent<any>) => void;
};
export default AtomInputTypes;
