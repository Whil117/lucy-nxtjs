import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
};

import LayoutEditor from "@Src/components/layout/editor";
import { atom, useAtom, useSetAtom } from "jotai";
import { useRef } from "react";
import { v4 } from "uuid";

type ElementsProps = {
  x?: number;
  y?: number;
  id?: string;
  radius?: number;
  color?: string;
  width?: number;
  height?: number;
  type?: string;
  text?: string;
  src?: string;
  font?: string;
};

const newItemAtom = ({ x, y, type }: ElementsProps) => ({
  id: v4(),
  x: x,
  y: y,
  type: type ?? "CIRCLE",
  radius: 50,
  width: 10,
  height: 10,
  text: "Default Text",
  font: "30px Arial",
  src: "https://picsum.photos/200/300",
  color: "#e20e0e",
});

const drawTypeFigure = (
  ctx: CanvasRenderingContext2D,
  element: ElementsProps
) => {
  return {
    CIRCLE: () => {
      ctx.fillStyle = element.color;
      ctx.beginPath();
      ctx.arc(element.x, element.y, element.radius, 0, 2 * Math.PI);
      ctx.fill();
    },
    BOX: () => {
      ctx.fillStyle = element.color;
      ctx.fillRect(element.x, element.y, element.width, element.height);
    },
    TEXT: () => {
      ctx.font = element.font;
      ctx.fillStyle = element.color;
      ctx.fillRect(element.x, element.y, element.width, element.height);
      ctx.fillText(element.text, element.x, element.y);
    },
    IMAGE: () => {
      const image = new Image();
      image.src = element.src;
      image.crossOrigin = "anonymous";
      image.width = element.width;
      image.height = element.height;

      image.onload = () => {
        ctx.drawImage(image, element.x, element.y);
      };
    },
  };
};

const STATE_CONTROL_ATOM = atom<"VIEW" | "ADD" | "EDITOR" | "MOVE" | "UPDATE">(
  "VIEW"
);

const MOVE_ELEMENT_ATOM = atom(null, (get, set) => {
  const canvas = get(CANVAS_ATOM);
  const ctx = canvas?.getContext("2d");
  const elements = get(ELEMENTS_ATOM);

  const elementSelected = get(SELECTED_ELEMENT_ATOM);
  const stateElement = get(STATE_CONTROL_ATOM);

  const { x, y } = get(STATE_COORDINATES_ATOM);

  if (elementSelected?.id && stateElement === "MOVE") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    set(SELECTED_ELEMENT_ATOM, {
      ...elementSelected,
      x,
      y,
    });

    set(
      ELEMENTS_ATOM,
      elements.map((element) => {
        if (element.id === elementSelected.id) {
          // ctx.fillStyle = element.color;
          ctx.fillRect(x, y, element.width, element.height);
          return {
            ...element,
            x,
            y,
          };
        } else {
          // ctx.fillStyle = element.color;
          ctx.fillRect(element.x, element.y, element.width, element.height);
          return element;
        }
      })
    );
  }
});

const STATE_COORDINATES_ATOM = atom(
  {
    x: 0,
    y: 0,
  },
  (get, set, args) => {
    set(STATE_COORDINATES_ATOM, args);
    set(MOVE_ELEMENT_ATOM, null);
  }
);

const SELECTED_ELEMENT_ATOM = atom({} as ElementsProps);
const ELEMENTS_ATOM = atom([] as ElementsProps[]);

const CANVAS_ATOM = atom(null as HTMLCanvasElement);

const ELEMENTS_TO_CANVAS_ATOM = atom(null, (get) => {
  const elemnets = get(ELEMENTS_ATOM);
  const canvas = get(CANVAS_ATOM);
  const ctx = canvas?.getContext("2d");
  elemnets.forEach((item) => drawTypeFigure(ctx, item)[item.type]());
});

const UPDATE_ELEMENTS_ATOM = atom(null, (get, set) => {
  const canvas = get(CANVAS_ATOM);
  const elements = get(ELEMENTS_ATOM);
  const currrentElement = get(SELECTED_ELEMENT_ATOM);
  const ctx = canvas?.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  set(
    ELEMENTS_ATOM,
    elements.map((elem) => {
      return elem.id === currrentElement.id ? currrentElement : elem;
    })
  );
});

const MOVING_ELEMENT_ATOM = atom(false);

const EditorPage: FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [controlState, setControlState] = useAtom(STATE_CONTROL_ATOM);
  const [coordinates, setCoordinates] = useAtom(STATE_COORDINATES_ATOM);
  const { x, y } = coordinates;

  const canvas = canvasRef.current && canvasRef.current;
  const [selectTypeFigure, setTypeFigure] = useState<
    "BOX" | "CIRCLE" | "TEXT" | "IMAGE"
  >("BOX");
  const [currentElement, setcurrentElement] = useAtom(SELECTED_ELEMENT_ATOM);
  const [elements, setElements] = useAtom(ELEMENTS_ATOM);
  const setContextCanvas = useSetAtom(CANVAS_ATOM);
  const setCanvasToElements = useSetAtom(ELEMENTS_TO_CANVAS_ATOM);
  const setUpdateElements = useSetAtom(UPDATE_ELEMENTS_ATOM);

  const [isMovingElement, setIsMoving] = useAtom(MOVING_ELEMENT_ATOM);

  const handleOnMouseDown = (e) => {
    setIsMoving(true);
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    const selected = elements.find(
      (circle) =>
        Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2) < circle.radius
    );
    if (selected) {
      setcurrentElement(selected);
    }

    setCoordinates({
      x,
      y,
    });
  };

  const handleOnMouseUp = () => {
    setIsMoving(false);
  };

  const handleOnMouseMove = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    if (isMovingElement) {
      setCoordinates({
        x,
        y,
      });
    }
  };

  useEffect(() => {
    setContextCanvas(canvas);
    setCanvasToElements();
  }, [elements, canvas, currentElement]);

  const handleClick = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    if (controlState === "EDITOR") {
      const selected = elements.find(
        (circle) =>
          Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2) < circle.radius
      );
      if (selected) {
        setcurrentElement(selected);
      }
    }
    if (controlState === "ADD") {
      setElements((prev) => [
        ...prev,
        newItemAtom({
          x,
          y,
          type: selectTypeFigure,
        }),
      ]);
    }
  };

  const handleUpdate = () => {
    setUpdateElements();
  };

  const handleLeft = () => {
    setCoordinates((prev) => ({
      ...prev,
      x: x - 10,
    }));
  };

  const handleRight = () => {
    setCoordinates((prev) => ({
      ...prev,
      x: x + 10,
    }));
  };

  const handleUp = () => {
    setCoordinates((prev) => ({
      ...prev,
      y: y - 10,
    }));
  };

  const handleDown = () => {
    setCoordinates((prev) => ({
      ...prev,
      y: y + 10,
    }));
  };

  return (
    <>
      <LayoutEditor />

      {/* <AtomWrapper
        width="100%"
        justifyContent="center"
        alignItems="center"
        gap="20px"
      >
        <AtomWrapper
          gap="20px"
          alignItems="center"
          justifyContent="center"
          height="100%"
          padding="20px"
        >
          {JSON.stringify(currentElement)} {x}, {y}
          <AtomWrapper
            height="auto"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            gap="10px"
          >
            <AtomInput
              type="color"
              value={currentElement.color}
              onChange={(event) => {
                setcurrentElement((prev) => ({
                  ...prev,
                  color: event.target.value,
                }));
              }}
            />
            <AtomButton onClick={handleLeft}>Left</AtomButton>
            <AtomButton onClick={handleRight}>Right</AtomButton>
            <AtomButton onClick={handleUp}>Up</AtomButton>
            <AtomButton onClick={handleDown}>Down</AtomButton>
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#07deff",
                primary: "#0f97ff",
              }}
              focus
              onClick={() => {
                setControlState("VIEW");
              }}
            >
              View
            </AtomButton>
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#07ff1c",
                primary: "#47ff0f",
              }}
              focus
              onClick={() => {
                setControlState("ADD");
              }}
            >
              Add
            </AtomButton>
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#ff4107",
                primary: "#ff670f",
              }}
              focus
              onClick={() => {
                setControlState("EDITOR");
              }}
            >
              Editor
            </AtomButton>
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#0741ff",
                primary: "#b30fff",
              }}
              focus
              onClick={handleUpdate}
            >
              UPDATE
            </AtomButton>
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#c507ff",
                primary: "#ff0fcb",
              }}
              focus
              onClick={() => {
                setControlState("MOVE");
              }}
            >
              Move
            </AtomButton>
            {controlState}
          </AtomWrapper>
          <AtomWrapper
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="row"
            gap="20px"
          >
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#2c07ff",
                primary: "#0f97ff",
              }}
              onClick={() => {
                setTypeFigure("BOX");
              }}
            >
              BOX
            </AtomButton>
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#b907ff",
                primary: "#ff0f7f",
              }}
              onClick={() => {
                setTypeFigure("CIRCLE");
              }}
            >
              CIRCLE
            </AtomButton>
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#b907ff",
                primary: "#ff0f7f",
              }}
              onClick={() => {
                setTypeFigure("TEXT");
              }}
            >
              TEXT
            </AtomButton>
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#b907ff",
                primary: "#ff0f7f",
              }}
              onClick={() => {
                setTypeFigure("IMAGE");
              }}
            >
              IMAGE
            </AtomButton>
          </AtomWrapper>
          <AtomWrapper
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            customCSS={css`
              display: flex;
              flex-direction: column;
              gap: 20px;
            `}
          >
            <AtomWrapper>
              <AtomText>Editor Props</AtomText>
              <AtomInput
                type="number"
                label="Width"
                value={currentElement?.width}
                onChange={(event) => {
                  console.log(event.target.value);

                  setcurrentElement((prev) => ({
                    ...prev,
                    width: Number(event.target.value),
                  }));
                }}
              />
              <AtomInput
                type="number"
                label="Height"
                value={currentElement?.height}
                onChange={(event) => {
                  setcurrentElement((prev) => ({
                    ...prev,
                    height: Number(event.target.value),
                  }));
                }}
              />
              <AtomInput
                type="text"
                label="Text"
                value={currentElement?.text}
                onChange={(event) => {
                  setcurrentElement((prev) => ({
                    ...prev,
                    text: event.target.value,
                  }));
                }}
              />
              <AtomInput
                type="text"
                label="URL image"
                value={currentElement?.text}
                onChange={(event) => {
                  setcurrentElement((prev) => ({
                    ...prev,
                    src: event.target.value,
                  }));
                }}
              />
              <AtomButton onClick={handleUpdate}>Update</AtomButton>
            </AtomWrapper>
            <motion.canvas
              ref={canvasRef}
              style={{
                border: "1px solid black",
                // cursor: "grabbing",
              }}
              width="1440px"
              height={600}
              onMouseDown={handleOnMouseDown}
              onMouseUp={handleOnMouseUp}
              onMouseMove={handleOnMouseMove}
              onClick={handleClick}
            />
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper> */}
    </>
  );
};

export default EditorPage;
