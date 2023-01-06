import { css } from "@emotion/react";
import AtomText from "@Src/@atoms/AtomText";
import AtomWrapper from "@Src/@atoms/AtomWrapper";
import { FC } from "react";
import AtomInputTypes from "../types";
import { InputTextStyled } from "./styled";

const InputText: FC<AtomInputTypes> = (props) => {
  return (
    <AtomWrapper>
      {props?.label && (
        <AtomText
          customCSS={css`
            font-family: ${props?.labelFontFamily};
            font-weight: ${props?.labelFontWeight};
            font-size: ${props?.labelFontSize};
            color: ${props?.labelColor};
          `}
        >
          {props?.label}
        </AtomText>
      )}
      <AtomWrapper
        customCSS={css`
          display: flex;
          flex-direction: column;
          padding: 8px 12px;
          background: #fff;
          border: 1px solid #e6e6e6;
          cursor: text;
          box-sizing: border-box;
          border-radius: 5px;
        `}
      >
        <InputTextStyled {...props} />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default InputText;
