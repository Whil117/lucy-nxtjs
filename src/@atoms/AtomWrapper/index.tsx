import styled from "@emotion/styled";
import type AtomWrapperTypes from "./types";

export const AtomWrapper = styled.div<AtomWrapperTypes>`
  display: flex;
  height: ${(props) => props.height ?? "auto"};
  width: ${(props) => props.width ?? "auto"};
  gap: ${(props) => props.gap ?? "0px"};
  margin: ${(props) => props.margin ?? "0px"};
  max-width: ${(props) => props.maxWidth ?? "none"};
  background-color: ${(props) => props.backgroundColor ?? "transparent"};
  flex-wrap: ${(props) => props.flexWrap ?? "wrap"};
  flex-direction: ${(props) => props.flexDirection ?? "column"};
  align-items: ${(props) => props.alignItems ?? "none"};
  justify-content: ${(props) => props.justifyContent ?? "none"};
  padding: ${(props) => props.padding ?? "0px"};
  ${(props) => props?.customCSS};
`;
export default AtomWrapper;
