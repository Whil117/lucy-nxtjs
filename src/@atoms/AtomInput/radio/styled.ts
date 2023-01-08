import { css } from "@emotion/react";
import styled from "@emotion/styled";
import isDarkLight, { HextToRGB } from "@Src/@utils/isDarkLight";
import { motion } from "framer-motion";
import AtomInputTypes from "../types";

export const InputRadioStyled = styled(motion.input)<AtomInputTypes>`
  height: 18px;
  width: 18px;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-clip: content-box;
  border: 2px solid rgba(255, 252, 229, 1);
  background-color: rgba(255, 252, 229, 1);

  padding: 4px;
  border: 2px solid #000;
  ${({ accentColor }) => css`
    accent-color: ${accentColor ?? "#07deff"};
  `}
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
`;
