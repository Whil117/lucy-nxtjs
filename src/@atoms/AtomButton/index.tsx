import { css } from "@emotion/react";
import styled from "@emotion/styled";
import isDarkLight, { HextToRGB } from "@Src/@utils/isDarkLight";
import { motion } from "framer-motion";
import AtomButtonTypes from "./types";

const AtomButton = styled(motion.button)<AtomButtonTypes>`
  ////////////////////////////// DISPLAY //////////////////////////////
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? "column"};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? "wrap"};
  gap: ${({ gap }) => gap ?? "0px"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};

  ////////////////////////////// BOX //////////////////////////////

  width: ${({ width }) => width ?? "max-content"};
  height: ${({ height }) => height ?? "max-content"};
  padding: ${({ padding }) => padding ?? "15px 20px"};
  margin: ${({ margin }) => margin ?? "0px"};
  box-sizing: border-box;

  ////////////////////////////// COLORS //////////////////////////////

  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? "#e7e7e7" : backgroundColor ?? "#e4e4e4"};

  ////////////////////////////// COLORS //////////////////////////////

  border-radius: ${({ borderRadius }) => borderRadius ?? "12px"};
  border: ${({ border }) => border ?? "none"};

  ${({
    focus,
    backgroundColor,
    backgroundLinearGradient,
    color,
    disabled,
    cursor,
  }) => {
    const hex = HextToRGB(
      backgroundColor ??
        backgroundLinearGradient?.primary ??
        backgroundLinearGradient?.secondary ??
        ("#e4e4e4" as string)
    );

    const convert = `${hex.r} ${hex.g} ${hex.b} / 35%`;

    return css`
      cursor: ${disabled ? "not-allowed" : cursor ?? "pointer"};

      color: ${color ??
      isDarkLight(
        backgroundColor ?? backgroundLinearGradient?.primary ?? "#f7f8f8"
      )};

      background: linear-gradient(
        ${backgroundLinearGradient?.rotate},
        ${backgroundLinearGradient?.primary},
        ${backgroundLinearGradient?.secondary}
      );
      &:hover {
        box-shadow: rgb(${`${hex.r} ${hex.g} ${hex.b} / 35%`}) 0px 0px 0px 4px;
      }
      &:focus {
        box-shadow: rgb(${`${hex.r} ${hex.g} ${hex.b} / 35%`}) 0px 0px 0px 4px;
      }

      ${focus &&
      css`
        box-shadow: rgb(${convert}) 0px 0px 0px 4px;
      `}
      ${disabled &&
      css`
        transform: scale(1) !important;
        scale: 1;
        opacity: 0.5;
      `}
    `;
  }}

  ////////////////////////////// FONTS //////////////////////////////
  font-size: ${({ fontSize }) => fontSize ?? "12px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "bold"};
  font-family: inherit;
  ////////////////////////////// FONTS //////////////////////////////

  outline: none;
  ${({ customCSS }) => customCSS}
`;
AtomButton.defaultProps = {
  whileHover: {
    scale: 1.05,
  },
  whileTap: { scale: 0.9 },
  children: <>DEFAULT TEXT</>,
};

export default AtomButton;
