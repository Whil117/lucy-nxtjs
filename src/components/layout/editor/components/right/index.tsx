import { css } from "@emotion/react";
import { AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";
import SideBarLayoutEditorRightElement from "./components/views/element";
import StandByPage from "./components/views/stand";

type Props = {
  children?: ReactNode;
};

const SideBarLayoutEditorRight: FC<Props> = () => {
  const currElement = {};
  return (
    <AtomWrapper
      backgroundColor="#252424"
      justifyContent="flex-start"
      customCSS={css`
        grid-column: 3;
        grid-row: 2;
      `}
      padding="20px"
    >
      {currElement?.id ? <SideBarLayoutEditorRightElement /> : <StandByPage />}
    </AtomWrapper>
  );
};

export default SideBarLayoutEditorRight;
