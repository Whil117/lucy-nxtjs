import { css } from "@emotion/react";
import { AtomText, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SideBarLayoutEditorRight: FC<Props> = () => {
  return (
    <AtomWrapper
      backgroundColor="#252424"
      customCSS={css`
        grid-column: 3;
        grid-row: 2;
      `}
    >
      <AtomText>WTF</AtomText>
    </AtomWrapper>
  );
};

export default SideBarLayoutEditorRight;
