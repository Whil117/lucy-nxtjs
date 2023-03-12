import { css } from "@emotion/react";
import { AtomInput, AtomText, AtomWrapper } from "@Src/@atoms";
import { atom, useAtom, useSetAtom } from "jotai";
import { FC, ReactNode } from "react";
import {
  CANVAS_ATOM,
  ElementsProps,
  ELEMENTS_ATOM,
  SELECTED_ELEMENT_ATOM,
} from "../../../center";

type Props = {
  children?: ReactNode;
};

export const reMapElements = (
  elementsData: ElementsProps[],
  curr: ElementsProps
) => {
  const map = new Map<string, ElementsProps>();

  for (const iterator of elementsData) {
    if (iterator?.id === curr?.id) {
      map.set(iterator?.id, curr);
    } else {
      map.set(iterator?.id, iterator);
    }
  }
  return Array.from(map.values());
};

export const UPDATE_ELEMENTS_ATOM = atom(null, (get, set) => {
  const canvas = get(CANVAS_ATOM);
  const elements = get(ELEMENTS_ATOM);
  const currrentElement = get(SELECTED_ELEMENT_ATOM);
  const ctx = canvas?.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const result = reMapElements(elements, currrentElement);

  set(ELEMENTS_ATOM, result);
});

export const COORDINATE_X_ATOM_INPUT = atom(0);

const CoordinatesXInput: FC<Props> = () => {
  const [currElement, setCurrElement] = useAtom(SELECTED_ELEMENT_ATOM);
  const [coordinateX, setCoordinateX] = useAtom(COORDINATE_X_ATOM_INPUT);

  const setUpdateElements = useSetAtom(UPDATE_ELEMENTS_ATOM);

  return (
    <AtomWrapper
      flexDirection="row"
      alignItems="center"
      height="auto"
      width="auto"
      customCSS={css`
        flex: 1;
      `}
    >
      <AtomWrapper alignItems="center" justifyContent="center">
        <AtomText fontSize="18px">x</AtomText>
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
              x: coordinateX,
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

export default CoordinatesXInput;
