import InputCheckBox from "./checkbox";
import InputRadio from "./radio";
import InputText from "./text";
import InputTextBox from "./textbox";
import AtomInputTypes from "./types";

const inputTypes = {
  text: InputText,
  radio: InputRadio,
  checkbox: InputCheckBox,
  textbox: InputTextBox,
};

type AtomInputProps = AtomInputTypes & {
  type: keyof typeof inputTypes;
};

const AtomInput = (props: AtomInputProps) => {
  const Input = inputTypes[props?.type] ?? InputText;
  return <Input {...props} />;
};

export default AtomInput;
