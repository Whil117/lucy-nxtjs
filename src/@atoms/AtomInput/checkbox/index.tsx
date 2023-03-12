import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import InputError from "../error";
import AtomLabelInput from "../label";
import AtomInputTypes from "../types";
import colorInputRadioCheck from "../utils/colorInputRadioCheck";

type Props = AtomInputTypes & {
  children?: ReactNode;
};

const InputCheckBox: FC<Props> = (props) => {
  return (
    <motion.div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <motion.div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
          justify-content: flex-end;
          align-items: center;
        `}
      >
        <AtomLabelInput {...props} />
        <motion.div
          css={css`
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            ${props?.customCSS?.(css)}
          `}
          whileTap={{
            scale: 0.99,
          }}
          whileHover={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.input
            {...props}
            type="checkbox"
            css={css`
              appearance: none;
              width: 18px;
              height: 18px;
              background-clip: content-box;
              background-color: ${colorInputRadioCheck(props)};
              accent-color: ${colorInputRadioCheck(props)};
              padding: 2.1px;
              border: 2px solid ${props.accentColor ?? "#07deff"};
              ${props?.disabled &&
              css`
                background-color: #e7e7e7;
                border: 2px solid #e7e7e7;
                opacity: 0.8;
              `}
            `}
          />
        </motion.div>
      </motion.div>
      <InputError {...props} />
    </motion.div>
  );
};

export default InputCheckBox;
