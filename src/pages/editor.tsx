import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
};

import { css } from "@emotion/react";
import { AtomButton, AtomInput, AtomText, AtomWrapper } from "@Src/@atoms";
import { motion } from "framer-motion";
import { atom, useAtom } from "jotai";
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
};

const circleItem = ({ x, y, type }: ElementsProps) => ({
  id: v4(),
  x: x,
  y: y,
  type: type ?? "CIRCLE",
  radius: 50,
  width: 10,
  height: 10,
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
  };
};

const STATE_CONTROL_ATOM = atom<"VIEW" | "ADD" | "EDITOR" | "MOVE" | "UPDATE">(
  "VIEW"
);

const EditorPage: FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [controlState, setControlState] = useAtom(STATE_CONTROL_ATOM);
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const { x, y } = coordinates;

  const canvas = canvasRef.current && canvasRef.current;
  const ctx = canvasRef.current && canvasRef.current.getContext("2d");

  const [selectTypeFigure, setTypeFigure] = useState<"BOX" | "CIRCLE">("BOX");

  const [currentElement, setcurrentElement] = useState({} as ElementsProps);

  const [elements, setElements] = useState([] as ElementsProps[]);

  const startDrawing = (e) => {
    if (controlState !== "VIEW") {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      setCoordinates({
        x,
        y,
      });
    }
  };

  useEffect(() => {
    if (currentElement?.id && controlState === "MOVE") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setElements(
        elements.map((element) => {
          if (element.id === currentElement.id) {
            ctx.fillStyle = "pink";
            ctx.fillRect(x, y, element.width, element.height);
            return {
              ...element,
              x,
              y,
            };
          } else {
            ctx.fillStyle = "black";
            ctx.fillRect(element.x, element.y, element.width, element.height);
            return element;
          }
        })
      );
    }
  }, [elements, currentElement, x, y]);

  const continueDrawing = (e) => {
    startDrawing(e);
    // if (controlState !== "VIEW") {
    //   const x = e.clientX - e.target.offsetLeft;
    //   const y = e.clientY - e.target.offsetTop;
    //   setCoordinates({
    //     x,
    //     y,
    //   });
    // }
  };

  useEffect(() => {
    if (ctx) {
      elements.forEach((item) => drawTypeFigure(ctx, item)[item.type]());
    }
  }, [elements, ctx, currentElement]);

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
        circleItem({
          x,
          y,
          type: selectTypeFigure,
        }),
      ]);
    }
  };

  // const stopDrawing = () => {};

  const handleUpdate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setElements(
      elements.map((elem) =>
        elem.id === currentElement.id ? currentElement : elem
      )
    );
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
    <AtomWrapper
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
                console.log(event.target.value);

                setcurrentElement((prev) => ({
                  ...prev,
                  height: Number(event.target.value),
                }));
              }}
            />
            <AtomButton onClick={handleUpdate}>Update</AtomButton>
          </AtomWrapper>
          <motion.canvas
            ref={canvasRef}
            style={{
              border: "1px solid black",
            }}
            width="1440px"
            height={600}
            onMouseDown={startDrawing}
            onMouseMove={continueDrawing}
            // onMouseUp={stopDrawing}
            onClick={handleClick}
          />
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default EditorPage;
