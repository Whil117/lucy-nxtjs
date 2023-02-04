import { css } from "@emotion/react";
import { motion } from "framer-motion";
import AtomInputTypes from "../types";

const InputDate = (props: AtomInputTypes) => {
  return (
    <motion.div
      css={css`
        width: 100%;
      `}
    >
      {props?.label && (
        <motion.label
          color={props?.labelColor ?? ""}
          htmlFor={props?.id}
          css={css`
            padding: 5px;
            font-family: ${props?.labelFontFamily};
            font-weight: ${props?.labelFontWeight ?? "600"};
            font-size: ${props?.labelFontSize ?? "12px"};
            cursor: pointer;
          `}
        >
          {props?.label}
        </motion.label>
      )}
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
          ${props?.customCSS?.()}
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
            type="date"
            name={`${props?.id}`}
            css={css`
              flex: 1;
              width: auto;
              line-height: 21px;
              border: 0;
              margin: 0;
              padding: 8px 12px;
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
              min-width: 0;
              width: -webkit-fill-available;
              position: relative;
              cursor: pointer;
              outline: none;
              height: 100%;
              color: var(--text-color, #1a1a1a);
              color-scheme: var(--input-date-color, light);
              border-radius: 5px;
              background-color: var(--input-background-color);
              ::placeholder {
                opacity: 0.8;
              }
            `}
            value={
              props?.formik?.values?.[`${props?.id}`] ?? props?.value ?? ""
            }
            onChange={(event) => {
              props?.formik?.handleChange?.(event);
              props?.onChange?.(event);
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InputDate;
