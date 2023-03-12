import { css } from "@emotion/react";
import {
  AtomButton,
  AtomImage,
  AtomInput,
  AtomText,
  AtomWrapper,
} from "@Src/@atoms";
import { useAtomValue } from "jotai";
import { jsPDF } from "jspdf";
import { FC, ReactNode, useEffect, useState } from "react";
import { v4 } from "uuid";
import { CANVAS_ATOM, ELEMENTS_ATOM } from "../../../center";

type Props = {
  children?: ReactNode;
};

export const downloadIMAGE = (canvas: HTMLCanvasElement) => {
  // Crear un enlace temporal

  const url = canvas?.toDataURL("image/png");

  const tempLink = document.createElement("a");
  tempLink.href = url;
  tempLink.download = v4();
  document.body.appendChild(tempLink);

  // Hacer clic en el enlace temporal
  tempLink.click();

  // Eliminar el enlace temporal
  document.body.removeChild(tempLink);
};

function exportToPDF(canvas: HTMLCanvasElement) {
  // Obtener el canvas

  // Crear una nueva hoja PDF
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: [canvas.width, canvas.height],
  });

  // Añadir la imagen del canvas a la hoja PDF
  pdf.addImage(
    canvas.toDataURL("image/png"),
    "PNG",
    100,
    100,
    canvas.width,
    canvas.height
  );

  // Descargar la hoja PDF
  pdf.save("myCanvas.pdf");
}

const typesDownload = {
  PDF: exportToPDF,
  IMAGE: downloadIMAGE,
};

const ExportCanvas: FC<Props> = () => {
  const canvas = useAtomValue(CANVAS_ATOM);
  const elements = useAtomValue(ELEMENTS_ATOM);
  const [state, setstate] = useState("");

  useEffect(() => {
    const dataURL = canvas?.toDataURL("image/png");
    setstate(dataURL);
  }, [canvas, elements]);

  const [option, setoption] = useState("IMAGE");
  return (
    <AtomWrapper
      width="100%"
      customCSS={css`
        gap: 10px;
      `}
    >
      <AtomText fontWeight="bold">Export</AtomText>
      <AtomWrapper flexDirection="row" alignItems="center">
        <AtomButton
          onClick={() => {
            typesDownload?.[option]?.(canvas);
            const dataURL = canvas?.toDataURL("image/png");
            setstate(dataURL);
          }}
          customCSS={css`
            width: 100%;
            padding: 10px;
            border-radius: 5px;
          `}
        >
          Export {option}
        </AtomButton>
        <AtomInput
          type="select"
          options={() => [
            {
              id: "34i2",
              label: "IMAGE",
              value: "IMAGE",
            },
            {
              id: "132",
              label: "PDF",
              value: "PDF",
            },
          ]}
          value={option}
          onChange={(event) => setoption(event.target.value)}
        />
      </AtomWrapper>
      <AtomImage
        src={state}
        width="100%"
        maxHeight="220px"
        objectFit="contain"
        customCSS={css`
          border-radius: 5px;
          background-color: white;
        `}
      />
    </AtomWrapper>
  );
};

export default ExportCanvas;
