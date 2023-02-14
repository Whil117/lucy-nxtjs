import { css } from "@emotion/react";
import { AtomText, AtomWrapper } from "@Src/@atoms";
import { useAtom } from "jotai";
import { FC, ReactNode } from "react";
import { SELECTED_ELEMENT_ATOM } from "../center";
import CoordinatesXInput from "./components/coordinates/coordinate_x";
import CoordinatesYInput from "./components/coordinates/coordinate_y";
import StandByPage from "./components/views/stand";

type Props = {
  children?: ReactNode;
};

const SideBarLayoutEditorRight: FC<Props> = () => {
  const [currElement, setCurrElement] = useAtom(SELECTED_ELEMENT_ATOM);
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
      <StandByPage />
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
        {currElement?.id}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default SideBarLayoutEditorRight;
