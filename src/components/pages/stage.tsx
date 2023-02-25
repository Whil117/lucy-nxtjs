import { AtomButton, AtomText, AtomWrapper } from "@Src/@atoms";
import useSizeContent from "@Src/hooks/useSizeContent";
import { atom, useAtom } from "jotai";
import { useRef, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import { v4 as uuidv4 } from "uuid";
import { KEYS } from "../layout/editor/components/headers/components/listTypesForms";
import { headerOptions } from "../layout/editor/components/left/components/listMethods";

type Element = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type KeyElement = {
  [key: string]: Element;
};

const ELEMENTS_ATOM = atom({} as KeyElement);

const ELEMENT_SELECTED = atom({});

type ITool = "RECTANGLE" | "TEXT" | "IMAGE" | "PENCIL" | "LINE";

const TOOL_ATOM = atom<ITool>("RECTANGLE");

const DrawCanvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useAtom(TOOL_ATOM);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [elements, setElements] = useAtom(ELEMENTS_ATOM);

  const handleMouseDown = (event) => {
    if (tool === "RECTANGLE") {
      setIsDrawing(true);
      setStartPosition({ x: event.evt.layerX, y: event.evt.layerY });
      setCurrentPosition({ x: event.evt.layerX, y: event.evt.layerY });
    }
  };

  const handleMouseMove = (event) => {
    if (tool === "RECTANGLE") {
      if (isDrawing) {
        setCurrentPosition({ x: event.evt.layerX, y: event.evt.layerY });
      }
    }
  };

  const boxRef = useRef<HTMLDivElement>(null);

  const { width, height } = useSizeContent({
    ref: boxRef,
  });

  ////////////////////////// END EXECUTE////////////////////////////////7

  const handleMouseUp = () => {
    if (tool === "RECTANGLE") {
      setIsDrawing(false);

      const currElements = Object.assign({}, elements, {
        [`${uuidv4()}`]: {
          x: startPosition.x,
          y: startPosition.y,
          width: currentPosition.x - startPosition.x,
          height: currentPosition.y - startPosition.y,
        },
      });
      setElements(currElements);
    }
  };
  console.log({ elements });

  return (
    <AtomWrapper ref={boxRef}>
      <AtomWrapper gap="10px" height="auto">
        <AtomText color="white">Methods</AtomText>

        <AtomWrapper
          flexDirection="row"
          height="auto"
          flexWrap="wrap"
          gap="5px"
        >
          {headerOptions?.map((item) => {
            return (
              <AtomButton
                focus
                onClick={() => {
                  // setAction(item.typeState as IAction);
                }}
                padding="2px 10px"
                key={item.id}
                backgroundLinearGradient={
                  action === item.typeState && item?.backgroundLinearGradient
                }
              >
                {item.typeState}
              </AtomButton>
            );
          })}
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper width="auto" flexDirection="row" gap="20px">
        {Object.entries(KEYS)?.map(([key, value]) => {
          return (
            <AtomWrapper>
              <AtomButton
                backgroundLinearGradient={
                  tool === key && value?.backgroundLinearGradient
                }
                padding="2px 10px"
                focus
                onClick={() => {
                  setTool(key as ITool);
                }}
              >
                {key}
              </AtomButton>
            </AtomWrapper>
          );
        })}
      </AtomWrapper>
      <Stage
        width={width}
        height={height}
        onMouseDown={(event) => handleMouseDown(event)}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer
          width={width}
          height={height}
          style={{
            border: "1px solid black",
            backgroundColor: "red",
          }}
        >
          {Object.values(elements).map((rect, index) => (
            <Rect
              key={index}
              x={rect.x}
              y={rect.y}
              width={rect.width}
              height={rect.height}
              fill="blue"
              draggable={action === "MOVING"}
            />
          ))}
          {tool === "RECTANGLE" && isDrawing && (
            <Rect
              x={startPosition.x}
              y={startPosition.y}
              width={currentPosition.x - startPosition.x}
              height={currentPosition.y - startPosition.y}
              fill="red"
            />
          )}
          {/* <Image image={image} width={300} height={600} draggable /> */}
        </Layer>
      </Stage>
    </AtomWrapper>
  );
};

export default DrawCanvas;
