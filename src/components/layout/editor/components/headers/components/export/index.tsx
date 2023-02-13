import { AtomButton, AtomImage, AtomText, AtomWrapper } from "@Src/@atoms";
import { useAtomValue } from "jotai";
import { jsPDF } from "jspdf";
import { FC, ReactNode, useState } from "react";
import { CANVAS_ATOM } from "../../../center";

type Props = {
  children?: ReactNode;
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

const ExportCanvas: FC<Props> = () => {
  const canvas = useAtomValue(CANVAS_ATOM);
  const [state, setstate] = useState("");
  return (
    <AtomWrapper width="auto">
      <AtomText>Export</AtomText>
      <AtomButton
        onClick={() => {
          var dataURL = canvas.toDataURL("image/png");
          setstate(dataURL);
          exportToPDF(canvas);
        }}
      >
        Export
      </AtomButton>
      <AtomImage src={state} />
    </AtomWrapper>
  );
};

export default ExportCanvas;
