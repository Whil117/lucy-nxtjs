import styled from "@emotion/styled";
import { motion } from "framer-motion";
import AtomInputTypes from "../types";

export const InputCheckboxStyled = styled(motion.input)<AtomInputTypes>`
  ${(props) => props?.customCSS}
`;
