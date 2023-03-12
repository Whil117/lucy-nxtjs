import { css } from "@emotion/react";
import { AtomInput, AtomWrapper } from "@Src/@atoms";
import { atom, useAtom, useSetAtom } from "jotai";
import { FC, ReactNode, useState } from "react";
import { SELECTED_ELEMENT_ATOM } from "../../../center";
import { UPDATE_ELEMENTS_ATOM } from "../coordinates/coordinate_x";

type Props = {
  children?: ReactNode;
};

export const LineCapAtom = atom<CanvasLineCap>("round");
export const StrokeColorAtom = atom("black");
export const LineWidthAtom = atom(2);

export const ValuesStyleDrawingAtom = atom((get) => {
  return {
    lineCap: get(LineCapAtom),
    strokeStyleColor: get(StrokeColorAtom),
    lineWidth: get(LineWidthAtom),
  };
});

const CStylesAtom: FC<Props> = (props) => {
  const [currElement, setCurrElement] = useAtom(SELECTED_ELEMENT_ATOM);

  const setUpdateElements = useSetAtom(UPDATE_ELEMENTS_ATOM);

  const [width, setwidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [BGCOLOR, setBGCOLOR] = useState("");
  const [text, setText] = useState("");

  const [LineCap, setLineCap] = useAtom(LineCapAtom);
  const [strokeColor, setstrokeColor] = useAtom(StrokeColorAtom);
  const [lineWidth, setlineWidth] = useAtom(LineWidthAtom);

  return (
    <AtomWrapper height="auto">
      <AtomWrapper flexDirection="row">
        <AtomInput
          type="number"
          label="Width"
          customCSS={() => css`
            width: 140px;
          `}
          value={width || currElement?.width}
          onChange={(e) => setwidth(Number(e.target.value))}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setCurrElement({
                ...currElement,
                width: width,
              });
              setUpdateElements();
            }
          }}
        />
        <AtomInput
          type="number"
          label="Height"
          customCSS={() => css`
            width: 140px;
          `}
          value={height || currElement?.height}
          onChange={(e) => setHeight(Number(e.target.value))}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setCurrElement({
                ...currElement,
                height,
              });
              setUpdateElements();
            }
          }}
        />
      </AtomWrapper>
      <AtomWrapper>
        <AtomInput
          type="color"
          label="BG Color"
          value={BGCOLOR || currElement?.color}
          onChange={(e) => {
            setBGCOLOR(e.target.value);
            setCurrElement({
              ...currElement,
              color: BGCOLOR,
            });
            setUpdateElements();
          }}
        />
        <AtomInput
          type="text"
          label="Text"
          value={text || currElement?.text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setCurrElement({
                ...currElement,
                text,
              });
              setUpdateElements();
            }
          }}
        />
        <AtomInput
          type="select"
          label="Line Cap"
          value={LineCap}
          onChange={(e) => setLineCap(e.target.value)}
          options={() => [
            {
              id: "1",
              label: "Roud",
              value: "round",
            },
            {
              id: "2",
              label: "Butt",
              value: "butt",
            },
            {
              id: "3",
              label: "Square",
              value: "square",
            },
          ]}
        />

        <AtomInput
          type="color"
          label="Stroke Style color"
          value={strokeColor}
          onChange={(e) => setstrokeColor(e.target.value)}
        />
        <AtomInput
          type="number"
          label="Line width"
          value={lineWidth}
          onChange={(e) => setlineWidth(e.target.value)}
        />
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default CStylesAtom;
