import styled from "@emotion/styled";
import isDarkLight from "@Src/@utils/isDarkLight";
import type { AtomTextTypes } from "./types";

const AtomText = styled.span<AtomTextTypes>`
  line-height: 150%;
  box-sizing: border-box;
  font-family: ${(props) => props?.font || `'Open Sans', sans-serif`};
  color: ${(props) => props?.color || `#1a1a1a`};
  text-align: ${(props) => props?.textAlign || `left`};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  color: ${({ backgroundColor, color }) =>
    color ?? isDarkLight(backgroundColor ?? "#ffffff")};
  padding: ${(props) => props?.padding || `0px 0px 0px 0px`};
  opacity: ${({ opacity }) => opacity ?? "1"};
  margin: ${(props) => props?.margin || `0px 0px 0px 0px`};
  width: ${(props) => props?.width || `auto`};
  max-width: ${(props) => props?.maxWidth || `auto`};
  font-size: ${(props) => props?.fontSize || `14px`};
  font-weight: ${(props) => props?.fontWeight || "normal"};
  text-decoration: ${(props) => props?.textDecoration || `none`};
  cursor: ${(props) => props?.cursor || `pointer`};
  * {
    cursor: ${(props) => props?.cursor || `pointer`};
  }
  ${(props) => props?.customCSS};
`;
export default AtomText;
