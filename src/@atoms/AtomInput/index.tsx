import InputCheckBox from "./checkbox";
import InputRadio from "./radio";
import InputText from "./text";
import AtomInputTypes from "./types";

const inputTypes = {
  text: InputText,
  radio: InputRadio,
  checkbox: InputCheckBox,
};

type AtomInputProps = AtomInputTypes & {
  type: keyof typeof inputTypes;
};

const AtomInput = (props: AtomInputProps) => {
  const Input = inputTypes[props?.type] ?? InputText;
  return <Input {...props} />;
};

export default AtomInput;
