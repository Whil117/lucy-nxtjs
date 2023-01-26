import { css } from "@emotion/react";
import { LabelInput } from "@Src/@atoms/AtomLabel/styled";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import { FC, ReactNode } from "react";
import AtomInputTypes from "../types";
import colorInputRadioCheck from "../utils/colorInputRadioCheck";
import { InputCheckboxStyled } from "./styled";

type Props = AtomInputTypes & {
  children?: ReactNode;
};

const InputCheckBox: FC<Props> = (props) => {
  return (
    <AtomWrapper justifyContent="flex-end" flexDirection="row-reverse">
      {props?.label && (
        <LabelInput
          htmlFor={props?.id}
          color={props?.labelColor ?? ""}
          customCSS={css`
            user-select: none;
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
        <InputCheckboxStyled
          {...props}
          value={
            props?.formik && props?.id
              ? props?.formik?.values?.[props?.id]
              : props?.value ?? false
          }
          onClick={() => {
            props?.formik?.setFieldValue?.(
              `${props?.id}`,

              !props?.formik?.values?.[props?.id]
            );
            props?.onClick?.();
          }}
          customCSS={css`
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
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default InputCheckBox;
