import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { FC } from "react";
import AtomInputTypes from "../types";

const InputError: FC<AtomInputTypes> = (props) => {
  const { formik, id, error } = props;
  const errorFound = (formik?.errors?.[id] as string) ?? error;

  const isTouched = formik?.touched?.[id];

  return (
    isTouched && (
      <motion.p
        css={css`
          font-size: 11px;
          color: #f36;
          font-weight: bold;
        `}
      >
        {errorFound}
      </motion.p>
    )
  );
};

export default InputError;
