import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import AtomWrapper from "../AtomWrapper";
import AtomLoaderProps from "./types";

const AtomLoaderCircle = styled(motion.span)<AtomLoaderProps>`
  /* Spinner size and color */
  width: ${({ type }) => typesLoaders[type ?? "small"]};
  height: ${({ type }) => typesLoaders[type ?? "small"]};
  border-top-color: ${({ colorLoad }) =>
    colorLoad ?? "var(--loader-color,#1a1a1a)"};
  border-left-color: ${({ colorLoad }) => colorLoad ?? "#1a1a1a"};
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: ${({ type }) => borderWidthType[type ?? "small"]};
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
`;
const FullScreen = {
  fullscreen: css`
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    position: fixed;
    z-index: 9999;
    backdrop-filter: blur(12px);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

type Props = {
  [key in AtomLoaderProps["type"]]: string;
};

const borderWidthType: Props = {
  small: "3px",
  large: "7px",
  medium: "5px",
  fullscreen: "10px",
};

const typesLoaders: Props = {
  small: "1.5rem",
  large: "5rem",
  medium: "3.5rem",
  fullscreen: "100px",
};

AtomLoaderCircle.defaultProps = {
  animate: {
    rotate: 360,
  },
  transition: { ease: "linear", duration: 1, repeat: Infinity },
};

const AtomLoader = (props: AtomLoaderProps) => {
  return (
    props?.isLoading && (
      <AtomWrapper
        backgroundColor={props?.backgroundColor ?? ""}
        customCSS={(css) => css`
          ${FullScreen[props?.type as keyof typeof FullScreen] ?? null}
          ${props?.customCSS?.(css)}
        `}
      >
        <AtomLoaderCircle {...props} />
      </AtomWrapper>
    )
  );
};

export default AtomLoader;
