import { css } from "@emotion/react";
import { AtomButton, AtomInput, AtomWrapper } from "@Src/@atoms";
import { atom } from "jotai";
import { jsPDF } from "jspdf";
import { FC, ReactNode } from "react";
import { v4 } from "uuid";
import ViewExport from "./view";

type Props = {
  children?: ReactNode;
};

function exportToPDF(canvas: HTMLCanvasElement) {
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: [canvas.width, canvas.height],
  });
  pdf.addImage(
    canvas.toDataURL("image/png"),
    "PNG",
    100,
    100,
    canvas.width,
    canvas.height
  );

  pdf.save("myCanvas.pdf");
}

const exportToIMG = (canvas: HTMLCanvasElement) => {
  const dataURL = canvas.toDataURL("image/png");

  const a = window?.document?.createElement(`a`);
  a.href = dataURL || ``;
  a.target = `_blank`;
  a.download = `${v4()}-design.png`;
  document?.body?.appendChild(a);
  a.click();
  document?.body?.removeChild(a);
};

const typeExports = {
  PDF: exportToPDF,
  IMAGE: exportToIMG,
};

const TYPE_EXPORT_ATOM = atom<keyof typeof typeExports>("IMAGE");

const ExportCanvas: FC<Props> = () => {
  return (
    <AtomWrapper gap="10px">
      <AtomWrapper flexDirection="row">
        <AtomButton
          onClick={() => {}}
          width="100%"
          padding="4px"
          borderRadius="5px"
          customCSS={css`
            background-color: transparent;
            color: var(--text-color, white);
            border: 1px solid #07deff;
          `}
        >
          Export
        </AtomButton>

        <AtomInput
          type="select"
          value={""}
          options={() =>
            Object.entries(typeExports)?.map(([key]) => ({
              id: key,
              label: key,
              value: key,
            }))
          }
        />
      </AtomWrapper>
      <ViewExport />
    </AtomWrapper>
  );
};

export default ExportCanvas;
