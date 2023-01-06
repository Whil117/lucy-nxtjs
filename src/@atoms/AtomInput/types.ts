import { AtomTextTypes } from "../AtomText/types";

type AtomInputTypes = {
  type: "text" | "date" | "color" | "radio";
  label?: string;
  labelFontWeight?: AtomTextTypes["fontWeight"];
  labelFontSize?: string;
  labelFontFamily?: string;
  labelColor?: string;
  labelBackground?: string;
};
export default AtomInputTypes;
