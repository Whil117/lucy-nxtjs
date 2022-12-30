import styled from "@emotion/styled";
import type AtomImageTypes from "./types";

export const AtomImageWrapperStyled = styled.div<AtomImageTypes>`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const AtomImageImgStyled = styled.img<AtomImageTypes>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AtomImageStyled = styled.div<AtomImageTypes>`
  width: ${({ width }) => width || `100%`};
  max-width: ${({ maxWidth }) => maxWidth || `initial`};
  height: ${({ height }) => height || `100%`};
  max-height: ${({ maxHeight }) => maxHeight || `initial`};
  margin: ${({ margin }) => margin || `0`};
  position: ${({ position }) => position || `initial`};
  left: ${({ left }) => left || `initial`};
  top: ${({ top }) => top || `initial`};
  right: ${({ right }) => right || `initial`};
  bottom: ${({ bottom }) => bottom || `initial`};
  img {
    object-fit: ${({ objectFit }) => objectFit || `cover`};
    object-position: ${({ objectPosition }) =>
      objectPosition || `center center`};
    border-radius: ${({ borderRadius }) => borderRadius ?? "0px"};
  }
  z-index: ${({ zIndex }) => zIndex || `initial`};

  ${({ customCSS }) => customCSS};
`;
