import { css } from "@emotion/react";
import { AtomText, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";
import CoordinatesXInput from "./components/coordinates/coordinate_x";
import CoordinatesYInput from "./components/coordinates/coordinate_y";

type Props = {
  children?: ReactNode;
};

const SideBarLayoutEditorRight: FC<Props> = () => {
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
      <AtomText color="white">Properties</AtomText>
      <AtomWrapper
        height="auto"
        customCSS={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          flex: 1;
        `}
      >
        <CoordinatesXInput />
        <CoordinatesYInput />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SideBarLayoutEditorRight;
