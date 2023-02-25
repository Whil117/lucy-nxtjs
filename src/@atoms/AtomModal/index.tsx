import { FC, ReactNode, useEffect, useRef } from "react";
import AtomWrapper from "../AtomWrapper";

type Props = {
  children: ReactNode;
  onCloseShow: () => void;
  isShow: boolean;
};

const AtomModal: FC<Props> = ({ children, onCloseShow, isShow }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onCloseShow?.();
      }
    };

    document.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      document.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, [ref]);
  return isShow ? (
    <AtomWrapper
      customCSS={(css) => css`
        position: fixed;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        background-color: #00000010;
        backdrop-filter: blur(12px);
        z-index: 9999;
        align-items: center;
        justify-content: center;
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AtomWrapper
        backgroundColor="white"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="50%"
        height="50%"
        ref={ref}
        borderRadius="4px"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </AtomWrapper>
    </AtomWrapper>
  ) : null;
};

export default AtomModal;
