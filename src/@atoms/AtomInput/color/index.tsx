import { css } from "@emotion/react";
import { motion } from "framer-motion";
import InputError from "../error";
import AtomLabelInput from "../label";
import AtomInputTypes from "../types";

const InputColor = (props: AtomInputTypes) => {
  return (
    <motion.div
      css={css`
        width: 100%;
      `}
    >
      <AtomLabelInput {...props} />
      <motion.div
        css={css`
          padding: 5px;
          border-radius: 5px;
          height: 120px;
          &:hover {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
          &:focus {
            box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
              rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
              rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
            background-color: rgba(255, 255, 255, 0.2);
          }
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
        <motion.div
          css={css`
            height: 100%;
            display: flex;
            flex-direction: column;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
            input[type="color"] {
              border-radius: 8px;
            }
            border-radius: 8px;
          `}
        >
          <motion.input
            {...props}
            type="color"
            css={css`
              flex: 1;
              width: 100%;
              border: 0;
              margin: 0;
              resize: none;
              color: #333;
              background: none;
              font-size: 15px;
              line-height: 22px;
              -webkit-transform-style: preserve-3d;
              transform-style: preserve-3d;
              -webkit-font-smoothing: antialiased;
              opacity: 1;
              min-width: 0;
              user-select: text;
              letter-spacing: 0.01em;
              word-spacing: 0.02em;
              font-family: inherit;
              word-wrap: break-word;
              word-break: break-word;
              outline: none;
              height: 100%;
              color: var(--text-color, #1a1a1a);
              background-color: var(--input-background-color);
              ::placeholder {
                opacity: 0.8;
              }
              color-scheme: var(--input-date-color, light);
              border: none;
            `}
          />
        </motion.div>
      </motion.div>
      <InputError {...props} />
    </motion.div>
  );
};

export default InputColor;
