import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { FC } from "react";
import AtomInputTypes from "../types";

const InputError: FC<AtomInputTypes> = (props) => {
  const { onError } = props;

  return (
    Boolean(onError?.()) && (
      <motion.p
        css={css`
          font-size: 11px;
          color: #f36;
          font-weight: bold;
        `}
      >
        {onError?.()}
      </motion.p>
    )
  );
};

export default InputError;
