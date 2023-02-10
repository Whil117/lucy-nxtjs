import { css } from "@emotion/react";
import { AtomText, AtomWrapper } from "@Src/@atoms";
import { useAtomValue } from "jotai";
import { FC, ReactNode } from "react";
import { ELEMENTS_ATOM } from "../center";

type Props = {
  children?: ReactNode;
};

const SidebarLayoutEditorLeft: FC<Props> = () => {
  const elements = useAtomValue(ELEMENTS_ATOM);
  return (
    <AtomWrapper
      backgroundColor="#252424"
      justifyContent="flex-start"
      padding="20px"
      customCSS={css`
        grid-column: 1;
        grid-row: 2;
      `}
    >
      <AtomText color="white" fontWeight="bold" fontSize="22px">
        Harmony Alph.2
      </AtomText>
      <AtomWrapper>
        <AtomText color="white">Elements</AtomText>
        {/* <AtomText color="white">{JSON.stringify(elements, null, 2)}</AtomText> */}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SidebarLayoutEditorLeft;
