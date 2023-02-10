import { css } from "@emotion/react";
import { AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";
import CenterLayoutEditor from "./components/center";
import HeaderBarLayoutEditor from "./components/headers";
import SidebarLayoutEditorLeft from "./components/left";
import SideBarLayoutEditorRight from "./components/right";

type Props = {
  children?: ReactNode;
};

const LayoutEditor: FC<Props> = (props) => {
  return (
    <>
      <AtomWrapper
        customCSS={css`
          display: grid;
          grid-template-columns: 320px 1fr 320px;
          grid-template-rows: 67px 1fr;
          height: 100vh;
          overflow: hidden;
          overflow-y: hidden;
        `}
      >
        <HeaderBarLayoutEditor />
        <SidebarLayoutEditorLeft />
        <CenterLayoutEditor />
        <SideBarLayoutEditorRight />
      </AtomWrapper>
    </>
  );
};

export default LayoutEditor;
