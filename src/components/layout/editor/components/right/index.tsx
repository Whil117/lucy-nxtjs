import { css } from "@emotion/react";
import { AtomText, AtomWrapper } from "@Src/@atoms";
import { FC, ReactNode } from "react";
import ExportCanvas from "../headers/components/export";
import CoordinatesXInput from "./components/coordinates/coordinate_x";
import CoordinatesYInput from "./components/coordinates/coordinate_y";
import CStylesAtom from "./components/style";

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
        width: 100%;
        height: calc(100vh - 60px);
        overflow-y: scroll;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: nowrap;
        ::-webkit-scrollbar {
          width: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b3b3b3;
          box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
        }
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
      <CStylesAtom />

      <ExportCanvas />
    </AtomWrapper>
  );
};

export default SideBarLayoutEditorRight;
