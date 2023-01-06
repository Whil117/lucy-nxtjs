import { ReactNode } from "react";
import InputText from "./text";
import AtomInputTypes from "./types";

type Props = AtomInputTypes & {
  children?: ReactNode;
};

const inputTypes = {
  text: InputText,
};

const AtomInput = (props: Props) => {
  const Input = inputTypes[props?.type] ?? InputText;
  return <Input {...props} />;
};

export default AtomInput;
