import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { FC } from "react";
import AtomInputTypes from "../types";

const AtomLabelInput: FC<AtomInputTypes> = (props) => {
  return (
    Boolean(props?.label) && (
      <motion.label
        htmlFor={props?.id}
        color={props?.labelColor ?? ""}
        css={css`
          cursor: pointer;
          padding: 5px;
          font-family: ${props?.labelFontFamily};
          font-weight: ${props?.labelFontWeight ?? "600"};
          font-size: ${props?.labelFontSize ?? "12px"};
          ${props?.disabled &&
          css`
            opacity: 0.5;
          `}
        `}
      >
        {props?.label}
      </motion.label>
    )
  );
};

export default AtomLabelInput;
