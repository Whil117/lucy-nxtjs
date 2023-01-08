import { SerializedStyles } from "@emotion/react";
import { AtomTextTypes } from "@Src/@atoms/AtomText/types";
import { FormikCustom } from "@Src/types/formik";
import { ChangeEvent } from "react";

type AtomInputRadioProps = {
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
};

export default AtomInputRadioProps;
