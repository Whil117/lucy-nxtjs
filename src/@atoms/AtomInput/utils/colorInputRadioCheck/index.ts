import { HextToRGB } from "@Src/@utils/isDarkLight";
import AtomInputTypes from "../../types";

const colorInputRadioCheck = (props: AtomInputTypes) =>
  props?.value
    ? props?.accentColor ?? "rgb(7, 222, 255)"
    : HextToRGB(props?.accentColor ?? "rgb(7, 222, 255)", 0.2)?.rgba;
export default colorInputRadioCheck;
