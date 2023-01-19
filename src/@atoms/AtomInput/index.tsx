import InputCheckBox from "./checkbox";
import InputColor from "./color";
import InputDate from "./date";
import InputFile from "./file";
import InputNumber from "./number";
import InputRadio from "./radio";
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
  file: InputFile,
};

type AtomInputProps = AtomInputTypes<keyof typeof inputTypes> & {
  type: keyof typeof inputTypes;
};

const AtomInput = (props: AtomInputProps) => {
  const Input = inputTypes[props?.type] ?? InputText;
  return <Input {...props} />;
};

export default AtomInput;
