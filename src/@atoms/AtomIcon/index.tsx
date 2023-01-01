import styled from "@emotion/styled";
import { motion } from "framer-motion";
import useSWR from "swr";
import type AtomIconTypes from "./types";

export const AtomIconStyled = styled(motion.div)<AtomIconTypes>`
  display: flex;
  width: max-content;
  height: max-content;
  svg {
    width: ${({ width }) => width || `34px`};
    height: ${({ height }) => height || `34px`};
    path {
      fill: ${({ color }) => color || `var(--icon-color,#1a1a1a)`}!important;
    }
    polygon {
      fill: ${({ color }) => color || `var(--icon-color,#1a1a1a)`}!important;
    }
    circle {
      fill: ${({ color }) => color || `var(--icon-color,#1a1a1a)`}!important;
    }
  }

  ${({ customCSS }) => customCSS};
`;

const fetcher = (url: string) => fetch(url).then((res) => res.text());

const AtomIcon = (props: AtomIconTypes) => {
  const { data = "" } = useSWR(
    props.src ??
      "https://res.cloudinary.com/whil/image/upload/v1661402006/Group_101_a4dcb6.svg",
    fetcher
  );

  return (
    <AtomIconStyled
      {...props}
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    />
  );
};

export default AtomIcon;
