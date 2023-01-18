import { css } from "@emotion/react";
import AtomText from "@Src/@atoms/AtomText";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import { InputTextStyled } from "../text/styled";
import AtomInputTypes from "../types";

const InputNumber = (props: AtomInputTypes) => {
  return (
    <AtomWrapper width="100%">
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
          `}
        >
          <InputTextStyled
            {...props}
            value={
              props?.formik?.values?.[`${props?.id}`] ?? props?.value ?? ""
            }
            onChange={(event) => {
              if (props?.maxLength) {
                if (event.target.value <= props?.maxLength) {
                  props?.formik?.handleChange?.(event);
                  props?.onChange?.(event);
                }
              } else {
                props?.formik?.handleChange?.(event);
                props?.onChange?.(event);
              }
            }}
          />
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default InputNumber;
