import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

import LayoutEditor from "@Src/components/layout/editor";
import { atom } from "jotai";
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
  return (
    <>
      <LayoutEditor />
    </>
  );
};

export default EditorPage;
