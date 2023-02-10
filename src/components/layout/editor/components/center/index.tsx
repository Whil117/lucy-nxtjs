import { css } from "@emotion/react";
import { AtomWrapper } from "@Src/@atoms";
import { motion } from "framer-motion";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { STATE_CONTROL_ATOM } from "../headers";

type Props = {
  children?: ReactNode;
};

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

const MOVING_ELEMENT_ATOM = atom(false);
const SELECTED_ELEMENT_ATOM = atom({} as ElementsProps);

export const ELEMENTS_ATOM = atom([] as ElementsProps[]);
const CANVAS_ATOM = atom(null as HTMLCanvasElement);
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

const ELEMENTS_TO_CANVAS_ATOM = atom(null, (get) => {
  const elemnets = get(ELEMENTS_ATOM);
  const canvas = get(CANVAS_ATOM);
  const ctx = canvas?.getContext("2d");
  elemnets.forEach((item) => drawTypeFigure(ctx, item)[item.type]());
});

const TYPE_FIGURE_ATOM = atom<"BOX" | "CIRCLE" | "TEXT" | "IMAGE">("BOX");

const CenterLayoutEditor: FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMovingElement, setIsMoving] = useAtom(MOVING_ELEMENT_ATOM);
  const [elements, setElements] = useAtom(ELEMENTS_ATOM);
  const setCoordinates = useSetAtom(STATE_COORDINATES_ATOM);
  const controlState = useAtomValue(STATE_CONTROL_ATOM);
  const selectTypeFigure = useAtomValue(TYPE_FIGURE_ATOM);
  const [currentElement, setcurrentElement] = useAtom(SELECTED_ELEMENT_ATOM);
  const setContextCanvas = useSetAtom(CANVAS_ATOM);
  const setCanvasToElements = useSetAtom(ELEMENTS_TO_CANVAS_ATOM);

  const canvas = canvasRef.current && canvasRef.current;

  const handleOnMouseDown = (e) => {
    setIsMoving(true);
    const canvasRect = e.target.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

    console.log({ x, y });

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
    const canvasRect = e.target.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

    if (isMovingElement) {
      setCoordinates({
        x,
        y,
      });
    }
  };

  const handleClick = (e) => {
    const canvasRect = e.target.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

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

  useEffect(() => {
    setContextCanvas(canvas);
    setCanvasToElements();
  }, [elements, canvas, currentElement]);

  const columnRef = useRef(null);

  const [{ width, height }, setsizeContainer] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    if (columnRef.current) {
      const columnWidth = columnRef.current.offsetWidth;
      const columnHeight = columnRef.current.offsetHeight;

      setsizeContainer({
        width: columnWidth,
        height: columnHeight,
      });
    }
  }, []);

  const [scale, setScale] = useState(1);

  // const handleZoomIn = () => {
  //   setScale(scale + 0.1);
  // };

  // const handleZoomOut = () => {
  //   setScale(scale - 0.1);
  // };

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const ctx = canvasRef.current.getContext("2d");
  //     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //     ctx.setTransform(scale, 0, 0, scale, 0, 0);
  //     setContextCanvas(canvas);
  //     setCanvasToElements();
  //   }
  // }, [scale, elements, canvas, currentElement]);

  return (
    <AtomWrapper
      ref={columnRef}
      customCSS={css`
        grid-column: 2;
        grid-row: 2;
      `}
    >
      {/* <AtomButton onClick={handleZoomIn}>ZOOM IN</AtomButton> */}
      {/* <AtomButton onClick={handleZoomOut}>ZOOM OUT</AtomButton> */}
      <motion.canvas
        ref={canvasRef}
        style={{
          border: "3px solid black",
          // cursor: "grabbing",
        }}
        width={width}
        height={height}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
        onMouseMove={handleOnMouseMove}
        onClick={handleClick}
      />
    </AtomWrapper>
  );
};

export default CenterLayoutEditor;
