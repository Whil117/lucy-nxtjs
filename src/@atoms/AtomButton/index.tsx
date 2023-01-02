import { css } from "@emotion/react";
import styled from "@emotion/styled";
import isDarkLight, { HextToRGB } from "@Src/@utils/isDarkLight";
import { motion } from "framer-motion";
import type AtomButtonTypes from "./types";

const AtomButton = styled(motion.button)<AtomButtonTypes>`
  ////////////////////////////// DISPLAY //////////////////////////////
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? "column"};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? "wrap"};
  gap: ${({ gap }) => gap ?? "0px"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  ////////////////////////////// DISPLAY //////////////////////////////

  ////////////////////////////// BOX //////////////////////////////

  width: ${({ width }) => width ?? "max-content"};
  height: ${({ height }) => height ?? "max-content"};
  padding: ${({ padding }) => padding ?? "15px 20px"};
  margin: ${({ margin }) => margin ?? "0px"};
  box-sizing: border-box;

  ////////////////////////////// BOX //////////////////////////////

  ////////////////////////////// COLORS //////////////////////////////
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? "#e7e7e7" : backgroundColor ?? "#e4e4e4"};
  color: ${({ backgroundColor, color }) =>
    color ?? isDarkLight(backgroundColor ?? "#f7f8f8")};

  ////////////////////////////// COLORS //////////////////////////////

  ////////////////////////////// BORDERS //////////////////////////////

  border-radius: ${({ borderRadius }) => borderRadius ?? "12px"};
  border: ${({ border }) => border ?? "none"};
  box-shadow: rgb(
      ${({ backgroundColor }) => {
        const hex = HextToRGB(backgroundColor as string);
        return `${hex.r} ${hex.g} ${hex.b} / 15%`;
      }}
    )
    0px 0px 0px 0px;
  &:hover {
    transition: 0.05ms;
    box-shadow: rgb(
        ${({ backgroundColor }) => {
          const hex = HextToRGB(backgroundColor ?? ("#e4e4e4" as string));
          return `${hex.r} ${hex.g} ${hex.b} / 35%`;
        }}
      )
      0px 0px 0px 4px;
  }
  &:focus {
    box-shadow: rgb(
        ${({ backgroundColor }) => {
          const hex = HextToRGB(backgroundColor ?? ("#e4e4e4" as string));
          return `${hex.r} ${hex.g} ${hex.b} / 35%`;
        }}
      )
      0px 0px 0px 4px;
  }
  cursor: ${({ cursor, disabled }) =>
    disabled ? "not-allowed" : cursor ?? "pointer"};

  ${({ focus, backgroundColor }) => {
    const hex = HextToRGB(backgroundColor ?? ("#e4e4e4" as string));
    const convert = `${hex.r} ${hex.g} ${hex.b} / 35%`;
    return (
      focus &&
      css`
        box-shadow: rgb(${convert}) 0px 0px 0px 4px;
      `
    );
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      transform: scale(1) !important;
      scale: 1;
      opacity: 0.5;
    `}

  /* 18 240 252 / 15% */

  ////////////////////////////// BORDERS //////////////////////////////

  ////////////////////////////// FONTS //////////////////////////////
  font-size: ${({ fontSize }) => fontSize ?? "12px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "600"};
  ////////////////////////////// FONTS //////////////////////////////

  outline: none;
  ${({ customCSS }) => customCSS}
`;
AtomButton.defaultProps = {
  whileHover: {
    scale: 1.05,
  },
  whileTap: { scale: 0.9 },
  fontWeight: "500",
  children: <>DEFAULT TEXT</>,
};

export default AtomButton;
