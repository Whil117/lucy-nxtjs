import { HTMLInputTypeAttribute } from "react";
import InputCheckBox from "./checkbox";
import InputColor from "./color";
import InputDate from "./date";
import InputNumber from "./number";
import InputRadio from "./radio";
import InputSelect from "./select";
import InputText from "./text";
import InputTextBox from "./textbox";
import AtomInputTypes from "./types";

const inputTypes = {
  text: InputText,
  radio: InputRadio,
  checkbox: InputCheckBox,
  textbox: InputTextBox,
  color: InputColor,
  date: InputDate,
  month: InputDate,
  number: InputNumber,
  password: InputText,
  select: InputSelect,
};

type AtomInputProps = AtomInputTypes & {
  type?: HTMLInputTypeAttribute;
};

const AtomInput = (props: AtomInputProps) => {
  const Input = inputTypes[props?.type] ?? InputText;
  return <Input {...props} />;
};

export default AtomInput;
