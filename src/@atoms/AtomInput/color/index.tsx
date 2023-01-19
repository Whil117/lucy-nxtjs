import { css } from "@emotion/react";
import AtomText from "@Src/@atoms/AtomText";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import AtomInputTypes from "../types";
import { InputColorStyled } from "./styled";

const InputColor = (props: AtomInputTypes) => {
  return (
    <AtomWrapper width="100%" cursor="pointer">
      {props?.label && (
        <AtomText
          color={props?.labelColor ?? ""}
          customCSS={css`
            padding: 5px;
            font-family: ${props?.labelFontFamily};
            font-weight: ${props?.labelFontWeight ?? "600"};
            font-size: ${props?.labelFontSize ?? "12px"};
          `}
        >
          {props?.label}
        </AtomText>
      )}
      <AtomWrapper
        height="120px"
        {...props}
        customCSS={css`
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
        <AtomWrapper
          height="100%"
          customCSS={css`
            display: flex;
            flex-direction: column;
            padding: 8px 12px;
            cursor: text;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 5px;
            padding: 0px;
            box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
              rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
              rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
            border: 1px solid #ffffff7f;
            input[type="color"] {
              border-radius: 8px;
            }
            border-radius: 8px;

            .InputClass {
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
              outline: none;
              height: 100%;
              color: var(--text-color, #1a1a1a);
              background-color: var(--input-background-color);
              ::placeholder {
                opacity: 0.8;
              }
              cursor: pointer;
            }
          `}
        >
          <InputColorStyled
            {...props}
            value={
              props?.formik?.values?.[`${props?.id}`] ?? props?.value ?? ""
            }
            onChange={(event) => {
              props?.formik?.handleChange?.(event);
              props?.onChange?.(event);
            }}
            customCSS={css`
              color-scheme: var(--input-date-color, light);
            `}
          />
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default InputColor;
