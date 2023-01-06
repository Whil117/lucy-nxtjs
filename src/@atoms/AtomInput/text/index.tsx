import { css } from "@emotion/react";
import AtomText from "@Src/@atoms/AtomText";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import AtomInputTypes from "../types";
import { InputTextStyled } from "./styled";

const InputText = (props: AtomInputTypes) => {
  return (
    <AtomWrapper width="200px">
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
            transition: 0.05ms;
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
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.95,
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
            onChange={(event) =>
              props?.formik?.setFieldValue?.(
                `${props?.id}`,
                event.target.value
              ) ?? props?.onChange?.(event)
            }
          />
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default InputText;
