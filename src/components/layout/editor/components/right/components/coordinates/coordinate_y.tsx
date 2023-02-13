import { css } from "@emotion/react";
import { AtomInput, AtomText, AtomWrapper } from "@Src/@atoms";
import { atom, useAtom, useSetAtom } from "jotai";
import { FC, ReactNode } from "react";
import {
  CANVAS_ATOM,
  ELEMENTS_ATOM,
  SELECTED_ELEMENT_ATOM,
} from "../../../center";
import { reMapElements } from "./coordinate_x";

type Props = {
  children?: ReactNode;
};

const UPDATE_ELEMENTS_ATOM = atom(null, (get, set) => {
  const canvas = get(CANVAS_ATOM);
  const elements = get(ELEMENTS_ATOM);
  const currrentElement = get(SELECTED_ELEMENT_ATOM);
  const ctx = canvas?.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const result = reMapElements(elements, currrentElement);

  set(ELEMENTS_ATOM, result);
});

export const COORDINATE_Y_ATOM_INPUT = atom(0);

const CoordinatesYInput: FC<Props> = () => {
  const [currElement, setCurrElement] = useAtom(SELECTED_ELEMENT_ATOM);
  const [coordinateX, setCoordinateX] = useAtom(COORDINATE_Y_ATOM_INPUT);

  const setUpdateElements = useSetAtom(UPDATE_ELEMENTS_ATOM);

  return (
    <AtomWrapper
      flexDirection="row"
      alignItems="center"
      height="auto"
      width="auto"
    >
      <AtomWrapper alignItems="center" justifyContent="center">
        <AtomText fontSize="18px">y</AtomText>
      </AtomWrapper>
      <AtomInput
        type="number"
        value={coordinateX}
        isFocus
        onChange={(event) => setCoordinateX(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setCurrElement({
              ...currElement,
              y: coordinateX,
            });
            setUpdateElements();
          }
        }}
        customCSS={() => css`
          width: 120px;
        `}
      />
    </AtomWrapper>
  );
};

export default CoordinatesYInput;
