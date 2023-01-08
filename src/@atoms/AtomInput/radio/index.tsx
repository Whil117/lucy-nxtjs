import { css } from "@emotion/react";
import { LabelInput } from "@Src/@atoms/AtomLabel/styled";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import { HextToRGB } from "@Src/@utils/isDarkLight";
import AtomInputTypes from "../types";

const InputRadio = (props: AtomInputTypes) => {
  return (
    <AtomWrapper
      flexDirection="row-reverse"
      onClick={() => {
        !props?.disabled && props?.onIsChecked?.(props?.formik);
      }}
    >
      {props?.label && (
        <LabelInput
          htmlFor={props?.id}
          color={props?.labelColor ?? ""}
          customCSS={css`
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
        </LabelInput>
      )}
      <AtomWrapper
        width="max-content"
        alignItems="center"
        justifyContent="center"
        customCSS={css`
          padding: 4px;
          cursor: pointer;
          border-radius: 5px;
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
            appearance: none;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-clip: content-box;
            background-color: transparent;
            background-color: ${props?.isChecked(props?.formik)
              ? props?.accentColor ?? "rgb(7, 222, 255)"
              : HextToRGB(props?.accentColor ?? "rgb(7, 222, 255)", 0.2)?.rgba};
            padding: 3px;

            border: 2px solid ${props.accentColor ?? "#07deff"};
            ${props?.disabled &&
            css`
              background-color: #e7e7e7;
              border: 2px solid #e7e7e7;
              opacity: 0.8;
            `}
          `}
        ></AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default InputRadio;
