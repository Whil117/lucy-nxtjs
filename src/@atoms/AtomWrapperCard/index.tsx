import { css } from "@emotion/react";
import { FC, ReactNode } from "react";
import AtomWrapper from "../AtomWrapper";
import AtomWrapperTypes from "../AtomWrapper/types";

type Props = AtomWrapperTypes & {
  children?: ReactNode;
};

const AtomWrapperCard: FC<Props> = (props) => {
  const { children } = props;
  return (
    <AtomWrapper
      customCSS={() => css`
        padding: 5px;
        border-radius: 20px;
        border-color: rgba(255, 255, 255, 0.1);
        box-shadow: rgb(0 0 0 / 4%) 0px 0.60323px 3.01615px -1.25px,
          rgb(0 0 0 / 3%) 0px 2.29021px 11.4511px -2.5px,
          rgb(0 0 0 / 1%) 0px 10px 50px -3.75px;
        background-color: rgba(255, 255, 255, 0.2);
      `}
    >
      <AtomWrapper
        gap="20px"
        padding="10px"
        {...props}
        customCSS={() => css`
          border-bottom-width: 1px;
          border-color: rgba(255, 255, 255, 0.5);
          border-left-width: 1px;
          border-right-width: 1px;
          border-style: solid;
          border-top-width: 1px;
          place-content: flex-start;
          align-items: flex-start;
          background: var(--card-background);
          border-radius: 15px;
          box-shadow: rgb(0 0 0 / 10%) 0px 0.60323px 3.01615px -0.833333px,
            rgb(0 0 0 / 10%) 0px 2.29021px 11.4511px -1.66667px,
            rgb(0 0 0 / 10%) 0px 10px 50px -2.5px;
          height: min-content;
          overflow: hidden;
          position: relative;
          will-change: transform;
          ${props.customCSS?.()}
        `}
      >
        {children}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default AtomWrapperCard;
