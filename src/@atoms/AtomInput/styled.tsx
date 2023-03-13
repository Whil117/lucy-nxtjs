import { css as CSSWITH } from "@emotion/react";
import styled from "@emotion/styled";
import AtomInputTypes from "./types";

const InputWithStyled = styled.input<AtomInputTypes>`
  ${({ css }) => css?.(CSSWITH)}
`;
export const InputWithSelect = styled.select<AtomInputTypes>(({ css }) =>
  css?.(CSSWITH)
);
export const InputWithTextArea = styled.textarea<AtomInputTypes>(({ css }) =>
  css?.(CSSWITH)
);

export default InputWithStyled;
