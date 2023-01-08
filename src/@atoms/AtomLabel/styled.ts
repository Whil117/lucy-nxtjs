import styled from "@emotion/styled";
import { motion } from "framer-motion";
import AtomLabelProps from "./types";

export const LabelInput = styled(motion.label)<AtomLabelProps>`
  ${(props) => props?.customCSS};
`;
