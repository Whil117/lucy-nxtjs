import { css } from "@emotion/react";
import { AtomText, AtomWrapper } from "@Src/@atoms";
import { useAtom } from "jotai";
import { FC, ReactNode } from "react";
import { SELECTED_ELEMENT_ATOM } from "../../../../center";
import CoordinatesXInput from "../../coordinates/coordinate_x";
import CoordinatesYInput from "../../coordinates/coordinate_y";

type Props = {
  children?: ReactNode;
};

const SideBarLayoutEditorRightElement: FC<Props> = () => {
  const [currElement, setCurrElement] = useAtom(SELECTED_ELEMENT_ATOM);
  return (
    <>
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
    </>
  );
};

export default SideBarLayoutEditorRightElement;
