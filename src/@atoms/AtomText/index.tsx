import { css } from "@emotion/react";
import styled from "@emotion/styled";
import isDarkLight from "@Src/@utils/isDarkLight";
import { motion } from "framer-motion";
import type { AtomTextTypes } from "./types";

const AtomText = styled(motion.span)<AtomTextTypes>`
  line-height: 150%;
  box-sizing: border-box;
  font-family: ${(props) => props?.fontFamily};
  text-align: ${(props) => props?.textAlign || `left`};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  color: ${({ color, backgroundColor }) =>
    color ??
    `var(
      --text-color,
      ${color ?? isDarkLight(backgroundColor ?? "#ffffff")}
    )`};
  padding: ${(props) => props?.padding || `0px 0px 0px 0px`};
  opacity: ${({ opacity }) => opacity ?? "1"};
  margin: ${(props) => props?.margin || `0px 0px 0px 0px`};
  width: ${(props) => props?.width || `auto`};
  max-width: ${(props) => props?.maxWidth || `auto`};
  font-size: ${(props) => props?.fontSize || `14px`};
  font-weight: ${(props) => props?.fontWeight || "normal"};
  text-decoration: ${(props) => props?.textDecoration || `none`};
  cursor: ${(props) => props?.cursor || `text`};
  * {
    cursor: ${(props) => props?.cursor || `text`};
  }
  ${(props) => props?.customCSS?.(css)};
`;
export default AtomText;
