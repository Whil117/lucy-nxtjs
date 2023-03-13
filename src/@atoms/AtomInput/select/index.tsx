import { css } from "@emotion/react";
import { motion } from "framer-motion";
import InputError from "../error";
import AtomLabelInput from "../label";
import { InputWithSelect } from "../styled";
import AtomInputTypes from "../types";

const InputSelect = (props: AtomInputTypes) => {
  const { onError, options, css: InputCSS, customCSSOption, onExecute } = props;
  const optionsWithFormik = options?.(props);
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
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            height: 100%;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
            ${Boolean(onError?.()) &&
            css`
              border: 1px solid #f36;
            `}

            ${!Boolean(onError?.()) &&
            css`
              border: 1.8px solid ${props?.accentColor ?? "#ffffff7f"};
            `}
          `}
        >
          <InputWithSelect
            {...props}
            css={() => css`
              flex: 1;
              width: 100%;
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
              outline: none;
              height: 100%;
              color: var(--text-color, #1a1a1a);
              border-radius: 5px;
              background-color: var(--input-background-color);
              ::placeholder {
                opacity: 0.8;
              }
              min-width: 0;
              ${InputCSS?.(css)}
            `}
            {...onExecute?.()}
          >
            <motion.option
              value="DEFAULT"
              disabled
              css={css`
                ${customCSSOption?.(css)}
              `}
            >
              {props?.defaultTextValue ?? "Selecciona una opción"}
            </motion.option>
            {optionsWithFormik &&
              optionsWithFormik.length > 0 &&
              optionsWithFormik?.map?.((e) => (
                <motion.option
                  value={e.value}
                  key={e.id}
                  css={css`
                    ${customCSSOption?.(css)}
                  `}
                >
                  {e.label}
                </motion.option>
              ))}
          </InputWithSelect>
        </motion.div>
      </motion.div>
      <InputError {...props} />
    </motion.div>
  );
};

export default InputSelect;
