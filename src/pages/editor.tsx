import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
  children?: ReactNode;
};

import { AtomButton, AtomWrapper } from "@Src/@atoms";
import { motion } from "framer-motion";
import { atom, useAtom } from "jotai";
import { useRef } from "react";
import { v4 } from "uuid";

type ElementsProps = {
  x: number;
  y: number;
  id: string;
  radius: number;
  color: string;
  type: string;
};

const circleItem = ({ x, y }: { x: number; y: number }) => ({
  id: v4(),
  x: x,
  y: y,
  type: "CIRCLE",
  radius: 50,
  color: "#e20e0e",
});

const drawTypeFigure = (
  ctx: CanvasRenderingContext2D,
  element: ElementsProps
) => {
  return {
    CIRCLE: () => {
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(element.x, element.y, element.radius, 0, 2 * Math.PI);
      ctx.fill();
    },
    BOX: () => {
      ctx.fillStyle = "red";
      ctx.fillRect(10, 10, 100, 100);
    },
  };
};

const STATE_CONTROL_ATOM = atom<"VIEW" | "ADD" | "EDITOR" | "MOVE">("VIEW");

const EditorPage: FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [controlState, setControlState] = useAtom(STATE_CONTROL_ATOM);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null);

  const [currentElement, setcurrentElement] = useState({} as ElementsProps);

  const [circles, setCircles] = useState([
    { id: v4(), x: 180, y: 220, type: "CIRCLE", radius: 50, color: "#e20e0e" },
  ] as ElementsProps[]);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
  }, []);

  const continueDrawing = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    console.log({ x, y });

    // if (controlState === "MOVE") {
    //   setCircles(
    //     circles?.map((item) =>
    //       item.id === currentElement?.id
    //         ? {
    //             ...currentElement,
    //             x: x,
    //             y,
    //           }
    //         : item
    //     )
    //   );
    // }
  };

  useEffect(() => {
    if (ctx) {
      circles.forEach((item) => drawTypeFigure(ctx, item)[item.type]());
    }
  }, [circles, ctx]);

  const handleClick = (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    // const selected = circles.find(
    //   (circle) =>
    //     Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2) < circle.radius
    // );
    if (controlState === "ADD") {
      setCircles((prev) => [
        ...prev,
        circleItem({
          x,
          y,
        }),
      ]);
    }
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <AtomWrapper
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      gap="20px"
    >
      <AtomWrapper
        width="1440px"
        gap="20px"
        alignItems="center"
        justifyContent="center"
        height="auto"
      >
        <AtomWrapper
          height="auto"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="row"
          gap="10px"
        >
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
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <motion.canvas
            ref={canvasRef}
            style={{ border: "1px solid black" }}
            width={1440}
            height={600}
            onMouseDown={startDrawing}
            onMouseMove={continueDrawing}
            onMouseUp={stopDrawing}
            onClick={handleClick}
          />
          <AtomWrapper alignItems="flex-start" justifyContent="flex-start">
            <AtomButton
              backgroundLinearGradient={{
                rotate: "315deg",
                secondary: "#2c07ff",
                primary: "#0f97ff",
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
            >
              CIRCLE
            </AtomButton>
          </AtomWrapper>
        </AtomWrapper>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default EditorPage;
