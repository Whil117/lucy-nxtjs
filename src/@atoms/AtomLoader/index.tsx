import styled from "@emotion/styled";
import { motion } from "framer-motion";
import type AtomLoaderProps from "./types";

const AtomLoader = styled(motion.span)<AtomLoaderProps>`
  /* Spinner size and color */
  width: ${({ type }) => typesLoaders[type ?? "small"]};
  height: ${({ type }) => typesLoaders[type ?? "small"]};
  border-top-color: ${({ colorLoad }) =>
    colorLoad ?? "var(--loader-color,#1a1a1a)"};
  border-left-color: ${({ colorLoad }) => colorLoad ?? "#1a1a1a"};
  /* Additional spinner styles */
  /* animation: spinner 400ms linear infinite; */
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: ${({ type }) => borderWidthType[type ?? "small"]};
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
`;
type Props = {
  [key in AtomLoaderProps["type"]]: string;
};

const borderWidthType: Props = {
  small: "2.5px",
  large: "7px",
  medium: "5px",
};

const typesLoaders: Props = {
  small: "1.5rem",
  large: "5rem",
  medium: "3.5rem",
};
AtomLoader.defaultProps = {
  animate: {
    rotate: 360,
  },
  transition: { ease: "linear", duration: 1, repeat: Infinity },
};

export default AtomLoader;
