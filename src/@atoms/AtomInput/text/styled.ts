import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const InputTextStyled = styled(motion.input)`
  flex: 1;
  width: auto;
  line-height: 21px;
  border: 0;
  margin: 0;
  padding: 8px 12px;
  resize: none;
  color: #333;
  background: none;
  font-size: 15px;
  line-height: 22px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-font-smoothing: antialiased;
  opacity: 1;
  min-width: 0;
  user-select: text;
  letter-spacing: 0.01em;
  word-spacing: 0.02em;
  font-family: inherit;
  word-wrap: break-word;
  word-break: break-word;
  outline: none;
  height: 100%;
  color: var(--text-color, #1a1a1a);
  border-radius: 5px;
  background-color: var(--input-background-color);
  ::placeholder {
    opacity: 0.8;
  }
`;
