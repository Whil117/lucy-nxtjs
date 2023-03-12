import { css } from "@emotion/react";
import { AtomButton, AtomWrapper } from "@Src/@atoms";
import { motion } from "framer-motion";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  FC,
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { v4 } from "uuid";
import { TYPE_FIGURE_ATOM } from "../headers/components/listTypesForms";
import { STATE_CONTROL_ATOM } from "../left/components/listMethods";
import { COORDINATE_X_ATOM_INPUT } from "../right/components/coordinates/coordinate_x";
import { COORDINATE_Y_ATOM_INPUT } from "../right/components/coordinates/coordinate_y";
import { ValuesStyleDrawingAtom } from "../right/components/style";

type Props = {
  children?: ReactNode;
};

export type ElementsProps = {
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
export const SELECTED_ELEMENT_ATOM = atom(
  {} as ElementsProps,
  (get, set, args: ElementsProps) => {
    set(COORDINATE_X_ATOM_INPUT, args?.x);
    set(SELECTED_ELEMENT_ATOM, args);
    set(COORDINATE_Y_ATOM_INPUT, args.y);
  }
);

export const ELEMENTS_ATOM = atom([] as ElementsProps[]);
export const CANVAS_ATOM = atom(null as HTMLCanvasElement);

type PropsData = {
  elements: ElementsProps[];
  currentElement: ElementsProps;
  ctx: CanvasRenderingContext2D;
  coordinates: {
    x: number;
    y: number;
  };
};

const reMapsElementsMovingElement = (props: PropsData) => {
  const {
    elements,
    currentElement,
    ctx,
    coordinates: { x, y },
  } = props;

  const map = new Map<string, ElementsProps>();
  for (const element of elements) {
    if (element.id === currentElement.id) {
      drawTypeFigure(ctx, currentElement)[currentElement.type]();
      map.set(element.id, {
        ...element,
        x,
        y,
      });
    } else {
      drawTypeFigure?.(ctx, element)?.[element.type]?.();
      map.set(element.id, element);
    }
  }
  return Array.from(map.values());
};

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
      reMapsElementsMovingElement({
        elements,
        currentElement: elementSelected,
        ctx,
        coordinates: {
          y,
          x,
        },
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
  radius: 100,
  width: 100,
  height: 100,
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
      // ctx.font = "11px Arial";
      ctx.fillStyle = element.color;
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
  const elements = get(ELEMENTS_ATOM);
  const canvas = get(CANVAS_ATOM);
  const ctx = canvas?.getContext("2d");

  for (const item of elements) {
    drawTypeFigure?.(ctx, item)?.[item.type]?.();
  }
});

function Canvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 2;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
    />
  );
}

const CenterLayoutEditor: FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMovingElement, setIsMoving] = useAtom(MOVING_ELEMENT_ATOM);
  const [elements, setElements] = useAtom(ELEMENTS_ATOM);
  const setCoordinates = useSetAtom(STATE_COORDINATES_ATOM);
  const controlState = useAtomValue(STATE_CONTROL_ATOM);
  const selectTypeFigure = useAtomValue(TYPE_FIGURE_ATOM);
  const [currentElement, setcurrentElement] = useAtom(SELECTED_ELEMENT_ATOM);
  const [isDrawing, setIsDrawing] = useState(false);
  const setContextCanvas = useSetAtom(CANVAS_ATOM);
  const setCanvasToElements = useSetAtom(ELEMENTS_TO_CANVAS_ATOM);

  const styleDrawing = useAtomValue(ValuesStyleDrawingAtom);

  console.log({ elements });

  const canvas = canvasRef.current && canvasRef.current;

  const handleSetCoordinates = (e) => {
    const canvasRect = e.target.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

    setCoordinates({
      x,
      y,
    });
  };

  const handleOnMouseDown = (e) => {
    setIsMoving(true);
    const canvasRect = e.target.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

    const selected = elements.find((circle) => {
      return (
        Math.max(Math.abs(x - circle.x), Math.abs(y - circle.y)) <=
        circle.radius
      );
    });
    if (selected) {
      setcurrentElement(selected);
    }
    if (selectTypeFigure === "DRAW") {
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;
      const { offsetX, offsetY } = e?.nativeEvent;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }

    handleSetCoordinates(e);
  };

  const handleOnMouseUp = () => {
    setIsMoving(false);
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.closePath();
    setIsDrawing(false);
  };

  const handleOnMouseMove = (e) => {
    if (isMovingElement) {
      handleSetCoordinates(e);
    }
    if (!isDrawing) return;
    const { offsetX, offsetY } = e?.nativeEvent;

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.lineTo(offsetX, offsetY);
    context.stroke();
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

  useMemo(() => {
    setContextCanvas(canvas);
    setCanvasToElements();
    const context = canvas?.getContext("2d");
    if (context) {
      // context.scale(2, 2);
      context.lineCap = styleDrawing?.lineCap;
      context.strokeStyle = styleDrawing?.strokeStyleColor;
      context.lineWidth = styleDrawing?.lineWidth;
      console.log({ styleDrawing });
    }
  }, [elements, canvas, currentElement, styleDrawing]);

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

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(scale - 0.1);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      setContextCanvas(canvas);
      setCanvasToElements();
    }
  }, [scale, elements, canvas, currentElement]);

  return (
    <AtomWrapper
      ref={columnRef}
      customCSS={css`
        grid-column: 2;
        grid-row: 2;
        position: relative;
        align-items: center;
        justify-content: center;
      `}
    >
      <AtomWrapper
        flexDirection="row"
        customCSS={css`
          position: absolute;
          gap: 20px;
          padding: 10px;
          height: auto;
          top: 0;

          width: auto;
        `}
      >
        <AtomButton onClick={handleZoomIn}>ZOOM IN</AtomButton>
        <AtomButton onClick={handleZoomOut}>ZOOM OUT</AtomButton>
      </AtomWrapper>
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
        onMouseOut={handleOnMouseUp}
        onTouchStart={handleOnMouseDown}
        onTouchMove={handleOnMouseMove}
        onTouchEnd={handleOnMouseUp}
      />
    </AtomWrapper>
  );
};

export default memo(CenterLayoutEditor);
