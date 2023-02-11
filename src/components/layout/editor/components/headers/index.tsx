import { css } from "@emotion/react";
import { AtomText, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const HeaderBarLayoutEditor: FC<Props> = () => {
  return (
    <AtomWrapper
      backgroundColor="#000000"
      customCSS={css`
        grid-column: 1 / 4;
        grid-row: 1;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        padding: 10px;
        justify-content: flex-start;
      `}
    >
      <AtomText color="white" fontWeight="bold" fontSize="22px">
        Harmony Alph.2
      </AtomText>
    </AtomWrapper>
  );
};

export default HeaderBarLayoutEditor;
